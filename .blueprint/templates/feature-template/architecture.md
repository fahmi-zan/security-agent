---
id: {feature-id}-architecture
title: {Feature Name} - Architecture
owner: solution-architect
status: draft
version: 1.0.0
depends_on: [system-architecture]
generates: [feature]
reviewers: [security-engineer, backend-architect]
last_updated: 2026-07-28
tags: [feature, architecture]
---

# {Feature Name} - Architecture

## Overview

{Summary}

## Components

### Frontend

{Components, state, flows}

### Backend

{Services, endpoints, logic}

### Database

{Schema changes, new tables/columns}

### Integrations

{External systems}

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant DB
    User->>Frontend: action
    Frontend->>Backend: request
    Backend->>DB: query
    DB-->>Backend: result
    Backend-->>Frontend: response
    Frontend-->>User: result
```

## State

{State machine or state transitions}

## Security

{Authentication, authorization, data protection}

## Performance

{Performance considerations}

## Decisions

- ADR-{n}: {decision} (see [ADRs](../../adr/))

## Related

- [README](./README.md)
- [PRD](./prd.md)
- [API](./api.md)
