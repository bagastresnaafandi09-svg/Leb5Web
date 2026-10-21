# Lab5Web — Praktikum JavaScript Dasar

## Tujuan
Mempraktikkan output JavaScript, `alert()` dan `prompt()`, function, operasi aritmetika, percabangan `if–else` dan `switch`, manipulasi DOM, event listener, validasi input, checkbox, perulangan, serta kalkulator nilai mahasiswa.

## Isi folder
- `index.html` — antarmuka semua latihan.
- `style.css` — tampilan halaman.
- `script.js` — program JavaScript untuk latihan dan mini project.
- `screenshots/` — tempat menyimpan screenshot hasil pengerjaan.

## Cara menjalankan
1. Ekstrak folder `Lab5Web`.
2. Buka folder tersebut di Visual Studio Code.
3. Buka `index.html` di browser (klik dua kali file, atau gunakan ekstensi Live Server).
4. Tekan tombol pada setiap bagian untuk mencoba latihan.
5. Untuk melihat pesan `console.log()`, buka Developer Tools dengan `F12`, lalu pilih tab **Console**.

## Hasil setiap latihan
1. **Menampilkan output:** tombol menampilkan `Hello World` di halaman dan Console.
2. **Alert dan prompt:** pengguna diminta memasukkan nama; nama kosong atau Cancel menghasilkan peringatan.
3. **Operasi aritmetika:** menghitung penjumlahan, pengurangan, perkalian, pembagian, dan modulus dari dua bilangan. Pembagian dengan nol ditangani.
4. **if–else:** nilai 60–100 dinyatakan lulus, nilai di bawah 60 belum lulus, input di luar rentang ditolak.
5. **switch:** angka 1–5 diterjemahkan menjadi nama bilangan.
6. **Genap atau ganjil:** menerima bilangan bulat positif, negatif, atau nol; input kosong/desimal ditolak.
7. **Warna halaman:** tombol mengubah latar menjadi hijau muda, putih, atau kuning muda.
8. **Checkbox menu:** total harga dihitung otomatis; tersedia lima pilihan menu.
9. **Mini project kalkulator nilai:** nilai akhir = tugas × 30% + UTS × 30% + UAS × 40%; predikat A/B/C/D/E dan status kelulusan ditampilkan pada halaman.
10. **Eksperimen prompt:** meminta dua angka dan menampilkan operasi di Console.
11. **Perulangan:** menampilkan tabel perkalian 7 dari 1 sampai 10.
12. **Function `cekGenap()`:** mengembalikan `true` untuk bilangan genap dan `false` untuk ganjil atau input yang bukan bilangan bulat.
13. **Validasi form:** nama tidak boleh kosong dan nilai harus 0–100.
14. **Toggle elemen:** tombol menyembunyikan atau menampilkan teks.

## Skenario pengujian mini project
Coba setidaknya tiga skenario berikut:
- Tugas 85, UTS 78, UAS 88 → nilai akhir 84,10; predikat B; Lulus.
- Tugas 60, UTS 60, UAS 60 → nilai akhir 60,00; predikat C; Lulus.
- Tugas 40, UTS 45, UAS 50 → nilai akhir 45,50; predikat E; Belum lulus.
- Uji juga input kosong, nilai negatif, dan nilai lebih dari 100; program harus menolak input tidak valid.

## Perbedaan output yang diamati
- `console.log()` menampilkan informasi di Console developer tools.
- `alert()` menampilkan kotak pesan.
- `prompt()` menampilkan kotak untuk meminta input pengguna.
- `textContent` mengubah teks elemen HTML yang terlihat di halaman.

## Pertanyaan dan jawaban

### 1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`
- `console.log()` menampilkan informasi di Console dan biasanya dipakai untuk debugging.
- `alert()` menampilkan pesan dalam kotak dialog.
- `prompt()` menampilkan kotak dialog yang meminta input dan mengembalikan string atau `null` jika Cancel ditekan.
- `textContent` mengubah atau membaca teks biasa pada elemen.
- `innerHTML` membaca atau mengubah isi HTML elemen. Jangan memasukkan teks dari pengguna ke `innerHTML` tanpa sanitasi karena dapat menimbulkan risiko injeksi HTML.

### 2. Perbedaan `let` dan `const`
`let` digunakan untuk variabel yang nilainya dapat diubah. `const` digunakan untuk variabel yang tidak dapat ditugaskan ulang.
```js
let umur = 19;
umur = 20;

const nama = "Bagas";
// nama = "Budi"; // Error karena const tidak dapat ditugaskan ulang
```

### 3. Perbedaan `==` dan `===`
`==` membandingkan nilai dengan kemungkinan konversi tipe, sedangkan `===` membandingkan nilai dan tipe tanpa konversi.
```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```
Umumnya gunakan `===` agar perbandingan lebih jelas.

### 4. Fungsi `if–else` dan `switch`
`if–else` memilih tindakan berdasarkan kondisi seperti rentang nilai atau gabungan logika. `switch` cocok untuk membandingkan satu nilai dengan beberapa pilihan tetap, misalnya angka 1 sampai 5.

### 5. Fungsi parameter dan `return`
Parameter adalah nama variabel yang menerima data ketika function dipanggil. `return` mengirimkan hasil dari function kepada pemanggil.
```js
function tambah(a, b) {
  return a + b;
}
console.log(tambah(2, 3)); // 5
```

### 6. Fungsi `document.getElementById()`
Method ini mencari elemen HTML berdasarkan atribut `id` dan mengembalikan elemen tersebut. Jika tidak ada elemen dengan ID itu, hasilnya `null`.
```js
const pesan = document.getElementById("pesan");
pesan.textContent = "Halo";
```

### 7. Script validasi nama dan nilai
Contoh validasi tersedia pada bagian Eksperimen Mandiri di `index.html` dan `script.js`. Nama wajib diisi, sedangkan nilai harus berupa angka dari 0 sampai 100.

## Screenshot
Simpan screenshot setiap latihan di folder `screenshots/`. Pastikan screenshot memperlihatkan hasil di browser; untuk latihan yang menggunakan `console.log()`, sertakan juga tab Console. Tambahkan gambar ke README bila diperlukan, misalnya:
```md
![Latihan 1](screenshots/latihan-1.png)
```

## Pengumpulan melalui GitHub
1. Buat repository GitHub bernama `Lab5Web`.
2. Unggah seluruh file dan folder proyek.
3. Commit perubahan.
4. Salin URL repository dan kirim melalui e-learning/ecampus sesuai instruksi dosen.
