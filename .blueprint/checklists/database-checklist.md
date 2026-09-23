---
id: database-checklist
title: Database Review Checklist
owner: database-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [backend-architect, devops-engineer]
last_updated: 2026-07-28
tags: [checklist, database]
---

# Database Review Checklist

## Purpose

Validates database design and implementation quality.

## Schema

- [ ] Naming conventions followed
- [ ] Foreign keys defined
- [ ] Data types correct
- [ ] NOT NULL constraints applied
- [ ] Defaults appropriate
- [ ] No duplicate columns

## Indexes

- [ ] Query patterns indexed
- [ ] No redundant indexes
- [ ] Composite indexes ordered correctly
- [ ] No unused indexes

## Migrations

- [ ] Migrations backward compatible
- [ ] Rollback migration defined
- [ ] Tested on staging
- [ ] No data loss risk
- [ ] Performance impact assessed

## Integrity

- [ ] Constraints enforced
- [ ] Referential integrity
- [ ] Unique constraints where needed
- [ ] No orphan records

## Performance

- [ ] No N+1 queries
- [ ] Queries optimized
- [ ] Large tables partitioned
- [ ] Pagination used
- [ ] EXPLAIN plan reviewed

## Backup

- [ ] Backup strategy defined
- [ ] Recovery tested
- [ ] Retention policy defined

## Security

- [ ] Least privilege access
- [ ] No secrets in schema
- [ ] Sensitive data encrypted
- [ ] PII handled per policy

## Related

- [Database Architecture](../core/architecture/database-architecture.md)
- [Backend Checklist](./backend-checklist.md)
