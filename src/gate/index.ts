import { SecurityFinding } from '../scanners/index.js';

export function evaluateGate(findings: SecurityFinding[]): number {
  const blocking = findings.filter(f => f.severity === 'CRITICAL' || f.severity === 'HIGH');
  
  if (blocking.length > 0) {
    console.error(`\n🚨 GATE FAILED: Ditemukan ${blocking.length} finding CRITICAL/HIGH.`);
    return 1;
  }
  
  console.log(`\n✅ GATE PASSED: Tidak ada finding yang memblokir pipeline.`);
  return 0;
}
