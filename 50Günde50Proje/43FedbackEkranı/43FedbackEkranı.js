const span = document.querySelectorAll(`.material-symbols-outlined`)
const button = document.querySelector("button")
const section = document.querySelector("section")
selectedVote ="Satisfead"


span.forEach(element => {
    element.addEventListener("click", (x) => {
        classlistRemove()
        element.classList.add("active")

        selectedVote = element.nextElementSibling.innerHTML
    })

})


button.addEventListener("click", () => {
    section.innerHTML = `
    <span class="material-symbols-outlined heart">
    favorite
    </span>
    <br>
    <strong>Thank You</strong>
    <br>
    <strong>Feedback: ${selectedVote}</strong>
    <p>We'll use your feddback to improve our customer support</p>
    `
})

function classlistRemove() {
    span.forEach((element) => {
        element.classList.remove("active")
    })
}



