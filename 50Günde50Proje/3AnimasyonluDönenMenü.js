
const open = document.querySelector("#open")
const close = document.querySelector("#close")


const newClass = document.querySelector(".container")

open.addEventListener("click",() => newClass.classList.add("show-nav"))
close.addEventListener("click",() => newClass.classList.remove("show-nav"))
