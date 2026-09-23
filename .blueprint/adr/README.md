---
id: adr-readme
title: Architecture Decision Records
owner: solution-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [security-engineer]
last_updated: 2026-07-28
tags: [adr]
---

# Architecture Decision Records

## Purpose

Records of significant architectural decisions.

## Convention

- File: `YYYYMMDD-{kebab-case-title}.md`
- Status: proposed, accepted, rejected, deprecated, superseded
- Template: [template.md](./template.md)
- Example: [20260728-use-jwt-for-authentication.md](./20260728-use-jwt-for-authentication.md)

## Rules

- Every major decision gets an ADR
- ADRs are immutable once accepted (supersede, don't edit)
- Reference ADRs from features and architecture

## Related

- [Architecture](../core/architecture/README.md)
- [ADRs in features](../templates/feature-template/architecture.md)
