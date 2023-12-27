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
console.log(typeof isim); //Türünü göstermek için (TYPEOF)
console.log(isim.length); //Arrayin kaç elemandan oluştugunu görmek için (LENGHT)

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
birthday.push(1992);  // Sonuna eklemek (PUSH)
console.log(birthday)

birthday.unshift("Başa eklenene") //Başına eklemek (UNSHİFT)
console.log(birthday);

birthday.pop();   // Dizi içerisindeki sondaki elemanı listeden çıkatrmak (POP)
console.log(birthday); //Bunu ayrı bir degişkene içine alabiliriz. let lastİtem= birtday.pop()


birthday.shift(); // Başdaki öğeyi listeden çıkarmak içim (SHİFT)
console.log(birthday);

let index = birthday.indexOf(1992);  // Dizideki elemanın kaçıncı index oldugunu görmek için (İNDEXOF)
console.log("index:" + index);

isim.reverse();    // Diziyi terse çevirmek index tam terse döner (REVERSE)
console.log(isim)

sıralama.sort();   //Dizi deki yılları ve stringleri alfebeye göre sıralama (SORT)
console.log(sıralama)

let veri;
veri = isim.concat(birthday);  // Dizileri birleştirmek (CONCAT)
console.log(veri)

silmekleme.splice(1, 0, "eklenen"); // (SPLİCE) metot diziye hem eleman eklemek için hem de eleman silmek için. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
console.log(silmekleme)

//(İSARRAY) sorgusu ile degişken içerisindeki bilginin array olup olmadıgı kontrol edilir.
let arrayListDeneme = ["1","2","ahmet"]
console.log(typeof(arrayListDeneme)) // Object oldugunu belirtiyor

console.log(Array.isArray(arrayListDeneme)) // Direkt Array olup olmadıgını sorgulama
console.log("[]:",Array.isArray([])) // Direkt içine gönderip soruyor bu array mi ?
console.log("1:",Array.isArray(1))
console.log("true :",Array.isArray(true))

console.log(arrayListDeneme[arrayListDeneme.length-1]) //Dizi içerideki son elemana ulaşma
console.log(arrayListDeneme[Math.floor(arrayListDeneme.length /2)])// Ortadaki elemanı verdi

//(İNCLUDES) metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.
const alisverisListem = ["elma", "ekmek", "süt"];
const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);
const armutVar = alisverisListem.includes("armut");
console.log(armutVar);

//(TOSTRİNG) Array içerisindeki bilgiyi string e çevririr.
console.log(alisverisListem.toString())

//(JOİN)Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.
console.log(alisverisListem.join("---")) 

//ES6 ile gelen liste birleştirme 
let list1=[1,2,3]
let list2=[4,5,6]
let alllist = [... list1 , ...list2]
console.log(alllist)

//(FİLTER) dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.
const list5 = ["mic","csble","speaker","Desktop Pc","sErvEr","MouSe",]
const harf5denaz = list5.filter(item => item.length <6)
console.log(harf5denaz)

const usere= [
    {fullName:"Ayşe Sümer ", isActive:false},
    {fullName:"Metin Balkan ", isActive:true},
    {fullName:"Leyla Zana ", isActive:false},
    {fullName:"obi Van ", isActive:true}
]
const active= usere.filter(user=>user.isActive) //Sadece aktif elemanları getirdi.
console.log(active)

//(MAP) 
const NEW_USER = list5.map(user => user.toLowerCase()) ;
console.log(NEW_USER)


const USERS_OBJ=list5.map(item =>{ 
    return { 
        username: item, 
        shortname: `${item[0]}`, 
        NewName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    };
});
console.log(USERS_OBJ);
