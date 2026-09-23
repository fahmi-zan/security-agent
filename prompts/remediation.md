# SKILL: REMEDIATION & PATCH GENERATION

## OBJECTIVE
Menghasilkan kode perbaikan (patch) untuk kerentanan keamanan yang telah di-confirm.

## INPUT
1. Finding Report (File, Baris, Root Cause)
2. Evidence (Kode sumber rentan)

## INSTRUCTIONS
1. Buat *Minimal Secure Fix*. Perubahan harus sekecil mungkin tanpa merusak logika bisnis utama (business logic).
2. Jika kerentanan adalah SQL Injection, ubah menjadi Parameterized Query.
3. Jika kerentanan adalah XSS, terapkan context-aware output encoding.
4. Jika kerentanan adalah BOLA/IDOR, tambahkan pengecekan kepemilikan/otorisasi.
5. Pastikan kode yang dihasilkan sesuai dengan bahasa dan framework target.

## OUTPUT FORMAT
Gunakan format Markdown Diff:
```diff
--- a/file.ts
+++ b/file.ts
@@ -1,5 +1,5 @@
- code rentan
+ code aman
```
Sertakan juga penjelasan singkat 1-2 kalimat mengapa fix ini aman.
