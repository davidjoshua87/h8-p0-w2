/*
Mengubah Psedocode Menjadi Kode JavaScript
Objectives
Mampu mengartikan pseudocode ke dalam program
Directions
Ubah semua pseudocode di bawah ke dalam JavaScript (setiap pseudocode satu file JavaScript)
Kebenaran solusi bukan keluaran, tapi kode yang sesuai dengan pseudocode
Tugas 1
SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'
Tugas 2
SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"
Tugas 3
MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF
*/

//code disini
//TUGAS1
var a, b, c, d;
a = prompt('nama');
b = prompt('angka pembilang');
c = prompt('angka penyebut');
d = Number(b) / Number(c);
console.log('Halo ' + a, 'hasil bagi = ' + d);


//TUGAS2
var a, b, c;
a = prompt('alas');
b = prompt('tinggi');
c = (Number(a) * Number(b)) / 2;
console.log('Luas Segitiga: ' + c);


//TUGAS3

var tahun = prompt('masukan tahun');
if (tahun % 4 === 0) {
  if (tahun % 100 === 1) {
    console.log('tahun adalah tahun kabisat');
  } else if (tahun % 400 === 0) {
    console.log('tahun adalah tahun kabisat');
  } else {
    console.log('tahun adalah bukan tahun kabisat');
  }
} else {
  console.log('tahun adalah bukan tahun kabisat');
}
