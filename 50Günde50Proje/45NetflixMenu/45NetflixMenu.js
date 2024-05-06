const opens = document.querySelector(`.fa-bars`)
const closee = document.querySelector(`.fa-xmark`)
const nav = document.querySelectorAll(`.nav`)



opens.addEventListener("click", () => {
    nav.forEach((e) => e.classList.add("visible"))
    console.log(nav.classList)
})

closee.addEventListener("click", () => {
    nav.forEach((e) => e.classList.remove("visible"))

})