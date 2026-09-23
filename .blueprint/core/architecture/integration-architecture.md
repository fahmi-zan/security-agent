---
id: arch-integration
title: Integration Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, integration]
---

# Integration Architecture

## Overview
- **CI/CD Integrations:** Outputs SARIF or native CI reports to block pipelines.
- **Tooling:** Wraps Semgrep, Gitleaks, Trivy using OS processes.
