import { execa } from 'execa';
import { runNativeSecrets, runNativeSast } from './native.js';

export interface SecurityFinding {
  id: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  message: string;
  file: string;
  line?: number;
  evidence?: string;
}

export async function runGitleaks(dir: string): Promise<SecurityFinding[]> {
  try {
    const { stdout } = await execa('gitleaks', ['detect', '--source', dir, '--no-git', '--report-format', 'json', '--report-path', '/dev/stdout'], { reject: false });
    if (!stdout) throw new Error('No output');
    const parsed = JSON.parse(stdout);
    return parsed.map((p: any) => ({
      id: p.RuleID || 'SECRET_LEAK',
      severity: 'CRITICAL',
      message: p.Description || 'Secret detected',
      file: p.File,
      line: p.StartLine,
      evidence: p.Match
    }));
  } catch (e) {
    console.log('⚠️  Gitleaks unavailable/failed. Using Native Secrets Fallback.');
    return runNativeSecrets(dir);
  }
}

export async function runSemgrep(dir: string): Promise<SecurityFinding[]> {
  try {
    const { stdout } = await execa('semgrep', ['scan', '--json', '--quiet', dir], { reject: false });
    if (!stdout) throw new Error('No output');
    const parsed = JSON.parse(stdout);
    return (parsed.results || []).map((r: any) => ({
      id: r.check_id,
      severity: r.extra?.severity === 'ERROR' ? 'HIGH' : 'MEDIUM',
      message: r.extra?.message,
      file: r.path,
      line: r.start?.line,
      evidence: r.extra?.lines
    }));
  } catch (e) {
    console.log('⚠️  Semgrep unavailable/failed. Using Native SAST Fallback.');
    return runNativeSast(dir);
  }
}
