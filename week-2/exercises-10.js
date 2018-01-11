/*
Mengubah Pseudocode Menjadi Kode JavaScript 2
Objectives
Mampu mengartikan pseudocode ke dalam program
Directions
Ubah semua pseudocode di bawah ke dalam JavaScript (setiap pseudocode satu file JavaScript)
Kebenaran solusi bukan keluaran, tapi kode yang sesuai dengan pseudocode
Tugas 1
TENTUKAN `total` sama dengan 0
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`"
Tugas 2
SIMPAN karakter kosong pada `pagar`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
        TAMBAHKAN `pagar` dengan karakter "#"
    ENDFOR
    TULISKAN `pagar`
    SIMPAN karakter kosong pada `pagar`
ENDFOR
Tugas 3
SIMPAN karakter kosong pada `bintang`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
        TAMBAHKAN `bintang` dengan karakter "*"
    ENDFOR
    TULISKAN `bintang`
    SIMPAN karakter kosong pada `bintang`
ENDFOR
*/

//code disini
//TUGAS1
var total = 0;
for (var index = 1; index < 101; index++) {
  if (index % 2 === 1) {
    total += index;
  } else if (index % 2 === 0) {
    total -= index;
  }
}
console.log('TOTAL:' + total);

//TUGAS2
var pagar = '';
for (var index1 = 1; index1 <= 10; index1++) {
  for (var index2 = 0; index2 <= 10; index2++) {
    pagar = pagar + '#';
  }
  console.log(pagar);
  pagar = '';
}

//TUGAS3
var bintang = '';
for (var index1 = 1; index1 <= 10; index1++) {
  for (var index2 = 0; index2 <= index1; index2++) {
    bintang = bintang + '*';
  }
  console.log(bintang);
  bintang = '';
}
