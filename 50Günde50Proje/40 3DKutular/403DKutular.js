const boxesCont = document.querySelector(`#boxes`)
const btn = document.querySelector("#btn")

btn.addEventListener("click",()=>{
    boxesCont.classList.toggle("big")
})

function createBox(){
    for(let i=0; i<=3 ; i++){
        for(let j=0;j<=3; j++){
            let box = document.createElement("div")
            box.classList.add("box")
            boxesCont.appendChild(box)

            box.style.backgroundPositionX = `${j*-125}px`
            box.style.backgroundPositionY = `${i*-125}px`
            
        }
    }
}

createBox()