---
id: example-feature-readme
title: User Authentication (Example Feature)
owner: product-manager
status: active
version: 1.0.0
depends_on: []
generates: [user-auth-feature]
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [example, feature, auth]
---

# User Authentication

## Overview

Complete example feature demonstrating the BlueprintOS feature structure. User registration and login with JWT tokens.

## Purpose

Proves the feature directory structure and provides a reference implementation for future features.

## Users

- End users - register and log in
- API consumers - authenticate requests

## Key Features

1. User registration with email + password
2. User login returning JWT tokens
3. Token refresh mechanism
4. Protected route middleware

## Success Metrics

| Metric | Target |
|--------|--------|
| Registration success rate | > 99% |
| Login p95 latency | < 300ms |
| Auth error rate | < 0.5% |

## Status

Active - reference example.

## Related

- [PRD](./prd.md)
- [Architecture](./architecture.md)
- [API](./api.md)
- [Tasks](./tasks.json)
- [Definition of Done](./dod.md)
- [Review Checklist](./review-checklist.md)
