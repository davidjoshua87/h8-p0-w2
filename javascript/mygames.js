//........
//........
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
  }

  alert('Di GAMES Nama Kamu adalah, ' + nama + '!');

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
  var yourDay = prompt('Masukan Tanggal Lahir Anda\n Contoh: 3-3-2000\n TAHUN HARUS TIDAK LEBIH TAHUN SEKARANG', 'Masukan Date'); //prompt
  function findDay() {
    var ar = new Array(6);
    ar[0] = 'Minggu';
    ar[1] = 'Senin';
    ar[2] = 'Selasa';
    ar[3] = 'Rabu';
    ar[4] = 'Kamis';
    ar[5] = 'Jumat';
    ar[6] = 'Sabtu';
    //...........
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
  namaMarkas = parseInt(namaMarkas[1]);
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
  var tahunSelesai = tahunPertarungan - tahunDimulai;
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
