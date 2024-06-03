const play = document.querySelector(`#play`)
const refresh = document.querySelector(`#reset`)
const root = document.querySelector(":root")
const timer = document.querySelector("#timer")



let saniye = 10
let playing = false;
let currentSeconds = saniye;
timer.innerText = formatTime(saniye)

const timerInterval = setInterval(run, 1000)


//Zaman formatlama fonksiyonu
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const newSeconds = seconds % 60;

    //padStart Metodu Sayıları belirli bir uzunluğa getirmek (örneğin tarih ve saat formatlama)
    return `${minutes.toString().padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
}

//Play Tuşu
play.addEventListener("click", () => {
    
    playing = !playing
    play.classList.toggle("play")
    play.classList.toggle("bg-green-500")

    let playIcon = play.querySelector("i")
    playIcon.classList.toggle("fa-play")
    playIcon.classList.toggle("fa-pause")

})

//GeriSayım ve puase kontrol fonk.
function run() {
    if (playing) {
        currentSeconds -= 1;
        if (currentSeconds <= 0){
            clearInterval(timerInterval)
            resetAll()
         }
    }
    
    timer.innerText = formatTime(currentSeconds)
    root.style.setProperty("-degress",calcDeg())
}


function calcDeg(){
    return`${360-((currentSeconds/saniye)*360)}deg`;
}

//Zamanlayıcıyı tekrar kurmak için
refresh.addEventListener("click", resetAll)

function resetAll(){
    playing = false

    timer.innerText = formatTime(saniye)
    currentSeconds = saniye;

    let playIcon = play.querySelector("i")
    play.classList.remove("bg-green-500")
    play.classList.remove("play")
    playIcon.classList.add("fa-play")
    playIcon.classList.remove("fa-pause")
    root.style.setProperty("--degress","0deg")
}







/*
//1Girilen Saniyeye göre geri Sayım sayacının oluşturulması
function geriSayim() {
    let m = Math.floor(saniye / 60)
    let s = saniye % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timer.innerHTML = `${m}:${s}`
    if (saniye <= 0){saniye = 0}
    saniye--
    console.log(saniye)


}
geriSayim()

//Play Tuşu
play.addEventListener("click", () => {
    
    setInterval(geriSayim, 1000)
    play.style.display = "none"
    pause.style.display = "block"
})

pause.addEventListener("click", () => {
    clearInterval()
})

/*
//Zamanlayıcıyı tekrar kurmak için
refresh.addEventListener("click", () => {
    clearInterval()
   

})





*/