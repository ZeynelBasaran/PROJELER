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

// (CONCAT) Concat metodu stringleri birleştirme
veri = ad.concat(" "+soyad) 
console.log(veri)

// (TOUPPERCASE) String veririni büyük harfe dönüştürür.
veri = veri.toUpperCase();  
console.log(veri)

// (TOLOVERCASE) String veririni küçük harfe dönüştürür.
veri = veri.toLowerCase(); 
console.log(veri);          

// (SUBSTRİNG) 
//veri = veri.substring(0,3); String içerisinde belirledigimiz aralıgı alır.Slice ile aynı özelliktedir.
console.log(veri);

// (SLİCE)
//veri = veri.slice(2,5);      String içerisinde belirledigimiz aralıgı alır.Tek bir değer verilirse ordan itibaren başlar
console.log(veri);

// (İNDEXOF)
//veri = veri.indexOf("e");  String içerisinde seçilen karakteri arama
console.log(veri);

// (REPLACE)
veri = veri.replace("zeynel","ahmet"); // String içerisindeki veriyi tespit edip degiştirmek için
console.log(veri)

// (LENGHT)
veri = veri.length; // String içerisindeki karakter sayısını belirtir boşluk dahil
console.log(veri)

// (SPLİT)
veri = hobiesbosluk.split(" ");     // String ifadeyi dizi çevirme boşlukla Array oluşturma
console.log(veri)

veri = hobiesvirgul.split(",");  // String ifadeyi diziye çevirme virgülle 
console.log(veri)

// (İNCLUDEX) String içerisinde varlık sorgulama mevcutsa true döner.
// (TRİM) String içerisindeki boşlukları silmek için