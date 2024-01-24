let list = document.querySelector("#list")
let task = document.querySelector("#task")
let ekleButonu = document.querySelector("#liveToastBtn");
let spann = document.querySelectorAll(".material-symbols-outlined")
let listElemanı = document.querySelectorAll(".text-decoration-line-through")

ekleButonu.addEventListener("click", addİtem)

function addİtem(a) {
    if (task.value === "") {
        alertt(); a.preventDefault();
    } else if (task.value === " ") {
        alertt(); a.preventDefault();
    } else {
        a.preventDefault();
        let liDom = document.createElement("li");
        liDom.classList = "text-decoration-line-through";
        liDom.innerHTML = `${task.value}`;
        list.appendChild(liDom)

        let spanDom = document.createElement("span");
        spanDom.classList = "material-symbols-outlined"
        spanDom.innerHTML = `close`;
        liDom.appendChild(spanDom);
        localStorage.setItem(`${task.value}`,"Javascript")
        task.value = "";
        
    }
}

// Tıklanan öğeyi silme
spann.forEach(function (li) {
    li.addEventListener('click', function () {
        if (confirm("Silmek istediginize emin misiniz.")) {
            this.parentElement.remove();
            localStorage.clear();
            
        }

    })
})

//Liste elemanına active ekleme
listElemanı.forEach(function (li) {
    li.addEventListener("click", function () {
        // "checked" class'ını toggle etme
        this.classList.toggle("checked");
    });
});









function alertt() {
    let al = document.querySelector(".alertt");
    al.innerHTML = `<div class="alert alert-primary" role="alert">
  Lütfen <a href="#" class="alert-link">veri</a> Giriniz
</div>`
}