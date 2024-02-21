
const addTask = document.querySelector("#btnAddNewTask")
const text = document.querySelector("#txtTaskName")
const deleteAll = document.querySelector("#btnDeleteAll")
const taskList = document.querySelector("#task-list");
const itemss = ["To Do 1", "To Do 2", "To Do 3", "To Do 4"]
const forms = document.querySelector("form")
let todos;






EventListeners()
function EventListeners() {
    forms.addEventListener("submit", newİtems); //Submit butonuyla item ekleme 
    deleteAll.addEventListener("click", deleteAlls); //Tüm elemanları silme fonksiyonu
    taskList.addEventListener("click", remove); // Eleman silme fonskiyonu


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

    function deleteAlls(b) {
        if (confirm("Tüm listeyi silmek istediginize emin misiniz.")) {
          /* for (let i = 0; i <= taskList.children.length; i++) {
                  taskList.childNodes[i].remove()
              } 
          taskList.childNodes.forEach(function (item) {
                if (item.nodeType === 1) {
                    item.remove();
                }
            }) */  //Yukarıdaki 2 koda tamamiyle silmiyor. hatalı

            taskList.innerHTML ="" //Tüm listeyi silmek için farklı bir yöntem
        }
    }

    function remove(c) { //Target ile tıklanan yerin class değeri seçtigimiz class ile eşleşiyorsa elementi parentın parentını alarak onay ekranıyla siliyoruz.
        if (c.target.className === "fas fa-times") {
            if (confirm("Bu Elemanı silmek istediginize emin misiniz?")) {
                c.target.parentElement.parentElement.remove();
            }
        }
    }

}




