---
id: escalation-rules
title: Escalation Rules
owner: solution-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [master-orchestrator]
last_updated: 2026-07-28
tags: [governance, escalation]
---

# Escalation Rules

## Purpose

Defines when and how issues escalate through the system.

## Escalation Triggers

### Immediate (Critical)

Escalate immediately:
- Security vulnerability (critical)
- Production outage
- Data corruption
- Critical requirement conflict
- Compliance violation

### Within 24h (High)

Escalate within 24 hours:
- Blocked task > 24h
- Unresolved review finding
- Requirement ambiguity
- Resource shortage
- Architecture dispute

### Within 1 week (Medium)

Escalate within 1 week:
- Process inefficiency
- Tooling gaps
- Coverage gaps
- Standard conflicts

## Escalation Path

### Level 1: Agent to Agent

Direct peer escalation:
- Agent A → Agent B (domain expert)
- Example: frontend-architect → backend-architect (API issue)

### Level 2: Agent to Orchestrator

Agent → master-orchestrator:
- Cross-agent conflict
- Blocked dependency
- Resource conflict

### Level 3: Orchestrator to Technical Committee

master-orchestrator → technical committee:
- Architecture dispute
- Standard conflict
- Cross-team impact
- Escalated requirement conflicts

### Level 4: Committee to Stakeholders

technical committee → stakeholders:
- Business conflict
- Scope change
- Budget/timeline impact
- Regulatory issue

## Escalation Format

Every escalation must include:

```
ESCALATION
──────────
Issue: {description}
Severity: {critical|high|medium}
Source: {agent/artifact}
Affected: {what is impacted}
Deadline: {when resolution needed}
Attempted: {what was tried}
Recommendation: {proposed resolution}
```

## Resolution

- Resolution documented
- Decision recorded (ADR if architectural)
- Affected parties notified
- Root cause tracked
- Prevention identified

## Related

- [Approval Matrix](./approval-matrix.md)
- [Agent Escalation Rules](../agents/)
