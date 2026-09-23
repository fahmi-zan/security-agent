---
id: schemas-readme
title: JSON Schema Library
owner: schema-engine
status: active
version: 1.0.0
depends_on: [system-architecture]
generates: [schemas]
reviewers: [validation-engine]
last_updated: 2026-07-28
tags: [schemas]
---

# JSON Schema Library

## Purpose

Machine-readable schemas for all BlueprintOS data structures.

## Schema List

| Schema | File | Purpose |
|--------|------|---------|
| Project | project.schema.json | Project definition |
| Feature | feature.schema.json | Feature specifications |
| Task | task.schema.json | Tasks |
| Requirement | requirement.schema.json | Requirements |
| ADR | adr.schema.json | Architecture Decision Records |
| Component | component.schema.json | Software components |
| API | api.schema.json | API endpoints/contracts |
| Entity | entity.schema.json | Domain entities |
| DTO | dto.schema.json | Data Transfer Objects |
| Event | event.schema.json | Domain events |
| Release | release.schema.json | Releases |
| Checklist | checklist.schema.json | Checklists |
| Prompt | prompt.schema.json | AI prompts |
| Agent | agent.schema.json | Agent definitions |
| Review | review.schema.json | Review reports |
| Validation | validation.schema.json | Validation reports |

> All schemas live here. Some are additionally mirrored into artifact directories (e.g. task.schema.json) for local reference.

## Standard

- JSON Schema Draft 2020-12
- `additionalProperties: false` for strictness
- All fields documented

## Related

- [Validation Rules](../../validation/validation-rules.json)
- [SCHEMA_ENGINE](../../prompts/orchestration/06-SCHEMA_ENGINE.prompt)
