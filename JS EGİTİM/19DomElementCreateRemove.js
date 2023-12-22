
//         Element Ekleme
const li = document.createElement("li");
li.className = "list-group-item list-group-item-secondary";// Class ekleme
li.setAttribute("title", "new item"); // Atribute ekleme
li.setAttribute("data-id", "5"); // Atribute ekleme
const text1 = document.createTextNode("New İtem") // Yazı metni oluşturma
li.appendChild(text1);  // Text yazısını li ye attık
li.textContent // metin yazısı atama inputtan da çekilebilir.

const a = document.createElement("a");
a.setAttribute("href", "#");// A elementine atribüte ekliyoruz.
a.className = "delete-item float-right";// A elemntine class ekleme
a.innerHTML = `<i class="fas fa-times"></i>`; //A elementinin içine metin ekledik
li.appendChild(a); //Li'ye eleman ekleme
document.querySelector("#task-list").appendChild(li); // Li yi ekrana eklemek
console.log(li);
console.log(a);

//            Element Silme
const taksList = document.querySelector("#task-list");
// Komple listeyi silmek taksList.remove()
// Todo 4 Silindi alt elemanlarıda sayıyor taksList.childNodes[7].remove(); 
// Direkt parentsları sayarask todo1 silindi taksList.children[1].remove();
//Alternatif silim taksList.removeChild(taksList.children[2]);
// Class silindi. taksList.children[1].removeAttribute("class");
for (let i = 0; i < taksList.children.length; i++) {
    taksList.children[i].removeAttribute("class");
} // For metodu ile tüm elemanların class'ını silmek


console.log(taksList)
