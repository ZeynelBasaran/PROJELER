/*let sayi = Number(prompt("Bir sayı giriniz."))
console.log(typeof sayi)


if (sayi%2==0){console.log("Bu sayı çift sayıdır")}else{
    console.log("Sayı tek sayıdır.")
}

let sayi = Number(prompt("Ürün fiyatı"));
let indirim =Number(prompt("İndirim Oranını yüzde olarak giriniz")); 

console.log(`Ürün Fiyatı ${sayi} - İndirim Oranı ${indirim} - Ürün fiyatı ${(sayi)-(sayi/100)*indirim} `)

//Verilen 2 Sayı arasındaki tek rakamları yazdıran program
let sayi1 = Number(prompt("Bir sayı giriniz"));
let sayi2 = Number(prompt("Bir sayı giriniz"));
if(sayi1<=sayi2){
    for(i=sayi1; i<=sayi2 ;i++)
        if(i%2==1){console.log(i)}}
//Mutlak değerve karakök alma
let sayi1 = Number(prompt("Bir sayı giriniz"));
let mutlakveri= Math.abs(sayi1)
let karakok = Math.sqrt(sayi1)
console.log(mutlakveri)
console.log(karakok) 

//Girilen bir ismi karakter sayısı kadar ekrana yazdıran programın -
let metin = prompt("Bir metin giriniz.");
for (i=0 ;i<=metin.length-1 ;i++){console.log(metin[i])}

//Sistemde rastgele bir sayı oluşturup hem bu sayıyı ve bu sayının tek mi çift mi olduğunu ekrana yazdıran program
veri1 = Math.floor(Math.random()*100)
if(veri1%2==0){console.log(`Merhaba Rasgele üretilen sayı ${veri1} ve bu sayı çifttir.`)}else{
    console.log(`Merhaba Rasgele üretilen sayı ${veri1} ve bu sayı tektir.`)}

//Faktöriyel Hesabı
let sonuc = 1;
let veri= Number(prompt("Bir rakam giriniz."))
for (i=1; i<=veri ;i++) {
   sonuc = i*sonuc
}
console.log(sonuc)   

//Rasgele 5 Adet çift üretimi
veri2 = Math.floor(Math.random()*100);//0-100 Arasından 
for(i=1; i<6 ;i++){
    console.log(`${i} .Sayı ${(Math.floor(Math.random()*100)*2)}`);
}

//Girilen Sayı Asal Sayımı testi
let sayi = Number(prompt("Bir Rakam Giriniz."));
let asal = true;
for (let i = 2; i <= sayi - 1; i++) {
  if (sayi % i === 0) {
    asal = false;
    break;
  }
}
if (asal) {
  console.log(`${sayi} Asaldır.`);
} else {
  console.log(`${sayi} Asal Değildir.`);
}
*/


