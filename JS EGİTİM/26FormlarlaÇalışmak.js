let formDom = document.querySelector("#userForm")
console.log(formDom)
formDom.addEventListener(`Submit`, formSubmit)

function formSubmit(event){
    event.preventDefault() //Form verileri gönderilirken GET modunda bilgiler ekranda gözükmeyecek şekilde gönderdik.
    console.log("İşlem Gerçekleşti")
}

formSubmit(event)


/* GET ve Post İşlemleri  
Formun En önemli parametresi method parametresidir. Method, "post" veya "get" olmak üzere iki türlü değer alabilir.

GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir. 
UYARI: Get metodu önemsiz verilerde kullanılmalıdır, kullanıcı adı, şifre gibi bilgilerin bu method ile gönderilmesi uygun değildir.

POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.

*/