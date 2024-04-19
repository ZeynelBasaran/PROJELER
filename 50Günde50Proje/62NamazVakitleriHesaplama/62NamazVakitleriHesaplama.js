function saat() {//Güncel Saati Çekip DOM'a ekleme
    const zaman = new Date()
    const saat = zaman.getHours()
    const dakika = zaman.getMinutes()

    if (dakika < 10) dakika = "0" + dakika;
    if (saat < 10) saat = "0" + saat;

    const clock = document.querySelector(`.clock`).innerHTML = saat + ":" + dakika

}

setInterval(() => { saat() }, 1000);//Her saniye çalıştırmak için 

let countryArray = [];
let sehirArray = [];
let ilceArray = [];

function getCountry() {
    //API üzerinden ülkeleri çektik.
    return fetch('https://ezanvakti.herokuapp.com/ulkeler/').then(
        response => response.json()
    ).then(data => {
        countryArray = data;
        let html = ""
        let indexTurkiye = 0;

        for (i = 0; i < data.length; i++) {
            html += `<option class="select1" value="${data[i].UlkeID}">${data[i].UlkeAdi}</option>`
            if (data[i].UlkeAdi == "TÜRKİYE") indexTurkiye = i;
        }

        document.querySelector(`#selectcountry`).innerHTML = html;
        document.querySelector(`#selectcountry`).selectedIndex = indexTurkiye

    })
}

function getCity(countryId) {
    console.log(countryId)
    //API üzerinden şehirleri çektik.
    return fetch('https://ezanvakti.herokuapp.com/sehirler/' + countryId).then(
        response => response.json()
    ).then(data => {
        sehirArray = data;
        let html = ""
        let indexİstanbul = 0;

        for (i = 0; i < data.length; i++) {
            html += `<option value="${data[i].sehirID}">${data[i].SehirAdi}</option>`
            if (data[i].SehirAdi == "İSTANBUL") indexİstanbul = i;
        }
        document.querySelector(`#selectcity`).innerHTML = html;

        if (countryId == 2) {
            document.querySelector(`#selectcity`).selectedIndex = indexİstanbul
            getDisrict(539)
        } else {
            document.querySelector(`#selectcity`).selectedIndex = 0;
            getDisrict(data[0].sehirID)
        }



    })
}

function getDisrict(cityİD) {
    //API üzerinden ilçeleri çektik.
    fetch('https://ezanvakti.herokuapp.com/ilceler/' + cityİD).then(
        response => response.json()
    ).then(data => {
        ilceArray = data;
        let html = ""
        indexArn = 0

        for (i = 0; i < data.length; i++) {
            html += `<option value="${data[i].IlceID}">${data[i].IlceAdi}</option>`
            if (data[i].IlceAdi == "ARNAVUTKOY") indexArn = i;

            NamazSaat(data[i].IlceID)
        }

        document.querySelector(`#selectilce`).innerHTML = html;

        if (cityİD == 539) {
            document.querySelector(`#selectilce`).selectedIndex = indexArn
        } else {
            document.querySelector(`#selectilce`).selectedIndex = 0;
        }





    })
}

function NamazSaat() {
    fetch("https://ezanvakti.herokuapp.com/vakitler/9541").then(
        response => response.json()
    ).then(data => {
        //Namaz saatleri ayda bi güncelleniyor. Bu nedenle ayda bir istek atacağız.
        let tarih = new Date();
        let day = tarih.getDay();
        if (day < 10) day = "0" + day;

        let ay = (tarih.getMonth()) + 1;
        if (ay < 10) ay = "0" + ay;

        let yil = tarih.getFullYear()
        anlıkzam = day + "." + ay + "." + yil

        //Date dosyasımızda oluşturdugumuz tarihle json dosyasından eşleştirme yapıyoruz.
        let index = data.findIndex(d => d.MiladiTarihKisa == anlıkzam)
        let selectData = data[index]
        

        document.querySelector(`.Imsak`).innerHTML = selectData.Imsak
        document.querySelector(`.Gunes`).innerHTML = selectData.Gunes
        document.querySelector(`.Ogle`).innerHTML = selectData.Ogle
        document.querySelector(`.Ikindi`).innerHTML = selectData.Ikindi
        document.querySelector(`.Aksam`).innerHTML = selectData.Aksam
        document.querySelector(`.Yatsi`).innerHTML = selectData.Yatsi
        İftaraKalanSure(selectData.Aksam)
    })
}

function İftaraKalanSure(aksam){
    var now = new Date().getTime()
    var endDate = new Date()
    endDate.setHours(aksam.substr(0,2))
    endDate.setMinutes(aksam.substr(3,2))
    endDate.setSeconds(aksam.substr("0"))
    
    console.log(nendDate.setHours(aksam.substr(0,2)))
    console.log(aksam)
    let t = endDate-now

    
    console.log(now1)
}

getCountry()
NamazSaat()
İftaraKalanSure()



