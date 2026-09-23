---
id: accessibility-checklist
title: Accessibility Review Checklist
owner: frontend-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [qa-engineer]
last_updated: 2026-07-28
tags: [checklist, accessibility]
---

# Accessibility Review Checklist

## Purpose

Validates WCAG 2.1 AA accessibility compliance.

## Perceivable

- [ ] Text alternatives for images
- [ ] Captions for media
- [ ] Color contrast ≥ 4.5:1 (text)
- [ ] No color-only information
- [ ] Text resizable without loss

## Operable

- [ ] Full keyboard navigation
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] No keyboard traps
- [ ] Skip navigation links
- [ ] No flashing content

## Understandable

- [ ] Page language defined
- [ ] Consistent navigation
- [ ] Error messages descriptive
- [ ] Input labels present
- [ ] Help and instructions available

## Robust

- [ ] Valid HTML
- [ ] ARIA used correctly
- [ ] No duplicate IDs
- [ ] Landmarks used
- [ ] Screen reader tested

## Components

- [ ] Modals accessible
- [ ] Dropdowns accessible
- [ ] Forms accessible
- [ ] Carousels accessible
- [ ] Tables accessible

## Testing

- [ ] Automated accessibility scan
- [ ] Manual keyboard testing
- [ ] Screen reader testing
- [ ] Mobile accessibility tested

## Related

- [Accessibility Standards](../core/standards/accessibility-standards.md)
- [Frontend Checklist](./frontend-checklist.md)
