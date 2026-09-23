---
id: architecture-checklist
title: Architecture Review Checklist
owner: solution-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [security-engineer, backend-architect]
last_updated: 2026-07-28
tags: [checklist, architecture]
---

# Architecture Review Checklist

## Purpose

Validates architecture completeness, correctness, consistency, and feasibility.

## Completeness

- [ ] All required sections present
- [ ] All decisions documented as ADRs
- [ ] Technology choices have rationale
- [ ] Constraints documented
- [ ] Quality attributes specified

## Correctness

- [ ] Meets requirements
- [ ] No contradictions
- [ ] Dependencies correctly identified
- [ ] Integration patterns correct
- [ ] Security considerations included

## Consistency

- [ ] Consistent with system architecture
- [ ] Consistent with standards
- [ ] Consistent terminology
- [ ] No conflicting decisions

## Diagrams

- [ ] Valid Mermaid syntax
- [ ] Diagrams accurate
- [ ] All components defined
- [ ] Clear and readable

## Feasibility

- [ ] Implementable by team
- [ ] Within budget
- [ ] Within timeline
- [ ] Uses proven technologies

## Production Readiness

- [ ] Scalable
- [ ] Maintainable
- [ ] Secure
- [ ] Performance considered
- [ ] Monitoring considered

## Usage

Run after any architecture change or before feature implementation.

## Related

- [Architecture Review Standards](../reviews/architecture-review.md)
- [Definition of Done - Architecture](../dod/architecture.md)
