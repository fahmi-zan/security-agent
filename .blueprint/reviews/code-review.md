---
id: code-review
title: Code Review Standards
owner: reviewer
status: active
version: 1.0.0
depends_on: [review-process]
generates: [code-reviews]
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [review, code]
---

# Code Review Standards

## Purpose

Standards for reviewing code changes (pull requests).

## Mandatory Checks

### Functionality

- [ ] Code does what it claims
- [ ] Edge cases handled
- [ ] Error handling correct

### Quality

- [ ] Follows [Coding Standards](../core/standards/coding-standards.md)
- [ ] Clear, readable, maintainable
- [ ] No duplication
- [ ] No dead code

### Testing

- [ ] Tests included and meaningful
- [ ] Tests pass
- [ ] Coverage maintained

### Security

- [ ] Input validated
- [ ] No secrets
- [ ] No injection vulnerabilities
- [ ] Auth checks present

### Performance

- [ ] No obvious performance issues
- [ ] No N+1 queries
- [ ] Efficient algorithms

### Integration

- [ ] API contracts respected
- [ ] DB migrations safe
- [ ] No broken dependencies

## Review Rules

- Author cannot approve own PR
- Minimum 1 approval
- All CI checks must pass first
- Comment using conventional format:
  - `[blocking]` must fix
  - `[suggestion]` optional
  - `[question]` clarify
  - `[nit]` minor

## Timeline

- First review within 24h
- Author addresses feedback within 48h
- Re-review within 24h

## Anti-Patterns

Avoid: rubber stamping, nitpicking, scope creep, ghosting.

## Related

- [Review Process](./review-process.md)
- [Code Review Rules](../core/rules/code-review-rules.md)
- [Review Checklist](../checklists/review-checklist.md)
