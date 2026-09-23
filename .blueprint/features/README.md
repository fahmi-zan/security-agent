---
id: features-readme
title: Features
owner: product-manager
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [features]
---

# Features

## Purpose

Feature specifications. Each feature has its own directory.

## Feature Structure

```
{feature-id}/
├── README.md
├── prd.md
├── architecture.md
├── api.md
├── tasks.json
├── dod.md
└── review-checklist.md
```

## Convention

- Directory name = feature id (kebab-case)
- Feature validated against [feature.schema.json](../core/schemas/feature.schema.json)
- Reference: [feature template](../templates/feature-template/)
- Example: [feature-example](../examples/feature-example/)

## Related

- [Feature Template](../templates/feature-template/)
- [Definition of Done - Feature](../dod/feature.md)
