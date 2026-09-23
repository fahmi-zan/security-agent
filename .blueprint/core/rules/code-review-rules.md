---
id: rule-code-review
title: Code Review Rules
owner: rule-engine
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [rules, review]
---

# Code Review Rules

## Purpose
Ensure high quality, security, and maintainability of the codebase.

## Rules
1. Every PR must be reviewed by at least one other engineer.
2. Authors cannot self-approve.
3. Review feedback uses tags: `[blocking]`, `[suggestion]`, `[question]`, `[nit]`.
4. Security findings block merge (Critical/High).

## Enforcement
- Enforced via CI pipeline and Branch Protection rules.
