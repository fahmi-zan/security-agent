import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { SecurityFinding } from '../scanners/index.js';

export async function runNextjsPlaybook(dir: string): Promise<SecurityFinding[]> {
  const findings: SecurityFinding[] = [];
  
  // 1. Deteksi NEXT_PUBLIC rahasia di .env
  const envFiles = await fg('.env*', { cwd: dir });
  for (const file of envFiles) {
    const content = await fs.readFile(path.join(dir, file), 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.match(/^NEXT_PUBLIC_.*(SECRET|KEY|TOKEN|PASSWORD|API_KEY)\s*=/i)) {
        findings.push({
          id: 'NEXT-PUBLIC-SECRET',
          severity: 'CRITICAL',
          message: 'Sensitive secret exposed via NEXT_PUBLIC_ prefix',
          file,
          line: index + 1,
          evidence: line.substring(0, 30) + '...'
        });
      }
    });
  }

  // 2. Deteksi Server Actions ("use server") tanpa proteksi sesi dasar
  const tsFiles = await fg('**/*.{ts,tsx}', { cwd: dir, ignore: ['node_modules/**', 'dist/**'] });
  for (const file of tsFiles) {
    const content = await fs.readFile(path.join(dir, file), 'utf-8');
    if (content.includes('"use server"') || content.includes("'use server'")) {
      // Very naive check for lazy implementation: if no auth()/getSession()/verify() found
      if (!content.match(/(auth|session|verify|guard|protect)/i)) {
        findings.push({
          id: 'NEXT-SERVER-ACTION-NO-AUTH',
          severity: 'HIGH',
          message: 'Server Action found without explicit auth/session verification',
          file,
          evidence: '"use server"'
        });
      }
    }
  }

  return findings;
}
