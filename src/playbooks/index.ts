import { SecurityContext } from '../discovery/index.js';
import { runNextjsPlaybook } from './nextjs.js';
import { SecurityFinding } from '../scanners/index.js';

export function getActivePlaybooks(context: SecurityContext): string[] {
  const playbooks = ['universal', 'secrets', 'dependency'];

  if (context.frameworks.length > 0) playbooks.push('api', 'auth', 'authz');
  if (context.databases.length > 0) playbooks.push('database');
  if (context.infrastructure.includes('docker')) playbooks.push('infrastructure');
  if (context.ci.length > 0) playbooks.push('ci-cd');
  if (context.frameworks.includes('next.js')) playbooks.push('nextjs');

  return playbooks;
}

export async function executePlaybooks(dir: string, playbooks: string[]): Promise<SecurityFinding[]> {
  const findings: SecurityFinding[] = [];
  
  if (playbooks.includes('nextjs')) {
    const nextFindings = await runNextjsPlaybook(dir);
    findings.push(...nextFindings);
  }
  
  // Custom playbooks lain bisa dieksekusi di sini
  
  return findings;
}
