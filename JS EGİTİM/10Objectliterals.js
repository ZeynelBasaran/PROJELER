//Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.
//Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler.
//OBJENİN AVANTA JI KEY VALUE ŞEKLİNDE OLMASINDAN GELİR

let array01 = ["1","2","abc"]
let obj = {obj:1}

console.log("array01", typeof(array01))
console.log("obj", typeof(obj))
let user = {
    userName: "levent",
    firstName: "Ertuna",
    age: 37,
    hobies : ["spor","kitap okumak"]

}
veri = user;   // Kullanucının tüm bilgisi 
console.log(veri)

veri = user.firstName 
console.log(veri)

veri = user.age
console.log(veri)

user.age= 23; // Bir veri atamak için eşittir operatörü kullanılır.
console.log(user)

keys=Object.keys(user) // Sadece key bilgilerine ulaşabiliriz.
console.log(keys)
console.log(Object.values(user)) // Sadece valuelere ulaşmak

keys.forEach(element => { // Key bilgilerini for each ile dönmek.
    console.log("keys",element) // Tek tek keyleri yazdırmak
    console.log("value ", user[element])// Tek tek value yazdırmak
});

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	shortName: function (){
        return `Benim adım ${this.name} ve ben ${this.age}dayım`//Fonksiyon ekleyip çalıştırabiliriz.
    }
};
console.log(person.shortName())