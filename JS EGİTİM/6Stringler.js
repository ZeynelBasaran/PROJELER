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

veri = ad.concat(" "+soyad) // Concat metodu
console.log(veri)

veri = veri.toUpperCase();  // Hepsi büyük harf
console.log(veri)

veri = veri.toLowerCase(); 
console.log(veri);          // Hepsi küçük harf

//veri = veri.substring(0,3); // String içerisinde belirledigimiz aralıgı alır
console.log(veri);

//veri = veri.slice(2,5);     // String içerisinde belirledigimiz aralıgı alır
console.log(veri);

//veri = veri.indexOf("e"); // String içerisinde seçilen karakteri arama
console.log(veri);

veri = veri.replace("zeynel","ahmet"); // String içerisindeki veriyi degiştirmek
console.log(veri)

veri = veri.length;                 // String ifadenin kaç harften oluştuğunu ifade eder
console.log(veri)

veri = hobiesbosluk.split(" ");         // String ifadeyi dizi çevirme boşlukla
console.log(veri)

veri = hobiesvirgul.split(",");  // String ifadeyi dizi çevirme virgülle 
console.log(veri)