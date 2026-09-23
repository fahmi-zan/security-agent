---
id: release-checklist
title: Release Review Checklist
owner: release-manager
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [devops-engineer, product-manager]
last_updated: 2026-07-28
tags: [checklist, release]
---

# Release Review Checklist

## Purpose

Validates release readiness and completeness.

## Quality Gates

- [ ] All quality gates passed
- [ ] Validation passed
- [ ] All tests passed
- [ ] Security review passed
- [ ] Performance review passed
- [ ] Documentation review passed

## Versioning

- [ ] Version bumped correctly
- [ ] SemVer followed
- [ ] Git tag created
- [ ] CHANGELOG updated
- [ ] Release notes written

## Content

- [ ] All intended changes included
- [ ] No unintended changes
- [ ] Breaking changes documented
- [ ] Migration guide provided
- [ ] Deprecations documented

## Deployment

- [ ] Deployment plan ready
- [ ] Rollback plan ready
- [ ] Deployment window approved
- [ ] Stakeholders notified
- [ ] Monitoring configured

## Post-Release

- [ ] Release verified in production
- [ ] Smoke tests passed
- [ ] Metrics normal
- [ ] Release reported

## Related

- [Deployment Checklist](./deployment-checklist.md)
- [Versioning Rules](../core/rules/versioning-rules.md)
