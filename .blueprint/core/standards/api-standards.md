---
id: api-standards
title: API Standards
owner: backend-architect
status: active
version: 1.0.0
depends_on: [coding-standards]
generates: [apis]
reviewers: [security-engineer, frontend-architect]
last_updated: 2026-07-28
tags: [standards, api]
---

# API Standards

## Purpose

Defines mandatory standards for API design and implementation.

## API Style

- REST over HTTP/JSON by default
- GraphQL only with explicit ADR
- gRPC only for internal high-throughput services

## Resource Design

- Nouns, plural: `/users`, `/orders`
- Sub-resources: `/users/{id}/orders`
- No verbs in URLs (use HTTP methods)
- kebab-case for URL segments

## HTTP Methods

| Method | Purpose | Idempotent |
|--------|---------|------------|
| GET | Read | Yes |
| POST | Create/action | No |
| PUT | Full replace | Yes |
| PATCH | Partial update | Yes |
| DELETE | Remove | Yes |

## Status Codes

- 200 OK, 201 Created, 204 No Content
- 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict
- 422 Unprocessable Entity (validation)
- 429 Too Many Requests
- 500 Internal, 503 Unavailable

## Error Format

Standard error envelope:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [{ "field": "email", "message": "required" }],
    "request_id": "req_123"
  }
}
```

- Machine-readable `code`
- Human-readable `message`
- `details` for field errors
- `request_id` for tracing

## Versioning

- URL versioning: `/api/v1/users`
- Breaking changes bump major version
- Deprecation notice before removal
- Support at least 1 previous version

## Pagination

- `GET /resources?limit=20&cursor=abc`
- Cursor-based preferred
- Response includes `next_cursor` and `has_more`

## Filtering and Sorting

- `?filter[status]=active`
- `?sort=-created_at` (descending with -)
- Document all supported filters

## Authentication

- JWT Bearer tokens
- `Authorization: Bearer <token>`
- Tokens expire and refresh
- See [Security Standards](./security-standards.md)

## Rate Limiting

- Default: 100 req/min per user
- Response headers: `X-RateLimit-*`
- 429 on exceed with Retry-After

## Idempotency

- POST can accept `Idempotency-Key` header
- PUT/DELETE naturally idempotent
- Safe to retry

## OpenAPI

- Every API documented with OpenAPI 3.1
- Validated in CI
- Generated from code where possible

## Related

- [API Checklist](../../checklists/api-checklist.md)
- [API Architecture](../architecture/api-architecture.md)
- [Backend Architecture](../architecture/backend-architecture.md)
