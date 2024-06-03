const screens = document.querySelectorAll(".screen")
const startbtn = document.querySelector("#startbtn")
const chosebtn = document.querySelectorAll(`.choose-btn`)
const timeEl = document.getElementById(`time`)
const scoreEl = document.getElementById(`score`)
const messageEl = document.getElementById(`message`)
const gamecont = document.querySelector(`.game-container`)

let seconds = 0
let score = 0
let select = {}
console.log(timeEl)

//1Margintop ayarı
startbtn.addEventListener("click", () => {
    screens[0].classList.add("up")

})

//2Böcek seçimi sonrası random Element oluşturma ve oyun start
chosebtn.forEach(element => {
    element.addEventListener("click", () => {
        const img = element.querySelector(`img`)
        const src = img.getAttribute("src")
        const alt = img.getAttribute("alt")
        select = { src, alt }
        screens[1].classList.add("up")
        setTimeout(createİns, 1000)
        startGame()
    })
})

//4StartGame ile zaman sürecinin başlatımı
function startGame() {
    setInterval(anlıkZaman, 1000)
}
function anlıkZaman() {

    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time : ${m}:${s}`
    seconds++

}

//3Random Bir Element ve Konum oluşturmak
function createİns() {
    const divEl = document.createElement("div")
    divEl.classList.add("insect")
    const { x, y } = randomLocation()
    divEl.style.left = `${x}px`
    divEl.style.top = `${y}px`
    divEl.innerHTML = `
    <img src="${select.src}"
    alt="${select.alt}" style="transform:rotate(${Math.random() * 360}deg)">
    `
    gamecont.appendChild(divEl)

    divEl.addEventListener("click", catchInsect)
}

function randomLocation() {
    const width = window.innerWidth
    const heiht = window.innerHeight

    console.log(width, heiht)

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (heiht - 200) + 100
    return { x, y }
    console.log("deneme", x, y)
}

//5Tıklanan Element dogruysa İlgili elementi silip yeni 2 element ekleyip scoreu ekranda yazdırmak
function catchInsect(e) {
    incScore()
    this.classList.add("caught")
    setTimeout(()=> this.remove(),2000)

    addİns()

}
function addİns(){
    setTimeout(createİns,1000)
    setTimeout(createİns,1500)
}
function incScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`
    if (score >19) {
        messageEl.classList.add("visible")
    }

}