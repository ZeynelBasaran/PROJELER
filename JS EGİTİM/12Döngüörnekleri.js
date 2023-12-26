let city = ["İstanbul", "Ankara", "İzmir", "Balıkesir"]
let user = [
    {firtName:"Aslı", lastName:"Yılmaz"},
    {firtName:"Bekir",lastName:"Le"},
    {firtName:"Fatma",lastName:"kim"},
    {firtName:"Şahin",lastName:"Olk"},

]

//Arraydeki liste elemanlarını tek tek yazdırmak
//for(let i=0 ; i<city.length; i++){
//    console.log(city[i])
//}

//Arraydeki liste elemanlarını backtip(OPT+Virgül) kullanarak metin oluşturmak
//for(let i=0 ; i<city.length; i++){
//    console.log(`index: ${i}  Şehir: ${city[i]}`)
//};

//For in metodu (Yukarıdakinin aynısı)
//for(let i in city){
//    console.log(`index: ${i}  Şehir: ${city[i]}`)
//};

/*
//FOREACH-ARROW FUNC. Metodu JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.
//arr.forEach(function(value, index, array) { // index ve array kullanmak opsiyoneldir}

city.forEach(function(item){
    console.log(item);
})
const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );
Arrow function gosterimi(ES6). 

city.forEach ( item => {.  // ARROW FONSİYON ÖRNEGİ
    console.log(item)
})
*/

//OBje içerisinde sadece isimleri çagırmak
//for (let i=0; i<user.length ; i++){
//    console.log(user[i].firtName)
//}

//For in metodu
//for (let i in user){
//    console.log(`ìndex: ${i} value: ${user[i].firtName} ${user[i].lastName} `)
//}

//Map metodu (Kullanıların ad ve soyad alarak dizi oluşturmak)
//let value = user.map(function(item){
//    return item.firtName + " "+item.lastName
//})
//console.log(value)
/*
let numbers = [1,3,5,9,11]
let num = numbers.map(function(n){
    return n*n
})
console.log(num)