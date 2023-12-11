
//Butono tıklandıgığında consol log yazısı
const btn = document.querySelector("#btnDeleteAll")
//btn.addEventListener("click",function(){
//    console.log("Butono tıklandı")
//});

//Fonsiyonla 2 farklı buton için click eventi
//btn.addEventListener("click", btnClick);
//function btnClick() {
//    console.log("Butono tıklandı.");
//}
//const btn2 = document.querySelector("#btnAddNewTask")
//btn2.addEventListener("click", btnClick);

//Butono tıklandıgında refresh özelligini iptal etmek için aynı zamanda tıklanan butonun özelliklerini çagırmak için 
btn.addEventListener("click", function (a) {
    let value;
    value = a;// Anın özelliklerini getirdi.
    value = a.target; // Hangi butona tıklandıgını getiriyor
    value = a.target.id ; // A nın İD sini verir 
    value = a.target.classList // A nın classını verir
    value = a.type // Tipi
    a.preventDefault;
    console.log(value)

})


