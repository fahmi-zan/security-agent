import fs from 'fs/promises';
import path from 'path';
import { SecurityFinding } from '../scanners/index.js';

export async function generateReports(findings: SecurityFinding[], aiAnalysis: string) {
  const reportsDir = path.join(process.cwd(), 'reports');
  await fs.mkdir(reportsDir, { recursive: true });

  const reportData = {
    timestamp: new Date().toISOString(),
    totalFindings: findings.length,
    findings,
    aiAnalysis
  };

  // JSON Report
  await fs.writeFile(
    path.join(reportsDir, 'security-report.json'),
    JSON.stringify(reportData, null, 2)
  );

  // Markdown Report
  let md = `# Security Report\n\n`;
  md += `**Timestamp:** ${reportData.timestamp}\n`;
  md += `**Total Findings:** ${findings.length}\n\n`;
  
  if (findings.length > 0) {
    md += `## Findings\n`;
    findings.forEach((f, i) => {
      md += `### ${i + 1}. [${f.severity}] ${f.id}\n`;
      md += `- **File:** ${f.file}${f.line ? `:${f.line}` : ''}\n`;
      md += `- **Message:** ${f.message}\n\n`;
    });
  }

  md += `## AI Analysis\n${aiAnalysis}\n`;

  await fs.writeFile(path.join(reportsDir, 'security-report.md'), md);
  console.log(`📄 Laporan disimpan di reports/security-report.json dan .md`);
}
