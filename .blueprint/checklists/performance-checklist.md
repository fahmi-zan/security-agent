---
id: performance-checklist
title: Performance Review Checklist
owner: devops-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [solution-architect]
last_updated: 2026-07-28
tags: [checklist, performance]
---

# Performance Review Checklist

## Purpose

Validates performance standards compliance.

## Frontend

- [ ] Lighthouse score ≥ 90
- [ ] Bundle size within limit
- [ ] Lazy loading implemented
- [ ] No render-blocking resources
- [ ] Images optimized
- [ ] FCP within target
- [ ] LCP within target
- [ ] CLS within target

## Backend

- [ ] API response < 500ms p95
- [ ] No N+1 queries
- [ ] Caching implemented
- [ ] DB queries indexed
- [ ] Async where appropriate
- [ ] Connection pooling

## Database

- [ ] Slow query review
- [ ] Index coverage
- [ ] Partitioning where needed
- [ ] No table scans on hot paths

## Load

- [ ] Load testing performed
- [ ] Throughput meets target
- [ ] Latency under load acceptable
- [ ] Auto-scaling configured
- [ ] No bottlenecks identified

## Resources

- [ ] CPU usage reasonable
- [ ] Memory usage reasonable
- [ ] No memory leaks
- [ ] No excessive I/O

## Related

- [Performance Standards](../core/standards/performance-standards.md)
- [Frontend Checklist](./frontend-checklist.md)
- [Backend Checklist](./backend-checklist.md)
