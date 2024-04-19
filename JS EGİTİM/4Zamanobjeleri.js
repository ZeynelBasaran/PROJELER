let zaman =new Date();      // Date'deki D büyük harf!!

console.log(typeof zaman);  //Veri türü
console.log(zaman)
 

//Set Methods tarih atamak için kullanılır
zaman.setDate(25);   // Günü degiştirmek
zaman.setMonth(3);   // Ayı degiştirmek
zaman.setFullYear(2024);// Yılı degiştirmek
zaman.setHours(7);   //Saati degiştirmek



//Get Methods Sistemden saat tarih çekmek için çagırmak
console.log(zaman.getMonth());    // Şuanda kaçıncı aydayız
console.log(zaman.getDate());     // Bu gün ayın kaçıncı günündeyiz.
console.log(zaman.getFullYear()); // Hangi yıldayız.
console.log(zaman.getDay());      // Bugünün haftanın kaçıncı günü pazar 0 la başlar
console.log(zaman.getHours());    // Şuandaki Saat
console.log(zaman.getMinutes());  // Şuandaki Dakika
console.log(zaman.getSeconds());  // Şuandaki Saniye
console.log(zaman.getMilliseconds());   // Şuandaki milisaniye


let birthday = new Date (1988,0,12);
console.log(zaman.getFullYear()-birthday.getFullYear()) // Yaş hesaplama
console.log(zaman.getMonth()-birthday.getMonth())  // Ay hesaplamak 0. ay ocak unutma

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]

