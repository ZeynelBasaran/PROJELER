const ileri = document.querySelector(`.material-symbols-outlined.ileri`)
const geri = document.querySelector(`.material-symbols-outlined.geri`)
const body = document.body;
const slides = document.querySelectorAll(`.slide`)

let activeSlide = 0;

ileri.addEventListener("click", () => {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0  
    }
    bodySlide()
})
geri.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1 
    }
    bodySlide()
})

function bodySlide() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    activeDiv()
}

function activeDiv() {
    slides.forEach((slide) => slide.classList.remove("active"))

    slides[activeSlide].classList.add("active")
}

