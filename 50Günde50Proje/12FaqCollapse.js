let openbut = document.querySelectorAll(".material-symbols-outlined")

openbut.forEach(element => {
   element.addEventListener("click",(a)=>{
    a.target.parentElement.classList.toggle("active")

   }) 
});