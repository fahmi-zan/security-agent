---
id: example-feature-api
title: User Authentication - API
owner: backend-architect
status: active
version: 1.0.0
depends_on: [example-feature-architecture]
generates: [user-auth-feature]
reviewers: [security-engineer, frontend-architect]
last_updated: 2026-07-28
tags: [example, feature, api]
---

# User Authentication - API

## Endpoints

### `POST /api/v1/auth/register`

**Purpose:** Register a new user.

**Request:**

```json
{
  "email": "user@example.com",
  "password": "StrongPass123!"
}
```

**Response (201):**

```json
{
  "id": "user_abc123",
  "email": "user@example.com"
}
```

**Errors:**

| Status | Code | Condition |
|--------|------|-----------|
| 400 | VALIDATION_ERROR | invalid email / weak password |
| 409 | EMAIL_ALREADY_REGISTERED | email exists |

### `POST /api/v1/auth/login`

**Purpose:** Authenticate and return tokens.

**Request:**

```json
{
  "email": "user@example.com",
  "password": "StrongPass123!"
}
```

**Response (200):**

```json
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "expires_in": 900
}
```

**Errors:**

| Status | Code | Condition |
|--------|------|-----------|
| 400 | VALIDATION_ERROR | missing fields |
| 401 | INVALID_CREDENTIALS | wrong email/password |
| 429 | RATE_LIMITED | too many attempts |

### `POST /api/v1/auth/refresh`

**Purpose:** Refresh expired access token.

**Request:**

```json
{
  "refresh_token": "eyJ..."
}
```

**Response (200):**

```json
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "expires_in": 900
}
```

**Errors:**

| Status | Code | Condition |
|--------|------|-----------|
| 400 | VALIDATION_ERROR | missing token |
| 401 | INVALID_REFRESH_TOKEN | revoked or invalid |

### `POST /api/v1/auth/logout`

**Purpose:** Revoke refresh token.

**Response (204):** No content

## Events

| Event | Producer | Consumer |
|-------|----------|----------|
| user.registered | auth-service | analytics |

## OpenAPI

Full spec: `.blueprint/examples/feature-example/openapi.yaml`

## Related

- [README](./README.md)
- [Architecture](./architecture.md)
