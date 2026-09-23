---
id: prompts-library-readme
title: Prompt Library
owner: prompt-engineer
status: active
version: 1.0.0
depends_on: [rule-engine]
generates: [prompts]
reviewers: [agent-engine]
last_updated: 2026-07-28
tags: [prompts]
---

# Prompt Library

## Purpose

Reusable prompts for AI agents covering all software delivery activities.

## Structure

```
orchestration/  # 12-prompt orchestration system
library/        # task-specific reusable prompts
```

## Usage

1. Select prompt by activity type
2. Read orchestration prompt for full workflow
3. Feed required inputs
4. Collect outputs
5. Validate and review

## Prompt List

### Orchestration

- 01-MASTER_ORCHESTRATOR.prompt
- 02-SYSTEM_ARCHITECT.prompt
- 03-REPOSITORY_GENERATOR.prompt
- 04-DOCUMENT_ENGINE.prompt
- 05-RULE_ENGINE.prompt
- 06-SCHEMA_ENGINE.prompt
- 07-PROMPT_ENGINE.prompt
- 08-AGENT_ENGINE.prompt
- 09-VALIDATION_ENGINE.prompt
- 10-REVIEW_ENGINE.prompt
- 11-QUALITY_GATE.prompt
- 12-FINAL_ASSEMBLER.prompt

### Library

- planning.prompt
- architecture.prompt
- frontend.prompt
- backend.prompt
- api.prompt
- database.prompt
- testing.prompt
- documentation.prompt
- deployment.prompt
- review.prompt
- refactoring.prompt
- release.prompt
- security.prompt
- accessibility.prompt
- performance.prompt
- maintenance.prompt
- design-from-image.prompt

## Related

- [Orchestration System](../prompts/orchestration/README.md)
- [Agents](../agents/README.md)
- [Validation Rules](../validation/validation-rules.json)
