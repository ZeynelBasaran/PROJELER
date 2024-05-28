const play = document.querySelector(`.fa-play`)
const refresh = document.querySelector(`.fa-sync`)

play.addEventListener("click",geriSayim)

function geriSayim(){
    
}


function saat() {//Güncel Saati Çekip DOM'a ekleme
    const zaman = new Date()
    const dakika = zaman.setSeconds()
    const saniye = zaman.setMinutes(10)

    
   // if (dakika < 10) dakika = "0" + dakika;
   // if (saat < 10) saat = "0" + saat;

    // const clock = document.querySelector(`.clock`).innerHTML = 

}

setInterval(() => { saat() }, 1000);//Her saniye çalıştırmak için 

var date = new Date();
date.setMinutes(10, 0, 0);

console.log(date)