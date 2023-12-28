const btnekle = document.querySelector("#liveToastBtn");
const inputtext = document.querySelector("#task")
const ul = document.querySelector("#list")
const li2 = document.getElementsByTagName("li")
const teklisil = document.querySelectorAll(".material-symbols-outlined")


btnekle.addEventListener("click", addList);

[...teklisil].forEach(item=>{console.log(item)})

function addList(a) {
    if (inputtext.value === "") {
        alert("Lütfen veri giriniz")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputtext.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.classList = "material-symbols-outlined";
        span.innerHTML = "close";
        li.appendChild(span);

    }};

