/****** WHİLE DÖNGÜSÜ ******
JavaScript’te tekrar eden işlemlerde kodlarımızın karışmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız. Bunlardan bir tanesi While döngüsüdür. While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.
while(koşul) {Yapılacak İşlem}

//Her seferinde +1 ekleyen döngü. -- (Önce koşul)
let i = 0;  
     while (i<10){
       console.log(i)
     i = i+1;
      } 
//Verilen sayıdan geriye giden döngü
    let i = 10
   while (i > 0){
        console.log(i)
        i--;
    }

Do While Döngüsü Önce döngüyü çalıştırıyor.(While'dan farkı)Kural uymasa bile olsa döngü bir kez çalışır
let i = 1;
do{
    console.log(i);
    i++;
    }while(i<10);

/******   FOR GÖNGÜSÜ *********
Bir for döngüsü, belirtilen koşul doğru olduğu sürece komutların çalıştırılmasını sağlar. Koşul sağlanmazsa döngü çalışmayı durdurur.
for (başlangıç ataması ; koşul ifadesi ; artırım ifadesi){Yapılacak İşlem}

for(let i=0 ; i<10 ; i++){
    console.log(i)
}

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        console.log("Seçilen Rakam " + i);
       break;
    }
    console.log(i)
}
for (let i=1; i<10; i++ ){  Birden0'a kadartoplam
    let toplam=0 ;
    toplam+=i ;
}
console.log(toplam)

/******* BREAK VE CONTİUNE ******
Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir. Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar

Break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar.
normalde 1 den 10 a kadar yazdırması gerekirken 5 te break ile karşılaşıldığı için dögüden çıkıldı hemen orda döngü sonlandırıldı
for (var i = 0; i <= 10; i++) {
 if (i == 5) {
   break;
 }
 console.log("i:" + i);
}
console.log("Döngüden çıkıldı");

Contiune(Bunu atla) ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır.
1 den 10 a kadar yazıldı fakat 5 te continue ile karşılaşıldığı için o anki
işlem olan 5 sayısı  pas geçilerek direk 6 ya geçildi
for (var i = 0; i <= 10; i++) {
 if (i == 5) {
   continue;
 }
 console.log("i:" + i);
}
console.log("Döngüden çıkıldı");

*/