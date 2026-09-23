import { SecurityContext } from '../discovery/index.js';
import { parseExpressRoutes } from './express.js';
import { parseNextjsRoutes } from './nextjs.js';

export async function mapAttackSurfaces(dir: string, context: SecurityContext): Promise<string[]> {
  const surfaces: string[] = [];
  
  if (context.frameworks.includes('express')) {
    surfaces.push(...await parseExpressRoutes(dir));
  }
  if (context.frameworks.includes('next.js')) {
    surfaces.push(...await parseNextjsRoutes(dir));
  }
  
  return surfaces;
}
