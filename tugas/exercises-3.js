/*
Menggunakan Switch-Case
Objectives
Mengerti Cara Menggunakan Switch-Case
Mengerti Logika Switch-Case
Directions
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

var hari = 21; var bulan = 1; var tahun = 1945;

Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
*/

//code disini
var hari = 1;
var bulan = 5;
var tahun = 1945;

switch (bulan) {
  case 1:
    console.log(hari + ' Januari ' + tahun);
    break;
  case 2:
    console.log(hari + ' Februari ' + tahun);
    break;
  case 3:
    console.log(hari + ' Maret ' + tahun);
    break;
  case 4:
    console.log(hari + ' April ' + tahun);
    break;
  case 5:
    console.log(hari + ' Mei ' + tahun);
    break;
  case 6:
    console.log(hari + ' Juni ' + tahun);
    break;
  case 7:
    console.log(hari + ' Juli ' + tahun);
    break;
  case 8:
    console.log(hari + ' Agustus ' + tahun);
    break;
  case 9:
    console.log(hari + ' September ' + tahun);
    break;
  case 10:
    console.log(hari + ' Oktober ' + tahun);
    break;
  case 11:
    console.log(hari + ' November ' + tahun);
    break;
  case 12:
    console.log(hari + ' Desember ' + tahun);
    break;
  default:
    console.log('Jangan Lupa Pilih');
}
