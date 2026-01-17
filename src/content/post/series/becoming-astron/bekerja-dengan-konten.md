---
title: "Becoming Astron #8 — Bekerja dengan Konten: Markdown dan Collections"
description: "Astro sangat mencintai konten. Di tulisan ini, kita bahas bagaimana Astro mengelola Markdown dan Content Collections untuk membuat website berbasis teks yang rapi."
date: 10 January 2026
tags: ["astro", "tech"]
---

Kalau kamu sedang membaca tulisan ini, besar kemungkinan kamu sedang melihat hasil dari sebuah file Markdown.

Astro bukan cuma framework yang "bisa" baca Markdown, tapi framework yang dirancang untuk **memuliakan** Markdown.

## Markdown: Warga Kelas Satu

Di banyak framework, menampilkan Markdown butuh library tambahan atau konfigurasi yang ribet. Di Astro, kamu cukup letakkan file `.md` di dalam folder `src/pages`, dan _booom!_—ia otomatis jadi halaman web.

Tapi, Astro punya cara yang lebih profesional untuk mengelola konten dalam jumlah banyak: **Content Collections**.

## Content Collections: Lemari Buku yang Rapi

Bayangkan kamu punya puluhan tulisan blog. Jika hanya diletakkan sembarangan, folder `src/pages` akan berantakan. Content Collections (di folder `src/content`) memungkinkan kita:

1. **Validasi Data**: Memastikan setiap tulisan punya judul, tanggal, dan tag yang benar.
2. **Keamanan Tipe (Type Safety)**: TypeScript akan memberitahumu jika kamu lupa mengisi deskripsi di salah satu tulisan.
3. **Performa**: Astro mengoptimalkan pengambilan data dari koleksi ini agar sangat cepat.

## MDX: Markdown dengan Superpower

Kadang, teks dan gambar saja tidak cukup. Kamu ingin memasukkan komponen interaktif (seperti grafik atau tombol) di tengah-tengah tulisan. Di sinilah **MDX** beraksi.

MDX memungkinkanmu menulis komponen React/Vue/Svelte langsung di dalam file Markdown:

```mdx title="src/content/blog/post-pertama.mdx"
# Judul Tulisan

Ini adalah teks biasa.

<InteractiveChart />

Keren, kan?
```

## Kenapa Ini Penting untuk Penulis?

Sebagai penulis atau developer yang ingin berbagi ilmu, kita ingin fokus pada **tulisan**, bukan pada bagaimana cara menampilkannya. Astro memberikan infrastruktur yang membuat proses menulis jadi menyenangkan.

Kamu fokus pada konten, Astro fokus pada bagaimana mengirimkan konten tersebut secepat mungkin ke pembaca.

:::tip
Gunakan Content Collections sejak awal project. Ini akan menyelamatkanmu dari kekacauan di masa depan saat tulisanmu sudah mencapai ratusan.
:::

Di tulisan penutup Bagian 1 ini, kita akan membahas hal yang sering dilupakan tapi krusial: SEO dan Performa.
