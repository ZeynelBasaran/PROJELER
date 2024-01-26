let kfiyat = "50"
let nfiyat = "80"
let ffiyat = "100"
let rfiyat = "90"

let sipariş1 = prompt("Hangi Otu istersiniz kekik ,nane , fesleğen ve reyhan")

if (sipariş1 == "kekik") {
    let adet = prompt("Lütfen adet giriniz");
    let tazelik = confirm ("Ot Taze mi")
    if (tazelik == true) {
        console.log(`Ürün Bilgisi = ${sipariş1} 
        İşlem Tutarı = ${kfiyat*adet}
        KDV %10 ${(kfiyat*adet)*0.10}
        Genel Toplam ${(kfiyat*adet)*1.10}`)}
        else{
        console.log(`Ürün Bilgisi = ${sipariş1} 
        İşlem Tutarı = ${(kfiyat*adet)*0.9}
        KDV %10 ${(((kfiyat*adet)*0.9)*0.1)}
        Genel Toplam ${((kfiyat*adet)*0.9)*1.10}`)}
   }else if(sipariş1 == "nane"){ }








