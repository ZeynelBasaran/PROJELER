//1Önce Car sınıfı inşa ediyoruz.
class Car {
    constructor(name, price, image) {
        this.name = name,
            this.price = price,
            this.image = image
    }
}


class IU {
    static displayBooks(cars) {//8Liste Array olarak çekildigi için içini ForEach ile gezdik
        cars.forEach(car => {
            list.innerHTML += `
            <tr>
                <td><img src="${car.image}" class="img-fluid img-thumbnail"></td>
                <td>${car.name}</td>
                <td>${car.price}</td>
                <td ><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
            <tr>
            `
        });

    }

    static newElement(car) {//3Dom'da Yeni Eleman oluşturmak
        let listt = document.querySelector(`#cars`);
        console.log(car)
        listt.innerHTML += `
        <tr>
            <td><img src="${car.image}." class="img-fluid img-thumbnail"></td>
            <td>${car.name}</td>
            <td>${car.price}</td>
            <td ><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        <tr>
        `
    }

    static alert(message, type) {//4Alert Mesaj Fonks.
        const alert = document.querySelector(`#alertt`)
        alert.innerHTML = message;
        alert.classList = type;

        setTimeout(
            () => {
                alert.innerHTML = "";
                alert.classList = "";
            }, 3000)
    };



    static clearİnputs() {//5İnput verilerini sıfırlamak için 
        let names = document.querySelector(`#title`).value = ""
        let price = document.querySelector(`#price`).value = ""
        let image = document.querySelector(`#url`).value = ""
    }

    static deleteCar(x) {//9Domdan Silmek
        if (x.className === "btn btn-danger") {
            if (confirm("Silmek istediginize emin misiniz.")) {
                x.parentElement.parentElement.remove()
                IU.alert("Seçtiginiz Araç Silindi...", "alert alert-danger")
            }

        }
    }


    static deleteAll() {
        if (confirm("Silmek istediginize emin misiniz.")) {
            IU.alert("Tüm araçlar silindi", "alert alert-warning")
            list.innerHTML = "";
            LS.removeAll()//Onay sonrası Tüm araçların LS'den silme fonk.
        }
    }
}

//7Sayfa yüklendiginde LS'den araçları çekme
document.addEventListener('DOMContentLoaded', () => {
    let cars = LS.getLs();//Ls fonksiyonundaki return edilen carsı çekip display booksa göndererek Dom a yüklüyoruz.
    IU.displayBooks(cars)

})





//2Eleman ekleme
const list = document.querySelector(`#cars`);
const addCar = document.querySelector(`#submit`).addEventListener("click", (e) => {
    let names = document.querySelector(`#title`).value;
    let price = document.querySelector(`#price`).value;
    let image = document.querySelector(`#url`).value;

    if (names === "" || price === "" || image === "") {
        e.preventDefault();
        IU.alert("Lütfen tüm bilgileri doldurunuz.", "alert alert-danger")
    } else {
        e.preventDefault();

        //Yeni Araç Ekleme
        const car = new Car(names, price, image)

        IU.clearİnputs(car) //Element eklenince inpıt sıfırlama
        IU.newElement(car)//Eklenen elementi Dom'da oluşturma
        LS.addLs(car)
        IU.alert("Araç Eklendi.", "alert alert-success") //Eklenen Elementin alert fonks.

    }
})


//9Deleteİtem
list.addEventListener("click", (x) => {

    IU.deleteCar(x.target) //Click Eventi oluşturularak tıklanan yerde class sorgusuyla Domdan silme işlemi

    LS.removeLs(x.target.parentElement.previousElementSibling.previousElementSibling.textContent)//Aracın LS'den silme Fonks.

})


//11DeleteAll
const deleteAllElemement = document.querySelector(`#clear-cars`)
deleteAllElemement.addEventListener("click", IU.deleteAll)


//6LS İşlemleri
class LS {
    static addLs(car) {//6LS Eleman Ekleme
        let cars = LS.getLs()

        cars.push(car)

        localStorage.setItem("cars", JSON.stringify(cars))

    }
    static getLs() {//6LS mevcut araçlar alınır İF Blogu cars yoksa array oluşturma yoksa carsı string olarak eklemeye yarar sonrasında AddLS ye return eder 
        let cars;
        if (localStorage.getItem('cars') === null) {
            cars = []
        } else {
            cars = JSON.parse(localStorage.getItem('cars'))
        }
        return cars;
    }




    static removeLs(Carname) {//10Aracın İsmini alarak Array listimi çekip foreachle gezip ilgili array elemnını siliyoruz.
        console.log(Carname)
        let cars = LS.getLs() //Array liste LS'den aldık.
      
        let filteredCars = cars.filter(function (car) { //11Alınan Array liste filterdan geçerek name ile ulaşanı eklemiyoruz.
            return car.name !== Carname;
        });
        localStorage.setItem("cars", JSON.stringify(filteredCars))

    }




    static removeAll() {
        localStorage.removeItem("cars")
    }



}
