
//Element Ekleme
const li = document.createElement("li");
li.className = "list-group-item list-group-item-secondary";// Class ekleme
li.setAttribute("title", "new item"); // Atribute ekleme
li.setAttribute("data-id","5").  // Atribute ekleme
const text =document.createTextNode("New İtem") // Yazı metni oluşturma
li.appendChild(text);  // Text yazısını li ye attık
const a = document.createElement("a")
a.setAttribute("href")// A elementine atribüte ekliyoruz.
a.className ="delete-item float-right" // A elemntine class ekleme
a.innerHTML = `<i class="fas fa-times"></i>`; //A elementinin içine metin ekledik
console.log(li);