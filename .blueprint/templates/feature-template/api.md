---
id: {feature-id}-api
title: {Feature Name} - API Specification
owner: backend-architect
status: draft
version: 1.0.0
depends_on: [feature-architecture]
generates: [feature]
reviewers: [security-engineer, frontend-architect]
last_updated: 2026-07-28
tags: [feature, api]
---

# {Feature Name} - API Specification

## Overview

{Summary of API surface}

## Endpoints

### `{METHOD} /api/v1/{resource}`

**Purpose:** {Purpose}

**Request:**

```json
{
  "example": "payload"
}
```

**Response (200):**

```json
{
  "example": "response"
}
```

**Errors:**

| Status | Code | Condition |
|--------|------|-----------|
| 400 | VALIDATION_ERROR | invalid input |
| 401 | UNAUTHORIZED | not authenticated |
| 403 | FORBIDDEN | not authorized |
| 404 | NOT_FOUND | resource missing |

### `{METHOD} /api/v1/{resource}/{id}`

**Purpose:** {Purpose}

**Response (200):**

```json
{}
```

## Events

| Event | Producer | Consumer |
|-------|----------|----------|
| {event} | {producer} | {consumer} |

## OpenAPI

Full spec: `{path}/openapi.yaml`

## Related

- [README](./README.md)
- [Architecture](./architecture.md)
