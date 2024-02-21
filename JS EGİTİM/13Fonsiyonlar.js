/*
Function
function merhaba(){console.log("Fonsiyonu çagır")  }//blog çalışacak komutlar buraya yazılır
merhaba(); Fonsiyon çagırma  // Fonksiyon çağrılmadan çalışmaz.

function merhaba(Parametre kısmı){ burada kullanılabilir}

function deneme1(name , age){
   console.log(`İsim: ${name} Yaş: ${age} `)
}
deneme1("ahmet",37)  Fonksiyonla isim doldurma
deneme1();           İsim ve yaş kısmı boş geldi.

function yasHesapla(dogumYili){
    return 2023- dogumYili ;
}
console.log(yasHesapla (1990))  Yaşı çıkarma
let ageSamet =console.log(yasHesapla (1990));
let ageMehmet= yasHesapla(2000);   Degişken üzerinden yaş hesaplama
console.log(ageMehmet)
*/


function yasHesapla(dogumYili) {
    return 2023 - dogumYili;  //RETURN Fonksiyon sonucu almak için şart fonksiyon döndüktekten sonra sonuç verir. Bir fonksiyonda bir adet return olur.
}
let ageLeyla = yasHesapla(2005)
let ageMahsun = yasHesapla(1992)
console.log(ageLeyla);
console.log(ageMahsun);

function ehliyetHesapla(dogumYili, name){
    let yas = yasHesapla(dogumYili);
   let ehliyet = 18-yas;
    if (yas > 17){
        console.log(`${name} Ehliyet alabilirsin`)
    } else {
        console.log(`${name} Ehliyet alamazsınız ${ehliyet} yılınız var`)
    }
}
ehliyetHesapla(2010, "Esra")
ehliyetHesapla(2000,"Mehmet")


//Immediate Func  Tek seferlik çalışan fonksiyon
(function(name){
    var days = ["Sunday","Monday","Tuesday", "Wednesday","Friday","Saturday",]
    var today = new Date();
    var msg = `Welcome ${name}. Today is ${[today.getDate()]}`
    console.log(msg)
}("Levent"))