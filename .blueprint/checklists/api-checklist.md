---
id: api-checklist
title: API Review Checklist
owner: backend-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [security-engineer, qa-engineer]
last_updated: 2026-07-28
tags: [checklist, api]
---

# API Review Checklist

## Purpose

Validates API design, correctness, security, and completeness.

## Design

- [ ] Follows REST conventions
- [ ] Consistent resource naming
- [ ] Proper HTTP methods
- [ ] Proper status codes
- [ ] Versioning strategy applied
- [ ] Pagination defined where needed

## Documentation

- [ ] OpenAPI specification valid
- [ ] All endpoints documented
- [ ] All parameters documented
- [ ] All responses documented
- [ ] Example payloads included
- [ ] Error responses documented

## Security

- [ ] Authentication enforced
- [ ] Authorization checked
- [ ] Input validated
- [ ] Rate limiting applied
- [ ] No sensitive data in responses
- [ ] CORS configured properly

## Validation

- [ ] Request schemas validated
- [ ] Response schemas validated
- [ ] Idempotency considered
- [ ] Timeout handling defined
- [ ] Error format consistent

## Testing

- [ ] Unit tests for endpoints
- [ ] Integration tests
- [ ] Edge cases covered
- [ ] Security tests

## Usage

Run before API implementation and before release.

## Related

- [API Standards](../core/standards/api-standards.md)
- [Definition of Done - Testing](../dod/testing.md)
