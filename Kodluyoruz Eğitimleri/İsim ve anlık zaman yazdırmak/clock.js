let isim = prompt("Lütfen adınızı giriniz")
let isim1 =document.querySelector("#myName")
isim1.innerHTML = isim ;
isim1.classList.add("ekle")


let anlıkzaman = Date()
let yenieleman = document.createElement("p");
yenieleman.textContent = anlıkzaman;
yenieleman.classList.add("ekle")

let hedefeleman = document.querySelector("#myClock");
hedefeleman.appendChild(yenieleman)

