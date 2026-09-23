---
id: accessibility-standards
title: Accessibility Standards
owner: frontend-architect
status: active
version: 1.0.0
depends_on: [coding-standards]
generates: [accessibility]
reviewers: [qa-engineer]
last_updated: 2026-07-28
tags: [standards, accessibility]
---

# Accessibility Standards

## Purpose

Defines mandatory accessibility standards (WCAG 2.1 AA).

## Core Requirements

- Conformance level: WCAG 2.1 AA
- Accessible on keyboard, screen reader, touch
- Test with automated tools + manual checks

## Semantic HTML

- Use native elements: `<button>`, `<a>`, `<nav>`, `<main>`, `<header>`
- Correct heading hierarchy (single h1 per page)
- Use `<label>` for all form inputs
- Use `<table>` for tabular data

## ARIA

- Use ARIA only when native HTML insufficient
- Never remove focusability from focusable elements
- Correct roles and states
- aria-label for icon-only buttons
- aria-live for dynamic updates

## Keyboard

- All functionality keyboard operable
- Visible focus indicator
- Logical focus order
- No keyboard traps
- Escape closes modals/popovers
- Skip navigation link

## Color & Contrast

- Text contrast ≥ 4.5:1 (AA)
- Large text ≥ 3:1
- No color-only information
- Focus indicators not color-only

## Images & Media

- Alt text for informative images
- Empty alt for decorative images
- Captions/transcripts for media
- No text in images

## Motion

- Respect prefers-reduced-motion
- No content flashing > 3x/second
- Animations can be paused

## Testing Requirements

- Automated scan (axe, Lighthouse) on every build
- Manual keyboard walkthrough
- Screen reader test (VoiceOver/NVDA)
- Contrast check on all text
- Mobile accessibility review

## Related

- [Accessibility Checklist](../../checklists/accessibility-checklist.md)
- [Frontend Architecture](../architecture/frontend-architecture.md)
