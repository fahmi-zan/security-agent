---
id: tasks-readme
title: Tasks
owner: product-manager
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [qa-engineer]
last_updated: 2026-07-28
tags: [tasks]
---

# Tasks

## Purpose

Machine-readable task system.

## Files

| File | Purpose |
|------|---------|
| task-board.json | Active task board |
| task-schema.json | Task validation schema |

> Task schema lives here; central task.schema.json at [../core/schemas/task.schema.json](../core/schemas/task.schema.json)

## Task Fields

id, title, description, priority, owner, status, depends_on, blocks, acceptance_criteria, definition_of_done, estimated_complexity, related_features, related_adrs, related_apis, related_tests.

## Status Values

backlog, todo, in-progress, blocked, in-review, done, cancelled

## Related

- [Task Schema](../core/schemas/task.schema.json)
- [Task Example](../examples/task-example.json)
- [Features](../features/README.md)
