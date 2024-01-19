//Numbers
let veri;
veri = Number ("5")

console.log(typeof veri)
console.log(veri)

/* 
    parseInt(),Number(),Plus sign(+) artı işereti ekleme(String to İnt)
    parseFloat(),Number(),(+)  (String to Float)
    parseInt(). (Float to İnt)
   
*/

veri = parseInt("5.5");   //Ondalık kısmını siliyor.
console.log(veri)
veri = parseFloat("5.5"); //Ondalık kısmıyla beraber göster
console.log(veri)
veri = parseInt("5c");    //C'yi görmezden geliyor.Sayı alıyo
console.log(veri)
veri = parseInt("c5")    // İsnan hatası
console.log(veri)
veri = isNaN("c5")       //Bu sayı degil Verilen değerin sayı olup olmadıgını kontrol ettirme
console.log(veri)
veri = isNaN("5")       //
console.log(veri)

var sayi=15.5876264
veri1 =sayi.toPrecision(5) // Soldan itibaren 3 adet sayıyıal
console.log(veri1)

veri1 =sayi.toFixed(5);  //Virgülden sonraki 3 rakamı alır
console.log(veri1)

veri1 = Math.PI; //Pi sayısını kullanmak için
veri1 = Math.round(); //Ondalıklı sayıyı yuvarlama yakın yere
veri1 = Math.ceil();  //Ondalıklı sayıyı Yukarı yuvarlar Tavan
veri1 = Math.floor(); //Ondalıklı sayıyı Aşagı yuvarlar Taban
veri1 = Math.pow(3,3) //3ün karesini almak için
veri1 = Math.sqrt(81)  //Karekök almak için
veri1 = Math.abs(-50); //Mutlak değer alır
veri1 = Math.min(1,7,9,4,20) // En küçük değeri alır
veri1 = Math.max(1,7,9,4,20); // En büyük değeri alır
veri1 = Math.random(); // 0-1 Arası rasgele sayı
veri1 = Math.random()*10 // 0-10 Arasından rastgele
veri1 = Math.floor(Math.random()*100);//0-100 Arasından 
veri1 = Math.floor(Math.random()*100+1);// 1-100 Arasından 

