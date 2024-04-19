const next = document.querySelector(`.next`)
const prev = document.querySelector(`.prev`)
const images = document.querySelector(`#imgs`)
const img = document.querySelectorAll(`#imgs img`)

let idx = 0

//Zaman ayarı ve oto set edimi
let interval = setInterval(run,3000)
function run(){
    idx++
    changeImage()
}

//Image degişim kısmı
function changeImage(){
    if(idx>img.length-1){
        idx=0
    }else if(idx<0){
        idx = img.length-1
    }

    images.style.transform = `translateX(${-idx*500}px)`
}

next.addEventListener("click",()=>{
    idx++
    changeImage()
    resetInterval()
})

prev.addEventListener("click",()=>{
    idx--
    changeImage()
    resetInterval() 
})

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run,3000)
}




/*
Benim yazdıgım manuel geçiş kodu
const next = document.querySelector(`.next`)
const prev = document.querySelector(`.prev`)
const images = document.querySelectorAll(`.image img`)
const display = document.querySelector(`main .image`)

index = 0

next.addEventListener("click", () => {
    index++;
    if (index < images.length) {
        display.style.transform = `translateX(${index*-500+ "px"})`
    } else {
        index = 0
        display.style.transform = `translateX(${index})`
    }

})

prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = 3
        display.style.transform = `translateX(${index * -500 + "px"})`
    } else {
        display.style.transform = `translateX(${index * -500 + "px"})`
    }

})

*/