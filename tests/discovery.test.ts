import { describe, it, expect } from 'vitest';
import { discoverProject } from '../src/discovery/index.js';
import path from 'path';

describe('Discovery Engine', () => {
  it('detects express and postgresql in vulnerable-sqli fixture', async () => {
    const fixturePath = path.join(process.cwd(), 'tests/fixtures/vulnerable-sqli');
    const context = await discoverProject(fixturePath);
    
    expect(context.frameworks).toContain('express');
    expect(context.databases).toContain('postgresql');
  });

  it('detects typescript in vulnerable-xss fixture', async () => {
    const fixturePath = path.join(process.cwd(), 'tests/fixtures/vulnerable-xss');
    const context = await discoverProject(fixturePath);
    
    expect(context.languages).toContain('typescript');
  });
});
