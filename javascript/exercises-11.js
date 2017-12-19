Tambahkan variabel tahunLahir, variabel ini akan diisi dengan tahun lahir pemain.
Isi variabel umur sekarang adalah 2017 - tahunLahir.
Tambahkan variabel playerHealth, assign variabel ini dengan tahunLahir X Math.random()
Tambahkan variabel monsterHealth, assign variabel ini dengan tahunLahir X Math.random()
Tambahkan variabel kodeMonster, assign variabel ini dengan Math.floor(Math.pow(100, Math.random()))
Pada logika if terhadap variabel nama, apabila pemain tidak mengisi variabel, assign variabel peran dengan kacung
Setelah semua pengecekan menggunakan if selesai dilakukan, lakukan perulangan sebanyak tahunLahir.
Di dalam perulangan tersebut, buat sebuah logika if-else untuk melakukan pengecekan sebagai berikut:
jika indeks perulangan adalah kelipatan umur:
console.log(peran + ' ' + nama + ' menyerang monster!')
Kurangi monsterHealth dengan umur
jika indeks perulangan adalah kelipatan kodeMonster:
console.log('monster menyerang ' + peran + ' ' + nama + '!')
Kurangi playerHealth dengan kodeMonster
jika indeks perulangan adalah kelipatan umur dan kodeMonster sekaligus:
console.log('Health keduanya bertambah')
Tambahkan playerHealth dengan kodeMonster
Tambahkan monsterHealth dengan umur
Jika playerHealth lebih besar daripada monsterHealth:
console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
Jika sebaliknya, console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')

 'tahun lahir' = prompt ('masukan tahun lahir');
 'umur' = Number (2017) - Number ('tahun lahir');
 'playerHealth' = Number ('tahun lahir') * Math.random();
 'monsterHealth' = Number ('tahun lahir') * Math.random();
 'kodeMonster' = Math.floor(Math.pow(100, Math.random()));

 if ('name'= null)
