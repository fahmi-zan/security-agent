---
id: arch-tech-stack
title: Technology Stack
owner: system-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, tech-stack]
---

# Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Runtime | Node.js | 22+ | Execution environment |
| Language | TypeScript | 5.x | Type safety |
| CLI Framework | Commander.js | latest | Command routing |
| Validation | Zod + JSON Schema | latest | Runtime schema validation |
| Process Execution | execa | latest | Running external security tools |
| File Discovery | fast-glob | latest | Repository scanning |
| Config | YAML | latest | Human-readable policies |
| AI Integration | LLM API | latest | Security reasoning |
| SAST | Semgrep | latest | Code security detection |
| Secrets | Gitleaks | latest | Credential scanning |
| Testing | Vitest | latest | Fast TypeScript testing |
