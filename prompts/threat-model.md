# SKILL: THREAT MODELING

## OBJECTIVE
Membangun Threat Model awal (Asset, Trust Boundary, Attack Surface) berdasarkan hasil Discovery Engine.

## INPUT
- Security Context (Languages, Frameworks, DBs, Infra)

## INSTRUCTIONS
1. Identifikasi **Assets** (Misal: User Data, PII, Session Token, Database Records).
2. Identifikasi **Attack Surfaces** (Misal: REST API Endpoints, Server Actions, GraphQL Mutations, File Upload forms).
3. Identifikasi **Trust Boundaries** (Misal: Batas antara Internet publik dan Load Balancer, Batas antara API dan Database internal).

## OUTPUT FORMAT
Berikan format ringkas (Bullet points):
- **Assets**: ...
- **Attack Surfaces**: ...
- **Trust Boundaries**: ...
- **Top 3 Threats**: ...
