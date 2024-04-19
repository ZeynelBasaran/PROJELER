//Canvas api
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let x;
let y;
let isPressed = false;

canvas.addEventListener(`mousedown`, (e) => {
    isPressed = true
    x = e.offsetX // Tıkladıgımız yerin X kordinatı
    y = e.offsetY// Tıkladıgımız yerin Y kordinatı

})

canvas.addEventListener(`mouseup`, (e) => {
    isPressed = false

    x = undefined //Tıklanıp bırakıldıktan sonra tanımsıza çeviriyor X'i
    y = undefined

})
canvas.addEventListener(`mousemove`, (e) => {
    //Mouse hareket ettiginde ve basılı oldugunda kordinatları almakta
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        daireciz(x2, y2)//Kordinatlara fonk. gönderimi
        cizgiciz(x, y, x2, y2)
        x = x2
        y = y2
    }
})

//Daire fonksiyonu x ve y kordinatları verilerek daire çiziyor.
function daireciz(x, y) {
    ctx.beginPath()//Öntanımlı Çizgi başlatma
    ctx.arc(x, y, size, 0, Math.PI * 2)//x ve y degerini fonk ile atıyoruz.
    ctx.fillStyle = color
    ctx.fill()//Öntanımlı
}

//Çizgi Fonk.
function cizgiciz(x1, y1, x2, y2) {
    ctx.beginPath()//Ön tanımlı Çizgi başlatma
    ctx.moveTo(x1, y1)//Ön tanımlı
    ctx.lineTo(x2, y2)//Ön tanımlı
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()//Ön tanımlı
}

//Buton Controller
const colorİnp = document.querySelector(`#color`)
const arttır = document.querySelector(`#arttır`)
const azalt = document.querySelector(`#azalt`)
const clear = document.querySelector(`#clear`)

arttır.addEventListener("click", () => {
    if (size < 50) size += 5
    UpdateDomSize()
})

azalt.addEventListener("click", () => {
    if (size > 5) size -= 5
    
    UpdateDomSize()
})

colorİnp.addEventListener("change", e => {
    color = e.target.value
})

clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function UpdateDomSize(){
    const sizeDom = document.querySelector(`#size`).innerHTML = size;
}







