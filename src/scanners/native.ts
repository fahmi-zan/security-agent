import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { SecurityFinding } from './index.js';

const SECRET_PATTERNS = [
  { id: 'SEC-AWS-KEY', regex: /(AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g, name: 'AWS Access Key' },
  { id: 'SEC-GITHUB', regex: /ghp_[a-zA-Z0-9]{36}/g, name: 'GitHub Token' }
];

const SAST_PATTERNS = [
  { id: 'SAST-SQLI', regex: /query\s*\(\s*`.*?\$\{.*?\}.*?`\s*\)/g, name: 'Possible SQL Injection (Raw Template String)' },
  { id: 'SAST-EVAL', regex: /eval\s*\(/g, name: 'Use of eval()' },
  { id: 'SAST-XSS', regex: /send\s*\(\s*`.*?<.*?>.*?\$\{.*?\}.*?`\s*\)/g, name: 'Reflected XSS' }
];

export async function runNativeSecrets(dir: string): Promise<SecurityFinding[]> {
  const findings: SecurityFinding[] = [];
  const files = await fg('**/*.{js,ts,json,yml,yaml,env}', { cwd: dir, ignore: ['node_modules/**', 'dist/**'] });
  
  for (const file of files) {
    const content = await fs.readFile(path.join(dir, file), 'utf-8');
    for (const pattern of SECRET_PATTERNS) {
      const matches = [...content.matchAll(pattern.regex)];
      for (const match of matches) {
        const lines = content.slice(0, match.index).split('\n');
        findings.push({
          id: pattern.id,
          severity: 'CRITICAL',
          message: `Fallback Scanner: ${pattern.name} found.`,
          file,
          line: lines.length,
          evidence: match[0].substring(0, 6) + '***'
        });
      }
    }
  }
  return findings;
}

export async function runNativeSast(dir: string): Promise<SecurityFinding[]> {
  const findings: SecurityFinding[] = [];
  const files = await fg('**/*.{js,ts}', { cwd: dir, ignore: ['node_modules/**', 'dist/**'] });
  
  for (const file of files) {
    const content = await fs.readFile(path.join(dir, file), 'utf-8');
    for (const pattern of SAST_PATTERNS) {
      const matches = [...content.matchAll(pattern.regex)];
      for (const match of matches) {
        const lines = content.slice(0, match.index).split('\n');
        findings.push({
          id: pattern.id,
          severity: 'HIGH',
          message: `Fallback Scanner: ${pattern.name} found.`,
          file,
          line: lines.length,
          evidence: match[0].substring(0, 30) + '...'
        });
      }
    }
  }
  return findings;
}
