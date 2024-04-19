const smallCup = document.querySelectorAll(`.small`)
const liters = document.querySelector(`.liters`)
const percentage = document.querySelector(`.percentage`)
const remained = document.querySelector(`.remained`)

//Tıkladıgımız küçük kabın index nosunu fonksiyona göndermek.
smallCup.forEach((cup, ind) => {
    cup.addEventListener("click", () => {
        dolucap(ind);

    })
})

function dolucap(ind) {
    //Üzerine tıkladıgımız cup doluysa boşaltmak için
    if (smallCup[ind].classList.contains(`full`) && !smallCup[ind].nextElementSibling.classList.contains(`full`)) {
        ind--
    }

    //Tıkladıgımız sayıya kadarki cuplara full classını ekliyor.
    smallCup.forEach((cup, ind2) => {
        if (ind2 <= ind) {
            cup.classList.add("full")
        } else {
            cup.classList.remove("full")
        }


    })
    updateBigCape()//Büyük KAbı düzenlemek için fonksiyonu çalıştırır
}

function updateBigCape() {
    const fullCaps = document.querySelectorAll(`.cup.small.full`).length;//Full sayısına sahip küçük kkap 
    const totalCups = smallCup.length;//Total Cups

    
    if (fullCaps === 0) {
        percentage.style.visibility = "hidden"
        percentage.style.height = 0
    } else {
        percentage.style.visibility= "visible";
        percentage.style.height = `${fullCaps / totalCups * 330}px`
        percentage.innerHTML=`${fullCaps / totalCups * 100}%`
        
    }

    if(fullCaps===totalCups){
        remained.style.visibility="hidden"
        remained.style.height=0
    }else{
        remained.style.visibility="visible";
        liters.innerText=`${2-(250*fullCaps/1000)}LT`
    }



}