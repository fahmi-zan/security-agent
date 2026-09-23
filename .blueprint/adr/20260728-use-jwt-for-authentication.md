---
id: adr-001
title: Use JWT for Stateless Authentication
owner: solution-architect
status: accepted
version: 1.0.0
depends_on: []
generates: []
reviewers: [security-engineer]
last_updated: 2026-07-28
tags: [adr, authentication]
date: 2026-07-28
deciders: [solution-architect, backend-architect, security-engineer]
consulted: [devops-engineer]
informed: [product-manager]
---

# ADR 001: Use JWT for Stateless Authentication

## Status

Accepted

## Context

The application requires authentication for API access. We evaluated session-based and token-based approaches. Requirements: stateless scaling, mobile client support, and minimal database load on token verification.

## Decision

Use JWT (JSON Web Tokens) for authentication. Access tokens with 15-minute expiry, refresh tokens with 30-day expiry and rotation.

## Consequences

### Positive

- Stateless token verification (no DB hit per request)
- Horizontal scaling without shared session store
- Mobile and web clients supported uniformly
- Standard RFC 7519, wide library support

### Negative

- Token revocation is hard (handled via short expiry + refresh rotation)
- Secret management critical (vault required)
- Token size adds request overhead

### Neutral

- Requires HTTPS always
- Refresh token storage needed in DB

## Alternatives Considered

### Alternative 1: Server-Side Sessions

**Pros:**
- Immediate revocation
- Simple revocation model

**Cons:**
- Session store required (Redis)
- Stateful, harder to scale
- More infra complexity

**Rejected because:** Requires stateful infrastructure and complicates scaling.

### Alternative 2: Opaque API Tokens

**Pros:**
- Simple
- Revocable via DB lookup

**Cons:**
- DB lookup per request
- No standard format

**Rejected because:** DB lookup per request conflicts with performance targets.

## References

- RFC 7519 (JWT)
- OWASP JWT best practices
- Related example: [User Auth feature](../examples/feature-example/README.md)

## Notes

Refresh token rotation implemented per security review finding. See [Security Standards](../core/standards/security-standards.md).
