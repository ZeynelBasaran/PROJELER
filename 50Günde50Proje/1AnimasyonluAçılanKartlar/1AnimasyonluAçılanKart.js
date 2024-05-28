
let panels = document.querySelectorAll(".panel")


panels.forEach((panel) => {
    panel.addEventListener("click", addActive)
})
function addActive(e) {
    removeActive();
    e.target.classList.toggle("active")//Toggle kullandıgımız için silme fonk boşa çıktı Varsa sil yoksa ekle anlamına gelmekte 

}

function removeActive() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}

