# SKILL: SECURITY AUDIT & REASONING

## OBJECTIVE
Menganalisis hasil dari scanner engine (seperti Semgrep/Gitleaks/Native) dan menyaring false positives.

## INPUT
1. Security Context (Language, Framework, Database)
2. Raw Findings (JSON array of vulnerabilities)

## INSTRUCTIONS
1. Evaluasi setiap finding yang diberikan oleh Scanner.
2. Periksa jalur eksekusi (Data Flow / Control Flow) jika evidence tersedia.
3. Tentukan apakah input dari pengguna bisa mencapai sink (titik rentan) tanpa sanitasi atau validasi.
4. Jika finding adalah *False Positive* (misal: variabel "password" yang ternyata cuma string biasa untuk UI), abaikan atau drop finding tersebut.
5. Jika finding Valid, lanjutkan ke pembuatan deskripsi root cause.

## OUTPUT FORMAT
Berikan analisis untuk setiap temuan valid dengan format:
- **Finding ID**: ...
- **Root Cause**: ...
- **Attack Path**: ...
- **Status**: [CONFIRMED / FALSE_POSITIVE]
