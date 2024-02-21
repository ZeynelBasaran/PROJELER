let body = document.querySelector("body")

window.addEventListener("keyup",(e)=>{
    body.innerHTML=`
    <div class="cont">
    event.key
    <div class="info">${e.key===' ' ? 'Space': e.key}</div>
</div>
<div class="cont">
    event.keyCode
    <div class="info">${e.keyCode}</div>
</div>
<div class="cont">
    event.code
    <div class="info">${e.code}</div>
</div>
    `

})



