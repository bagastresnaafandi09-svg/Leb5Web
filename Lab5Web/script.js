// Lab5Web — Praktikum JavaScript Dasar
"use strict";

// LATIHAN 1 — Menampilkan output di halaman dan Console
document.getElementById("btnHello").addEventListener("click", function () {
  document.getElementById("pesan").textContent = "Hello World";
  console.log("Hello World");
});

// LATIHAN 2 — Alert dan prompt
document.getElementById("btnNama").addEventListener("click", function () {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
});

// LATIHAN 3 — Function dan operasi aritmetika
function operasiDasar(a, b) {
  return {
    penjumlahan: a + b,
    pengurangan: a - b,
    perkalian: a * b,
    pembagian: b !== 0 ? a / b : "Tidak dapat dibagi nol",
    modulus: b !== 0 ? a % b : "Tidak dapat menghitung sisa bagi dengan nol"
  };
}
document.getElementById("btnOperasi").addEventListener("click", function () {
  const inputA = document.getElementById("angkaA").value;
  const inputB = document.getElementById("angkaB").value;
  const hasil = document.getElementById("hasilOperasi");
  if (inputA.trim() === "" || inputB.trim() === "") {
    hasil.textContent = "Kedua bilangan wajib diisi.";
    return;
  }
  const a = Number(inputA);
  const b = Number(inputB);
  const data = operasiDasar(a, b);
  hasil.textContent = `Penjumlahan: ${data.penjumlahan}
Pengurangan: ${data.pengurangan}
Perkalian: ${data.perkalian}
Pembagian: ${data.pembagian}
Modulus: ${data.modulus}`;
  console.log("Hasil operasi:", data);
});

// LATIHAN 4 — Seleksi kondisi if–else
document.getElementById("btnNilai").addEventListener("click", function () {
  const inputNilai = document.getElementById("nilaiIf").value;
  const nilaiMahasiswa = Number(inputNilai);
  const hasil = document.getElementById("hasilNilai");
  if (inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    hasil.textContent = "Input nilai tidak valid. Masukkan nilai 0–100.";
  } else if (nilaiMahasiswa >= 60) {
    hasil.textContent = "Lulus";
  } else {
    hasil.textContent = "Belum lulus";
  }
});

// LATIHAN 5 — Seleksi kondisi switch
document.getElementById("btnSwitch").addEventListener("click", function () {
  const inputPilihan = document.getElementById("pilihanSwitch").value;
  let pesan;
  switch (inputPilihan) {
    case "1": pesan = "Bilangan satu"; break;
    case "2": pesan = "Bilangan dua"; break;
    case "3": pesan = "Bilangan tiga"; break;
    case "4": pesan = "Bilangan empat"; break;
    case "5": pesan = "Bilangan lima"; break;
    default: pesan = "Pilihan tidak tersedia";
  }
  document.getElementById("hasilSwitch").textContent = pesan;
});

// LATIHAN 6 — Memeriksa bilangan genap atau ganjil
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
document.getElementById("btnCekBilangan").addEventListener("click", cekBilangan);

// LATIHAN 7 — Mengubah warna halaman menggunakan satu function berparameter
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
document.querySelectorAll("[data-warna]").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    ubahWarnaLatar(tombol.dataset.warna);
  });
});

// LATIHAN 8 — Checkbox menu makanan dan hitung total otomatis
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach(function (item) {
  item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach(function (item) {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// MINI PROJECT — Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}
document.getElementById("formNilai").addEventListener("submit", function (event) {
  event.preventDefault();
  const tugasInput = document.getElementById("tugas").value;
  const utsInput = document.getElementById("uts").value;
  const uasInput = document.getElementById("uas").value;
  const hasil = document.getElementById("hasilAkhir");
  if ([tugasInput, utsInput, uasInput].some(v => v.trim() === "")) {
    hasil.textContent = "Semua nilai wajib diisi.";
    return;
  }
  const tugas = Number(tugasInput);
  const uts = Number(utsInput);
  const uas = Number(uasInput);
  if ([tugas, uts, uas].some(v => !Number.isFinite(v) || v < 0 || v > 100)) {
    hasil.textContent = "Nilai tugas, UTS, dan UAS harus berada pada rentang 0–100.";
    return;
  }
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";
  hasil.textContent = `Nilai akhir: ${akhir.toFixed(2)}
Predikat: ${predikat}
Status: ${status}`;
  console.log("Nilai akhir:", akhir.toFixed(2), "| Predikat:", predikat, "| Status:", status);
});

// EKSPERIMEN MANDIRI 1 — Mengambil dua nilai dari prompt
document.getElementById("btnPromptOperasi").addEventListener("click", function () {
  const inputA = prompt("Masukkan bilangan pertama:");
  if (inputA === null) return;
  const inputB = prompt("Masukkan bilangan kedua:");
  if (inputB === null) return;
  if (inputA.trim() === "" || inputB.trim() === "" || !Number.isFinite(Number(inputA)) || !Number.isFinite(Number(inputB))) {
    alert("Kedua input harus berupa angka yang valid.");
    return;
  }
  const a = Number(inputA);
  const b = Number(inputB);
  const hasil = operasiDasar(a, b);
  console.log("Penjumlahan:", hasil.penjumlahan);
  console.log("Pengurangan:", hasil.pengurangan);
  console.log("Perkalian:", hasil.perkalian);
  console.log("Pembagian:", hasil.pembagian);
  console.log("Modulus:", hasil.modulus);
  alert("Hasil operasi telah ditampilkan di Console browser (F12).");
});

// EKSPERIMEN MANDIRI 2 — Tabel perkalian 7 dari 1 sampai 10
document.getElementById("btnPerkalian").addEventListener("click", function () {
  let teks = "";
  for (let i = 1; i <= 10; i++) {
    teks += `7 × ${i} = ${7 * i}\n`;
  }
  document.getElementById("tabelPerkalian").textContent = teks;
});

// EKSPERIMEN MANDIRI 3 — Function cekGenap(angka) mengembalikan boolean
function cekGenap(angka) {
  return Number.isInteger(angka) && angka % 2 === 0;
}
document.getElementById("btnCekGenap").addEventListener("click", function () {
  const input = document.getElementById("cekGenapInput").value;
  const hasil = document.getElementById("hasilCekGenap");
  if (input.trim() === "" || !Number.isInteger(Number(input))) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  hasil.textContent = cekGenap(Number(input)) ? "true — bilangan genap" : "false — bilangan ganjil";
});

// EKSPERIMEN MANDIRI 4 — Validasi nama dan nilai
document.getElementById("formValidasi").addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("namaValidasi").value.trim();
  const nilaiInput = document.getElementById("nilaiValidasi").value;
  const nilai = Number(nilaiInput);
  const hasil = document.getElementById("hasilValidasi");
  if (nama === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (nilaiInput.trim() === "" || !Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai wajib diisi dan harus berada pada rentang 0–100.";
  } else {
    hasil.textContent = `Data valid. Nama: ${nama}; Nilai: ${nilai}.`;
  }
});

// EKSPERIMEN MANDIRI 5 — Menyembunyikan atau menampilkan elemen
document.getElementById("btnToggle").addEventListener("click", function () {
  const teks = document.getElementById("teksToggle");
  const sedangTampil = teks.style.display !== "none";
  teks.style.display = sedangTampil ? "none" : "block";
  this.textContent = sedangTampil ? "Tampilkan Teks" : "Sembunyikan Teks";
});
