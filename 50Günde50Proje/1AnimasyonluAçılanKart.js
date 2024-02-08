
let panels = document.querySelectorAll(".panel")


panels.forEach((panel) => {
    panel.addEventListener("click", addActive)
})
function addActive(click) {
    console.log(click.target);
    //removeActive();
    click.target.parentElement.classList.toggle("active")//Toggle kullandıgımız için silme fonk boşa çıktı Varsa sil yoksa ekle anlamına gelmekte 

}
/*
function removeActive() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
        console.log(panel)
    })
}*/

