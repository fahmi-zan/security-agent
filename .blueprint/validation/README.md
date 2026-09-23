---
id: validation-readme
title: Validation
owner: validation-engine
status: active
version: 1.0.0
depends_on: [rules]
generates: [validation]
reviewers: [quality-gate]
last_updated: 2026-07-28
tags: [validation]
---

# Validation

## Purpose

Validation rules and scripts that check all artifacts.

## Components

| Item | File |
|------|------|
| Validation Rules | validation-rules.json |
| Validate Script | ../pipelines/automation/validate-all.sh |
| Quality Gate | ../prompts/orchestration/11-QUALITY_GATE.prompt |

## What is Validated

- JSON syntax
- YAML front matter
- Placeholder content
- Internal links
- Agent definitions
- Cross-references
- Schemas
- Consistency

## Usage

```bash
bash .blueprint/pipelines/automation/validate-all.sh
```

Run on save, on commit, and on PR.

## Related

- [Quality Gate](../prompts/orchestration/11-QUALITY_GATE.prompt)
- [Review Process](../reviews/review-process.md)
