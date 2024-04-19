const circle = document.querySelector(`.circle`)
const dateMont = document.querySelector(`.date`);
const hour = document.querySelector(`.needle.hour`)
const minutes = document.querySelector(`.needle.minute`)
const second = document.querySelector(`.needle.second`)
const time = document.querySelector(`.time`)
const btn = document.querySelector(`.btn`)

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]


function zaman() {
    let date = new Date();
    const saat = date.getHours()%12
    const dakika = date.getMinutes()
    const saniye = date.getSeconds()
    const ay = date.getMonth()
    const gun = date.getDay()

    //Saat
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(saat,0,11,0,360)}deg)`
    //Dakika
    minutes.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    //Seconds
    second.style.transform = `translate(-50%, -100%) rotate(${scale(saniye,0,59,0,360)}deg)`

    dateMont.innerHTML = `
    ${days[gun]+ " / " +months[ay]}<span class="circle">${date.getDate()}</span>`

    time.innerHTML = `
    ${date.getHours() + ":" + dakika}`
}

setInterval(zaman,1000)

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}//Sayı -min deger -maks deger - oranlamak istedigimiz ölçü min -maks
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers



btn.addEventListener("click",()=>{
    const html = document.querySelector(`html`)
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        btn.innerHTML= "White Mode"
    }else{
        html.classList.add("dark")
        btn.innerHTML= "Light Mode"
    }

})


