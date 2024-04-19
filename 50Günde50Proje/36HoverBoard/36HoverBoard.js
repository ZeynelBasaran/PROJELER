const container = document.querySelector(`.container`)

const squares = 500

for (let i = 0; i < squares; i++) {
    let square = document.createElement("div")
    square.classList.add(`square`)
    container.appendChild(square)

    square.addEventListener("mouseover", (e) => {
        const uret=renkUret()
        e.target.style.backgroundColor = `rgb(${uret})`
        e.target.style.boxShadow= `0 0 2px ${uret},0 0 10px ${uret}`
    })

    square.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "#1d1d1d"
        e.target.boxShadow = "0 0 2px #000"
    })

}

function renkUret(renk) {
    const randomNumb1 = Math.floor(Math.random() * 256)
    const randomNumb2 = Math.floor(Math.random() * 256)
    const randomNumb3 = Math.floor(Math.random() * 256)
    renk = randomNumb1 + "," + randomNumb2 + "," + randomNumb3;
    return renk
}

