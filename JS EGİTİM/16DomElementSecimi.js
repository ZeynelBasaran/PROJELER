let veri;

veri = window.document;
console.log(veri)


veri = window.document.body; // Sadece Boddy kısmı
console.log(veri)


veri = window.document.forms; // Form kısmına erişim
console.log(veri)

veri = window.document.forms[0].id;// Form kısmındaki ID erişim
console.log(veri)

veri = window.document.scripts;// Script'lere ulaşım
console.log(veri)

//Document.getElementById Metodu
let veri1;
veri1 = document.getElementById("header");
console.log(veri1);

veri1 = document.getElementById("header").id; //Yanlızca İd alındı.
console.log(veri1);

veri1 = document.getElementById("header").className; //Yanlızca Class çagrıldı alındı.
console.log(veri1);

veri2 = document.getElementById("header"); //Burda degişkene atılarak kısaltıldı.
veri3 = veri2.className;
console.log(veri3)

veri2.style.color="blue"; // Mavi renk atandı.
veri2.style.fontSize ="50px" ; // Fontsize Degiştirildi.
veri2.style.fontWeight = "bold"; // Todo List yazısı kalışlaştırıldı.
//veri2.style.display = "none"; // Görünmez hale getirmek için kullanılır
veri2.innerText ="Yapılacaklar";  // Başlıgı degiştirdik

veri1 = document.getElementById("header").innerHTML = "<b>To do Listt</b>";// HTML ögesi olarak eklemek için inner HTML uzun versiyonda yazdım.

//querySelector Metodu CSS seçiçi gibi seçilir.
console.log(document.querySelector(".card-header"));
console.log(document.querySelector("#header"));
console.log(document.querySelector("div"));

document.querySelector("li").style.color ="red"; // İlk elemanın rengini kırmızı yaptı
document.querySelector("li:last-child").style.color ="purple"; // Son elemanın rengini kırmızı yaptı
document.querySelector("li:nth-child(3)").style.color ="blue"; // Listeden sayı ile belirttiğmiz eleman
document.querySelector("li").className="list-group-item list-group-item-primary" ;// Sınıf degiştirildi.
document.querySelector("li").classList.add("active");// Sınıf ekleme








