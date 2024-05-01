const images = document.querySelector(".images") 
const sayi = 50

for (let i = 0; i < sayi*3 ;i++) {
    let random = Math.floor(Math.random()*500+1)
    const img=`https://picsum.photos/id/${random}/300/300`
    console.log(random)
    
    let createİmg = document.createElement("img")
    createİmg.src = `${img}`
    images.appendChild(createİmg)
    
}

