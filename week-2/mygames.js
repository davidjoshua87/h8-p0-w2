/*
Create Your Own JavaScript App
Objectives
▢ Melatih kreatifitas dalam pembuatan program.
Directions
Buatlah sebuah program yang memiliki salah satu dari berbagai tujuan berikut:

Cerita petualangan interaktif
To-do list
Quiz atau trivia game
Voting dan polling
Permainan bebas buatanmu
Catatan: Ingat untuk memberi dokumentasi judul di baris awal agar jelas tujuan utama program kamu buat apa.

Scoring
Karena tugas kali ini merupakan hasil dari kreatifitas kamu dalam membuat program, kami tidak membatasi sejauh mana kamu dalam membuat program ini. Pada tugas kali ini kami akan memberikan nilai berdasarkan tingkat sejauh mana kamu memanfaatkan logika dan syntax JavaScript yang telah kamu pelajari selama ini, dan kreatifitas dalam membuat program yang menarik dan memiliki kompleksitas yang cukup menantang. Berikut ini cara kami melakukan scoring:

Untuk program yang tidak error, minimal akan mendapatkan nilai 30.

Untuk program yang melibatkan penggunaan:

Kondisional (if-else): mendapatkan nilai tambahan 10.
Looping (for/while): mendapatkan nilai tambahan 10.
Tipe data Array: mendapatkan nilai tambahan 10.
Function: mendapatkan nilai tambahan 15.
Kamu juga diminta untuk membuat pseudocode dari program yang kamu buat. Apabila program yang kamu buat sesuai dengan pseudocode yang diminta, kamu akan mendapat nilai tambahan 25.

Note: Disarankan membuat pseudocode sebelum membuat program nya.

Submissions
▢ Buatlah program tersebut dalam suatu file misalnya myapp.js atau mygame.js pada repo kamu, dan pseudocode.md untuk pseudocode-nya. Cukup dengan CLI/terminal/Repl/JSBin saja, tidak perlu HTML dan CSS..
▢ Commit dan push file tersebut ke GitHub.
▢ Kirimkan link ke form pengumpulan tugas.
*/

//code disini

//PSEUDOCODE...
/*
GAMES: YOUR DAY IS YOUR VICTORY
Adalah games simple javascript yang berceritakan tentang satu hari dimana seorang sebagai prajurit dan memiliki senjata untuk menghancurkan senuah kota musuh.
Tanggal dan Hari kelahiran seorang sebagai prajurit dengan peran akan menjadi sebuah acuan dimana akan menentukan hari penyerangan.
Bulan kelahiran dapat menjadi acuan untuk menentukan kota mana dahulu yang harus dihancurkan. Dan angka tahun menentukan kapan seorang prajurit dapat memulai penyerangan.
Jadi penting mengetahui Tanggal dan Hari Kelahiran.

BUAT FUNCTION tampilkan()
TAMPILKAN (SELAMAT DATANG DI GAMES "YOUR DAY IS YOUR VICTORY");
SIMPAN DAN MASUKAN 'nama';
VARIABLE 'namaTerisi' = true;
VARIABLE 'pilihanPeran';
VARIABLE 'peranTerisi' = true;

//nama = prompt('Masukkan nama anda: ');
WHILE 'namaTerisi'
IF(nama === '') MAKA
TAMPILKAN(Masukan Nama Anda!);
  ELSE IF(false) MAKA
  TAMPILKN(Tidak Niat MAin);
  ENDIF
ENDIF
BREAK
ENDWHILE
TAMPILKAN(Di GAMES Nama Kamu adalah,  + 'nama' + tanda seru);

PILIH DAN SAVE 'piihPeran' dengan pilihan [0 = Penembak, 1 = Pengintai, 2 = Pengebom];
WHILE 'peranTerisi'
  IF (pilihanPeran === '') MAKA
  TAMPILKAN ('Pilih peran anda');
  ENDIF
  ELSE ('peranTerisi'= false);
  ENDELSE
ENDWHILE
TULISKAN (Peran Kamu adalah + 'peran[pilihnPeran]');

//........
//........
//Mengambil Senjata Anda...
BUAT FUNCTION ambilSenjata(pilihanPeran)
  IF 'pilihanPeran' == 0 MAKA
      TAMPILKAN (Selamat!,  + 'peran[pilihanPeran]'+ ' ' + 'nama' + mendapat senjata awal: Senapan SPR 3!);
      ENDIF
  ELSEIF 'pilihanPeran' == 0 MAKA
      TAMPILKAN (Selamat!,  + 'peran[pilihanPeran]' + ' ' + 'nama' + mendapat senjata awal: Metaflex Future Camouflage!);
      ENDIF
  ELSEIF 'pilihanPeran' == 0 MAKA
      TAMPILKAN (Selamat!,  + 'peran[pilihanPeran]' + ' ' + 'nama' + mendapat senjata awal: Granat XM-25!);
      ENDIF
  ELSE
      TAMPILKAN (Peran ada 3, Jika belum Memilih, Segera Memilih Peran Anda! X3);
      ENDIF
  ENDIF
  JALANKAN FUNCTION ('pilihanPeran');

  //Tentukan Hari Kamu Sekarang!!!
MASUKAN DAN SIMPAN 'yourDay' sebagai tanggal lahir;
BUAT FUNCTION findDay() dengan
    BUAT VARIABLE array 'ar' dengan jumlah [6] dan diisi nama hari dari minggu sampai dengan sabtu;
  IF (yourDay == dari SIMPAN DATA) atau yourDay == SIMPAN DATA tanggal lahir MAKA
    TULISKAN Harus Anda Isi;
    TULISKAN Kembali Ke Awal dan Isi;
    TULISKAN Jika Tidak Anda Tidak Niat Main;
    ENDIF
  ELSE
    VARIABLE 'birthDay' = new Date dengan ISI 'yourDay';
    VARIABLE 'day' = birthDay.getDay;
    TAMPILKAN (Hari kelahiran Kamu dan Hari Penyerangan Kamu adalah  + 'ar[day]');
    ENDIF
ENDFUNCTION
  JALANKAN FUNCTION ();

TAMPILKAN (Perhatikan Informasi Di Bawah Ini
  Peran dan Senjata Kamu!
  Nama Kota Musuh!
  Pertarungan Akan dimulai Kapan
  Pertarungan Akan Selesai Kapan);
TAMPILKAN(Siap Menyerang);
TAMPILKAN(Siap.....!!!!);)

//..........
//..........
//Menentukan Kota Musuh Referensi (yourDay)
VARIABLE input isi dengan 'yourDay';
VARIABLE 'namaMarkas' sama dengan isi input dihilangkan karakter '-';
VARIABLE 'namaMarkas' sama dengan diubah menjadi bilangan bulat number dengan index [1];
BUAT SWITCH dari 'namaMarkas' dengan PILIHAN PENGULANGAN
  CASE 1:'namaMarkas' = 'Bravoss';BREAK;
  CASE 2:'namaMarkas' = 'Ashaai';BREAK;
  CASE 3:'namaMarkas' = 'KingTower';BREAK;
  CASE 4:'namaMarkas' = 'OldValeria';BREAK;
  CASE 5:'namaMarkas' = 'Volantis';BREAK;
  CASE 6:'namaMarkas' = 'Qart';BREAK;
  CASE 7:'namaMarkas' = 'Mereem';BREAK;
  CASE 8:'namaMarkas' = 'Chroyan';BREAK;
  CASE 9:'namaMarkas' = 'GultThown';BREAK;
  CASE 10:'namaMarkas' = 'Sathar';BREAK;
  CASE 11:'namaMarkas' = 'Penthos';BREAK;
  CASE 12:'namaMarkas' = 'OldTown';BREAK;
  DEFAULT:'namaMarkas' = 'Markas tidak terdaftar';BREAK;
ENDSWITCH

TAMPILKAN(Nama Kota Musuh adalah + 'namaMarkas');
//..........
//..........
//Menuliskan Tahun Kelahiran Referensi (yourDay)
VARIABLE 'input2' isi dengan 'yourDay'
VARIABLE 'tahunLahir' sama dengan isi input dihilangkan karakter '-';
VARIABLE 'tahunLahir' sama dengan diubah menjadi bilangan bulat number dengan index [2];
TULISKAN(Tahun kelahiran Kamu adalah Tahun  + 'tahunLahir');

//..........
//..........
//Menentukan Tahun Dimulai pertarungan Referensi (tahunLahir)..
VARIABLE 'tahunDimulai' sama dengan pertambahan 'tahunLahir' dan 17;
TAMPILKAN(Pertarungan Akan Dimulai Pada Tahun  + 'tahunDimulai');

//..........
//..........
//Menentukan Tahun Selesai Pertarungan Referensi dari Tahun Sekarang..
VARIABLE date sama dengan new date;
VARIABLE yy sama dengan date.getYear;
VARIABLE year sama dengan yy kurang dari 1000, yy + 1900 :yy;
VARIABLE 'pertarungn' sama dengan 'year' dikurang 'tahuLAhir' dibagi 4;
VARIABLE 'pertarungan' sama dengan sama dengan diubah menjadi bilangan bulat number;
VARIABLE 'tahunPertarungan' sama dengan 'year' ditambah 'pertarungan';
VARIABLE 'tahun' sama dengan 'tahunPertarungan'- 'tahunDImulai';
VARIABLE 'tahunSelesai' sama dengan Math.abs'tahun';
TAMPILKAN (Pertarungan Akan Selesai Selama  + 'tahunSelesai' +  Tahun);

//Penyerangan.....
VARIABLE 'darahPrajurit' sama dengan 'tahunLahir' dikalikn dengan Math.random;
VARIABLE 'darahMusuh' sama dengan 'tahunLahir' dikalikan dengan Math.random;
VARIABLE 'prajuritMusuh' sama dengan nilai dari Math.floor(Math.pow(100, Math.random()));
VARIABLE 'senjataMusuh'sama dengan Senapan dan Panah;

FOR (VARIABLE 'index'= 0 dan 'index'kurang sama dengan 'tahunDimulai'dengan pertambhan 'index'sama dengan satu);
MAKA
IF ('index' dibagi hahis 'tahunSelesai' === 0)MAKA
    TULISKAN ('nama' + spasi+ Menyerang Kota  + 'namaMarkas' + dengan Senjatanya);
    ENDIF
ELSEIF ('index' dibagi hahis 'prajuritMusuh' === 0)MAKA
    TULISKAN (Musuh Menembaki + spasi + 'nama');
    'darahPrajurit' sama dengan'darahPrajurit' dikurangi'prajuritMusuh';
    ENDIF
ELSEIF ('index' dibagis habis 'tahunSelesai' === 0 dan 'index' dibagi habis 'prajuritMusuh' === 0) MAKA
    TULISKAN(Prajurit dan Musuh Saling Tempur);
    'darahMusuh' sama dengan 'darahMusuh' ditambah 'tahunSelesai';
    'darahPrajurit' sama dengan 'darahPrajurit' ditambah 'prajuritMusuh';
    ENDIF
ENDIF
IF ('darahPrajurit' lebih besar 'darahMusuh') MAKA
    TAMPILKAN(Selamat,  + spasi + 'nama' + Dapat Menghancurkan Kota  + 'namaMarkas' + Inilah Hari Kemenangan Kamu);
ENDIF
ELSEIF ('darahPrajurit' kurang dari 'darahMusuh') {
    TAMPILKAN(Sayang sekali,  + spssi + 'nama' + Gagal Menghancurkan Kota  + 'namaMarkas' + Coba Lagi Hari Lain);
ENDIF
ENDFUNCTION
JALANKAN FUNCTION tampilkan();
*/


//code disini
//Mengisi Nama dan Peran Anda...
function tampilkan() {
  alert('SELAMAT DATANG DI GAMES "YOUR DAY IS YOUR VICTORY"');
  console.log('');
  console.log('');
  console.log('');
  var nama = prompt('Masukan Nama Anda', 'Masukan Nama');
  var peran = ['Penembak', 'Pengintai', 'Pengebom'];
  var namaTerisi = true;
  var pilihanPeran;
  var peranTerisi = true;

  //nama = prompt('Masukkan nama anda: ');
  while (namaTerisi) {
    if (nama === '') {
      alert('Masukkan Nama Anda!');
      nama = prompt('Segera Masukkan Nama Anda!');
    } else {
      if (false) {
        alert('Tidak Niat Main');
      }
    }
    break;
  }
  alert('Di GAMES Nama Kamu adalah, ' + nama + '!');

  //pilihan peran
  pilihanPeran = prompt('Pilih peran anda: [0 = Penembak, 1 = Pengintai, 2 = Pengebom]', 'Masukan Peran');
  while (peranTerisi) {
    if (pilihanPeran === '') {
      alert('Pilih peran anda!');
      pilihanPeran = prompt('Pilih peran anda: [0 = Penembak, 1 = Pengintai, 2 = Pengebom]', 'Masukan Peran');
    } else {
      peranTerisi = false;
    }
  }
  console.log('Peran Kamu adalah : ' + peran[pilihanPeran]);

  //........
  //........
  //Mengambil Senjata Anda...
  function ambilSenjata(pilihanPeran) {
    if (pilihanPeran == 0) {
      alert('Selamat!, ' + peran[pilihanPeran] + ' ' + nama + ' mendapat senjata awal: Senapan SPR 3!');
    } else if (pilihanPeran == 1) {
      alert('Selamat!, ' + peran[pilihanPeran] + ' ' + nama + ' mendapat senjata awal: Metaflex Future Camouflage!');
    } else if (pilihanPeran == 2) {
      alert('Selamat!, ' + peran[pilihanPeran] + ' ' + nama + ' mendapat senjata awal: Granat XM-25!');
    } else {
      alert('Peran ada 3, Jika belum Memilih, Segera Memilih Peran Anda! X3');
    }
  }
  ambilSenjata(pilihanPeran);

  //Tentukan Hari Kamu Sekarang!!!
  var yourDay = prompt('Masukan Tanggal Lahir Anda\nMonth-Date-Year\nContoh: 3-21-2000', 'Masukan Date'); //prompt
  function findDay() {
    var ar = new Array(6);
    ar[0] = 'Minggu';
    ar[1] = 'Senin';
    ar[2] = 'Selasa';
    ar[3] = 'Rabu';
    ar[4] = 'Kamis';
    ar[5] = 'Jumat';
    ar[6] = 'Sabtu';
    if (yourDay == '' || yourDay == 'Masukan Tanggal Lahir') {
      console.log('Harus Anda Isi');
      console.log('Kembali Ke Awal dan Isi');
      console.log('Jika Tidak....Anda Tidak Niat Main');
    } else {
      var birthDay = new Date(yourDay);
      var day = birthDay.getDay();
      alert('Hari kelahiran Kamu dan Hari Penyerangan Kamu adalah ' + ar[day]);
    }
  }
  findDay();

  alert('Perhatikan Informasi Di Bawah Ini\nPeran dan Senjata Kamu!\nNama Kota Musuh!\nPertarungan Akan dimulai Kapan?\nPertarungan Akan Selesai Kapan?');
  alert('SIAP MENYERANG');
  alert('SIAP.....!!!!');

  //..........
  //..........
  //Menentukan Kota Musuh Referensi (yourDay)

  var input = (yourDay);
  //console.log(input);
  var namaMarkas = input.split('-');
  //console.log(namaMarkas);
  namaMarkas = parseInt(namaMarkas[0]);
  //console.log(namaMarkas);
  switch (namaMarkas) {
    case 1:
      namaMarkas = 'Bravoss';
      break;
    case 2:
      namaMarkas = 'Ashaai';
      break;
    case 3:
      namaMarkas = 'KingTower';
      break;
    case 4:
      namaMarkas = 'OldValeria';
      break;
    case 5:
      namaMarkas = 'Volantis';
      break;
    case 6:
      namaMarkas = 'Qart';
      break;
    case 7:
      namaMarkas = 'Mereem';
      break;
    case 8:
      namaMarkas = 'Chroyan';
      break;
    case 9:
      namaMarkas = 'GultThown';
      break;
    case 10:
      namaMarkas = 'Sathar';
      break;
    case 11:
      namaMarkas = 'Penthos';
      break;
    case 12:
      namaMarkas = 'OldTown';
      break;
    default:
      namaMarkas = 'Markas tidak terdaftar';
      break;
  }
  console.log('');

  alert('Nama Kota Musuh adalah ' + namaMarkas);

  //..........
  //..........
  //Menuliskan Tahun Kelahiran Referensi (yourDay)
  var input2 = (yourDay);
  //console.log(input2);
  var tahunLahir = input.split('-');
  //console.log(tahunLahir);
  tahunLahir = parseInt(tahunLahir[2]);
  console.log('');
  console.log('Tahun kelahiran Kamu adalah Tahun ' + tahunLahir);

  //..........
  //..........
  //Menentukan Tahun Dimulai pertarungan Referensi (tahunLahir)..
  var tahunDimulai = Number(tahunLahir) + Number(17);
  console.log('');
  alert('Pertarungan Akan Dimulai Pada Tahun ' + tahunDimulai);

  //..........
  //..........
  //Menentukan Tahun Selesai Pertarungan Referensi dari Tahun Sekarang..
  var date = new Date();
  var yy = date.getYear();
  var year = (yy < 1000) ? yy + 1900 : yy;
  //console.log(year);
  var pertarungan = ((Number(year) - Number(tahunLahir)) / 4);
  pertarungan = parseInt(pertarungan);
  //console.log(pertarungan);
  var tahunPertarungan = year + pertarungan;
  //console.log(tahunPertarungan);
  var tahun = tahunPertarungan - tahunDimulai;
  var tahunSelesai = Math.abs(tahun);
  console.log('');
  alert('Pertarungan Akan Selesai Selama ' + tahunSelesai + ' Tahun');

  console.log('');
  console.log('');
  console.log('');

  //Penyerangan.....
  var darahPrajurit = tahunLahir * (Math.random());
  var darahMusuh = tahunLahir * (Math.random());
  var prajuritMusuh = Math.floor(Math.pow(100, Math.random()));
  var senjataMusuh = ["Senapan", "Panah"];

  for (var i = 0; i <= tahunDimulai; i++) {
    if (i % tahunSelesai === 0) {
      console.log(nama + ' ' + 'Menyerang Kota ' + namaMarkas + ' dengan Senjatanya');
      darahMusuh = darahMusuh - tahunSelesai;
    } else if (i % prajuritMusuh === 0) {
      console.log('Musuh Menembaki' + ' ' + nama);
      darahPrajurit = darahPrajurit - prajuritMusuh;
    } else if (i % tahunSelesai === 0 && i % jenisMusuh === 0) {
      console.log('Prajurit dan Musuh Saling Tempur');
      darahMusuh = darahMusuh + tahunSelesai;
      darahPrajurit = darahPrajurit + jenisMusuh;
    }
  }
  if (darahPrajurit > darahMusuh) {
    alert('Selamat, ' + ' ' + nama + ' Dapat Menghancurkan Kota ' + namaMarkas + ' Inilah Hari Kemenangan Kamu');
  } else if (darahPrajurit < darahMusuh) {
    alert('Sayang sekali, ' + ' ' + nama + ' Gagal Menghancurkan Kota ' + namaMarkas + ' Coba Lagi Hari Lain');
  }
}
tampilkan();
