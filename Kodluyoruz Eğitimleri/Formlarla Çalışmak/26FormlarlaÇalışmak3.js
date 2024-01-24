let submit = document.querySelector("#submit")
let ul = document.querySelector("#userList")
let username = document.querySelector("#username")
let score = document.querySelector("#score")
let clear = document.querySelector("#reset")
let divAlert = document.querySelector(".divAlert");

submit.addEventListener("click", addİtem)
clear.addEventListener("click", clearAll)

function addİtem(a) {

    if (score.value === "") {
        divAlert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Eksik Bilgi Girdiniz</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        a.preventDefault()

    } else if (username.value=== "") {
        divAlert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Eksik Bilgi Girdiniz</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        a.preventDefault()

    } else {
        a.preventDefault();
        const madde = document.createElement("li");
        madde.innerHTML = ` ${username.value} `
        madde.classList = "list-group-item d-flex justify-content-between align-items-center"
        ul.appendChild(madde);
        const puan = document.createElement("span");
        puan.classList = "badge bg-primary rounded-pill"
        puan.innerHTML = ` ${score.value} `
        madde.appendChild(puan);
        username.value = ""
        score.value = ""
    }

}
function clearAll(b) {
    ul.innerHTML = " "

}



