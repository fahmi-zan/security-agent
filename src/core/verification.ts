import fs from 'fs/promises';
import path from 'path';
import { runGitleaks, runSemgrep } from '../scanners/index.js';

export async function retestFinding(findingId: string) {
  const reportPath = path.join(process.cwd(), 'reports', 'security-report.json');
  let report;
  
  try {
    const raw = await fs.readFile(reportPath, 'utf-8');
    report = JSON.parse(raw);
  } catch (e) {
    console.error('❌ Laporan security-report.json tidak ditemukan. Jalankan audit terlebih dahulu.');
    process.exit(1);
  }

  const finding = report.findings.find((f: any) => f.id === findingId);
  if (!finding) {
    console.error(`❌ Finding dengan ID '${findingId}' tidak ditemukan di laporan terakhir.`);
    process.exit(1);
  }

  console.log(`🔍 Retesting: ${finding.id} pada file ${finding.file}...`);
  
  // Re-run scanner
  const secrets = await runGitleaks(process.cwd());
  const sast = await runSemgrep(process.cwd());
  const allFindings = [...secrets, ...sast];

  // Cek apakah finding ID masih ada di file yang sama
  const stillVulnerable = allFindings.some(f => f.id === finding.id && f.file.endsWith(finding.file));

  if (stillVulnerable) {
    console.log(`\n🚨 VERIFICATION FAILED: Vulnerability ${findingId} masih terdeteksi!`);
    console.log(`   Penyelesaian (Remediation) belum berhasil atau belum di-apply.`);
    process.exit(1);
  } else {
    console.log(`\n✅ VERIFICATION PASSED: Vulnerability ${findingId} sudah tertutup.`);
    process.exit(0);
  }
}
