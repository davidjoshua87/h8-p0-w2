
//proxytia next level game

var tahunlahir = 30;//prompt('Masukan Tahun Lahir');
var nama = 'david';//prompt('Masukan Nama');
var peran = 'Petarung';
var umur = 2017 - tahunlahir;
var playerhealth = tahunlahir * (Math.random());
var monsterhealth = tahunlahir * Math.random();
var kodemonster = Math.floor(Math.pow(100, Math.random()));

if(nama === ''){
  var peran = 'Kacung';
}

for(var looping=1; looping<=tahunlahir; looping++){
  if(looping%umur){
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterhealth -= umur;
  }
  else if(looping%kodemonster){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerhealth -= kodemonster;
  }
  else if(looping%umur && looping%kodemonster){
    console.log('Health keduanya bertambah');
    playerhealth += kodemonster;
    monsterhealth += umur;
  }
}
if(playerhealth>monsterhealth){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}
else{
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
