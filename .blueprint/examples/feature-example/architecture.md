---
id: example-feature-architecture
title: User Authentication - Architecture
owner: solution-architect
status: active
version: 1.0.0
depends_on: [system-architecture]
generates: [user-auth-feature]
reviewers: [security-engineer, backend-architect]
last_updated: 2026-07-28
tags: [example, feature, architecture]
---

# User Authentication - Architecture

## Overview

Stateless JWT authentication. Backend issues signed tokens; middleware validates them on protected routes.

## Components

### Backend

- AuthController - HTTP endpoints
- AuthService - registration, login, refresh logic
- UserRepository - user data access
- TokenService - JWT sign/verify
- AuthMiddleware - protected route guard

### Database

- `users` table: id, email (unique), password_hash, created_at, updated_at
- `refresh_tokens` table: id, user_id, token_hash, expires_at, revoked_at

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant AuthController
    participant AuthService
    participant UserRepo
    participant TokenService
    participant DB

    User->>AuthController: POST /auth/login
    AuthController->>AuthService: login(email, password)
    AuthService->>UserRepo: findByEmail(email)
    UserRepo->>DB: SELECT user
    DB-->>UserRepo: user
    UserRepo-->>AuthService: user
    AuthService->>TokenService: verifyPassword(password, hash)
    TokenService-->>AuthService: valid
    AuthService->>TokenService: generateTokens(user)
    TokenService-->>AuthService: access + refresh
    AuthService-->>AuthController: tokens
    AuthController-->>User: 200 + tokens
```

## State

```mermaid
stateDiagram-v2
    [*] --> Anonymous
    Anonymous --> Registered: POST /register (201)
    Registered --> Authenticated: POST /login (200)
    Authenticated --> Authenticated: POST /refresh
    Authenticated --> [*]: POST /logout
```

## Security

- bcrypt (cost 12) for passwords
- JWT access token: 15 min expiry
- JWT refresh token: 30 days, rotated
- HTTPS only, Secure + HttpOnly cookies option
- Brute force: 10 attempts / 15 min / IP lockout
- Rate limit: 10 req/min per IP on auth endpoints

## Performance

- Index on `users.email`
- Index on `refresh_tokens.user_id`
- Token verification stateless (no DB hit)

## Decisions

- ADR-002: JWT for stateless auth

## Related

- [README](./README.md)
- [PRD](./prd.md)
- [API](./api.md)
