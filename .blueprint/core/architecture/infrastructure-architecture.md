---
id: arch-infra
title: Infrastructure Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, infrastructure, ci]
---

# Infrastructure Architecture

## Overview
Runs as a binary/CLI in:
- Local dev environments.
- CI/CD pipelines (GitLab CI, GitHub Actions) as a security gate.
