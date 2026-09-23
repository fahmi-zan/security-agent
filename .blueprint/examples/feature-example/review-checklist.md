---
id: example-feature-review-checklist
title: User Authentication - Review Checklist
owner: reviewer
status: active
version: 1.0.0
depends_on: [example-feature]
generates: []
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [example, feature, review]
---

# User Authentication - Review Checklist

## Specification

- [x] PRD complete
- [x] Acceptance criteria testable
- [x] Scope clear

## Architecture

- [x] Follows system architecture
- [x] JWT decision documented (ADR-001)
- [x] Security considered
- [x] Performance considered

## Implementation

- [x] TASK-001 done
- [ ] TASK-002 follows coding standards
- [ ] Tests meaningful
- [ ] Coverage adequate

## Integration

- [ ] API contracts correct
- [ ] Database migrations safe
- [ ] No broken dependencies

## Documentation

- [x] Feature docs complete
- [x] Links valid
- [x] Examples correct

## Release Readiness

- [ ] Deployment notes complete
- [x] Rollback strategy defined
- [ ] Monitoring configured

## Findings

| Severity | Location | Description | Recommendation | Status |
|----------|----------|-------------|----------------|--------|
| medium | api.md | No rate limit documented on refresh endpoint | Add rate limit to /auth/refresh | open |

## Related

- [README](./README.md)
- [Review Checklist](../../checklists/review-checklist.md)
