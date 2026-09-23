---
id: arch-security
title: Security Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, security]
---

# Security Architecture

## Overview
- **Zero Destructive Actions:** Does not mutate production state.
- **Secret Redaction:** Strips secrets from AI prompts and reports.
