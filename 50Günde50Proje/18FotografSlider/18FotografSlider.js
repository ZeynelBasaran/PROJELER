const ileri =document.querySelector(`.material-symbols-outlined.ileri`)
const geri =document.querySelector(`.material-symbols-outlined.geri`)
const body =document.querySelector(`body`)
const img = document.querySelector(`img`);

ileri.addEventListener("click",()=>{
    let sayi = parseInt(Math.random()*1000)
    body.style.background = `url(https://picsum.photos/id/${sayi}/1200/1000) no-repeat center center/cover`;

    img.src=`https://picsum.photos/id/${sayi}/1200/1000`;

    console.log(img.src)

})