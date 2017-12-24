# GAMES: YOUR DAY IS YOUR VICTORY

### CERITA GAMES


#### Adalah games simple javascript yang berceritakan tentang satu hari dimana seorang sebagai prajurit dan memiliki senjata untuk menghancurkan senuah kota musuh. Tanggal dan Hari kelahiran seorang sebagai prajurit dengan peran akan menjadi sebuah acuan dimana akan menentukan hari penyerangan. Bulan kelahiran dapat menjadi acuan untuk menentukan kota mana dahulu yang harus dihancurkan. Dan angka tahun menentukan kapan seorang prajurit dapat memulai penyerangan. Jadi penting mengetahui Tanggal dan Hari Kelahiran.


### Pseudocode

#### BUAT FUNCTION tampilkan()
#### TAMPILKAN (SELAMAT DATANG DI GAMES "YOUR DAY IS YOUR VICTORY");
#### SIMPAN DAN MASUKAN 'nama';
#### VARIABLE 'namaTerisi' = true;
#### VARIABLE 'pilihanPeran';
#### VARIABLE 'peranTerisi' = true;

#### //nama = prompt('Masukkan nama anda: ');
#### WHILE 'namaTerisi'
#### 	IF(nama === '') MAKA
#### 			TAMPILKAN(Masukan Nama Anda!);
#### 		ELSE IF(false) MAKA
#### 			TAMPILKN(Tidak Niat MAin);
#### 		ENDIF
#### 	ENDIF
#### ENDWHILE
#### TAMPILKAN(Di GAMES Nama Kamu adalah,  + 'nama' + tanda seru);

#### PILIH DAN SAVE 'piihPeran' dengan pilihan [0 = Penembak, 1 = Pengintai, 2 = Pengebom];
#### WHILE 'peranTerisi'
#### 	IF (pilihanPeran === '') MAKA
#### 			TAMPILKAN ('Pilih peran anda');
#### 	ENDIF
#### 	ELSE ('peranTerisi'= false);
#### 	ENDELSE
#### ENDWHILE
#### TULISKAN (Peran Kamu adalah + 'peran[pilihnPeran]');

#### //........
#### //........
#### //Mengambil Senjata Anda...
#### BUAT FUNCTION ambilSenjata(pilihanPeran)
#### IF 'pilihanPeran' == 0 MAKA
#### 			TAMPILKAN (Selamat!,  + 'peran[pilihanPeran]'+ ' ' + 'nama' + mendapat senjata awal: Senapan SPR 3!);
#### 		ENDIF
#### 		ELSEIF 'pilihanPeran' == 0 MAKA
#### 			TAMPILKAN (Selamat!,  + 'peran[pilihanPeran]' + ' ' + 'nama' + mendapat senjata awal: Metaflex Future Camouflage!);
#### 		ENDIF
#### 		ELSEIF 'pilihanPeran' == 0 MAKA
#### 			TAMPILKAN (Selamat!,  + 'peran[pilihanPeran]' + ' ' + 'nama' + mendapat senjata awal: Granat XM-25!);
#### 		ENDIF
#### 		ELSE
#### 			TAMPILKAN (Peran ada 3, Jika belum Memilih, Segera Memilih Peran Anda! X3);
#### 		ENDIF
#### ENDIF
#### JALANKAN FUNCTION ('pilihanPeran');

#### //Tentukan Hari Kamu Sekarang!!!
#### MASUKAN DAN SIMPAN 'yourDay' sebagai tanggal lahir;
#### BUAT FUNCTION findDay() dengan
#### BUAT VARIABLE array 'ar' dengan jumlah [6] dan diisi nama hari dari minggu sampai dengan sabtu;
#### 	IF (yourDay == dari SIMPAN DATA) atau yourDay == SIMPAN DATA tanggal lahir MAKA
#### 			TULISKAN Harus Anda Isi;
#### 			TULISKAN Kembali Ke Awal dan Isi;
#### 			TULISKAN Jika Tidak Anda Tidak Niat Main;
#### 		ENDIF
#### 		ELSE
#### 	VARIABLE 'birthDay' = new Date dengan ISI 'yourDay';
#### 	VARIABLE 'day' = birthDay.getDay;
#### 			TAMPILKAN (Hari kelahiran Kamu dan Hari Penyerangan Kamu adalah  + 'ar[day]');
#### 		ENDIF
#### 	ENDFUNCTION
#### JALANKAN FUNCTION ();

#### TAMPILKAN (Perhatikan Informasi Di Bawah Ini
#### Peran dan Senjata Kamu!
#### Nama Kota Musuh!
#### Pertarungan Akan dimulai Kapan
#### Pertarungan Akan Selesai Kapan);
#### TAMPILKAN(Siap Menyerang);
#### TAMPILKAN(Siap.....!!!!);)

#### //..........
#### //..........
#### //Menentukan Kota Musuh Referensi (yourDay)
#### VARIABLE input isi dengan 'yourDay';
#### VARIABLE 'namaMarkas' sama dengan isi input dihilangkan karakter '-';
#### VARIABLE 'namaMarkas' sama dengan diubah menjadi bilangan bulat number dengan index [1];
#### BUAT SWITCH dari 'namaMarkas' dengan PILIHAN PENGULANGAN
#### 			CASE 1:'namaMarkas' = 'Bravoss';BREAK;
#### 			CASE 2:'namaMarkas' = 'Ashaai';BREAK;
#### 			CASE 3:'namaMarkas' = 'KingTower';BREAK;
#### 			CASE 4:'namaMarkas' = 'OldValeria';BREAK;
#### 			CASE 5:'namaMarkas' = 'Volantis';BREAK;
#### 			CASE 6:'namaMarkas' = 'Qart';BREAK;
#### 			CASE 7:'namaMarkas' = 'Mereem';BREAK;
#### 			CASE 8:'namaMarkas' = 'Chroyan';BREAK;
#### 			CASE 9:'namaMarkas' = 'GultThown';BREAK;
#### 			CASE 10:'namaMarkas' = 'Sathar';BREAK;
#### 			CASE 11:'namaMarkas' = 'Penthos';BREAK;
#### 			CASE 12:'namaMarkas' = 'OldTown';BREAK;
#### 			DEFAULT:'namaMarkas' = 'Markas tidak terdaftar';BREAK;
#### ENDSWITCH

#### TAMPILKAN(Nama Kota Musuh adalah + 'namaMarkas');
#### //..........
#### //..........
#### //Menuliskan Tahun Kelahiran Referensi (yourDay)
#### VARIABLE 'input2' isi dengan 'yourDay'
#### VARIABLE 'tahunLahir' sama dengan isi input dihilangkan karakter '-';
#### VARIABLE 'tahunLahir' sama dengan diubah menjadi bilangan bulat number dengan index [2];
#### 			TULISKAN(Tahun kelahiran Kamu adalah Tahun  + 'tahunLahir');

#### //..........
#### //..........
#### //Menentukan Tahun Dimulai pertarungan Referensi (tahunLahir)..
#### VARIABLE 'tahunDimulai' sama dengan pertambahan 'tahunLahir' dan 17;
#### 			TAMPILKAN(Pertarungan Akan Dimulai Pada Tahun  + 'tahunDimulai');

#### //..........
#### //..........
#### //Menentukan Tahun Selesai Pertarungan Referensi dari Tahun Sekarang..
#### VARIABLE date sama dengan new date;
#### VARIABLE yy sama dengan date.getYear;
#### VARIABLE year sama dengan yy kurang dari 1000, yy + 1900 :yy;
#### VARIABLE 'pertarungn' sama dengan 'year' dikurang 'tahuLAhir' dibagi 4;
#### VARIABLE 'pertarungan' sama dengan sama dengan diubah menjadi bilangan bulat number;
#### VARIABLE 'tahunPertarungan' sama dengan 'year' ditambah 'pertarungan';
#### VARIABLE 'tahunSelesai' sama dengan 'tahunPertarungan'- 'tahunDImulai';
#### 			TAMPILKAN (Pertarungan Akan Selesai Selama  + 'tahunSelesai' +  Tahun);

#### //Penyerangan.....
#### VARIABLE 'darahPrajurit' sama dengan 'tahunLahir' dikalikn dengan Math.random;
#### VARIABLE 'darahMusuh' sama dengan 'tahunLahir' dikalikan dengan Math.random;
#### VARIABLE 'prajuritMusuh' sama dengan nilai dari Math.floor(Math.pow(100, Math.random()));
#### VARIABLE 'senjataMusuh'sama dengan Senapan dan Panah;

#### FOR (VARIABLE 'index'= 0 dan 'index'kurang sama dengan 'tahunDimulai'dengan pertambhan 'index'sama dengan satu);MAKA
#### 	IF ('index' dibagi hahis 'tahunSelesai' === 0)MAKA
#### 			TULISKAN ('nama' + spasi+ Menyerang Kota  + 'namaMarkas' + dengan Senjatanya);
#### 	ENDIF
#### 	ELSEIF ('index' dibagi hahis 'prajuritMusuh' === 0)MAKA
#### 			TULISKAN (Musuh Menembaki + spasi + 'nama');
#### 			'darahPrajurit' sama dengan'darahPrajurit' dikurangi'prajuritMusuh';
#### 	ENDIF
#### 	ELSEIF ('index' dibagis habis 'tahunSelesai' === 0 dan 'index' dibagi habis 'prajuritMusuh' === 0) MAKA
#### 			TULISKAN(Prajurit dan Musuh Saling Tempur);
#### 			'darahMusuh' sama dengan 'darahMusuh' ditambah 'tahunSelesai';
#### 			'darahPrajurit' sama dengan 'darahPrajurit' ditambah 'prajuritMusuh';
#### 	ENDIF
#### 	ENDIF
#### 	IF ('darahPrajurit' lebih besar 'darahMusuh') MAKA
#### 			TAMPILKAN(Selamat,  + spasi + 'nama' + Dapat Menghancurkan Kota  + 'namaMarkas' + Inilah Hari Kemenangan Kamu);
#### 	ENDIF
#### 	ELSEIF ('darahPrajurit' kurang dari 'darahMusuh') {
#### 			TAMPILKAN(Sayang sekali,  + spssi + 'nama' + Gagal Menghancurkan Kota  + 'namaMarkas' + Coba Lagi Hari Lain);
#### 	ENDIF
#### ENDFUNCTION
#### JALANKAN FUNCTION tampilkan();





### Screenshot 1

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%201.png)


### Screenshot 2

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%202.png)

### Screenshot 3

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%203.png)

### Screenshot 4

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%204.png)

### Screenshot 5

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%205.png)

### Screenshot 6

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%206.png)

### Screenshot 7

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%207.png)

### Screenshot 8

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%208.png)

### Screenshot 9

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%209.png)

### Screenshot 10

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%2010.png)

### Screenshot 11

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%2011.png)

### Screenshot 12

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%2012.png)

### Screenshot 13

![Hasil](https://github.com/davidjoshua87/h8-p0-w2/blob/master/asset/Screen%20Shot%2013.png)