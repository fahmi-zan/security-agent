# Panduan Penggunaan Security Agent

Security Secure System AI Agent dirancang sebagai CLI tool yang dapat dijalankan secara lokal oleh developer atau diintegrasikan secara otomatis di dalam pipeline CI/CD.

## Instalasi

Pastikan menggunakan Node.js 22+.

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build
```

Untuk development, Anda bisa langsung menggunakan `npm run dev <command>` yang menjalankan source file via `tsx`.
Jika sudah di-build, Anda bisa menggunakan `npm start <command>` atau menautkan bin binary.

## Environment Variables

| Variable | Fungsi | Wajib |
|---|---|---|
| `OPENAI_API_KEY` | Digunakan oleh AI Engine untuk memproses finding dan merumuskan patch (remediation). | Opsional (Jika kosong, AI akan di-skip) |

## CLI Commands

### 1. Security Audit
Menjalankan audit penuh melalui 7 tahapan pipeline (Discovery, Threat Model, Playbook, Scanners, AI Engine, Reporting, CI Gate).

```bash
# Audit direktori saat ini
npm run dev audit

# Audit direktori spesifik
npm run dev audit /path/to/project
```

### 2. Retest & Verification
Memverifikasi ulang apakah sebuah kerentanan telah diperbaiki. Engine akan membaca laporan sebelumnya dan melakukan scan ulang khusus pada file yang terdampak.

```bash
# Format
npm run dev retest <FINDING_ID>

# Contoh (ID dari laporan sebelumnya)
npm run dev retest SEC-AWS-KEY
```

### 3. Init (Draft)
Menginisialisasi policy file dasar (seperti `.security-agent/config.yaml`).

```bash
npm run dev init
```

## Hasil (Outputs)

Setelah audit selesai, Agent menghasilkan direktori `reports/` dengan file berikut:

1. **`security-report.json`**: Laporan terstruktur untuk dibaca mesin / downstream parser.
2. **`security-report.md`**: Laporan human-readable yang berisikan temuan scanner dan patch/diff yang dihasilkan oleh AI Engine.

## Integrasi CI/CD

Agent mengeluarkan Exit Code `1` jika menemukan kerentanan `CRITICAL` atau `HIGH`. Hal ini otomatis akan memblokir (fail) pipeline CI Anda.

### Contoh GitLab CI (`.gitlab-ci.yml`)

```yaml
security_audit:
  stage: test
  image: node:22
  script:
    - npm ci
    - npm run build
    - npm start audit .
  artifacts:
    when: always
    paths:
      - reports/security-report.md
      - reports/security-report.json
```

### Contoh GitHub Actions (`.github/workflows/security.yml`)

```yaml
name: Security Agent Audit
on: [push, pull_request]

jobs:
  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
      - run: npm ci
      - run: npm run build
      - env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: npm start audit .
      - name: Upload Artifacts
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: security-report
          path: reports/
```
