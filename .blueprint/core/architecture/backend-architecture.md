---
id: arch-backend
title: Backend Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, backend, cli]
---

# Backend Architecture (CLI Core)

## Overview
The "backend" of this system is the CLI core engine written in TypeScript running on Node.js.

## Components
- **CLI Router:** Parses commands (init, audit, threat-model, etc.).
- **Discovery Engine:** Scans directory to find stack/context.
- **Scanner Orchestrator:** Runs execa for Semgrep/Gitleaks.
- **AI Agent Orchestrator:** Communicates with LLM for reasoning.
