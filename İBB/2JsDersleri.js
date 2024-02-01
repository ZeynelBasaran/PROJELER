
let otTur = prompt("Otun türü Kekik/Nane/Fesleğen/Reyhan");
let OtMiktar = Number(prompt("Kaç Adet Sipariş etmek istersiniz."));

switch (otTur) {
    case "kekik":
        birimfiyat = 50;
        indirimOranı = 0.1;
        fiyatHesapla(birimfiyat, indirimOranı);
        break;
    case "nane":
        birimfiyat = 80;
        indirimOranı = 0.2;
        fiyatHesapla(birimfiyat, indirimOranı);
        break;
    case "feslegen":
        birimfiyat = 100;
        indirimOranı = 0.1;
        fiyatHesapla(birimfiyat, indirimOranı);
        break;
    case "reyhan":
        birimfiyat = 90;
        indirimOranı = 0.3;
        fiyatHesapla(birimfiyat, indirimOranı);
        break;
    default :
    console.log("Hatalı Giriş") 
}
function fiyatHesapla(a, b) {
    let taze = confirm("Taze mi Evet / Hayır");
    if (taze == true) {
        console.log(`Sipariş ${otTur} Tazedir.
        Sipariş Sayısı :${OtMiktar} 
        Birim fiyatı${birimfiyat} TL 
        Fiyat:${birimfiyat * OtMiktar} TL
        KDV   ${(birimfiyat * OtMiktar) * 0.1} TL
        Yekün ${(birimfiyat * OtMiktar) * 1.1} TL `)
    } else {
        console.log(`Sipariş ${otTur} Taze Degildir.
        Sipariş Sayısı :${OtMiktar}  
        Birim fiyatı${birimfiyat}
        Fiyat:${(birimfiyat * OtMiktar) - (birimfiyat * OtMiktar * indirimOranı)} TL
        KDV :${((birimfiyat * OtMiktar) - (birimfiyat * OtMiktar * indirimOranı)) * 0.1} TL
        Yekün :${((birimfiyat * OtMiktar) - (birimfiyat * OtMiktar * indirimOranı)) * 1.1} TL
    `)
    }

}

/*
let deger = Math.floor(Math.random() * 100);
function yenidendene() {
    const tahmin =Number(prompt("Lütfen bir sayı giriniz."));
    console.log(tahmin)
    if (tahmin > deger) {
        console.log("Degeri düşürün")
        yenidendene()
    } else if (tahmin == 0) {
        console.log("Oyundan çıkıldı");
    } else if (tahmin < deger) {
        console.log("Degeri yükseltin")
        yenidendene()
    } else if (tahmin == deger) {
        console.log("Tebrikler doğru bildiniz.")
    } else { console.log("Tanımsız") }
};
yenidendene()

try {    yazdır("merhaba")
 //Sistemi çökertme hata verme ihtimali olan kodları yazıp kontrol etmek için try içerisine atabiliriz.
     } catch(hata){
 console.error()
}

*/


