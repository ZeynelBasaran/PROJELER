const up = document.querySelector(`.up`)
const down = document.querySelector(`.down`)
const left = document.querySelector(`.left`)
const right = document.querySelector(`.right`)
const container = document.querySelector(`.container`)
const slides = right.querySelectorAll(`div`).length;

let activeSlideIndex = 0

left.style.top= `-${(slides-1)*100}vh`

//Yukarı ve aşagı butonların fonk. 
down.addEventListener("click", () => gorseldegis(`down`))
up.addEventListener("click", () => gorseldegis(`up`))

function gorseldegis(direction) {
    const contayukseklik = container.clientHeight//Containerin max yüksekligini alarak ekran pikselini revize etmekte


    if (direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex > slides - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slides - 1

        }

    }

    //Sol ve Sağ Resmin x ve y ekseninde piksellerini göstermek için 
    right.style.transform = `translateY(-${activeSlideIndex * contayukseklik}px)`

    left.style.transform = `translateY(${activeSlideIndex * contayukseklik}px)`



}



