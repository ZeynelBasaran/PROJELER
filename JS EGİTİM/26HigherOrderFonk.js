/*******  ARROW Fonksiyon 
Function anahtar kelimesi yerine => kullanılır
function deneme(n) { n*n }

let deneme = n =>{ n*n } // TEK PARAMETRE Otomatik return var
let deneme1 = (name,surname) =>{`hello ${name} ${surname}`} //BİRDAN FAZLA PARAMETRE 
*/

let toplam;
toplam = [1,2,6,7,8]


let toplama = (...numbers) => {
    console.log(numbers)
}

/************ FOREACH metodu forEach: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir. deneme*/
const numbers = [1,3,5,7,9]
let total = 0 ;  
numbers.forEach(number =>total+=number)
console.log(total)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

/********** MAP:Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.*/
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

/********** FİLTER Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür*/
const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)


/********** REDUCE fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır. */
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

/********** EVERY Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar*/
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?

console.log(areAllStr)

/*
find: İstenilen koşulu karşılayan ilk elemanı geri döndürür.
findIndex: koşulu karşılayan ilk elemanın index değerini döndürür.
some: Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.
sort: sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler









/*Setting time
JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.
--setInterval fonksiyonu ile JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s


--setTimeout ile Javascript'te ileriye dönük çalışacak fonksiyonlar planlayabiliriz.
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak
clearInterval ve clearTimeout iptal fonksiyonları*/