const input = document.querySelector(`.inp`)
const val = document.querySelector(`.val`)

input.addEventListener("input", (e) => {
    const inpvalue = +e.target.value
    val.innerHTML = `${inpvalue}`
    //Range'in ve Labelin sabit genişliklerini deger olarak aldık.
    const range_width = getComputedStyle(e.target).getPropertyValue("width")
    const label_width = getComputedStyle(val).getPropertyValue("width")
    console.log(range_width, label_width)

    //Substring ile px harflerini silerek degerleri number yaptık
    const ran_width = +range_width.substring(0, range_width.length - 2)
    const lab_width = +label_width.substring(0, label_width.length - 2)
    console.log(ran_width, lab_width)

    //Min ve max degerleri aldık.
    const max = e.target.max
    const min = e.target.min
   

    //Label'in left degerini oran orantı ile ayarladık
    const left = inpvalue*(ran_width/max)-lab_width/2+ scale(inpvalue,min,max,10,-10)
   
    val.style.left =`${left}px`
    console.log("-",left)
    console.log(scale(inpvalue,min,max,10,-10))
    
})


//Tam ortalamak için aşagıdaki fonk kullanıldı.
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
/*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
*/