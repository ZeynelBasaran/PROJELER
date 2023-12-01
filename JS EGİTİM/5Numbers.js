//Numbers
let veri;
veri = Number ("5")

console.log(typeof veri)
console.log(veri)

veri = parseInt("5.5");   //Ondalık kısmını siliyor.
console.log(veri)
veri = parseFloat("5.5"); //Ondalık kısmıyla beraber göster
console.log(veri)
veri = parseInt("5c");    //C'yi görmezden geliyor.Sayı alıyo
console.log(veri)
veri = parseInt("c5")    // İsnan hatası
console.log(veri)
veri = isNaN("c5")       //Bu sayı degil
console.log(veri)
veri = isNaN("5")       //
console.log(veri)

var sayi=15.5876264
veri1 =sayi.toPrecision(5) // Soldan itibaren 3 adet sayıyıal
console.log(veri1)

veri1 =sayi.toFixed(5);  //Virgülden sonraki 3 rakamı alır
console.log(veri1)

veri1 = Math.PI;
