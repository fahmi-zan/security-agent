---
id: deployment-checklist
title: Deployment Review Checklist
owner: devops-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [release-manager, security-engineer]
last_updated: 2026-07-28
tags: [checklist, deployment]
---

# Deployment Review Checklist

## Purpose

Validates deployment readiness and safety.

## Pre-Deployment

- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Version bumped
- [ ] Migrations tested
- [ ] Rollback plan documented
- [ ] Monitoring configured
- [ ] Alerts configured
- [ ] Stakeholders notified

## Environment

- [ ] Correct environment targeted
- [ ] Approvals obtained
- [ ] Deployment window valid
- [ ] Config correct
- [ ] Secrets available (not hardcoded)

## Deployment Steps

- [ ] Pre-deployment tests run
- [ ] Deployment executed
- [ ] Smoke tests passed
- [ ] Health checks passed
- [ ] Services verified

## Post-Deployment

- [ ] Monitoring active
- [ ] No critical errors
- [ ] Key metrics normal
- [ ] Stakeholders notified

## Rollback Readiness

- [ ] Rollback triggers defined
- [ ] Rollback steps documented
- [ ] Rollback target < 5 min
- [ ] Backups verified

## Usage

Run before every deployment to staging and production.

## Related

- [Deployment Rules](../core/rules/deployment-rules.md)
- [Definition of Done - Deployment](../dod/deployment.md)
