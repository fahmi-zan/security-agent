---
id: agents-readme
title: Agents
owner: agent-engine
status: active
version: 1.0.0
depends_on: [prompt-engine]
generates: [agent-definitions]
reviewers: [master-orchestrator]
last_updated: 2026-07-28
tags: [agents]
---

# Agents

## Purpose

Definitions of specialized AI agents in the BlueprintOS ecosystem.

## Agent List

| Agent | File | Purpose |
|-------|------|---------|
| Planner | planner.json | Creates project plans and roadmaps |
| Business Analyst | business-analyst.json | Analyzes business requirements |
| Product Manager | product-manager.json | Defines product requirements |
| Solution Architect | solution-architect.json | Designs solution architecture |
| Frontend Architect | frontend-architect.json | Designs frontend architecture |
| Backend Architect | backend-architect.json | Designs backend architecture |
| Database Architect | database-architect.json | Designs database schema |
| DevOps Engineer | devops-engineer.json | Manages deployment and infra |
| Security Engineer | security-engineer.json | Ensures security compliance |
| QA Engineer | qa-engineer.json | Creates tests, validates quality |
| Documentation Engineer | documentation-engineer.json | Creates documentation |
| Reviewer | reviewer.json | Reviews code and docs |
| Refactoring Agent | refactoring-agent.json | Improves code quality |
| Release Manager | release-manager.json | Manages releases |
| Validation Engine | validation-engine.json | Validates artifacts |

## Schema

Every agent validates against: [agent.schema.json](../core/schemas/agent.schema.json)

## Orchestration

Agents are orchestrated by: [MASTER_ORCHESTRATOR](../prompts/orchestration/01-MASTER_ORCHESTRATOR.prompt)

## Related

- [Prompt Library](../prompts/README.md)
- [Schema Library](../core/schemas/README.md)
