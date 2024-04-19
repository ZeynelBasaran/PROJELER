const loveme = document.querySelector(`.loveme`)
const times = document.querySelector(`.times`)

let clickTime = 0;
timesClick = 0;

loveme.addEventListener("click", (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()//MS cinsinden 1970 Sonrası zaman 

    } else {
        if ((new Date().getTime() - clickTime) < 800) {//İki tıklama arası 800ms altıysa blok çalışır
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()

        }
    }
})

function createHeart(e) {
    //Tıkladıgımız yerin x ve y kordinatlarını aldık.
    const y = e.clientY //Dikey eksen
    const x = e.clientX //Yatay Eksen


    const leftOffSet = e.target.offsetLeft//Sol ballangıç px degeri
    const topOffSet = e.target.offsetTop//Yukardan başlangıç px degeri

    //Ekranda tıklanan yerin Div'e göre px degerleri alındı.
    const xInside = x - leftOffSet
    const yInside = y - topOffSet
    console.log(xInside, yInside)

    //Yeni bir kalp oluşturduk ve bu kalbi belirledigimiz px lere ekledik.
    const heart = document.createElement("span")
    heart.classList.add("material-symbols-outlined")
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveme.appendChild(heart)
    heart.textContent = "favorite"
    timesClick++
    times.innerHTML = timesClick;

    setTimeout(()=> heart.remove(),1000)//Oluşturulan kalpler bir saniye sonunda siliniyor.
}