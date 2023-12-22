//26localSessionStorage.html

let formDom = document.querySelector("#userForm")
formDom.addEventListener(`submit`, formSubmit)

/*İnput name bilgisi çok önemli kesinlikle olmalı*/

function formSubmit(event){
    event.preventDefault(); //Form verileri gönderilirken GET modunda bilgiler ekranda gözükmeyecek şekilde gönderdik.Bu metodun özelligi bu
    console.log("İşlem Gerçekleşti")
    let scoreİnputDom = document.querySelector("#score")
    let kullanici = document.querySelector("#username")
    console.log(scoreİnputDom.value)
      /*İnput içerisinde yazan bilgiyi butona tıkladıgında almak için */
    localStorage.setItem(kullanici.value,scoreİnputDom.value)
    /* Alınan bilgiyi local storage'a ekleme */
    const ul = document.querySelector(".list") // Element eklencek yer seçme
    uli = document.createElement("li"); // Element oluşturma
    uli.className= "kullanicilar text-white"; // Element sınıf atama
    uli.textContent =kullanici.value+ scoreİnputDom.value  // Element içerigini inputtan almak
    ul.appendChild(uli);  //Ul sınıfına oluşturdugumuz li eklemek 

   let silbutonu = document.querySelector("#reset");//Sıfırla tuşu seçildi.
   let ulsecimi = document.querySelector("ul");
    silbutonu.addEventListener("click", function() {
    ulsecimi.innerHTML = ''; //Tüm alt ögeleri ile listeyi sıfırlar 
});

}
  
/* GET ve Post İşlemleri  
Formun En önemli parametresi method parametresidir. Method, "post" veya "get" olmak üzere iki türlü değer alabilir. Bu özellik verilmemesi durumunda default olarak "Get" methodu formunuza atanır.

GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir. 
UYARI: Get metodu önemsiz verilerde kullanılmalıdır, kullanıcı adı, şifre gibi bilgilerin bu method ile gönderilmesi uygun değildir.

POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.

onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.

onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.
*/


