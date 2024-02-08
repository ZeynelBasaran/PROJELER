
//         Element Ekleme
const li = document.createElement("li"); // Element oluşturduk

li.className = "list-group-item list-group-item-secondary";// Class ekleme
li.setAttribute("title", "new item"); // Atribute ekleme
li.setAttribute("data-id", "5"); // Atribute ekleme
li.setAttribute(`class`,`title`) // Set atribut ile Class Ekleme
li.appendChild// Arkasına ekleme 
li.prepend //Önüne ekleme

const text1 = document.createTextNode("New İtem") // Yazı metni oluşturma
li.appendChild(text1);  // Text yazısını li ye attık
li.textContent =""// li'ye direkt text metni ekleme bu direkt metin ekler HTML ETİKETİ çalışmaz

const a = document.createElement("a");
a.setAttribute("href", "#");// A elementine atribüte ekliyoruz.
a.className = "delete-item float-right";// A elemntine class ekleme
a.style.fontSize = '24px'  // Style ile özellik verme
a.innerHTML = `<i class="fas fa-times"></i>`; //A elementinin içine metin ekledik bunda HTML ETİKETİ çalışır
li.appendChild(a); //Li'ye eleman ekleme
document.querySelector("#task-list").appendChild(li); // Li yi ekrana eklemek
console.log(li);
console.log(a);

//            Element Silme
const taksList = document.querySelector("#task-list");
taksList.remove()// Elemanını kendisi seçip 
tasklist.removeChild(h1)//Seçtigimiz Alt elemanarını siler üst elemanı seçmek gerekiyor. Elemanı belirt
taskList.innerHTML ="" // Farklı bir yöntem

// Todo 4 Silindi alt elemanlarıda sayıyor taksList.childNodes[7].remove(); 
// Direkt parentsları sayarask todo1 silindi taksList.children[1].remove();
//Alternatif silim taksList.removeChild(taksList.children[2]);
// Class silindi. taksList.children[1].removeAttribute("class");
for (let i = 0; i < taksList.children.length; i++) {
    taksList.children[i].removeAttribute("class");
} // For metodu ile tüm elemanların class'ını silmek

//      Elementi mouse ile seçme
taskList.addEventListener("click",removeİtem)

function removeİtem(a){
    console.log(a.target)// Target ile elemnti seçme
}
