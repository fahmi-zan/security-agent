---
id: review-process
title: Review Process
owner: reviewer
status: active
version: 1.0.0
depends_on: []
generates: [reviews]
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [review, process]
---

# Review Process

## Purpose

Defines the standard review process for all artifacts.

## Process

### 1. Self-Review

Author validates own work:
- Complete
- Follows standards
- No placeholders
- Tests pass (for code)

### 2. Automated Validation

Validation Engine checks:
- Links, references, schemas, consistency
- See [Validation Rules](../validation/validation-rules.json)

### 3. Automated Review

Reviewer agent applies type-specific checklist:
- See [Checklists](../checklists/)

### 4. Expert Review

Domain experts review for:
- Architecture: solution-architect
- Security: security-engineer
- Database: database-architect
- Product: product-manager

### 5. Approval

- No critical or high findings
- All medium findings have action items
- Approver signs off

## Finding Format

| Field | Required | Description |
|-------|----------|-------------|
| id | yes | F-001 |
| severity | yes | critical/high/medium/low |
| category | yes | type of issue |
| location | yes | file:line |
| title | yes | short summary |
| description | yes | details |
| recommendation | yes | how to fix |
| status | yes | open/fixed/accepted |

## Severity Definitions

| Severity | Meaning | Blocks? |
|----------|---------|---------|
| critical | data loss, security breach, broken core | yes |
| high | significant defect, must fix | yes |
| medium | should fix, non-blocking | no |
| low | minor, optional | no |

## Approval Criteria

Artifact approved when:
- All critical and high findings resolved
- Medium findings documented with action items
- Automated checks passed
- Required expert reviews completed

## Related

- [Code Review](./code-review.md)
- [Architecture Review](./architecture-review.md)
- [Security Review](./security-review.md)
- [Documentation Review](./documentation-review.md)
- [Review Checklist](../checklists/review-checklist.md)
