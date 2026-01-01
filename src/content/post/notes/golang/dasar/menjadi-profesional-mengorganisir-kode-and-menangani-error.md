---
title: 'Menjadi Profesional: Mengorganisir Kode & Menangani Error - Becoming Gopher'
description: "Saatnya naik kelas! Pelajari cara menata proyek dengan package, mengontrol visibilitas, dan menangani error secara elegan dan idiomatis di Go."
date: 10 August 2025
tags: ["tech", "golang"]
---

Selamat datang kembali di petualangan **Becoming Gopher**! Sejauh ini, kita sudah mengumpulkan semua 'alat' dan 'jurus sakti'—mulai dari `struct`, `interface`, hingga menaklukkan `pointer`. Kita sudah bisa membangun fitur-fitur yang kompleks.

Tapi, membangun fitur saja tidak cukup. Seorang Gopher profesional tidak hanya menulis kode yang *berjalan*, tapi juga kode yang **bersih**, **terorganisir**, dan **tangguh** saat menghadapi masalah. Inilah yang membedakan proyek main-main dengan aplikasi kelas produksi.

Di babak ini, kita akan fokus pada dua pilar profesionalisme dalam Go:

1.  **Mengorganisir Kode:** Bagaimana cara menata file kita ke dalam `package` yang rapi, mengontrol apa yang bisa diakses dari luar dengan *access modifier*, dan menjaga kode tetap konsisten.
2.  **Menangani Error:** Bagaimana cara Go menangani kesalahan dengan elegan? Kita akan belajar cara membuat, mengembalikan, dan memeriksa *error* secara idiomatis, termasuk membuat tipe *error* kita sendiri.

Ini adalah langkah kita untuk naik kelas. Siap untuk mulai berpikir seperti seorang *software engineer*? Mari kita tata proyek kita!

## Mengorganisir Kode Seperti Profesional

Seiring proyek kita tumbuh, menaruh semua file dalam satu folder akan menjadi mimpi buruk. Go menyediakan sistem `package` untuk menjaga semuanya tetap rapi.

### `gofmt` - Polisi Gaya Otomatis
Sebelum kita menata file, mari kita tata dulu kode di dalamnya. Go punya filosofi kuat tentang konsistensi. `gofmt` adalah alat bawaan yang secara otomatis memformat kodemu sesuai standar resmi.

```bash
# Memformat semua file .go di folder saat ini dan subfoldernya
go fmt ./...
```

### Komentar - Menulis Catatan pada Kode

Setelah menjaga kode tetap rapi dengan `gofmt`, alat selanjutnya untuk profesionalisme adalah **komentar**. Komentar adalah teks di dalam kode yang akan diabaikan oleh compiler, tujuannya murni untuk dibaca oleh manusia.

Ada sebuah pepatah terkenal: *"Komentar terbaik adalah kode yang tidak butuh komentar."* Artinya, kita harus berusaha menulis kode yang jelas. Namun, komentar tetap sangat berguna untuk:
-   Menjelaskan logika bisnis atau algoritma yang kompleks.
-   Memberi catatan `TODO` untuk pengembangan selanjutnya.
-   Menonaktifkan sementara baris kode saat *debugging*.

Go memiliki dua jenis komentar:

**1. Komentar Satu Baris (`//`)**
```go
// Menghitung total skor berdasarkan data yang ada
totalSkor := hitungSkor(data)
```

**2. Komentar Multi Baris (`/* ... */`)**
```go
/*
Fungsi ini adalah bagian dari proses autentikasi.
Ia akan menerima token, memvalidasinya ke server,
dan mengembalikan profil pengguna jika valid.
*/
func autentikasiPengguna(token string) {
    // ...
}
```

:::warning
**Praktik Buruk:** Hindari menulis komentar yang hanya mengulang apa yang sudah jelas dari kode. Ini hanya akan membuat kode terlihat ramai.

```go
// ini adalah contoh komentar yang buruk
i := 10 // mengisi variabel i dengan nilai 10
```
:::

Di dunia Go, ini bukan pilihan, tapi **keharusan**. `gofmt` mengakhiri semua perdebatan gaya penulisan dan membuat kode Go mudah dibaca oleh siapa saja.

### `Package` - Lemari Arsip untuk Kode
**Package** adalah cara Go mengelompokkan kode ke dalam unit-unit logis. Secara fisik, satu package adalah satu folder. Tujuannya adalah untuk memecah kode berdasarkan fungsinya (misal: `user`, `produk`, `pembayaran`).

Setiap program Go yang bisa dieksekusi harus punya `package main` dan `func main()` sebagai titik masuknya.

### `import` - Memanggil Bantuan dari Luar
Untuk menggunakan kode dari `package` lain (baik itu *standard library* seperti `fmt` atau package buatan kita sendiri), kita harus menggunakan `import`.

```go
// main.go
package main

// Mengimpor package lokal bernama 'mathutil'
import (
	"fmt"
	"namamodul/mathutil" // ganti 'namamodul' dengan nama di go.mod kalian
)

func main() {
    hasil := mathutil.Add(5, 3)
    fmt.Println(hasil)
}
```

*Struktur folder*
```plaintext
namamodul/
├── go.mod
├── main.go
└── mathutil/
    └── add.go 
```

## Manajemen Dependensi dengan Go Modules

Saat kita mulai menggunakan `import` untuk memanggil *package* dari luar (baik itu buatan sendiri maupun dari pihak ketiga), kita perlu alat untuk mengelola dependensi tersebut. Inilah fungsi utama dari Go Modules. Selain `go mod init` yang sudah kita bahas di awal, ada dua perintah lagi yang sangat penting.

### `go mod tidy`: Merapikan Dependensi

Bayangkan `go mod tidy` sebagai asisten pribadi yang merapikan daftar belanjaan kalian. Perintah ini akan:
1.  **Menambahkan** *package* yang kalian `import` di kode tapi belum tercatat di file `go.mod`.
2.  **Menghapus** *package* yang tercatat di `go.mod` tapi sudah tidak kalian `import` lagi di kode.

Ini adalah perintah yang wajib dijalankan setiap kali kalian selesai mengubah dependensi proyek kalian untuk memastikan file `go.mod` selalu sinkron dengan kode kalian.

```bash
# Jalankan di root direktori proyek
go mod tidy
```

### `go mod vendor`: Menyimpan Salinan Dependensi
Secara default, Go akan mengunduh dan menyimpan *package* dependensi di sebuah *cache* global di komputer kalian. Namun, terkadang kita ingin proyek kita benar-benar mandiri dan tidak bergantung pada koneksi internet atau *cache* global.

Di sinilah `go mod vendor` berperan. Perintah ini akan menyalin **semua kode dari *package* dependensi** kalian ke dalam sebuah folder baru bernama `vendor` di dalam direktori proyek kalian.

```bash
# Perintah ini akan membuat folder 'vendor'
go mod vendor
```

**Mengapa menggunakan `vendor`?**
- **Offline Builds**: Kalian bisa melakukan kompilasi proyek bahkan tanpa koneksi internet.
- **Reproducible Builds**: Menjamin bahwa versi dependensi yang digunakan akan selalu sama persis, karena kodenya tersimpan bersama proyek kalian.

Saat Go mendeteksi adanya folder `vendor`, ia akan otomatis menggunakan *package* dari sana saat kompilasi, bukan dari *cache* global.

### `Access Modifier` - Penjaga Pintu Public & Private
Di Go, tidak ada kata kunci `public` atau `private`. Aturannya sederhana dan jenius: **kapitalisasi nama**.
- Nama yang diawali **Huruf Besar** (`Add`, `Book`) bersifat **Exported** (publik) dan bisa diakses dari *package* lain.
- Nama yang diawali **huruf kecil** (`add`, `book`) bersifat **unexported** (privat) dan hanya bisa diakses dari dalam *package* yang sama.

```go title=user/user.go
package user

// Diekspor, bisa diakses dari luar
type User struct {
    Name string
    age  int // tidak diekspor
}

// Diekspor
func (u *User) GetAge() int {
    return u.age
}

// tidak diekspor
func (u *User) validate() {
    // ...
}
```

### `init()` - Ritual Persiapan Otomatis
Terkadang kita perlu menjalankan kode persiapan saat sebuah *package* pertama kali digunakan (misalnya, membuka koneksi database). Go menyediakan fungsi spesial `init()` untuk ini.

Fungsi `init()` akan **dijalankan otomatis sekali** oleh Go saat *package* diimpor, tanpa perlu kita panggil.

```go title=config/config.go
package config

import "fmt"

var APIKey string

func init() {
    fmt.Println("Paket config diinisialisasi...")
    // Logika untuk membaca file .env atau sejenisnya
    APIKey = "RAHASIA123" 
}
```

## Menangani Error dengan Elegan
Inilah salah satu filosofi Go yang paling membedakannya dari bahasa lain.

Di banyak bahasa, *error* adalah sebuah 'ledakan' (*exception*) yang menghentikan segalanya. Di Go, error adalah sebuah nilai biasa yang dikembalikan oleh fungsi, sama seperti `string` atau `int`. Pola umumnya adalah fungsi mengembalikan `(hasil, error)`.

### `error` - Kontrak Kesalahan Universal
Go memiliki *interface* bawaan yang sangat sederhana untuk ini:

```go
type error interface {
    Error() string
}
```

Setiap tipe yang memiliki method `Error() string` secara otomatis dianggap sebagai sebuah `error`.

### Cara Dasar Membuat dan Memeriksa Error
Pola paling umum adalah memeriksa apakah `error` yang dikembalikan bernilai `nil` (tidak ada error) atau tidak.

```go
import (
    "errors"
    "fmt"
    "strconv"
)

func ubahKeAngka(teks string) (int, error) {
    if teks == "" {
        // 1. Membuat error sederhana
        return 0, errors.New("teks tidak boleh kosong")
    }

    angka, err := strconv.Atoi(teks)
    if err != nil {
        // 2. Membungkus error yang ada dengan konteks tambahan
        return 0, fmt.Errorf("gagal mengubah teks '%s': %w", teks, err)
    }

    return angka, nil // Sukses, error bernilai nil
}

func main() {
    // Memanggil fungsi dan langsung memeriksa error-nya
    if hasil, err := ubahKeAngka("abc"); err != nil {
        fmt.Println("Terjadi kesalahan:", err)
    } else {
        fmt.Println("Berhasil:", hasil)
    }
}
```

:::note
Gunakan `errors.New()` untuk pesan error statis. Gunakan `fmt.Errorf()` dengan `%w` untuk membungkus (*wrap*) error yang sudah ada dengan konteks baru. Ini adalah praktik terbaik.
:::

### Studi Kasus: Error Kustom yang Informatif
Terkadang, pesan error `string` saja tidak cukup. Kita butuh `error` yang lebih terstruktur. Karena `error` adalah *interface*, kita bisa membuat struct kita sendiri untuk menjadi tipe `error` kustom.

Bayangkan kita punya fungsi `FindUser`. Ia bisa gagal karena dua alasan: input tidak valid (*validation error*) atau data tidak ada (*not found error*).

```go
package main

import (
	"errors"
	"fmt"
)

// 1. Sentinel Error: sebuah variabel error global untuk kasus spesifik.
var ErrNotFound = errors.New("data tidak ditemukan")

// 2. Custom Error Type: sebuah struct untuk error yang lebih detail.
type ValidationError struct {
	Field string
	Msg   string
}

// Agar ValidationError dianggap 'error', ia harus punya method Error()
func (e ValidationError) Error() string {
	return fmt.Sprintf("validasi gagal pada field '%s': %s", e.Field, e.Msg)
}

// Fungsi yang bisa mengembalikan berbagai jenis error
func FindUser(name string) (string, error) {
	if name == "" {
		return "", ValidationError{Field: "name", Msg: "tidak boleh kosong"}
	}
	if name == "Budi" {
		return "Budi Ditemukan", nil
	}
	return "", ErrNotFound // Kembalikan sentinel error
}

func main() {
	// Memeriksa jenis error yang kembali
	_, err := FindUser("")
	if err != nil {
		var vErr ValidationError
        // Gunakan errors.As untuk memeriksa apakah error-nya bertipe ValidationError
		if errors.As(err, &vErr) { 
			fmt.Printf("Error Validasi! Field: %s, Pesan: %s\n", vErr.Field, v.Msg)
		}
	}

	_, err = FindUser("Joko")
	if err != nil {
        // Gunakan errors.Is untuk memeriksa apakah error-nya adalah ErrNotFound
		if errors.Is(err, ErrNotFound) {
			fmt.Println("Error: Pengguna yang dicari memang tidak ada.")
		}
	}
}
```

Gunakan `errors.Is()` untuk membandingkan sebuah *error* dengan variabel *error* spesifik (sentinel). Gunakan `errors.As()` untuk memeriksa apakah sebuah *error* adalah tipe *struct* kustom tertentu dan mengekstrak nilainya.

## Petualangan Hari Ini Selesai!
Luar biasa! Kita sudah sampai di penghujung materi inti. Hari ini kita telah mengambil langkah besar dari sekadar *coder* menjadi *software engineer*. Kita tidak hanya menulis kode, tapi juga memikirkan cara menata dan membuatnya tangguh.

Singkatnya, kita sudah belajar:
- Cara menjaga kode tetap rapi dan terorganisir dengan `package`, `import`, dan `gofmt`.
- Filosofi *error handling* di Go sebagai nilai, bukan *exception*.
- Teknik menangani *error* secara profesional, mulai dari membuat *error* sederhana hingga tipe *error* kustom yang kaya informasi menggunakan `errors.Is` dan `errors.As`.

Dengan semua pengetahuan ini, ransel petualangan kita sudah penuh. Hanya ada satu hal yang tersisa: menggunakannya! Di postingan terakhir dari seri "Becoming Gopher" ini, kita akan merangkum semuanya dengan membangun proyek pertama kita dan melihat sekilas ke mana arah perjalanan kita selanjutnya.

<!-- Apa bagian paling menantang dari error handling menurutmu? Diskusikan di kolom komentar! -->