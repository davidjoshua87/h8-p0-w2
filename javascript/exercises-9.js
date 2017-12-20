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

tahun = prompt ('tahun');
if (tahun % 4 == 0) {
  if (tahun % 100 == 1) {
    console.log('tahun adalah tahun kabisat');
  }
    else
      if (tahun % 400 == 0) {
        console.log('tahun adalah tahun kabisat');
      }
      else {
        console.log('tahun adalah bukan tahun kabisat');
      }
  else {
    console.log('tahun adalah bukan tahun kabisat');
  }
}
