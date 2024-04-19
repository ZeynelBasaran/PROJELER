const btn=document.querySelector(`.btn`).addEventListener("click",message)
function message(){
    const alert = document.querySelector(`.alert`)
    const div = document.createElement("div")
    div.innerHTML="Bir mesajınız var";
    div.classList="message";
    alert.appendChild(div)
    setInterval(()=> div.remove(),3000)
}