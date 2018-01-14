/*
Menggunakan If Else
Objectives
Mengerti Cara Menggunakan If-Else
Mengerti Logika If-Else
Mengerti Cara Menggunakan Operator Evaluasi ===, !==
Directions
Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

Hints
Variabel tetap di-input secara manual.
Variabel nama dan peran dapat diisi apa saja.
Nama tidak perlu dicek sama persis seperti contoh input/output
Buat If-Else berbeda masing-masing untuk mengecek peran
Input
//Contoh input 1
var nama = 'Mikael';
var peran = '';

//Contoh input 2
var nama = 'Nina';
var peran = 'Ksatria';

//Contoh input 3
var nama = 'Danu';
var peran = 'Tabib';

//Contoh input 4
var nama = 'Zero';
var peran = 'Penyihir';
Output
//Output untuk Input 1
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input 2
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input 3
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input 4
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
*/

//code disini
//Output untuk Input 1
var nama = 'Mikael';
var peran = '';

if (nama === 'Mikael') {
  {
    console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
  }
  if (peran == '') {
    console.log('');
  }


//Output untuk Input 2
var nama = 'Nina';
var peran = 'Ksatria';

  if (nama === 'Nina') {
    console.log("Selamat datang di Dunia Proxytia, Nina");
  }
  if (peran === 'Ksatria') {
    console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
  } else {
    console.log("Halo Ksatria Nina, kamu tidak dapat menyerang sekarang!");
  }


//Output untuk Input 3
var nama = 'Danu';
var peran = 'Tabib';

  if (nama === 'Danu') {
    console.log("Selamat datang di Dunia Proxytia, Danu");
  }
  if (peran === 'Tabib') {
    console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
  } else {
    console.log("Halo Danu, kamu bukan Tabib tidak dapat membantu temanmu yang terluka.");
  }


//Output untuk Input 4
var nama = 'Zero';
var peran = 'Penyihir';
  if (nama === 'Zero') {
    console.log("Selamat datang di Dunia Proxytia, Zero");
  }
  if (peran === 'Penyihir') {
    console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
  } else {
    console.log("Halo Danu, kamu bukan Penyihir, dan tidak dapat iptakan keajaiban yang membantu kemenanganmu!");
  }
}
