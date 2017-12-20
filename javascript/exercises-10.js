//TUGAS1

var total = 0;
for (var index = 0, index <= 100, index++) {
  if (index % 2 == 1) {
    total += index;
  } else
  if (index % 2 == 0) {
    total -= index;
  }
}
console.log('TOTAL:' + total);

//TUGAS2

pagar = prompt('masukan karakter');
for (var index1 = 0, index1 < 10, index1++) {
  for (index2 = 0, index2 < 10, index2++) {
    console.log(pagar + "#");
  }
  console.log(pagar);
  pagar = prompt('masukan karakter');
}

//TUGAS3

bintang = prompt('masukan karakter');
for (index1 = 0, index1 < 10, index1++) {
  for (index2 = 0, index2 < index1, index2++) {
    console.log(bintang + "*");
  }
  console.log(bintang)
  bintang = prompt('masukan karakter');
}
