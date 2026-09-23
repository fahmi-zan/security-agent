---
id: approval-matrix
title: Approval Matrix
owner: release-manager
status: active
version: 1.0.0
depends_on: [governance]
generates: []
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [governance, approval]
---

# Approval Matrix

## Purpose

Defines who must approve which artifacts and changes.

## Artifact Approvals

| Artifact | Owner | Reviewer | Approver |
|----------|-------|----------|----------|
| Business Context | business-analyst | product-manager | stakeholders |
| Product Context | product-manager | business-analyst | stakeholders |
| Requirements | business-analyst | product-manager | stakeholders |
| System Architecture | solution-architect | security-engineer | technical committee |
| Feature PRD | product-manager | solution-architect | product-owner |
| Feature Architecture | solution-architect | security-engineer | solution-architect |
| API Design | backend-architect | security-engineer | solution-architect |
| Database Schema | database-architect | backend-architect | solution-architect |
| Code (PR) | author | reviewer | reviewer |
| Security Review | security-engineer | devops-engineer | security-engineer |
| Test Plan | qa-engineer | product-manager | qa-engineer |
| Documentation | documentation-engineer | product-manager | documentation-engineer |
| Release | release-manager | devops-engineer | technical-lead + product-owner |

## Change Approvals

| Change Type | Level | Approvers |
|-------------|-------|-----------|
| Documentation only | Low | author |
| Non-breaking code | Low | reviewer |
| New feature | Medium | reviewer + product-manager |
| Architecture change | High | solution-architect + technical committee |
| API breaking change | High | solution-architect + backend-architect |
| Security-sensitive | High | security-engineer |
| Production deployment | High | technical-lead + product-owner + devops |
| Version bump (major) | High | release-manager + stakeholders |

## Escalation

Escalate to technical committee when:
- Architecture dispute unresolved
- Cross-team impact
- Security vs usability conflict
- Scope disagreement

## Related

- [Escalation Rules](./escalation-rules.md)
- [Governance](../governance/)
