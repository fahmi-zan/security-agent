# ADR 001: Adapter-Based Architecture

## Status
Accepted

## Context
The security agent needs to support multiple languages, frameworks, and databases (TypeScript, Python, Node, React, Postgres, etc.) without cluttering the core engine with tech-specific logic.

## Decision
We will implement an adapter-based architecture. The core agent remains universal, while technology-specific logic resides in `adapters/`, `playbooks/`, and `scanners/`.

## Consequences
### Positive
- Highly extensible
- Core engine stays lean and universal
### Negative
- Requires maintaining multiple adapters
### Neutral
- Standardized interfaces required for all adapters
