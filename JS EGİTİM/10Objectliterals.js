//Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.
//Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler.
//OBJENİN AVANTA JI KEY VALUE ŞEKLİNDE OLMASINDAN GELİR

let array01 = ["1", "2", "abc"]
let obj = { obj: 1 }

console.log("array01", typeof (array01))
console.log("obj", typeof (obj))
let user = {
    userName: "levent",
    firstName: "Ertuna",
    age: 37,
    hobies: ["spor", "kitap okumak"]

}
veri = user;   // Kullanucının tüm bilgisi 
console.log(veri)

veri = user.firstName
console.log(veri)

veri = user.age
console.log(veri)

user.age = 23; // Bir veri atamak için eşittir operatörü kullanılır.
console.log(user)

keys = Object.keys(user) // Sadece key bilgilerine ulaşabiliriz.
console.log(keys)
console.log(Object.values(user)) // Sadece valuelere ulaşmak

keys.forEach(element => { // Key bilgilerini for each ile dönmek.
    console.log("keys", element) // Tek tek keyleri yazdırmak
    console.log("value ", user[element])// Tek tek value yazdırmak
});

var person = {
    name: 'Rumeysa',
    surname: 'Turgut',
    age: 23,
    shortName: function () {
        return `Benim adım ${this.name} ve ben ${this.age}dayım`//Fonksiyon ekleyip çalıştırabiliriz.
    }
};
console.log(person.shortName())



/* Let ile Construcker kurma
let student= function (name,yearOfbirth,job){ // Construcker oluşturma
    this.name=name;
    this.yearOfbirth=yearOfbirth,
    this.job=job;

    this.calculaterAge =function(){// Fonksiyon yazabiliriz içerisine
        return 2024- this.yearOfbirth
    }
}
*/



//Fonksiyonla construcker kurma
function Student(name, yearOfbirth, job) { // Construcker oluşturma
    this.name = name;
    this.yearOfbirth = yearOfbirth,
        this.job = job;
    this.calculaterAge = function () {// Fonksiyon yazabiliriz içerisine
        return 2024 - this.yearOfbirth
    }
}
let kaan = new Student("kaaan", 2008, "student") // Obje ekleme
let zeynel = new Student("zeynel", 1992, "teacher") //Obje ekleme
console.log(kaan.job)
console.log(zeynel.yearOfbirth)
console.log(zeynel.calculaterAge())// Fonksiyonla yaş hesaplatma 
Student.prototype.getName = function () {// Prototype tanımlama 
    return this.name
}
console.log(zeynel.getName())// Eklenen Protetype ın kontrolü




//Create Object metodu ile eleman oluşturma 
let persons = {
    birtday: function () {
        return 30 - this.day
    }
}
let ahmet = Object.create(persons)//Create Object metodu
ahmet.name = "ahmet"
ahmet.day = 5
ahmet.number = 1
let mehmet = Object.create(persons, {//Create Object metodu
    name: { value: "mehmet" },
    day: { value: 8 },
    number: { value: 9 },
})
console.log(ahmet.birtday())
console.log(mehmet.birtday())
console.log("--------")




//Miras alma özelligi
let Stups = function (name, day, color) {
    this.name = name;
    this.day = day;
    this.color = color;
}

Stups.prototype.calc = function(){
    return 30- this.day;
}

let Teacher = function (name,day,color,subject){
    Stups.call(this,name,day,color,) ; /* Miras alması için call özelligini kullandık name ve day Stup'tan geldi.*/
    this.subject= subject;
}


Teacher.prototype = Object.create(Stups.prototype);// Önce inherit ediliyor
Teacher.prototype.constructor = Teacher //Sonrasında set ediliyor.

let selin = new Teacher("selin",18,"ask","wdf")
console.log(selin)
console.log(selin.calc())





