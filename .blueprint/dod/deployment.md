---
id: dod-deployment
title: Definition of Done - Deployment
owner: devops-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [release-manager]
last_updated: 2026-07-28
tags: [dod, deployment]
---

# Definition of Done - Deployment

## Purpose

Criteria that must be met before and after deployment.

## DoD Items

### Pre-Deployment

- [ ] All tests pass
- [ ] Code reviewed
- [ ] Quality gates passed
- [ ] Version bumped
- [ ] Migrations tested
- [ ] Rollback plan ready
- [ ] Approvals obtained
- [ ] Stakeholders notified

### Deployment

- [ ] Deployment executed
- [ ] Health checks pass
- [ ] Smoke tests pass
- [ ] No critical errors
- [ ] Monitoring active

### Post-Deployment

- [ ] Services verified
- [ ] Metrics normal
- [ ] Alerts configured
- [ ] Release verified
- [ ] Rollback available if needed

### Documentation

- [ ] Deployment documented
- [ ] Release notes updated
- [ ] CHANGELOG updated
- [ ] Runbook updated

## Related

- [Deployment Rules](../core/rules/deployment-rules.md)
- [Deployment Checklist](../checklists/deployment-checklist.md)
