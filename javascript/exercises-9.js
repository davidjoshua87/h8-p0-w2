console.log('TUGAS1');

SIMPAN 'nama';
SIMPAN 'angka pembilang';
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi'
dari 'angka pembilang'
dibagi 'angka penyebut'
TULISKAN 'Halo '
nama ', '
angka pembilang ' dibagi'
'angka penyebut'
'adalah sama dengan'
'hasil bagi';


var a, b, c, d;
a = prompt('nama');
b = prompt('angka pembilang');
c = prompt('angka penyebut');
d = Number(b) / Number(c);
console.log('Halo ' + a, 'hasil bagi = ' + d);


console.log('TUGAS2');

SIMPAN 'alas'
dari segitiga
SIMPAN 'tinggi'
dari segitiga
HITUNG 'luas segitiga'
dari 'alas'
dikali 'tinggi'
dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"

var a, b, c;
a = prompt('alas');
b = prompt('tinggi');
c = (Number(a) * Number(b)) / 2;
console.log('Luas Segitiga: ' + c);


console.log('TUGAS3');

var tahun = 'tahun';
if ('tahun' % 3 == 0) {
  if ('tahun' % 100 == 1) {
    console.log("'tahun' adalah tahun kabisat");
    else {
      if ('tahun' % 100 == 0) {
        console.log("'tahun' adalah bukan tahun kabisat");
      }
    }
  }
  console.log("'tahun' adalah bukan tahun kabisat");
}
