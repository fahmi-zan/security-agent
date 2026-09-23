---
id: security-checklist
title: Security Review Checklist
owner: security-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [solution-architect, devops-engineer]
last_updated: 2026-07-28
tags: [checklist, security]
---

# Security Review Checklist

## Purpose

Validates security posture across all artifacts.

## Authentication

- [ ] Authentication mechanism defined
- [ ] Passwords hashed and salted
- [ ] Session management secure
- [ ] Token expiration and refresh handled
- [ ] MFA for privileged actions
- [ ] Brute force protection

## Authorization

- [ ] Least privilege applied
- [ ] RBAC defined
- [ ] Permission checks at all levels
- [ ] No missing endpoint authorization
- [ ] No default-allow config

## Input Validation

- [ ] All inputs validated
- [ ] SQL injection prevented
- [ ] XSS prevented
- [ ] CSRF protected
- [ ] File upload validated
- [ ] Request size limits

## Data Protection

- [ ] Encryption at rest
- [ ] Encryption in transit (TLS)
- [ ] Secrets not in code
- [ ] Secrets in vault
- [ ] PII handling compliant
- [ ] Data retention defined

## Dependencies

- [ ] No known vulnerabilities
- [ ] Dependencies audited
- [ ] Versions current
- [ ] Unused dependencies removed
- [ ] Licenses compliant

## OWASP Top 10

- [ ] A01 Broken Access Control
- [ ] A02 Cryptographic Failures
- [ ] A03 Injection
- [ ] A04 Insecure Design
- [ ] A05 Security Misconfiguration
- [ ] A06 Vulnerable Components
- [ ] A07 Identification/Auth Failures
- [ ] A08 Software/Data Integrity Failures
- [ ] A09 Logging/Monitoring Failures
- [ ] A10 SSRF

## Usage

Run before release and on any security-relevant change.

## Related

- [Security Review Standards](../reviews/security-review.md)
- [Security Standards](../core/standards/security-standards.md)
