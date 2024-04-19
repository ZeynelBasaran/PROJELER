const counter = document.querySelector(`.counter`)
const final = document.querySelector(`.final`)
const replay = document.querySelector(`.replay`)
const numb = document.querySelectorAll(`.numb span`)

runAnimation()
function resetDom(){
    counter.classList.remove("hide")
    final.classList.remove("show")

    numb.forEach((num)=>{
        num.classList.value=""
    })

    numb[0].classList.add("in")
}


function runAnimation (){
    numb.forEach((num,idx)=>{
        
        const nextToLast = numb.length-1;

        num.addEventListener('animationend',(e)=>{
        
            if(e.animationName === 'goIn' && idx !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName==='goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else{
                counter.classList.add("hide")
                final.classList.add("show")
            }

        })
    })
}
replay.addEventListener("click",()=>{
    resetDom();
    runAnimation()
})







/*
text = 4
setInterval(() => {
    if (text > 0) {
        text--
        calldown.innerHTML = text
        getready.innerHTML = "Get Ready"
    } else if (text === 0) {
        calldown.innerHTML = "Go"
        getready.style.display = "none"
        btn.style.display = "block"
       
    }
    console.log(1)
}, 1000);

btn.addEventListener("click", () => {
    text = 4
    btn.style.display = "none"
    getready.style.display = "block"
    getready.innerHTML = "Get Ready"
    

})
*/