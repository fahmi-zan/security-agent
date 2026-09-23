import { SecurityContext } from '../discovery/index.js';
import { mapAttackSurfaces } from '../adapters/index.js';

export interface ThreatModel {
  assets: string[];
  attackSurfaces: string[];
  trustBoundaries: string[];
}

export async function generateThreatModel(dir: string, context: SecurityContext): Promise<ThreatModel> {
  const model: ThreatModel = {
    assets: ['Source Code', 'Environment Variables'],
    attackSurfaces: [],
    trustBoundaries: ['Internal Network', 'Public Internet'],
  };

  // Gunakan Adapters untuk deteksi akurat
  model.attackSurfaces = await mapAttackSurfaces(dir, context);

  if (context.frameworks.includes('express') || context.frameworks.includes('next.js')) {
    model.assets.push('User Session Data');
  }

  if (context.databases.length > 0) {
    model.assets.push('Database Records');
    model.trustBoundaries.push('Database Connection');
  }

  return model;
}
