// Tarayıcı Depolama Alanları
// SESSİON STORAGE
//Oturum açıldıgında oturum kapatılana kadar kalan bilgiler
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

function addItem(e) {
    sessionStorage.setItem(addKey.value, addValue.value)
}//Ekleme Fonsiyonu

function deleteItem(e){
    sessionStorage.removeItem(deleteKey.value);
}//Silme Fonsiyonu

function clearItem(e){
    sessionStorage.clear();
}//Tümünü Sil Fonsiyonu

// LOCAL STORAGE
// Kalıcı olarak tutulan bilgiler
localStorage.setItem("Prograglama","Javascript") //SetItem ile değer eklenir
localStorage.setItem("bilgisayar",7000)// Rakamlarda String olarak saklı durmaktadır.
const value =localStorage.getItem("bilgisayar")   // getItem ile değer çagırılır
console.log(value)
console.log(typeof value)
//localStorage.clear();                 //Clear ile veriler silinir
//localStorage.remove("7000")           //Diger silme metodu
console.log(localStorage.getItem("ahmet")) // İfadenin local storage içerisinde olup olmadıgını console log ile kontrol etmek

if(localStorage.getItem("bilgisayar")){//İfadeyi İf Blogu ile kontrol etmek
    console.log("Local Storage'da yer almaktadır.")
}else{
    console.log("Local Storage'da yer almamaktadır.")
}

let user = "kodluyoruz" 
localStorage.setItem('userInfo', user)
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))


//JSON.parse() Farklı veri türlerini String ifadeye çevirmek için kullanılır
//JSON.stringify(): Bu fonksiyon, JavaScript nesnelerini JSON biçimine dönüştürmek için kullanılır. Yani, bir JavaScript nesnesini veya diziye JSON biçimine çevirir.


