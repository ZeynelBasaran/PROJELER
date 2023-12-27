
const addTask = document.querySelector("#btnAddNewTask")
const text = document.querySelector("#txtTaskName")
const deleteAll = document.querySelector("#btnDeleteAll")
const taskList = document.querySelector("#task-list");
const itemss= ["To Do 1","To Do 2","To Do 3","To Do 4"]


addTask.addEventListener("click", newİtems);
taskList.addEventListener("click", deleteİtem);
deleteAll.addEventListener("click", allremove);

function newİtems(a) {
    if (text.value === "  ") {
        alert("Lütfen veri giriniz")
    }else{//Boş girişi önlemek için

    //Li oluşturma
    let liDom = document.createElement("li");
    liDom.className = "list-group-item list-group-item-secondary";
    liDom.innerHTML = `${text.value} <a href="#" class="delete-item float-right"><i class="fas fa-times"></i></a>`;
    taskList.appendChild(liDom);
    text.value = "" // Veri girişi sonrası inputun sıfırlanması için
    //Sayfanın her seferinde yenilenmesini önlemek için
    a.preventDefault();}
}

function deleteİtem(a) {
    if (confirm("Silmek istediginze emin misiniz")) {
        if (a.target.className === "fas fa-times") {
            console.log(a)
            a.target.parentElement.parentElement.remove()
        }
    }
    a.preventDefault()
}

function allremove(b) {
    if (confirm("Tüm Elemanları silmek istediginze emin misiniz")) {
    taskList.childNodes.forEach(function (item){
        if(item.nodeType ===1){item.remove();}
    })
    //tasklist.innerHTML =""; Alternatif yöntem
    }
}



/*






localStorage.setItem(`${text.value}`,"2");


/*text.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

function addItem(e) {
    sessionStorage.setItem(text.value,"2")
}//Ekleme Fonsiyonu

function deleteItem(e){
    sessionStorage.removeItem(deleteKey.value);
}//Silme Fonsiyonu

function clearItem(e){
    sessionStorage.clear();
}//Tümünü Sil Fonsiyon*/
