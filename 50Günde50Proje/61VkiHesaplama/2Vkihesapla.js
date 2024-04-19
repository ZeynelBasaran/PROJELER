const btn1 = document.querySelector(`.btn1`).addEventListener("click", hesapla)
const btn2 = document.querySelector(`.btn2`).addEventListener("click",inputSıfırla)

function hesapla(e) {
    e.preventDefault();
    const kg = document.querySelector(`#kg`).value;
    const height = document.querySelector(`#height`).value;

    if (isNaN(kg) || isNaN(height) || kg === "" || height === "") {
        showAlert("Lütfen Belirtilen formatta giriş yapınız. Örnegin Boy= 1.70 veya Kg= 70", "danger")

    } else {
        let vki;
        vki = (kg) / (height * height)
        vki = vki.toFixed(2)
        const p1 = document.querySelector(`.p1`).innerHTML = vki;

        const p2 = document.querySelector(`.p2`)
        if (vki > 30) {
            p2.classList= "p2 red"
            p2.textContent="Obese"
        }else if (vki > 25) {
            p2.classList ="p2 orange"
            p2.textContent="Over Weight"
        }else if (vki > 18.5) {
            p2.classList="p2 green"
            p2.textContent="Normal"
        }else{
            p2.classList="p2 blue"
            p2.textContent="Under Weight"
        }
    }
    inputSıfırla()
}

function showAlert(message, className) { //Alert mesajlarını organize etme
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.innerHTML = `${message}`
    const alert = document.querySelector('.alertt');
    alert.style.display = "block";
    alert.appendChild(div)
    setTimeout(() => {
        document.querySelector(`.alert`).remove();
        alert.style.display = "none";
    }, 3000) // Mesajı 3 snye sonra silmek için 
}
function inputSıfırla(){
    const kg = document.querySelector(`#kg`).value="";
    const height = document.querySelector(`#height`).value="";
}


