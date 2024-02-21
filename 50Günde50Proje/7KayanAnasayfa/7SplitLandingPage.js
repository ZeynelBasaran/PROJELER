let container = document.querySelector(`.container`)
let right = document.querySelector(`#section2`)
let left = document.querySelector(`#section1`)



left.addEventListener(`mouseenter`, () => {
    container.classList.add(`hover-left`)
})
left.addEventListener(`mouseleave`, () => {
    container.classList.remove(`hover-left`)
})


right.addEventListener(`mouseenter`, () => {
    container.classList.add(`hover-right`)
})
right.addEventListener(`mouseleave`, () => {
    container.classList.remove(`hover-right`)
})

