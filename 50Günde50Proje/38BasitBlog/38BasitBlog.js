const img = document.querySelectorAll(`main div img`)
const nav = document.querySelectorAll(`nav div`)

nav.forEach((element, idx) => {
    element.addEventListener("click", () => {
        deleteClass()
        img[idx].classList.add("active")
        nav.forEach((e) => {e.style.color = "black"})
        nav[idx].style.color = "purple"
    })
})

function deleteClass() {
    img.forEach((e) => {
        e.classList.remove("active")
    })
}
