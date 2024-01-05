// Strings
const ad = "zeynel"
const soyad = " BAŞARAN"
const yas = "31"
let hobiesbosluk = "Spor Koşu Bisiklet"
let hobiesvirgul = "Spor,Koşu,Bisiklet ve güreş"

//String birleştirme
let veri; 
veri = ad +" " + soyad ;  
console.log(veri)

veri = "zeynel baran" ;
veri +="+ operatörü ile eklendi";  // += Operatörünün kullanmak
console.log(veri)

veri="benim adım " + ad + " " +soyad +' ve ben istanbul\'da yaşıyorum' //  \Kaçış için kullanılır
console.log(veri)

veri = ad.concat(" "+soyad) // (CONCAT) Concat metodu
console.log(veri)

veri = veri.toUpperCase();  // (TOUPPERCASE) String veririni büyük harfe dönüştürür.
console.log(veri)

veri = veri.toLowerCase(); 
console.log(veri);          // (TOLOVERCASE) String veririni küçük harfe dönüştürür.

//veri = veri.substring(0,3); // (SUBSTRİNG) String içerisinde belirledigimiz aralıgı alır
console.log(veri);

//veri = veri.slice(2,5);     //(SLİCE) String içerisinde belirledigimiz aralıgı alır
console.log(veri);

//veri = veri.indexOf("e"); //(İNDEXOF) String içerisinde seçilen karakteri arama
console.log(veri);

veri = veri.replace("zeynel","ahmet"); //(REPLACE) String içerisindeki veriyi degiştirmek
console.log(veri)

veri = veri.length; //(LENGHT) String içerisindeki karakter sayısını belirtir boşluk dahil
console.log(veri)

veri = hobiesbosluk.split(" ");      //(SPLİT) String ifadeyi dizi çevirme boşlukla Array oluşturma
console.log(veri)

veri = hobiesvirgul.split(",");  //(SPLİT) String ifadeyi dizi çevirme virgülle 
console.log(veri)

// (İNCLUDEX) String içerisinde varlık sorgulama mevcutsa true döner.