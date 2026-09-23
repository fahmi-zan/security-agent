---
id: compliance
title: Compliance
owner: security-engineer
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [release-manager]
last_updated: 2026-07-28
tags: [governance, compliance]
---

# Compliance

## Purpose

Defines compliance requirements and verification.

## Compliance Areas

### Security

- OWASP Top 10 compliance
- Dependency vulnerability scanning
- Secret scanning in CI
- Regular security review

### Data Protection

- PII handling policy
- Data retention policy
- Encryption requirements
- Data residency requirements

### Accessibility

- WCAG 2.1 AA compliance
- Automated + manual testing

### Licensing

- Dependency license review
- Open-source compliance
- Attribution requirements

### Accessibility (cont.)

See [Accessibility Standards](../core/standards/accessibility-standards.md)

## Compliance Checks

### Automated (CI)

- `npm audit` / dependency scan
- Secret scan
- License check
- Accessibility scan
- Security lint

### Manual (Review)

- Security review (pre-release)
- Architecture review (security section)
- Compliance sign-off (pre-release)

## Compliance Records

Every release records:
- Security review report
- Dependency audit results
- Compliance sign-off
- Exception/waiver documentation

## Non-Compliance Handling

1. Identify violation
2. Severity assessment
3. Immediate mitigation (if critical)
4. Root cause analysis
5. Corrective action
6. Prevention measure
7. Documentation

## Related

- [Security Standards](../core/standards/security-standards.md)
- [Security Checklist](../checklists/security-checklist.md)
- [Approval Matrix](./approval-matrix.md)
