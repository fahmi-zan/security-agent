import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { SecurityFinding } from '../scanners/index.js';

export interface Remediation {
  findingId: string;
  diff: string;
  explanation: string;
}

export async function generateRemediation(finding: SecurityFinding): Promise<Remediation | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const openai = createOpenAI({ apiKey });
  
  const prompt = `
  Anda adalah Remediation Engine.
  Berikan patch kode perbaikan untuk celah keamanan berikut. Return format wajib markdown diff.
  
  File: ${finding.file}
  Line: ${finding.line || '?'}
  Vulnerability: ${finding.message}
  Evidence: ${finding.evidence}
  `;

  try {
    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt: prompt,
      temperature: 0.1
    });

    return {
      findingId: finding.id,
      explanation: "AI generated fix.",
      diff: text
    };
  } catch (e) {
    return null;
  }
}
