TENTUKAN `luas Rectangle` sama dengan variabel 'Panjang' x variabel 'lebar'
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`"


var length = parseInt(prompt("Enter length of Rectangle : "));
	var width = parseInt(prompt("Enter width of Rectangle : "));
var solving_area = (length * width);
console.log('The Area of Rectangle is ' + solving_area);
