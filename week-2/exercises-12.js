//input "hello world!"
//output
//"!dlrow olleh"

function balikString(str){
  var hasil = '';
    for(var hello = str.length-1; hello >= 0; hello--){
      hasil += str[hello];
  }return hasil;
}
console.log(balikString('hello world!'));
