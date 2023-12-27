const btnekle = document.querySelector("#liveToastBtn");
const inputtext = document.querySelector("#task")
const ul = document.querySelector("#list")
const kapat = document.querySelectorAll(".material-symbols-outlined")
const li2 = document.querySelectorAll("li")




btnekle.addEventListener("click", addList);

kapat.addEventListener("click", removeİtem);



function addList(a) {
    if (inputtext.value === "") {
        alert("Lütfen veri giriniz")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputtext.value;
        ul.appendChild(li);
        let span=document.createElement("span")
        span.classList = "material-symbols-outlined"
        span.innerHTML = "close"
        li.appendChild(span)

    }
}
function removeİtem(a){
    if(confirm("Silmek istediginze emin misiniz.")){
        a.target;
        a.target.parentElement.remove()
    } // İlk itemi siliyor yanlızca 
}

/*
li2.forEach(li2 =>{
    li2.addEventListener("click",()=>{
        li2.classList.add("active");
    })
}*/
