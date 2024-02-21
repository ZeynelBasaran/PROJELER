const active = document.querySelector(`.search`)
const input = document.querySelector(`.input`)
const btn = document.querySelector(`.btn`)

btn.addEventListener("click",(e)=>{
    active.classList.toggle("active")
    input.focus()
})