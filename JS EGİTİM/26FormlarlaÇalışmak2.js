//FormlarlaÇalışmak2.html


let userForm = document.querySelector("#userForm")
userForm.addEventListener(`submit`,formHadlers)
userForm.addEventListener(`reset`,formHadlers)
let userList = document.querySelector("#userList") 
let divAlert = document.querySelector(".divAlert")

function formHadlers(event){
    event.preventDefault() //İlgili bilgiler Get modunda gizlice gidicek tarayıcıda yazmayacak
    const USER_NAME =document.querySelector("#username")
    const SCORE =document.querySelector("#score");
    if(USER_NAME.value && SCORE.value){  //username ve score'da değer varsa eklenecek. Kutu boşsa eklemeyecek
        addİtem(USER_NAME.value,SCORE.value)//İtem eklemek için fonksiyon yazdık Addİtemi yazdık ama koşula bağladık
        USER_NAME.value="" //Buraya bu boş değerleri ekleyerek veriler listeye eklendimi kutu sıfırlanıyor.
        SCORE.value=""
    }else{
        divAlert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Eksik Bilgi Girdiniz</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }

}


const addİtem = (userName , score) => { // Arrow Fonk ile İtem ekleme
    let liDom =document.createElement("li"); // İtem oluşturduk
    liDom.classList.add(`list-group-item`,`d-flex`,`justify-content-between`,`align-items-start`) //Class Ekledik
    liDom.innerHTML=` ${userName} <span class="badge bg-primary rounded-pill">${score}</span> 
    ` // İtemin içerisine text ekledik
    userList.append(liDom) //li yi belirledigim yere ekledik

}

//