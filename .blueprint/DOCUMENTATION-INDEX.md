---
id: documentation-index
title: Documentation Index
owner: documentation-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [product-manager]
last_updated: 2026-07-28
tags: [documentation, index]
---

# Documentation Index

## Core Documentation

| Document | Location | Owner |
|----------|----------|-------|
| BlueprintOS Overview | `.blueprint/README.md` | system |
| Manifest | `.blueprint/manifest.json` | system |
| Configuration | `.blueprint/blueprint.config.json` | system |
| Business Context | `.blueprint/core/context/business-context.md` | business-analyst |
| Product Context | `.blueprint/core/context/product-context.md` | product-manager |
| User Personas | `.blueprint/core/context/user-personas.md` | product-manager |
| Glossary | `.blueprint/core/context/glossary.md` | documentation-engineer |

## Architecture

| Document | Location | Owner |
|----------|----------|-------|
| System Architecture | `.blueprint/core/architecture/system-architecture.md` | solution-architect |
| Frontend Architecture | `.blueprint/core/architecture/frontend-architecture.md` | frontend-architect |
| Backend Architecture | `.blueprint/core/architecture/backend-architecture.md` | backend-architect |
| Database Architecture | `.blueprint/core/architecture/database-architecture.md` | database-architect |
| API Architecture | `.blueprint/core/architecture/api-architecture.md` | backend-architect |
| Security Architecture | `.blueprint/core/architecture/security-architecture.md` | security-engineer |
| Infrastructure Architecture | `.blueprint/core/architecture/infrastructure-architecture.md` | devops-engineer |
| Integration Architecture | `.blueprint/core/architecture/integration-architecture.md` | solution-architect |
| Technology Stack | `.blueprint/core/architecture/technology-stack.md` | solution-architect |

## Standards

| Standard | Location |
|----------|----------|
| Coding | `.blueprint/core/standards/coding-standards.md` |
| Documentation | `.blueprint/core/standards/documentation-standards.md` |
| Testing | `.blueprint/core/standards/testing-standards.md` |
| Security | `.blueprint/core/standards/security-standards.md` |
| Accessibility | `.blueprint/core/standards/accessibility-standards.md` |
| Performance | `.blueprint/core/standards/performance-standards.md` |
| API | `.blueprint/core/standards/api-standards.md` |

## Rules

| Rule | Location |
|------|----------|
| Git Workflow | `.blueprint/core/rules/git-workflow.md` |
| Code Review | `.blueprint/core/rules/code-review-rules.md` |
| Deployment | `.blueprint/core/rules/deployment-rules.md` |
| Versioning | `.blueprint/core/rules/versioning-rules.md` |
| Naming | `.blueprint/core/rules/naming-conventions.md` |

## Schemas

| Schema | Location |
|--------|----------|
| Feature | `.blueprint/core/schemas/feature.schema.json` |
| Task | `.blueprint/core/schemas/task.schema.json` |
| Requirement | `.blueprint/core/schemas/requirement.schema.json` |
| Agent | `.blueprint/core/schemas/agent.schema.json` |

## Orchestration Prompts

| # | Prompt | Location |
|---|--------|----------|
| 01 | MASTER_ORCHESTRATOR | `prompts/orchestration/01-MASTER_ORCHESTRATOR.prompt` |
| 02 | SYSTEM_ARCHITECT | `prompts/orchestration/02-SYSTEM_ARCHITECT.prompt` |
| 03 | REPOSITORY_GENERATOR | `prompts/orchestration/03-REPOSITORY_GENERATOR.prompt` |
| 04 | DOCUMENT_ENGINE | `prompts/orchestration/04-DOCUMENT_ENGINE.prompt` |
| 05 | RULE_ENGINE | `prompts/orchestration/05-RULE_ENGINE.prompt` |
| 06 | SCHEMA_ENGINE | `prompts/orchestration/06-SCHEMA_ENGINE.prompt` |
| 07 | PROMPT_ENGINE | `prompts/orchestration/07-PROMPT_ENGINE.prompt` |
| 08 | AGENT_ENGINE | `prompts/orchestration/08-AGENT_ENGINE.prompt` |
| 09 | VALIDATION_ENGINE | `prompts/orchestration/09-VALIDATION_ENGINE.prompt` |
| 10 | REVIEW_ENGINE | `prompts/orchestration/10-REVIEW_ENGINE.prompt` |
| 11 | QUALITY_GATE | `prompts/orchestration/11-QUALITY_GATE.prompt` |
| 12 | FINAL_ASSEMBLER | `prompts/orchestration/12-FINAL_ASSEMBLER.prompt` |

## Prompt Library

| Prompt | Location |
|--------|----------|
| Planning, Architecture, Frontend, Backend, API, Database, Testing, Documentation, Deployment, Review, Refactoring, Release, Security, Accessibility, Performance, Maintenance | `prompts/library/*.prompt` |
| Design from Image (DESIGN.md) | `prompts/library/design-from-image.prompt` |

## Agents

| Agent | Location |
|-------|----------|
| All 15 agents | `agents/*.json` |

## Checklists

| Checklist | Location |
|-----------|----------|
| All 15 checklists | `checklists/*.md` |

## Definition of Done

| DoD | Location |
|-----|----------|
| Planning, Architecture, Implementation, Testing, Documentation, Deployment, Feature | `dod/*.md` |

## Reviews

| Review | Location |
|--------|----------|
| Process, Code, Architecture, Security, Documentation | `reviews/*.md` |

## Governance

| Document | Location |
|----------|----------|
| Approval Matrix | `governance/approval-matrix.md` |
| Escalation Rules | `governance/escalation-rules.md` |
| Compliance | `governance/compliance.md` |

## Pipelines

| Workflow | Location |
|----------|----------|
| Feature | `pipelines/workflows/feature-workflow.json` |
| Review | `pipelines/workflows/review-workflow.json` |
| Deployment | `pipelines/workflows/deployment-workflow.json` |
| Release | `pipelines/workflows/release-workflow.json` |
| Validate | `pipelines/automation/validate-all.sh` |

## ADRs

| ADR | Location |
|-----|----------|
| Template | `adr/template.md` |
| ADR-001: JWT Auth | `adr/20260728-use-jwt-for-authentication.md` |

## Examples

| Example | Location |
|---------|----------|
| Feature: User Auth | `examples/feature-example/` |
| Task | `examples/task-example.json` |

## Templates

| Template | Location |
|----------|----------|
| Feature | `templates/feature-template/` |

## Related

- [BlueprintOS README](./README.md)
- [Manifest](./manifest.json)
