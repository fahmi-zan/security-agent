---
id: rule-deployment
title: Deployment Rules
owner: rule-engine
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [rules, deployment]
---

# Deployment Rules

## Purpose
Ensure safe, predictable, and verifiable releases.

## Rules
1. `main` branch deployments are automated to production via tags.
2. Rollback must be executable within 5 minutes.
3. Pre-deployment CI checks (tests, SAST, secrets) must pass.

## Enforcement
- CI/CD pipeline deployment gates.
