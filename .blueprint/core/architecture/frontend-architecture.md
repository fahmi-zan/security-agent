---
id: arch-frontend
title: Frontend Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: [arch-system]
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, frontend, cli]
---

# Frontend Architecture

## Overview
As a CLI tool, the "frontend" is the terminal interface. 
- Uses Commander.js for routing.
- Outputs human-readable Markdown and machine-readable JSON.
