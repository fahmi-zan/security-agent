---
id: backend-checklist
title: Backend Review Checklist
owner: backend-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [security-engineer, qa-engineer]
last_updated: 2026-07-28
tags: [checklist, backend]
---

# Backend Review Checklist

## Purpose

Validates backend implementation quality.

## Architecture

- [ ] Follows layer architecture
- [ ] Clear separation of concerns
- [ ] Business logic in services
- [ ] Controllers thin
- [ ] No business logic in controllers

## API

- [ ] REST conventions followed
- [ ] Status codes correct
- [ ] Error format consistent
- [ ] Input validated
- [ ] Response schemas correct

## Data

- [ ] Data access via repositories
- [ ] No N+1 queries
- [ ] Queries indexed
- [ ] Transactions where needed
- [ ] Migrations correct

## Security

- [ ] Authentication enforced
- [ ] Authorization checked
- [ ] Secrets not in code
- [ ] No SQL injection
- [ ] Rate limiting
- [ ] Sensitive data not logged

## Error Handling

- [ ] Specific error types
- [ ] Errors not swallowed
- [ ] User-friendly errors
- [ ] Logging appropriate
- [ ] No sensitive info in logs

## Performance

- [ ] Efficient algorithms
- [ ] Caching where appropriate
- [ ] Async where appropriate
- [ ] No blocking in event loop

## Testing

- [ ] Unit tests for services
- [ ] Integration tests for APIs
- [ ] Error paths tested
- [ ] Coverage meets minimum

## Related

- [API Checklist](./api-checklist.md)
- [Security Checklist](./security-checklist.md)
- [Backend Architecture](../core/architecture/backend-architecture.md)
