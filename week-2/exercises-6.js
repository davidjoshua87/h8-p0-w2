//Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
//Di dalam perulangan, periksa setiap angka counter:
//Apabila angka counter adalah angka genap, tuliskan GENAP
//Apabila angka counter adalah angka ganjil, tuliskan GANJIL
var counter = 1;
for (var counter = 1; counter <101; counter++) {
  if (counter % 2 === 1) {
    console.log(counter + ' GANJIL');
  } else
  if (counter % 2 === 0){
    console.log(counter + ' GENAP');
  }
}
//Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
//pertambahan counter sebesar 2
//Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, tuliskan 3 Kelipatan 3
var counter = 1;
for (var counter = 1; counter <101; counter += 2) {
  if(counter % 3 === 0){
  console.log(counter + '  3 Kelipatan 3');
  }
  else
  if (counter % 3 === 1) {
    console.log(counter + '');
  }
}

//pertambahan counter sebesar 5
//Apabila angka counter adalah kelipatan 6 dengan pertambahan 5, tuliskan 6 Kelipatan 6
var counter = 1;
for (var counter = 1; counter <101; counter += 5) {
  if(counter % 6 === 0){
  console.log(counter + '  6 Kelipatan 6');
  }
  else
  if (counter % 6 === 1) {
    console.log(counter + '');
  }
}

//pertambahan counter sebesar 9
//Apabila angka counter adalah kelipatan 10 dengan pertambahan 9, tuliskan 10 Kelipatan 10

var counter = 1;
for (var counter = 1; counter <101; counter += 9) {
  if(counter % 10 === 0){
  console.log(counter + '  10 Kelipatan 10');
  }
  else
  if (counter % 10 === 1) {
    console.log(counter + '');
  }
}
