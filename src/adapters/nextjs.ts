import fg from 'fast-glob';

export async function parseNextjsRoutes(dir: string): Promise<string[]> {
  const routes: string[] = [];
  
  // App Router API
  const appRoutes = await fg('app/**/route.{ts,js}', { cwd: dir });
  for (const file of appRoutes) {
    const endpoint = file.replace('app', '').replace('/route.ts', '').replace('/route.js', '') || '/';
    routes.push(`[Next.js App Router] API ${endpoint} (Source: ${file})`);
  }

  // Pages Router API
  const pagesRoutes = await fg('pages/api/**/*.{ts,js}', { cwd: dir });
  for (const file of pagesRoutes) {
    const endpoint = file.replace('pages', '').replace(/\.(ts|js)$/, '');
    routes.push(`[Next.js Pages Router] API ${endpoint} (Source: ${file})`);
  }

  return routes;
}
