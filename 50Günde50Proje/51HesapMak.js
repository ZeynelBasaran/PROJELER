let operator1 = document.querySelector("#operatör1");
let operator2 = document.querySelector("#operatör2");
let operator3 = document.querySelector("#operatör3");
let operator4 = document.querySelector("#operatör4");
let operator5 = document.querySelector("#operatör5");

function run(event){
    console.log(`tıklandı `)
}

operator1.addEventListener("click",run())
operator2.addEventListener("click",run())
operator3.addEventListener("click",run())
console.log(operator1)
console.log(operator2)
console.log(operator3)

