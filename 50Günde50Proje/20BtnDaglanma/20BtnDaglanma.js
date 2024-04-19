const buttons = document.querySelectorAll(`.ripple`)

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const x = e.clientX;//Buttons içinde tıklanan kordinatlar alındı.
        const y = e.clientY;

        //Tıklanan yerin maks yükseligini ve soldan bitiş değerini aldık.
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //Button içinde tıklana yerin piksel degerlerini aldık.
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        //Eleman oluşturma
        const circle = document.createElement("span")
        circle.classList.add(`circle`)
        circle.style.top= `${yInside}px`
        circle.style.left=`${xInside}px`
        button.appendChild(circle)

        //Oluşturulan Elementi efekt bitimi silmek 
        setTimeout(()=>circle.remove(),1000)

    })
});