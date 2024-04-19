const text1 = document.querySelector(`.text1`)
const speed = document.querySelector(`#speed`);


const text = "We Love Programming"
let idx = 1//Metnin üzerinde gezinme
let speedText = 300/speed.value//Metnin yazma hızı


writeText()

function writeText(){
    text1.innerHTML=text.slice(0,idx)
    idx++

    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText,speedText)
   
    
}

speed.addEventListener("input",(e)=>speedText =300/e.target.value)
