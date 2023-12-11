// Yeni Element oluşturulup - oluşturulan olan elemeni var olan degiştirmek
const cardHeader = document.querySelector(".card-header")
const h2 = document.createElement("h2")
h2.setAttribute("class", "card-header")
h2.appendChild(document.createTextNode("Yeni Logo"))
const parent = document.querySelector(".card")
parent.replaceChild(h2, cardHeader);
console.log(cardHeader)

// Claslarda Güncelleme
const taskList = document.querySelector("#task-list");
let value;
link= taskList.children[0].children[0];// Task listin 2 alt childi A'dayız
console.log(link);
value = link.className;  // Class isimleri 
console.log(value);
//value = link.classList;  // Class isimlerini list olarak çekmek
//console.log(value);
//value = link.classList[1];  // Class isimlerini tek tek çagırmak
//console.log(value);

link.classList.add("new"); // Yeni class eklemek
//linl.classList.remove("new") Class silmek için

value = link.getAttribute("href"); //Hrefe erişildi.
console.log(value);
value = link.setAttribute("href","wwww.google.com") // Yandaki a linki eklendi.
console.log(value);
value =link.hasAttribute("href"). // Attirbutü kontrol etmek true sonucu alındı.
console.log(value);