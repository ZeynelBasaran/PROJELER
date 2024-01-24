
const panels = document.querySelectorAll(".panel")
console.log(panels)
panels.forEach(panel => { // Tıklanan panele active özelligi ekliyor.
    panel.addEventListener("click", () => {
        removeActive();//Active özelligini silmek için 
        panel.classList.add("active");
    })
})

function removeActive() { // ClassList i siliyor 
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number);
});
//Foreach Metodu Dizi içerindeki elemanaları tek tek kopyalama
//city.forEach(function(item){
//    console.log(item);
//})
