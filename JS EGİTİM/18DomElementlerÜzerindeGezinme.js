let value;
const todo2 =document.querySelector(".list-group");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");
const todo = document.querySelector(".list-group-item:nth-child(2)");

value = todoList;
value = todo;
value = card;


//CHİLD NODES Tüm alt ögelerle alıyor (Tüm çoçuklar)
value= todoList.childNodes;
console.log(value);

//CHİLDREN  Sadece Lİ leri alıyor alt elemanlar yok (Sadece parentslar)
value= todoList.children;
console.log(value);
value= todoList.children[1];// Sadece indexteki eleman seçildi.
value= todoList.children[todoList.children.length-1];// Son eleman seçildi.
value= todoList.children[1].textContent="Degişen Madde"// Seçilen maddenin içerigini degiştirmek

value=card.children[1].children[0].innerHTML ="Çocugunun çocugunu degiştirme"
console.log(value)


value=todo2;
value =todo2.firstElementChild; // seçilen listede ilk eleman gitmek
console.log(value);
value =todo2.lastElementChild; // seçilen listede son eleman gitmek
console.log(value);
value =todo2.childElementCount; // seçilen listede kaç eleman var görmek için
console.log(value);

value=card;
value=card.parentElement; // Elementin babasına gitmek için
console.log(value)

value=card.parentElement.parentElement; //Elementi dedesi
console.log(value)


value=todo;
console.log(value); //Bulundugumuz yer
value=todo.previousElementSibling; // Bir önceki kardeşe gitme
console.log(value);
value=todo.nextElementSibling;    // Bir sonraki kardeşe gitme
console.log(value);
value=todo.nextElementSibling.nextElementSibling;    // 4.Elemana gitme
console.log(value);














