---
id: orchestration-readme
title: Orchestration Prompts
owner: master-orchestrator
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [system]
last_updated: 2026-07-28
tags: [prompts, orchestration]
---

# Orchestration Prompts

## Purpose

The 12-prompt orchestration system. Execute in order.

## Sequence

```
01 MASTER_ORCHESTRATOR
02 SYSTEM_ARCHITECT
03 REPOSITORY_GENERATOR
04 DOCUMENT_ENGINE
05 RULE_ENGINE
06 SCHEMA_ENGINE
07 PROMPT_ENGINE
08 AGENT_ENGINE
09 VALIDATION_ENGINE
10 REVIEW_ENGINE
11 QUALITY_GATE
12 FINAL_ASSEMBLER
```

## Dependency Graph

```
01
 ↓
02
 ↓
03 ────────────┐
 ↓             ↓
04             05
 ↓             ↓
06            ┌┘
 |            07
 |             ↓
 |            08
 |             ↓
09 ←──────────┘
 ↓
10
 ↓
11
 ↓
12
```

## Rules

- Execute in dependency order
- Validate output before next step
- Quality gates enforce readiness
- See [MASTER_ORCHESTRATOR](./01-MASTER_ORCHESTRATOR.prompt)

## Related

- [Prompt Library](../README.md)
- [Agents](../../agents/README.md)
