---
id: arch-database
title: Database Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, database, storage]
---

# Database Architecture

## Overview
No persistent relational database.
- State and findings stored locally in `reports/` (JSON/Markdown).
- Policies stored in `.security-agent/` (YAML).
