---
id: arch-api
title: API Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, api]
---

# API Architecture

## Overview
The agent communicates externally via API to LLM providers.
- LLM API boundaries are strictly defined with Zod schemas.
