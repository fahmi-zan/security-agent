---
id: pipelines-readme
title: Pipelines
owner: devops-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [quality-gate]
last_updated: 2026-07-28
tags: [pipelines]
---

# Pipelines

## Purpose

Automation workflows and scripts.

## Workflows

| Workflow | File |
|----------|------|
| Feature Development | workflows/feature-workflow.json |
| Review | workflows/review-workflow.json |
| Deployment | workflows/deployment-workflow.json |
| Release | workflows/release-workflow.json |

## Automation

| Script | File |
|--------|------|
| Validate All | automation/validate-all.sh |

## Related

- [Validation](../validation/README.md)
- [Quality Gate](../prompts/orchestration/11-QUALITY_GATE.prompt)
