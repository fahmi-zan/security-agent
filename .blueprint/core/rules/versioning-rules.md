---
id: rule-versioning
title: Versioning Rules
owner: rule-engine
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [rules, versioning]
---

# Versioning Rules

## Purpose
Maintain predictability in software releases.

## Rules
1. Follow Semantic Versioning (SemVer) 2.0.0.
2. Update `CHANGELOG.md` for every release.
3. Release tags use format `vX.Y.Z`.

## Enforcement
- CI release script validation.
