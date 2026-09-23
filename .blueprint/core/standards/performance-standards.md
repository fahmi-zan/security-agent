---
id: performance-standards
title: Performance Standards
owner: devops-engineer
status: active
version: 1.0.0
depends_on: [coding-standards]
generates: [performance]
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [standards, performance]
---

# Performance Standards

## Purpose

Defines mandatory performance standards and budgets.

## Frontend Budgets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Bundle size (gzip) | ≤ 500 KB |
| First Contentful Paint | ≤ 1.5s |
| Largest Contentful Paint | ≤ 2.5s |
| Cumulative Layout Shift | ≤ 0.1 |
| Total Blocking Time | ≤ 200ms |

## Backend Budgets

| Metric | Target |
|--------|--------|
| API p95 response | ≤ 500ms |
| API p99 response | ≤ 1000ms |
| Error rate | ≤ 1% |
| Throughput | per-load-test |

## Database Budgets

- No full table scans on hot paths
- Query time ≤ 100ms for common paths
- Index all query patterns
- Max 2 round trips for common flows

## Frontend Rules

- Lazy load below-fold and rarely used modules
- Code-split by route
- Optimize images (WebP, responsive, lazy)
- Memoize expensive computations
- Avoid layout thrashing
- Preconnect to critical origins

## Backend Rules

- Cache at multiple layers
- Use connection pooling
- Batch N+1 queries
- Async/event-driven for slow operations
- Paginate all list endpoints
- Timeout and retry with backoff

## Performance Testing

- Lighthouse CI on every PR
- Load test before major releases
- Profile before optimizing
- Regression gate: no perf regressions

## Related

- [Performance Checklist](../../checklists/performance-checklist.md)
- [Frontend Architecture](../architecture/frontend-architecture.md)
- [Backend Architecture](../architecture/backend-architecture.md)
