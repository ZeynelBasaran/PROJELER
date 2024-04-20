const pass = document.querySelector(`#password`);
const bg = document.querySelector(`.bg`);

pass.addEventListener("input", (e) => {
    const inputs = e.target.value
    let ilength = inputs.length * 2
    if (ilength <= 20) {
        ilength = 20 - ilength;
    } else if (ilength > 21) {
        ilength = 0
    }
    bg.style.filter = `blur(${ilength}px)`
})