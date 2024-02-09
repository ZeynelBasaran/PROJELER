let rotateOpen = document.querySelector(".icons1");
let container = document.querySelector(".container");
let rotateClose = document.querySelector(".icons2");

rotateOpen.addEventListener("click",()=>{
    container.classList.toggle("show-nav")
})
rotateClose.addEventListener("click",()=>{
    container.classList.remove("show-nav")
})


