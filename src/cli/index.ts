import { Command } from 'commander';
import { discoverProject } from '../discovery/index.js';
import { generateThreatModel } from '../core/threat-model.js';
import { getActivePlaybooks, executePlaybooks } from '../playbooks/index.js';
import { runGitleaks, runSemgrep } from '../scanners/index.js';
import { analyzeFindings } from '../analyzers/index.js';
import { generateReports } from '../reporters/index.js';
import { evaluateGate } from '../gate/index.js';
import { retestFinding } from '../core/verification.js';

const program = new Command();

program
  .name('security-agent')
  .description('AI Agent untuk security assessment secara evidence-driven')
  .version('0.1.0');

program
  .command('audit')
  .description('Run full security audit')
  .argument('[dir]', 'Directory to audit', process.cwd())
  .action(async (dir) => {
    console.log(`\n1️⃣  DISCOVERY`);
    const context = await discoverProject(dir);
    console.log(`Context: ${context.frameworks.join(',') || 'None'}`);
    
    console.log(`\n2️⃣  THREAT MODELING (via Adapters)`);
    const tm = await generateThreatModel(dir, context);
    if (tm.attackSurfaces.length > 0) {
      tm.attackSurfaces.forEach(s => console.log(` - ${s}`));
    } else {
      console.log(` - Tidak ada endpoints spesifik terdeteksi.`);
    }
    
    console.log(`\n3️⃣  PLAYBOOKS`);
    const playbooks = getActivePlaybooks(context);
    console.log(`Active: ${playbooks.join(', ')}`);

    console.log(`\n4️⃣  SCANNERS`);
    const secrets = await runGitleaks(dir);
    const sast = await runSemgrep(dir);
    const playbookFindings = await executePlaybooks(dir, playbooks);
    const allFindings = [...secrets, ...sast, ...playbookFindings];
    console.log(`Total findings: ${allFindings.length}`);
    
    console.log(`\n5️⃣  AI SECURITY ENGINE`);
    let analysis = "No findings to analyze.";
    if (allFindings.length > 0) {
      analysis = await analyzeFindings(allFindings, context);
      console.log(`Analysis complete.`);
    } else {
      console.log(`Sistem aman. Analysis dilewati.`);
    }

    console.log(`\n6️⃣  REPORTING`);
    await generateReports(allFindings, analysis);

    console.log(`\n7️⃣  CI GATE`);
    const exitCode = evaluateGate(allFindings);
    process.exit(exitCode);
  });

program
  .command('retest')
  .description('Verify jika sebuah finding telah di-patch')
  .argument('<findingId>', 'ID dari finding di laporan sebelumnya')
  .action(async (findingId) => {
    await retestFinding(findingId);
  });

program.parse();
