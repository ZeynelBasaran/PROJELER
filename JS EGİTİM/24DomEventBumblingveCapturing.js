
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card2 = document.querySelector(".card");
const container1 = document.querySelector(".container");

/*
Bumbling Form girişi yaparken consol ekranında içten dışa dogru diger elementlerin de çalışması
form.addEventListener("click", function(e){
    console.log("form");
    e.stopPropagation(e);Burda iptal edebiliyoruz.
});
cardBody.addEventListener("click", function(e){
    console.log(".card-body");
    e.stopPropagation(e);
});
card2.addEventListener("click", function(e){
    console.log(".card");
    e.stopPropagation(e);
});
container1.addEventListener("click", function(e){
    console.log(".container1");
    e.stopPropagation(e);
});  
*/

/*
Event Campturing (Dıştan içe doğru)
form.addEventListener("click", function (e) {
    console.log("form");
    e.stopPropagation(e);
}, true);
cardBody.addEventListener("click", function (e) {
    console.log(".card-body");
    e.stopPropagation(e);
}, true);
card2.addEventListener("click", function (e) {
    console.log(".card");
    e.stopPropagation(e);

}), true;
container1.addEventListener("click", function (e) {
    console.log(".container1");
    e.stopPropagation(e);

}, true);
*/

/*
const deleteItems = document.querySelectorAll(".fa-times");
deleteItems.forEach(function (item) {
    items.addEventListener("click", function (e) {
        console.log(e.target);
    })

});
*/

//Seçilenin silinmesi
const ul = document.querySelector("ul")
ul.addEventListener("click",function(e){
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
})
