const kutu = document.querySelectorAll(`.kutu`)
const sec = document.querySelector(`.fill`)

sec.addEventListener("dragstart", surukle)
sec.addEventListener("dragend", surukleson)

for (const item of kutu) {
    item.addEventListener("dragover", ustundegezmek)
    item.addEventListener("dragenter", ogeyetıklama)
    item.addEventListener("dragleave", ogedenbırakma)
    item.addEventListener("drop", birak)
}

//Fare sürükleme işlemi başladığında tetiklenir.
function surukle() {
    console.log("dragstart")
    this.className +=" hold"//Tıkladıgında hold sınıfı ekliyor.
    setTimeout(()=>this.className = "",0)
    
}

//Fare sürükleme işlemi bırakıldıgında tetiklenir.
function surukleson() {
    //Sürüklme işleinin bittigi yerde fill sınıfını ekliyor.
    console.log("dragstend")
    this.className ="fill"
}

//Sürüklenen öğe bir kendi yuvasındayken tetiklenir yuvadan ayrılınca tetiklenmez.
function ustundegezmek(e) {
    e.preventDefault()
}


//sürükleme işlemi sırasında bir öğeye girildiğinde tetiklenir.
function ogeyetıklama(e) {
    e.preventDefault()
    this.className += " hovered"//Üzerine gelince class ekleme
}

// sürükleme işlemi sırasında ögeden çıkıldıgında tetiklenir
function ogedenbırakma() {
    this.className = "kutu"// Üzerinden çıkınca classı silme
}
//Sürüklenen öğe bırakıldığında tetiklenir. Bu olay, sürüklenen öğenin bırakılacağı öğeye düşürüldüğünde gerçekleşir.
function birak() {
    this.className="kutu"
    this.append(sec)
}

