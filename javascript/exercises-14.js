/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */

var input = ['0001','Roman Alamsyah','Bandar Lampung','21/05/1989','Membaca'];

function dataHandling2(input){
  input.splice(1, 1,'Roman Alamsyah Elsharawy');
  input.splice(2, 1,'Provinsi Bandar Lampung');
  input.splice(4,1,'Pria','SMA International Metro');
  console.log(input);


  var month = input[3];
  var pemisah = month.split('/');
  var bulan = parseInt(pemisah[1]);

  switch(bulan){
    case 1: bulan = 'Januari';
    break;
    case 2: bulan = 'Februari';
    break;
    case 3: bulan = 'Maret';
    break;
    case 4: bulan = 'April';
    break;
    case 5: bulan = 'Mei';
    break;
    case 6: bulan = 'Juni';
    break;
    case 7: bulan = 'Juli';
    break;
    case 8: bulan = 'Agustus';
    break;
    case 9: bulan = 'September';
    break;
    case 10: bulan = 'October';
    break;
    case 11: bulan = 'November';
    break;
    case 12: bulan = 'Desember';
    break;
  }
  console.log(bulan);


  var sorting = month.split('/');
  sorting.sort(function(value1,value2) {
    return value2-value1;
  });
  console.log(sorting);


  console.log(pemisah.join('-'));


  var middlename = input[1];
  var middlename1 = middlename.slice(0,15);
  console.log(middlename1);

}

dataHandling2(input);
