let btns = document.querySelector(".icon").addEventListener("click",(a)=>{
    a.target.parentElement.parentElement.classList.toggle("active")
})



/*
btns.forEach(element => {
    element.addEventListener("click",(a)=>{
        a.target.parentElement.classList.toggle("active")
    })
});*/