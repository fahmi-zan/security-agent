---
id: frontend-checklist
title: Frontend Review Checklist
owner: frontend-architect
status: active
version: 1.0.0
depends_on: []
generates: []
reviewers: [qa-engineer]
last_updated: 2026-07-28
tags: [checklist, frontend]
---

# Frontend Review Checklist

## Purpose

Validates frontend implementation quality.

## Structure

- [ ] Component structure logical
- [ ] Small focused components
- [ ] Props typed
- [ ] State management appropriate
- [ ] No prop drilling where avoidable

## Accessibility

- [ ] Semantic HTML used
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Focus management correct
- [ ] Color contrast meets WCAG AA
- [ ] Alt text on images

## Performance

- [ ] Lazy loading used
- [ ] No unnecessary re-renders
- [ ] Memoization applied appropriately
- [ ] Bundle size within limit
- [ ] Images optimized
- [ ] Lighthouse ≥ 90

## Error Handling

- [ ] Loading states present
- [ ] Error states present
- [ ] Empty states present
- [ ] API errors handled
- [ ] No unhandled promise rejections

## API Integration

- [ ] API client consistent
- [ ] No sensitive data in client
- [ ] Auth tokens handled securely
- [ ] Timeout handling

## Testing

- [ ] Component tests
- [ ] Interaction tests
- [ ] Accessibility tests
- [ ] E2E tests for critical flows

## Related

- [Testing Checklist](./testing-checklist.md)
- [Frontend Architecture](../core/architecture/frontend-architecture.md)
