/*
Angka Ganjil dan Genap
Objectives
Mengaplikasikan Syntax for
Mengaplikasikan Syntax if-else
Directions
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.
Contoh output
//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
""
//counter sekarang = 3,
//output
"3 KELIPATAN 3"
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
""
//counter sekarang = 6,
//output
"6 KELIPATAN 6"
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
""
//counter sekarang = 10,
//output
"10 KELIPATAN 10"
// dan seterusnya :)
*/

//code disini
var counter = 1;
for (var counter = 1; counter < 101; counter++) {
  if (counter % 2 === 1) {
    console.log(counter + ' GANJIL');
  } else
  if (counter % 2 === 0) {
    console.log(counter + ' GENAP');
  }
}
var counter = 1;
for (var counter = 1; counter < 101; counter += 2) {
  if (counter % 3 === 0) {
    console.log(counter + '  3 Kelipatan 3');
  } else
  if (counter % 3 === 1) {
    console.log(counter + '');
  }
}
var counter = 1;
for (var counter = 1; counter < 101; counter += 5) {
  if (counter % 6 === 0) {
    console.log(counter + '  6 Kelipatan 6');
  } else
  if (counter % 6 === 1) {
    console.log(counter + '');
  }
}
var counter = 1;
for (var counter = 1; counter < 101; counter += 9) {
  if (counter % 10 === 0) {
    console.log(counter + '  10 Kelipatan 10');
  } else
  if (counter % 10 === 1) {
    console.log(counter + '');
  }
}
