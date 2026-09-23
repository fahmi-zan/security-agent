import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';

export async function parseExpressRoutes(dir: string): Promise<string[]> {
  const routes: string[] = [];
  const files = await fg('**/*.{js,ts}', { cwd: dir, ignore: ['node_modules/**', 'dist/**'] });
  
  const routeRegex = /app\.(get|post|put|delete|patch)\s*\(\s*['"`](.*?)['"`]/g;

  for (const file of files) {
    const content = await fs.readFile(path.join(dir, file), 'utf-8');
    const matches = [...content.matchAll(routeRegex)];
    for (const match of matches) {
      const method = match[1].toUpperCase();
      const endpoint = match[2];
      routes.push(`[Express] ${method} ${endpoint} (Source: ${file})`);
    }
  }
  return routes;
}
