import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { SecurityFinding } from '../scanners/index.js';
import { generateRemediation } from '../remediation/index.js';

export async function analyzeFindings(findings: SecurityFinding[], context: any): Promise<string> {
  let report = "";
  for (const finding of findings) {
    const remediation = await generateRemediation(finding);
    report += `\n### Remediation for ${finding.id} (${finding.file})\n`;
    report += remediation ? remediation.diff : "No remediation generated (Missing API Key or AI Error).\n";
  }
  return report || "Analysis skipped.";
}
