---
id: testing-checklist
title: Testing Review Checklist
owner: qa-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [backend-architect, frontend-architect]
last_updated: 2026-07-28
tags: [checklist, testing]
---

# Testing Review Checklist

## Purpose

Validates test coverage, quality, and completeness.

## Unit Tests

- [ ] All critical functions tested
- [ ] Edge cases covered
- [ ] Error paths tested
- [ ] Boundaries tested
- [ ] Meaningful assertions

## Integration Tests

- [ ] API integrations tested
- [ ] Database interactions tested
- [ ] External services mocked or tested
- [ ] Data flow validated

## E2E Tests

- [ ] Critical user journeys covered
- [ ] Real user flows tested
- [ ] Cross-browser considered

## Coverage

- [ ] Coverage meets minimum (80%)
- [ ] High-risk code fully covered
- [ ] No critical untested paths

## Test Quality

- [ ] Tests are deterministic
- [ ] No flaky tests
- [ ] Tests fast enough
- [ ] Tests isolated
- [ ] Tests maintainable

## Acceptance Criteria

- [ ] All acceptance criteria tested
- [ ] Acceptance criteria traceable to tests

## Regression

- [ ] Regression suite maintained
- [ ] No broken existing tests
- [ ] Test data managed properly

## Usage

Run before PR merge and before release.

## Related

- [Testing Standards](../core/standards/testing-standards.md)
- [Definition of Done - Testing](../dod/testing.md)
