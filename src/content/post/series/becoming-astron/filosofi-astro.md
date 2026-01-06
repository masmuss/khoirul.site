---
title: "Becoming Astron #2 — Filosofi Astro: Mengirim Lebih Sedikit"
description: "Astro mengajarkan satu hal sederhana: kirimkan hanya yang dibutuhkan. Di tulisan ini, kita membahas filosofi di balik Astro dan bagaimana ia mengubah cara kita memandang web modern."
date: 4 January 2026
tags: ["astro", "tech"]
---

Jika di bagian pertama kita berkenalan dengan Astro, maka di sini kita mulai memahami cara berpikirnya. Karena Astro bukan hanya soal tools, tapi soal sikap terhadap web modern.

Astro lahir dari satu kesadaran penting: **tidak semua website adalah aplikasi**.

Dan karena itu, tidak semua website perlu diperlakukan seperti aplikasi.

## Masalah yang Sering Kita Anggap Normal

Dalam beberapa tahun terakhir, ada satu kebiasaan yang pelan-pelan kita terima sebagai standar:

- Semua halaman dirender sebagai JavaScript
- Semua komponen di-hydrate
- Semua interaksi dianggap wajib ada

Padahal, sebagian besar website:

- Dibuka untuk dibaca
- Di-scroll
- Ditutup

Astro melihat ini dan bertanya: _“Kenapa kita mengirim begitu banyak JavaScript untuk hal sesederhana itu?”_

## Filosofi Utama Astro

Astro tidak memperkenalkan konsep yang benar-benar baru. Ia hanya **menggabungkan kembali hal-hal lama yang sebenarnya bekerja dengan baik**.

### Content First

Astro menganggap **konten sebagai pusat**, bukan state atau interaksi.

Artinya:

- HTML dihasilkan di build time
- Browser langsung menerima konten
- Tidak perlu menunggu JavaScript untuk melihat isi halaman

Ini berdampak besar pada:

- Performa
- SEO
- Aksesibilitas

### Ship Less JavaScript

Astro bukan anti JavaScript. Astro hanya **tidak mau mengirim JavaScript yang tidak diperlukan**.

Secara default:

- Tidak ada JavaScript yang dikirim ke client
- Komponen hanya jadi HTML
- Interaksi bersifat opt-in

JavaScript hadir **ketika kamu memintanya**, bukan karena framework memaksanya.

### HTML Sebagai Fondasi, Bukan Hasil Samping

Di banyak framework modern, HTML sering terasa seperti _byproduct_ dari JavaScript.

Di Astro, HTML adalah:

- Output utama
- Bukan sesuatu yang “dihasilkan belakangan”
- Bukan sesuatu yang harus “dihydrate” agar hidup

Browser sudah sangat baik membaca HTML. Astro memilih untuk mempercayai browser lagi.

### Framework Agnostic

Astro tidak memaksa kamu memilih satu ekosistem.

Kamu bisa:

- Pakai React untuk komponen tertentu
- Pakai Svelte di bagian lain
- Tetap menulis HTML biasa

Astro **tidak peduli kamu pakai apa**, selama hasil akhirnya ringan dan masuk akal.

## Filosofi Ini Mengubah Cara Kita Membuat Website

Dengan Astro, kita mulai bertanya:

- Apakah bagian ini benar-benar butuh interaksi?
- Apakah ini perlu JavaScript?
- Atau cukup HTML dan CSS saja?

Pertanyaan-pertanyaan ini terdengar sepele, tapi jarang kita tanyakan selama ini.

Astro tidak membuat website lebih canggih. Ia membuat kita lebih sadar.

## Astro Tidak Berusaha Menjadi Segalanya

Dan ini yang menarik.

Astro:

- Tidak ingin menggantikan Next.js
- Tidak ingin menjadi SPA framework
- Tidak memaksa semua orang pindah

## Mental Model: Astro vs Framework Lain

Untuk memudahkan, bayangkan perbedaan cara berpikirnya seperti ini:

- **Framework JS Lain**: "Ini adalah aplikasi. Bagaimana cara membuatnya cepat?"
- **Astro**: "Ini adalah konten. Bagaimana cara menambahkan interaksi tanpa merusak kecepatannya?"

Filosofi Astro bukan tentang menolak modern web. Ia tentang menggunakannya dengan proporsi yang tepat.

Kita tidak sedang kembali ke masa lalu. Kita sedang memilih jalan yang lebih ringan.

Di bagian selanjutnya, kita akan mulai membandingkan Astro dengan framework JavaScript lain—bukan untuk mencari mana yang paling hebat, tapi **kapan Astro masuk akal, dan kapan tidak**.
