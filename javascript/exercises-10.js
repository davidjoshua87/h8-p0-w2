//TUGAS1

var total = 0;
for (var index = 1; index <101; index++) {
  if (index % 2 === 1) {
    total+index;
  }
  else
  if (index % 2 === 0){
    total-index;
  }
}
console.log('TOTAL:' + total);


//TUGAS2

pagar = '';
for(var index1 = 1; index1 <= 10; index1++) {
  for(var index2 = 0; index2 <= 10; index2++) {  
  }
  pagar = pagar +  '#';
console.log(pagar);
}

//TUGAS3

var bintang = '';
for(var index1 = 1; index1 <= 10; index1++) {
  for(var index2 = 0; index2 <= 10; index2++) {
  }
  bintang = bintang + '*';
console.log(bintang);
}
