const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ""
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Yazı Metodu
TypeWriter.prototype.type = function () {

    const current = this.wordIndex % this.words.length;
    
    const fulltxt = this.words[current]
   
    
    if(this.isDeleting){
        //Remove karakter
        this.txt = fulltxt.substring(0,this.txt.length -1);

    }else {
        //Karakter ekleme
        this.txt = fulltxt.substring(0,this.txt.length +1);
    }



    //Yazıyı Ekrana yazma
    this.txtElement.innerHTML=`<span class="txt">${this.txt}<span>`;
    
    

    //Başlangıç Yazı Hızı
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /=2;//150ms ye ayarladık
    }


    //Bir sonraki kelimeye geçme
    if(!this.isDeleting && this.text === fulltxt){
        typeSpeed = this.wait;

        this.isDeleting = true;
    }else if(this.isDeleting && this.text===""){
        this.isDeleting=false

        this.wordIndex++;

        typeSpeed =500;
    }


    setTimeout(() => this.type(), typeSpeed)
}

//Sayfa Yüklemesi.
document.addEventListener(`DOMContentLoaded`, yukle)

//Sayfayı Yükleme
function yukle() {
    const txtElement = document.querySelector(`.text`)
    const words = JSON.parse(txtElement.getAttribute(`data-words`))//Array olarak aldık.
    const wait = txtElement.getAttribute(`data-wait`)


    //Alınan veriler gönderilir.
    new TypeWriter(txtElement, words, wait)
}