import fg from 'fast-glob';
import path from 'path';
import fs from 'fs/promises';

export interface SecurityContext {
  languages: string[];
  frameworks: string[];
  databases: string[];
  infrastructure: string[];
  ci: string[];
}

export async function discoverProject(rootDir: string): Promise<SecurityContext> {
  const context: SecurityContext = {
    languages: [],
    frameworks: [],
    databases: [],
    infrastructure: [],
    ci: [],
  };

  // 1. Languages
  const tsFiles = await fg('**/*.ts', { cwd: rootDir, ignore: ['node_modules/**'], deep: 3 });
  if (tsFiles.length > 0) context.languages.push('typescript');

  const pyFiles = await fg('**/*.py', { cwd: rootDir, ignore: ['venv/**', '.env/**'], deep: 3 });
  if (pyFiles.length > 0) context.languages.push('python');

  // 2. Frameworks & Databases (via package.json mapping)
  const pkgPath = path.join(rootDir, 'package.json');
  try {
    const pkgRaw = await fs.readFile(pkgPath, 'utf-8');
    const pkg = JSON.parse(pkgRaw);
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
    
    if (deps['react']) context.frameworks.push('react');
    if (deps['next']) context.frameworks.push('next.js');
    if (deps['express']) context.frameworks.push('express');
    
    if (deps['pg'] || deps['postgres']) context.databases.push('postgresql');
    if (deps['mongoose'] || deps['mongodb']) context.databases.push('mongodb');
  } catch (e) {
    // Ignore if no package.json
  }

  // 3. Infrastructure
  const dockerfiles = await fg('**/Dockerfile', { cwd: rootDir, ignore: ['node_modules/**'], deep: 2 });
  if (dockerfiles.length > 0) context.infrastructure.push('docker');

  // 4. CI/CD
  const ghActions = await fg('.github/workflows/*.{yml,yaml}', { cwd: rootDir, deep: 2 });
  if (ghActions.length > 0) context.ci.push('github-actions');
  
  const gitlabCi = await fg('.gitlab-ci.yml', { cwd: rootDir, deep: 1 });
  if (gitlabCi.length > 0) context.ci.push('gitlab-ci');

  return context;
}
