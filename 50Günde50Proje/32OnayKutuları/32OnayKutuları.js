const box = document.querySelectorAll(`.box`);
const good = document.querySelector(`.good`)
const cheap = document.querySelector(`.cheap`)
const fast = document.querySelector(`.fast`)

box.forEach(element => {
    element.addEventListener("click", addClass)
    
});

function addClass() {
    this.classList.toggle("active");
}

fast.addEventListener("click", () => {
    if(cheap.classList.contains("active")&&good.classList.contains("active")){
        cheap.classList.remove("active")
    }
})

cheap.addEventListener("click",()=>{
    if(good.classList.contains("active")&&fast.classList.contains("active")){
        good.classList.remove("active")
    }
})
good.addEventListener("click",()=>{
    if(cheap.classList.contains("active")&&fast.classList.contains("active")){
        fast.classList.remove("active")
    }
})


