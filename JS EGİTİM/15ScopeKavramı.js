/*
scope = kapsam
var => functon scope => global scope (Block içindede olsa ulaşılabilir)
let => block scope  (Block içinde kaldımı erişilemez)
const => block scope
https://www.youtube.com/watch?v=kjLv-sIyVa8
*/


/*              GLOBAL SCOPE
var veri1 = 5;   //Global Scope
let veri2 = 10;
const veri3 = 15;

function fonksiyon1() {
    var veri1 = 30;   //Fonksiyon içerisindeki veriler dışarıyı ezdi içerideki 
    let veri2 = 60;  // veriyi baz aldı.
    const veri3 = 90;
    console.log(veri1, veri2, veri3)
}
fonksiyon1()
console.log(veri1, veri2, veri3);  //Buradaki veri ise Global Scope'dan
*/

//             BLOCK SCOPE (bir degişkenin hem block için hem dışı için VAR kullanılır)
if (true) {
    var a = 10;
    let b = 20; 
    const c = 30;
}
console.log(a)  //Var ile oluşturulan değer block dışındada sürmekte ve degeri almakta
//console.log(b) //Block dışında var olamıyor
//console.log(c) //Block dışında var olamıyor

if (true) {
    var veri1 = 10;
    let veri2 = 20;
    const veri3 = 30;
  
}
console.log(veri1, veri2, veri3); //Veri2veVeri3 Globaldan veri1 ise 10 olarak geldi. Var ile oluşturulan değer en son degişkenden gelir.