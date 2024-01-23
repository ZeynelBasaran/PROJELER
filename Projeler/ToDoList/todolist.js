
const addTask = document.querySelector("#btnAddNewTask")
const text = document.querySelector("#txtTaskName")
const deleteAll = document.querySelector("#btnDeleteAll")
const taskList = document.querySelector("#task-list");
const itemss = ["To Do 1", "To Do 2", "To Do 3", "To Do 4"]
const forms = document.querySelector("form")
const close = document.querySelectorAll(".fa-times")



EventListeners()
function EventListeners(){
    forms.addEventListener("submit", newİtems);
    function newİtems(a) {
        if (text.value === "") { alert("Lütfen veri giriniz.") } else {//İf blogu metinsiz yazı girmeyi engelliyor.
            a.preventDefault(); // Sayfanın  yeniden yüklenmesini iptal ediyor.

            //Li elemanını oluşturma
            const liDom = document.createElement("li");
            liDom.innerHTML = `${text.value}`;
            liDom.classList = "list-group-item list-group-item-secondary";

            //A linkini oluşturma
            const ahref = document.createElement("a");
            ahref.setAttribute("href", "#")
            ahref.classList = "delete-item float-right"
            ahref.innerHTML = `<i class="fas fa-times"></i>`;

            //A'yı liye-Li yi UL ye baglama
            liDom.appendChild(ahref);
            taskList.appendChild(liDom);

            text.value = "" // Veri girişi gerçekleştikten sonra inputtaki veriyi silmek için
        }
    }
}

deleteAll.addEventListener("click", deleteAlls)

function deleteAlls(b) {
    if (confirm("Tüm listeyi silmek istediginize emin misiniz.")) {
        for (let i = 0; i < taksList.children.length; i++) {
            taksList.children[i].remove()
        }
    }
}



