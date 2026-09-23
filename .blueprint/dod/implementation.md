---
id: dod-implementation
title: Definition of Done - Implementation
owner: solution-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [qa-engineer, reviewer]
last_updated: 2026-07-28
tags: [dod, implementation]
---

# Definition of Done - Implementation

## Purpose

Criteria that code implementation must meet before considered done.

## DoD Items

### Code Complete

- [ ] All required functionality implemented
- [ ] Code follows coding standards
- [ ] No placeholders or stubs
- [ ] No dead code
- [ ] No debug code left

### Tests

- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] Edge cases covered
- [ ] Coverage meets minimum (80%)
- [ ] No flaky tests

### Quality

- [ ] Lint passes
- [ ] Type check passes
- [ ] No new warnings
- [ ] No performance regressions

### Integration

- [ ] API contracts followed
- [ ] Database schema changes migrated
- [ ] Dependencies documented
- [ ] Feature flags managed

### Documentation

- [ ] Code comments for complex logic
- [ ] API docs updated
- [ ] README updated if needed
- [ ] CHANGELOG updated

### Review

- [ ] Code reviewed
- [ ] All blocking findings fixed
- [ ] All acceptance criteria met

## Usage

Apply to every task before marking done.

## Related

- [Implementation DoD](../dod/)
- [Coding Standards](../core/standards/coding-standards.md)
- [Testing Standards](../core/standards/testing-standards.md)
