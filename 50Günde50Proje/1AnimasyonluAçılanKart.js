
let panels = document.querySelectorAll(".panel")


panels.forEach((panel) => {
    panel.addEventListener("click", addActive)
})

function addActive(click) {
    console.log(click.target);
    removeActive();
    click.target.parentElement.classList.add("active")

}

function removeActive() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
        console.log(panel)
    })
}


