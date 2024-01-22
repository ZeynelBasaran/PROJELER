/*
switch ifadesi kullanılırken, her durum (case) bir değerle eşleşmelidir. Ancak sizin yazdığınız kodun durumları bir karşılaştırma ifadesi içeriyorsa İF ile yazılmalıdır.

Ayrıca, karşılaştırma ifadeleri karmaşık hale geldiğinde, bunları ayrı if ifadeleri ile kontrol etmek daha açık ve kolay anlaşılır olabilir.

 switch ifadesi tek bir değeri kontrol eder. Bu nedenle, ifadeleri belirli aralıklar veya koşullar içeren bir switch ifadesi oluşturmak bazen karmaşıklığa neden olabilir
*/

let islem = 1;

switch (islem) {
    case 1: 
        console.log("işlem 1'e eşittir")
        break; // Break konmazsa diğer koşullarda çalışır.
    case 2:
        console.log("işlem 2'ye eşittir")
        break;
    case 3:
        console.log("işlem 3'ye eşittir")
        break;
    default: // Hiç bir koşul sağlanmazsa çalışacak
        console.log("Rakam yok");

}
let zaman =new Date();

console.log(zaman.getDate());
let zaman1= zaman.getDate();
console.log(zaman1);
let day=zaman1

switch (true) {
    case 0 < day && day <= 10:
    console.log("Ayın ilk 10 günü içerisindesiniz")
    break;
    case 10 < day && day <= 20:
    console.log("Ayın ortanca 10 günü içerisindesiniz")
    break;
    case 20 < day && day <= 31:
    console.log("Ayın son 10 günü içerisindesiniz")
    break;
    default:
    console.log("Rakam yok");

}
//Aşagıdaki örnek karşılatışrma ifadeleri içerdigi için İF ile yazılması daha mantıklıydı örnek olarak genede yazdık.
let sinavScore = Number(prompt("Puanınızı giriniz."));
let not;

switch (true) {
    case sinavScore >= 80 && sinavScore <= 100:
        not = "A";
        break;
    case sinavScore >= 70 && sinavScore < 80:
        not = "B";
        break;
    case sinavScore >= 60 && sinavScore < 70:
        not = "C";
        break;
    case sinavScore >= 50 && sinavScore < 60:
        not = "D";
        break;
    case sinavScore >= 0 && sinavScore < 50:
        not = "F";
        break;
    case sinavScore >= 102:
        not = "GEÇERSİZ NOT 1";
        break;
    case sinavScore < 0:
        not = "GEÇERSİZ NOT 2";
        break;
    default:
        not = "Geçerli bir puan giriniz.";
}

console.log(`Puanınız ${sinavScore} Geçme Notunuz ${not}'dır.`);

