# AGENTS.md

This repository is governed by **BlueprintOS** (AI-Native Software Delivery Operating System).

**You MUST read `.blueprint/README.md` and `.blueprint/manifest.json` before doing any work.**

Read in order:
1. `.blueprint/README.md` — repository overview
2. `.blueprint/manifest.json` — repository structure
3. `.blueprint/blueprint.config.json` — configuration
4. `.blueprint/core/context/business-context.md` — project context
5. `.blueprint/core/standards/` — engineering standards
6. `.blueprint/core/rules/` — process rules
7. `.blueprint/agents/` — agent definitions
8. `.blueprint/prompts/` — prompts

Rules:
- Never generate placeholders (no TODO/TBD/FIXME)
- Never skip validation: `bash .blueprint/pipelines/automation/validate-all.sh`
- Never invent business rules, APIs, or architecture — escalate unknowns
- Every document must have YAML front matter
- Every artifact must have Definition of Done
- Architecture before code. Documentation drives engineering.
