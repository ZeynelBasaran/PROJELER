let isim;
let birthday;
let mix;
let sıralama;
let silmeekleme;
isim = ["Ahmet", "Arda", "Kerem", "Aslı", "Mert"]
birthday = [1990, 1890, 1992, 1999, 2005]
mix = ["ahmet", 1990, "Leyla", 2005, undefined, true, null, ["programlama", "yazılım", 1990]]
sıralama = ["zeynel", 2000, 1992, 2005, "afife", "leyla"]
silmekleme = ["zeynel", "başaran"]

console.log(isim)
console.log(typeof isim); //Türünü göstermek için
console.log(isim.length); //Uzunluk göstermek için

console.log(birthday); // Rakamlardan oluşan arrays
console.log(mix)       // Rakam,String,true ve dizi içerisinde diziden oluşan dizi

console.log(isim[1]); // Diziden eleman çagırmak

isim[1] = "Zeynel";     // Dizideki elemanı degiştirmek
console.log(isim)

isim[6] = "mehmet";     // Diziye index no girerek eleman eklemek 
console.log(isim)

birthday[birthday.length] = "Ensoneklenen" // Dizinin sonuna eleman eklemek
console.log(birthday)

//Array eleman ekleme - silme - degiştirme -terse çevirme
birthday.push(1992);  // Sonuna eklemek
console.log(birthday)

birthday.unshift("Başa eklenene") //Başına eklemek
console.log(birthday);

birthday.pop();   // Dizi içerisindeki son elamanı silme
console.log(birthday);

birthday.shift(); // İlk İndexi siler
console.log(birthday);

let index = birthday.indexOf(1992);  // Dizideki elemanın kaçıncı index oldugunu görmek için
console.log("index:" + index);

isim.reverse();    // Diziyi terse çevirmek index tam terse döner
console.log(isim)

sıralama.sort();   //Dizi deki yılları ve stringleri alfebeye göre sıralama
console.log(sıralama)

let veri;
veri = isim.concat(birthday);  // Dizileri birleştirmek
console.log(veri)

silmekleme.splice(1, 0, "eklenen"); // Diziden index seçerek eleman silme ekleme rakamlarla yerine ekle
console.log(silmekleme)