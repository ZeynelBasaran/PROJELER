let veri;

/*

getelement metodları HTML collection getirir => foreach ile gezilmez. kapalı parantez yöntemi hariç
queryselector metodları nodelist getirir for ve foreach ile gezilir
**************.    getElementsByClassName İndex seçerek tek obje degiştirmek   **********
veri=document.getElementsByClassName("list-group-item");Tüm öğeler
console.log(veri)
veri=document.getElementsByClassName("list-group-item")[3];4. Ögeye ulaşmak için
console.log(veri)
veri=document.getElementsByClassName("list-group-item");
veri[1].style.fontSize = "30px";  Degişkene başlyarak 2. İndexin fontu büyütüldü.
veri[2].style.color = "blue";    3. İndexin color degiştirildi.
veri[3].textContent = "Burası revize edildi."; 4. İndex metin degişitirildi.

*****************.   getElementsByClassName ile birden fazla obje seçmek.   ************
for(let i= 0; i<veri.length; i++){
    console.log(veri[i].style.color="blue");    Color degiştirildi.
    console.log(veri[i].textContent="Degiştirildi") Metin degiştirildi. 
}
console.log(veri)

getElementsByTagName
veri = document.getElementsByTagName("li"); Li'lerin hepsi seçildi.
console.log(veri);
veri = document.getElementsByTagName("a"); Sayfa içerisindeki tüm a larıseçti
console.log(veri);
veri = document.getElementById("task-list").getElementsByTagName("a");Li içerisindeki A lar
console.log(veri);



*******************  querySelectorAll. ***********************************************
kullanıldıgında nodelist getirir array gibi seçilebilir. Arrow fonksiyon ile hepsi seçilebilir.
veri = document.querySelectorAll("li");Tüm li elemanları seçildi.
veri.forEach(function (item) {Her bir itemi tek tek yazdıran fonksiyon
    console.log(item);
})
console.log(veri);

veri = document.querySelectorAll("li");
veri.forEach(function (item,index) {
    console.log(item.textContent=` ${index} -İtem `);
})
console.log(veri);


/*



