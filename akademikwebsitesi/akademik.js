let counter = 0
let counterDom = document.querySelector('#counter')
let incDOM = document.querySelector('#inc')
let decDOM = document.querySelector('#dec')


console.log(counterDom)
console.log(inc)
console.log(decDOM)

counterDom.innerHTML = counter
incDOM.addEventListener("click", clickEvent)
decDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
        if (this.id == "inc") {
            counterDom.innerHTML = counter += 1
        } else {
            counterDom.innerHTML = counter -= 1
       } 
}