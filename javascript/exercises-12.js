//input "hello world!"
//output
//"!dlrow olleh"

function balikString(str){
  var penampung = '';
    for(var hello = str.length-1; hello >= 0; hello--){
      penampung += str[hello];
  }return penampung;
}
console.log(balikString('hello world!'));
