const username = "zeynel";
const lastname = "başaran";
const age = 10;
const isStudent = true

if (username == "zeynel") {
    console.log("Kullanıcı mevcut")
} else {
    console.log("Kullanıcı mevcut degil")
}

if (isStudent) {
    console.log("Hangi bölünü okuyorsun")
} else {
    console.log("Mesleginiz nedir")
};

if (age > 18) {
    if (isStudent) {
        console.log("Ehliyet alabilirsin")
    } else {
        console.log("Yaşınız yeterli ancak ögrenim durumu yetersiz")
    }
} else {
    console.log("Yaşınız yetersiz");
};

let id = "1e324e2";   // İD Tanımlanmamışsa
if (typeof id != "undefined") {
    console.log("İD:" + id)
} else {
    console.log("İD tanımlanmamış")
};

//ELSE İF koşuluyla oluşturulmuş uzun koşullarda ilk koşulun dogrulu yeterli diger koşullar çalıştırılmaz
var sayi1 = 35
var sayi2 = 30
var sayi3 = 40

if (sayi1 > sayi2 && sayi1 > sayi3){
    console.log("En Büyük Sayı Sayı 1")}
    else if(sayi2 > sayi1 && sayi2 > sayi3) // Koşul uydugu anda bir alt koşulu çalıştırmaz !! 
    { console.log("En büyük Sayı Sayı 2") }
    else { console.log("En büyük Sayı Sayı 3") } // Else e herhangi bir koşul atulmaz !!! İF blogu çalışmadıgında çalışır.

/*
//Öğrencilere puanlarına göre not verebilecek bir kod programı
let sinavScore = Number(prompt("Puanınızı giriniz."));
let not;

if (sinavScore >= 80 && sinavScore <= 100) {
    not = "A";
} else if (sinavScore >= 70 && sinavScore < 80) {
    not = "B";
} else if (sinavScore >= 60 && sinavScore < 70) {
    not = "C";
} else if (sinavScore >= 50 && sinavScore < 60) {
    not = "D";
} else if (sinavScore >= 0 && sinavScore < 50) {
    not = "F";
} else {
    not = "Geçersiz puan girişi.";
}

console.log(`Puanınız ${sinavScore}, notunuz ${not}`);


//MEVSİM KONTRÜLÜ
let ay = prompt("Lütfen bir ay giriniz:").toLowerCase();
if (ay === "eylül" || ay === "ekim" || ay === "kasım") {
    console.log("Mevsim: Sonbahar");
} else if (ay === "aralık" || ay === "ocak" || ay === "şubat") {
    console.log("Mevsim: Kış");
} else if (ay === "mart" || ay === "nisan" || ay === "mayıs") {
    console.log("Mevsim: İlkbahar");
} else if (ay === "haziran" || ay === "temmuz" || ay === "ağustos") {
    console.log("Mevsim: Yaz");
}else {
    console.log("Geçersiz ay girişi");
}
*/



