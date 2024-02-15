let box= document.querySelectorAll(`.box`)

window.addEventListener(`scroll`,checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/5*4

    box.forEach(boxes=>{

        const boxTop= boxes.getBoundingClientRect().top

        if(boxTop<triggerBottom){
            boxes.classList.add(`show`)
        }else{
            boxes.classList.remove(`show`)
        }

    })

}