const nav = document.querySelector(`.nav`)
window.addEventListener("scroll",fixNav)
function fixNav(){
    if(window.scrollY>nav.offsetHeight+50){
        nav.classList.add("white")
    }else{
        nav.classList.remove("white")
    }
}