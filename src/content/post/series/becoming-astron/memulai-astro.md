---
title: "Becoming Astron #5 — Memulai Project Astro Pertama"
description: "Memulai project Astro terasa lebih sederhana dari yang dibayangkan. Tidak banyak konfigurasi, tidak banyak asumsi—cukup mulai, lalu berkembang pelan-pelan."
date: 7 January 2026
tags: ["astro", "tech"]
---

Kalau sejauh ini kita sudah banyak bicara soal _kenapa_ dan _bagaimana cara berpikir Astro_, sekarang saatnya melakukan hal yang paling sederhana: **memulai project-nya**.

Tenang, ini bukan tulisan yang akan melemparmu ke banyak konfigurasi. Anggap saja seperti pertama kali masuk rumah baru—kita lihat-lihat dulu isinya, bukan langsung renovasi.

## Membuat Project Astro Itu Seperti Mengisi Formulir Singkat

Untuk memulai Astro, kamu tidak perlu:

- setup manual
- install belasan dependency
- mikir struktur dari nol

Cukup jalankan satu perintah ini di terminalmu:

```bash title="Terminal"
npm create astro@latest
```

Astro akan menanyakan beberapa hal dasar, kurang lebih seperti:

- mau rumah tipe apa?
- mau pakai furnitur atau kosong dulu?
- mau langsung ditempati atau pelan-pelan?

Astro membiarkan kamu memilih, bukan memaksa.

## Struktur Folder: Kecil, Tapi Jelas

Setelah project dibuat, hal pertama yang terasa adalah: **folder-nya tidak ramai**.

Beberapa yang paling penting:

- `src/pages` → tempat halaman web
- `src/components` → potongan kecil yang bisa dipakai ulang
- `src/layouts` → kerangka halaman
- `public` → file statis

Tidak ada folder aneh-aneh.
Tidak ada rasa “ini buat apa ya?”

Strukturnya seperti lemari yang diberi label dengan benar.

## Pages di Astro: File = Halaman

Di Astro, satu file di src/pages sama dengan satu halaman.

Ini seperti:

- satu dokumen Word = satu surat
- satu file = satu URL

Kamu tidak perlu:

- konfigurasi routing
- mapping manual
- mikir alur rumit

Selama filenya ada, halamannya hidup.

## File `.astro`: HTML dengan Sedikit Superpower

File `.astro` mungkin terlihat baru, tapi isinya sangat familiar.

Isinya:

- HTML
- CSS
- dan sedikit JavaScript di bagian atas

Tidak ada JSX yang ramai. Tidak ada syntax yang terasa “terlalu framework”.

Rasanya seperti menulis HTML biasa, tapi dengan kenyamanan ekstra.

## Tidak Perlu Langsung Paham Semuanya

Ini bagian penting yang sering dilupakan.

Di Astro:

- kamu tidak harus paham Island Architecture dulu
- tidak harus tahu hydration di awal
- tidak harus mikir optimasi dari hari pertama

Kamu bisa:

- buat halaman
- lihat hasilnya
- lanjutkan pelan-pelan

Astro tidak menghukum pemula karena “belum optimal”.

## Rasanya Seperti Kembali ke Dasar (Dengan Cara yang Baik)

Memulai project Astro itu terasa seperti:

- kembali menulis HTML
- tapi tanpa merasa ketinggalan zaman
- tanpa merasa “kurang modern”

Segalanya terasa lebih tenang. Lebih fokus ke isi, bukan setup.

Postingan ini bukan tentang _cara paling benar_ memulai Astro.
Ini tentang menunjukkan bahwa **memulai Astro itu tidak menakutkan**.

Kalau kamu bisa menulis HTML, kamu sudah punya bekal besar.

Di tulisan berikutnya, kita akan mulai membahas **Island Architecture secara lebih praktis**—bukan teorinya, tapi kapan kamu benar-benar membutuhkannya, dan kapan tidak.

Karena tidak semua halaman perlu jadi “hidup”.
