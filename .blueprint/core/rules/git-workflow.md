---
id: rule-git-workflow
title: Git Workflow Rules
owner: rule-engine
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [rules, git]
---

# Git Workflow Rules

## Purpose
Ensure a clean, predictable, and traceable Git history for the project.

## Rules
1. **Branch Naming:**
   - `main`: production-ready, protected.
   - `feature/{id}-{desc}`: features.
   - `bugfix/{id}-{desc}`: fixes.
   - `hotfix/{id}-{desc}`: critical production fixes.
2. **Commit Messages:** Must follow Conventional Commits (e.g., `feat: add scanner`, `fix: correct typo`).
3. **Pull Requests:** Must require at least 1 approval.
4. **Merge Strategy:** Squash and merge into `main`.

## Enforcement
- Enforced via GitHub Actions / GitLab CI branch protection rules.
