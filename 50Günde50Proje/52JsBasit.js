//Gizle Göster özelligi
let btn = document.querySelector(`.btnn`)
let list = document.querySelector(`.list`)

btn.addEventListener("click", () => {
    list.classList.toggle(`gizle`)
    if (list.classList.contains(`gizle`)) {//Claslistten class kontrolü
        btn.innerHTML = `Göster`
    } else {
        btn.innerHTML = `Gizle`
    }
})

//Rastgele Renk üretme
let btn01 = document.querySelector(`.btn01`)
let proje2 = document.querySelector(`.proje2`)
btn01.addEventListener(`click`, () => {
    const randomNumb1 = Math.floor(Math.random() * 256)
    const randomNumb2 = Math.floor(Math.random() * 256)
    const randomNumb3 = Math.floor(Math.random() * 256)
    console.log(randomNumb1, randomNumb2, randomNumb3)
    proje2.style.backgroundColor = `rgb(${randomNumb1},${randomNumb2},${randomNumb3})`
    proje2.style.transition = `1s all`

})

//İnputtan renk seçme
let proje3 = document.querySelector(`.proje3`)
const inputs = document.querySelectorAll(`input[type="range"]`);

inputs.forEach(input => {
    input.addEventListener(`input`, (e) =>{
        input.nextElementSibling.innerHTML = input.value
        changeBodyColor()
    })   
})

function changeBodyColor() {
    proje3.style.backgroundColor = `rgb(${input1.value},${input2.value},${input3.value})`
}
