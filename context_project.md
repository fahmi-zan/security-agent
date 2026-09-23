# context_project.md

> Template ini adalah input utama untuk membangun **Security Secure System AI Agent**.
> Agent digunakan untuk security assessment, threat modeling, source-code analysis, security testing, remediation, verification, dan CI/CD security gate.
> Isi semua bagian yang diketahui. Bagian yang belum diketahui boleh dikosongkan — agent wajib melakukan discovery atau escalate, BUKAN mengarang.
> Jangan menghapus section. Kosongkan jika belum ditentukan.

---

## 1. Identitas Project

| Field | Isi |
|-------|-----|
| Nama Project | Security Secure System AI Agent |
| Deskripsi singkat | AI Agent untuk menganalisis, menguji, membangun, memperbaiki, dan memverifikasi keamanan software system secara evidence-driven. |
| Versi awal | 0.1.0 |
| Status | draft |
| Target rilis | |

## 2. Visi & Misi

**Visi**

Membangun Security Engineering AI Agent yang dapat digunakan lintas ecosystem project untuk menemukan, memvalidasi, memperbaiki, dan mencegah security vulnerability.

**Misi**

Membangun standalone security agent yang menggabungkan project discovery, threat modeling, static analysis, dependency analysis, secrets scanning, security playbooks, AI reasoning, remediation, regression testing, dan CI/CD security gate.

---

## 3. Business / Engineering Goals

| # | Goal | Ukuran sukses (metric) | Target |
|---|------|------------------------|--------|
| 1 | Security analysis lintas project | Project ecosystem yang dapat dianalisis | Architecture adapter-based |
| 2 | Detection vulnerability | Confirmed findings pada vulnerable fixtures | Regression-tested |
| 3 | Minimize false positive | False-positive rate pada benchmark | Terukur dan terus diturunkan |
| 4 | Evidence-driven findings | Finding memiliki evidence + attack path | 100% confirmed findings |
| 5 | Automated security gate | Critical/High finding terdeteksi di CI | CI dapat block pipeline |
| 6 | Remediation verification | Finding dapat di-retest | Verified / Reopened |

---

## 4. Target User

### Primary

| Persona | Deskripsi | Kebutuhan utama | Pain point |
|---------|-----------|-----------------|------------|
| Software Engineer | Developer yang membangun dan maintain application | Security feedback langsung dari codebase | Security review manual memakan waktu |
| Senior Engineer / Tech Lead | Engineer yang bertanggung jawab terhadap architecture dan quality | Threat model, security review, remediation | Sulit menjaga security consistency antar project |
| Security Engineer | Engineer yang melakukan security assessment | Evidence, attack path, reproducible findings | Banyak project dan ecosystem berbeda |

### Secondary

| Persona | Deskripsi |
|---------|-----------|
| DevOps / Platform Engineer | Membutuhkan CI/CD dan infrastructure security gate |
| Engineering Manager | Membutuhkan security posture dan actionable findings |
| QA Engineer | Membutuhkan security regression test |
| Project Owner | Membutuhkan security visibility tanpa harus membaca seluruh source code |

---

## 5. Core Capabilities & Prioritas

| # | Capability | Prioritas | Deskripsi singkat |
|---|------------|-----------|-------------------|
| 1 | Project Discovery | critical | Mendeteksi language, framework, database, auth, infrastructure, CI/CD, dependency, dan entry point |
| 2 | Security Context | critical | Membentuk normalized context yang digunakan seluruh analyzer |
| 3 | Threat Modeling | critical | Asset, trust boundary, attack surface, threat, dan attack path |
| 4 | Security Playbook Engine | critical | Memilih playbook berdasarkan technology/capability project |
| 5 | Static Security Analysis | critical | Source-code, AST, taint, dangerous sink, configuration analysis |
| 6 | Secrets Scanning | critical | Mendeteksi credentials, tokens, private keys, dan sensitive configuration |
| 7 | Dependency Security | high | Dependency vulnerability dan supply-chain risk |
| 8 | Authentication Audit | critical | Login, credential flow, session, token, refresh, logout, recovery |
| 9 | Authorization Audit | critical | RBAC, ABAC, ownership, BOLA/IDOR, privilege escalation |
| 10 | API Security | critical | Validation, authorization, rate limit, injection, SSRF, CORS, error leakage |
| 11 | Database Security | high | Permission, query, exposure, policy, privilege, data isolation |
| 12 | Framework-specific Security | high | Adapter untuk framework/language/database/auth provider |
| 13 | Infrastructure Security | high | Docker, Nginx, cloud, deployment, network, TLS |
| 14 | CI/CD Security | critical | Pipeline permission, secrets, artifacts, dependency, security gate |
| 15 | AI Security Reasoning | critical | Menganalisis evidence dan mengklasifikasikan finding |
| 16 | Remediation Generation | high | Menghasilkan fix berdasarkan root cause |
| 17 | Regression Test Generation | high | Menghasilkan test untuk mencegah vulnerability muncul kembali |
| 18 | Retest / Verification | critical | Memastikan remediation benar-benar memperbaiki finding |
| 19 | Security Reporting | high | JSON + Markdown report |
| 20 | CI Security Gate | critical | Block/warn/info berdasarkan severity dan confidence |

---

## 6. Entitas / Data Utama

| Entitas | Atribut utama | Relasi |
|---------|---------------|--------|
| Project | name, rootDir, ecosystem | memiliki SecurityContext |
| SecurityContext | languages, frameworks, databases, auth, infrastructure, CI | digunakan analyzer/playbook |
| Asset | type, name, sensitivity | bagian threat model |
| TrustBoundary | source, destination, controls | berhubungan dengan asset |
| AttackSurface | endpoint, entrypoint, interface | bagian threat model |
| SecurityPlaybook | id, name, supports, run | menghasilkan findings |
| SecurityFinding | id, severity, confidence, evidence, attackPath, remediation | berasal dari analyzer/playbook |
| Evidence | type, source, location, description | mendukung finding |
| SecurityTest | type, target, expectedResult | memverifikasi finding |
| Remediation | rootCause, fix, verification | terkait finding |
| SecurityReport | project, findings, posture, gateResult | output agent |
| Policy | severity, confidence, permissions | menentukan behavior agent |

---

## 7. Teknologi / Stack

| Layer | Pilihan | Alasan singkat |
|-------|---------|----------------|
| Runtime | Node.js 22+ | Cross-platform, ecosystem luas |
| Language | TypeScript | Type safety dan ecosystem JavaScript/Node.js |
| CLI | Commander.js | CLI command routing |
| Schema | Zod + JSON Schema | Runtime validation + machine-readable contract |
| Testing | Vitest | Fast TypeScript testing |
| Process execution | execa | Menjalankan external security tooling |
| File discovery | fast-glob | Repository scanning |
| Config | YAML | Human-readable policy/config |
| AI | LLM API | Security reasoning, evidence analysis, remediation |
| Static analysis | Semgrep + AST/TypeScript analysis | Code security detection |
| Secret scanning | Gitleaks | Credential/secret detection |
| Dependency scanning | npm audit / OSV Scanner / ecosystem-native scanner | Dependency vulnerability detection |
| Container scanning | Trivy | Container/image security |
| HTTP testing | Controlled HTTP runner | API/security verification |
| Backend target | Framework adapter | Mendukung ecosystem berbeda |
| Database target | Database adapter | Mendukung PostgreSQL, MySQL, MongoDB, dll. |
| CI/CD | GitLab CI + adapter platform lain | Security gate |
| Output | JSON + Markdown | Machine-readable + human-readable report |

> Teknologi scanner tidak boleh dianggap mandatory jika environment target tidak mendukungnya.
> Agent harus melakukan capability detection sebelum menjalankan tool.

---

## 8. Arsitektur

### 8.1 High-level

```text
                         SECURITY AGENT
                                |
                    PROJECT DISCOVERY
                                |
                       SECURITY CONTEXT
                                |
          +---------------------+---------------------+
          |                     |                     |
       SCANNERS             PLAYBOOKS              AI
          |                     |                     |
   +------+------+       +------+------+             |
   |      |      |       |      |      |             |
 Secrets Deps   SAST     Auth   API   DB             |
   |      |      |       |      |      |             |
   +------+------+-------+------+------+-------------+
                                |
                             EVIDENCE
                                |
                        SECURITY ENGINE
                                |
                         FINDING ENGINE
                                |
                +---------------+---------------+
                |                               |
          REMEDIATION                       CI GATE
                |                               |
             RETEST                       PASS/BLOCK
                |
             VERIFIED
```

### 8.2 Core principle

```text
Discovery
→ Evidence
→ Security Reasoning
→ Finding
→ Remediation
→ Verification
→ Regression
```

### 8.3 Architecture rule

Core agent harus universal.

Technology-specific logic harus berada pada:

```text
adapters/
playbooks/
scanners/
```

Bukan hardcoded di core engine.

### 8.4 Unknown technology

Jika technology tidak dikenal:

```text
Unknown Technology
→ Generic Security Analysis
→ Reduced capability
→ Reduced confidence jika evidence terbatas
→ Escalate jika diperlukan
```

Agent tidak boleh menganggap unknown technology sebagai secure.

---

## 9. Agent Roles

| Role | Orang/Agent | Tanggung jawab |
|------|-------------|----------------|
| Security Agent | AI Agent | Security discovery, analysis, testing, remediation, verification |
| Discovery Agent | Sub-agent/module | Technology dan architecture detection |
| Threat Modeling Agent | Sub-agent/module | Asset, trust boundary, threat, attack path |
| Code Security Analyzer | Tool/sub-agent | Static code analysis dan data flow |
| Security Testing Agent | Tool/sub-agent | Dynamic/security testing pada environment authorized |
| Remediation Agent | AI Agent | Fix recommendation dan patch generation |
| Verification Agent | AI Agent/tool | Retest dan regression verification |
| CI Security Gate | Automation | Block/warn/info pipeline |

---

## 10. Security Boundaries & Safety

| Jenis | Isi |
|-------|-----|
| Production | Tidak boleh melakukan destructive security testing |
| Staging | Target utama dynamic security testing |
| Local | Target development/testing |
| Ephemeral Environment | Preferred untuk aggressive testing |
| Credentials | Tidak boleh diekstrak atau ditampilkan |
| Secrets | Wajib redacted pada output |
| Unauthorized Target | Tidak boleh diuji |
| Persistence | Agent tidak boleh memasang persistence |
| Destructive Action | Blocked secara default |
| Production Modification | Memerlukan explicit authorization |

### Security testing rule

```text
Production
    X

Staging
    OK

Local
    OK

Ephemeral
    PREFERRED
```

---

## 11. Universal Security Domains

Agent wajib dapat menganalisis jika relevan:

```text
Authentication
Authorization
Session Management
Input Validation
Output Encoding
Injection
XSS
CSRF
SSRF
CORS
IDOR / BOLA
Privilege Escalation
File Upload
Path Traversal
Deserialization
Command Injection
SQL Injection
NoSQL Injection
Prototype Pollution
Open Redirect
Race Conditions
Business Logic Abuse
Rate Limiting
Secrets Management
Cryptography
Dependencies
API Security
Database Security
Storage Security
Infrastructure Security
CI/CD Security
Logging
Monitoring
Error Handling
```

---

## 12. Technology Adapters

### Languages

```text
TypeScript
JavaScript
Python
Go
Java
Kotlin
C#
PHP
Ruby
Rust
```

### Frontend

```text
React
Next.js
Vue
Nuxt
Angular
Svelte
SvelteKit
Vite
```

### Backend

```text
Node.js
Express
Fastify
NestJS
Django
FastAPI
Laravel
Spring
.NET
Go HTTP
```

### Database

```text
PostgreSQL
MySQL
MariaDB
MongoDB
Redis
DynamoDB
Supabase
Firebase
```

### Infrastructure

```text
Docker
Kubernetes
Nginx
AWS
GCP
Azure
Railway
Vercel
Cloudflare
```

### CI/CD

```text
GitLab CI
GitHub Actions
Jenkins
Other supported CI adapters
```

> Adapter hanya diaktifkan jika project discovery menemukan technology terkait.

---

## 13. Security Playbooks

```text
playbooks/
├── universal/
├── discovery/
├── threat-model/
├── authentication/
├── authorization/
├── session/
├── api/
├── frontend/
├── database/
├── supabase/
├── node/
├── dependency/
├── secrets/
├── file-upload/
├── crypto/
├── infrastructure/
├── docker/
├── ci-cd/
├── business-logic/
├── logging/
├── incident/
└── regression/
```

### Authentication checks

```text
Password policy
Password storage
Login rate limiting
Brute-force protection
Credential enumeration
MFA
Session creation
Session rotation
Session expiration
Logout invalidation
Refresh token rotation
Cookie attributes
CSRF protection
Token exposure
Password reset
Account recovery
Authentication bypass
```

### Authorization checks

```text
Object-level authorization
Function-level authorization
Role validation
Permission validation
Tenant isolation
Resource ownership
Horizontal privilege escalation
Vertical privilege escalation
Admin endpoint protection
API authorization
Background-job authorization
```

### API checks

```text
Authentication
Authorization
Input validation
Schema validation
Content-Type validation
HTTP method restrictions
Rate limiting
Pagination abuse
Mass assignment
IDOR/BOLA
SSRF
Injection
Error leakage
Sensitive response fields
CORS
Security headers
```

### Supabase checks

```text
RLS enabled
RLS policies
INSERT policy
SELECT policy
UPDATE policy
DELETE policy
Service role key exposure
anon role privileges
authenticated role privileges
Storage policies
Storage object ownership
Database functions
SECURITY DEFINER functions
search_path configuration
Exposed tables
Exposed views
Sensitive columns
```

---

## 14. Security Finding Schema

Every finding wajib memiliki:

```text
ID
Severity
Confidence
Category
Title
Affected Component
Location
Evidence
Attack Preconditions
Attack Path
Impact
Root Cause
Remediation
Verification
Regression Test
References
Status
```

### Severity

```text
CRITICAL
HIGH
MEDIUM
LOW
INFO
```

### Confidence

```text
CONFIRMED
LIKELY
POSSIBLE
```

### Evidence rule

```text
No Evidence
→ No Confirmed Finding
```

Jika data tidak mencukupi:

```text
Data tidak mencukupi untuk memverifikasi.
```

### Status

```text
OPEN
TRIAGED
CONFIRMED
REMEDIATION
RETEST
VERIFIED
FALSE_POSITIVE
REOPENED
```

---

## 15. Agent System Prompt Requirements

Agent system prompt wajib menetapkan:

```text
Evidence-first
No hallucinated vulnerability
No fabricated CVE
No fabricated exploit result
No fabricated CVSS
No assumption of framework behavior
No assumption of configuration
Server-side authorization is security boundary
Frontend restriction is not authorization
Protect credentials
Redact sensitive values
No destructive production action
Authorized targets only
Separate confirmed / likely / possible
Every confirmed finding requires verification
Every remediation requires regression test
```

### Analysis pipeline

```text
DISCOVER
→ ASSET INVENTORY
→ ATTACK SURFACE
→ TRUST BOUNDARIES
→ THREAT MODEL
→ STATIC ANALYSIS
→ DATA FLOW ANALYSIS
→ DYNAMIC TESTING
→ FINDINGS
→ REMEDIATION
→ VERIFICATION
→ REGRESSION TEST
```

---

## 16. Agent Tools

### Filesystem

```text
list_files
read_file
search_code
search_secret_patterns
diff_files
```

### Code Analysis

```text
parse_typescript
dependency_audit
static_analysis
taint_analysis
config_analysis
```

### Git

```text
git_diff
git_log
branch_diff
changed_files
```

### Runtime

```text
run_tests
run_linter
run_typecheck
run_build
```

### HTTP

```text
request
inspect_headers
inspect_cors
inspect_tls
```

### Security Testing

```text
fuzz_request
mutation_test
auth_test
authorization_test
injection_test
rate_limit_test
```

### Database

```text
schema_inspect
permission_inspect
policy_inspect
query_analysis
```

### Container

```text
dockerfile_scan
image_scan
runtime_config_scan
```

### CI

```text
pipeline_inspect
secret_scan
permission_scan
artifact_scan
```

---

## 17. Finding Evidence Flow

Agent wajib mengikuti:

```text
SOURCE
→ VALIDATION
→ NORMALIZATION
→ AUTHENTICATION
→ AUTHORIZATION
→ BUSINESS LOGIC
→ DATA ACCESS
→ EXTERNAL SINK
```

Tidak boleh berhenti hanya karena input validation ditemukan.

---

## 18. Remediation Flow

```text
Finding
    ↓
Root Cause
    ↓
Minimal Secure Fix
    ↓
Regression Test
    ↓
Run Test
    ↓
Security Retest
    ↓
Verified / Reopened
```

Remediation harus mempertahankan behavior aplikasi selama tidak bertentangan dengan security requirement.

---

## 19. CI/CD Security Gate

### Gate policy

```text
CONFIRMED CRITICAL → BLOCK
CONFIRMED HIGH     → BLOCK
CONFIRMED MEDIUM   → CONFIGURABLE
CONFIRMED LOW      → WARN
INFO               → INFO
```

Untuk:

```text
LIKELY HIGH
POSSIBLE HIGH
```

Agent dapat mengirim status:

```text
REVIEW
```

bukan otomatis mengklaim vulnerability confirmed.

### GitLab CI

```yaml
security:
  stage: security

  script:
    - npm ci
    - npx security-agent ci

  artifacts:
    when: always
    paths:
      - security-report.json
      - security-report.md
```

---

## 20. CLI

### Initialize

```bash
security-agent init
```

### Full audit

```bash
security-agent audit --full
```

### Default audit

```bash
security-agent audit
```

### Changed files

```bash
security-agent audit --changed
```

### Playbook

```bash
security-agent audit --playbook auth
security-agent audit --playbook authz
security-agent audit --playbook api
security-agent audit --playbook database
security-agent audit --playbook supabase
```

### Threat model

```bash
security-agent threat-model
```

### Retest

```bash
security-agent retest SEC-AUTHZ-001
```

### CI

```bash
security-agent ci
```

### JSON

```bash
security-agent audit --format json
```

---

## 21. Project Configuration

Generated:

```text
.security-agent/
├── config.yaml
├── policy.yaml
└── ignore.yaml
```

Example:

```yaml
project:
  name: my-app

environment:
  mode: staging

security:
  playbooks:
    - universal
    - web
    - api
    - auth
    - authz
    - database

  scanners:
    secrets: true
    dependencies: true
    static: true
    git: true

gate:
  critical: block
  high: block
  medium: warn
  low: info

paths:
  ignore:
    - node_modules
    - dist
    - coverage
```

---

## 22. Vulnerable Fixtures

Agent wajib memiliki security regression fixtures.

```text
tests/fixtures/
├── vulnerable-auth/
├── vulnerable-authz/
├── vulnerable-xss/
├── vulnerable-sqli/
├── vulnerable-ssrf/
├── vulnerable-upload/
├── vulnerable-secrets/
├── vulnerable-dependency/
└── vulnerable-business-logic/
```

Flow:

```text
Known Vulnerability
→ Agent Audit
→ Expected Finding
→ Compare
→ Regression Result
```

---

## 23. Agent Benchmark

Measure:

```text
Detection Rate
False Positive Rate
False Negative Rate
Evidence Quality
Attack Path Quality
Remediation Quality
Regression Detection
Verification Accuracy
```

Agent tidak boleh hanya dinilai berdasarkan jumlah vulnerability yang ditemukan.

---

## 24. Repository Structure

```text
security-agent/
├── src/
│   ├── cli/
│   ├── core/
│   ├── discovery/
│   ├── analyzers/
│   ├── playbooks/
│   ├── scanners/
│   ├── findings/
│   ├── reporters/
│   └── adapters/
│
├── prompts/
│   ├── system.md
│   ├── audit.md
│   ├── threat-model.md
│   └── remediation.md
│
├── schemas/
│   ├── finding.schema.json
│   ├── report.schema.json
│   └── asset.schema.json
│
├── policies/
│   ├── severity.yaml
│   ├── gate.yaml
│   └── permissions.yaml
│
├── tests/
│   ├── agent/
│   ├── playbooks/
│   ├── regression/
│   └── fixtures/
│
├── reports/
│   └── .gitkeep
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 25. Development Phases

### Phase 1 — Foundation

```text
Repository
CLI
Project Discovery
SecurityContext
Finding Schema
Playbook Engine
```

### Phase 2 — Static Security

```text
Secret Scanner
Dependency Scanner
Static Scanner
Git Diff Scanner
AI Reasoning
Report Generator
```

### Phase 3 — Security Controls

```text
Authentication
Authorization
API
Database
Supabase
Frontend
Infrastructure
CI/CD
```

### Phase 4 — Dynamic Security

```text
Staging HTTP Testing
Authenticated API Testing
Authorization Matrix
Fuzzing
Business Logic Testing
Race Condition Testing
```

### Phase 5 — Remediation

```text
Fix Generation
Regression Test Generation
Retest
Verification
```

### Phase 6 — CI/CD

```text
GitLab CI
Security Gate
PR/MR Reporting
Baseline
Security History
```

### Phase 7 — Cross-Ecosystem

```text
TypeScript
JavaScript
Python
Go
Java
C#
PHP
Ruby
Rust

React
Next.js
Vue
Angular
Svelte
Express
Fastify
NestJS
Django
FastAPI
Laravel
Spring
.NET

PostgreSQL
MySQL
MongoDB
Redis
DynamoDB
Supabase
Firebase
```

---

## 26. Definition of Done

Security Agent dianggap usable jika:

```text
[ ] Bisa discover project
[ ] Bisa membentuk SecurityContext
[ ] Bisa memilih playbook secara otomatis
[ ] Bisa menjalankan scanner
[ ] Bisa mengumpulkan evidence
[ ] Bisa menghasilkan structured finding
[ ] Bisa membedakan CONFIRMED / LIKELY / POSSIBLE
[ ] Tidak mengarang evidence
[ ] Bisa menghasilkan remediation
[ ] Bisa menghasilkan regression test
[ ] Bisa melakukan retest
[ ] Bisa menghasilkan JSON report
[ ] Bisa menghasilkan Markdown report
[ ] Bisa menjalankan CI gate
[ ] Bisa block CRITICAL
[ ] Bisa block HIGH
[ ] Memiliki vulnerable fixtures
[ ] Memiliki agent regression tests
[ ] Tidak melakukan destructive production testing
[ ] Mendukung unknown technology dengan generic analysis
```

---

## 27. Yang BELUM Diketahui

> Agent wajib melakukan discovery/escalation untuk bagian berikut. Jangan menebak.

- [ ] LLM provider/model yang digunakan
- [ ] Apakah agent berjalan local, cloud, atau hybrid
- [ ] Apakah agent membutuhkan autonomous tool execution
- [ ] Authentication untuk AI Agent
- [ ] Storage security findings
- [ ] Apakah menggunakan vector database
- [ ] Target platform CLI
- [ ] Target OS
- [ ] Target CI/CD selain GitLab
- [ ] Dynamic testing environment
- [ ] Staging environment provisioning
- [ ] Maximum repository size
- [ ] Maximum execution time
- [ ] Budget LLM/API
- [ ] Multi-user / team support
- [ ] RBAC untuk Security Agent
- [ ] Audit log requirement
- [ ] Data retention policy
- [ ] Compliance requirement
- [ ] Secret management provider
- [ ] Remote repository integration
- [ ] Pull Request / Merge Request integration
- [ ] Automatic code modification policy
- [ ] Automatic commit policy
- [ ] Automatic PR/MR policy
- [ ] Production access policy
- [ ] Approval workflow untuk remediation
- [ ] Supported programming languages final list
- [ ] Supported frameworks final list
- [ ] Supported databases final list
- [ ] Supported cloud/platform final list

---

## 28. Cara Pakai

1. Letakkan file ini di root repository Security Agent.
2. Agent membaca context ini sebagai project specification.
3. Agent melakukan discovery terhadap bagian yang belum diketahui.
4. Agent tidak mengarang nilai yang kosong.
5. Agent membuat architecture, schema, tools, playbooks, policies, tests, dan CI pipeline.
6. Implementasi dimulai dari Phase 1.
7. Setiap phase wajib memiliki automated tests.
8. Security Agent sendiri wajib diuji menggunakan vulnerable fixtures.
9. Setelah foundation stabil, aktifkan dynamic testing.
10. Setelah CI gate stabil, integrasikan ke project target.

### Initial orchestration

```text
Baca context_project.md.

Bangun Security Secure System AI Agent berdasarkan specification ini.

Mulai dari:

01. Project Discovery
02. SecurityContext
03. Finding Schema
04. Playbook Engine
05. Scanner Interface
06. AI Reasoning Interface
07. Security Report
08. CLI
09. Vulnerable Fixtures
10. CI Security Gate

Jangan mengarang requirement yang belum ditentukan.
Jika requirement diperlukan untuk melanjutkan implementation,
masukkan ke "Yang BELUM Diketahui" dan escalate.
```

### Validation

```bash
npm test
npm run typecheck
npm run build
npx security-agent audit --full
npx security-agent ci
```

---

## 29. Prinsip Utama Project

```text
Universal Core
+
Technology Adapters
+
Security Playbooks
+
Evidence-based Analysis
+
AI Reasoning
+
Automated Verification
+
Regression Testing
+
CI Security Gate
```

Target akhir:

```text
Developer
    ↓
Security Agent
    ↓
Discover
    ↓
Analyze
    ↓
Test
    ↓
Evidence
    ↓
Finding
    ↓
Remediation
    ↓
Regression Test
    ↓
Retest
    ↓
Verified
    ↓
CI PASS / BLOCK
```
