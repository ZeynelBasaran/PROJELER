//---Önce Bir kitap sınıfı oluşturuyoruz.
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}




//---Kayıtlı kitapları görüntüleme,Ekleme,İnput Vauleri sıfırlama ve silme fonksiyonları
class UI {
    static displayBooks() { 
        const books = Store.getBooks();//Local Stroga'dan kitaplatı degişkene çekme
        

        books.forEach((book) => UI.addBookTolist(book)) //Çekilen kitapları ekrana ekleme 

    }
    static addBookTolist(book) {// Listeye kitap ekleme fonksiyonu ve LS'Deki kitapları çekip ekleme
        const list = document.querySelector("#book-list");

        const tr = document.createElement("tr");

        tr.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td class="sp"><span class="material-symbols-outlined delete">
                    delete
                    </span></td>`;
        list.appendChild(tr);


    }

    static clearİnputs() {
        const title = document.querySelector("#Title").value = ""; //Ekleme yapıldıktan sonra Form bilgilerini sıfırlamak için yazdıgımız fonksiyon
        const author = document.querySelector("#Author").value = "";
        const isbn = document.querySelector("#ISBN").value = "";


    }

    static deleteBook(el) { // Kitap silme fonksiyonu
        if (el.classList.contains("delete")) {
            if (confirm("Silmek istediginize emin misiniz.")) {
                el.parentElement.parentElement.remove()
                UI.showAlert("Kitap başarıyla silindi.","danger")
            }
        }

    }
    static showAlert(message,className) { //Alert mesajlarını organize etme
        const div = document.createElement("div");
        div.className =`alert alert-${className}`;
        div.innerHTML = `${message}`
        const alert= document.querySelector('.alertt')
        alert.appendChild(div)
        setTimeout(()=> document.querySelector(`.alert`).remove(), 3000) // Mesajı 3 snye sonra silmek için 
    }

    
}
//---Sayfa açıldıgında kayıtlı kitapları gösterme
document.addEventListener('DOMContentLoaded', UI.displayBooks) 


//---Sınıfa yeni kitap ekleme
const btn = document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();//Submit yapılınca sayfanın yenidnen yüklenmesini engellemek için 

    const title = document.querySelector("#Title").value; // İnputlardaki valueleri aldık
    const author = document.querySelector("#Author").value;
    const isbn = document.querySelector("#ISBN").value;

    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Lütfen tüm alanları doldurunuz","warning")
    } else {
        const book = new Book(title, author, isbn) // Aldıgımız input valuelerle yeni bir kitap nesnesş oluşturduk.

        UI.addBookTolist(book);// Listeye kitap ekleme fonk.
        UI.clearİnputs() // İnput valueleri sıfırlama fonk.
        UI.showAlert("Kitap başarıyla Eklendi.","success")
        Store.addBooks(book) // Eklenen kitabın Local Storage'a da eklenmesi   
    }

})



//---Sınıftan kitap silme
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent); // Local Stroge'dan silmek için 
})


//---Local Storage ayarlarının yapıldıgı nokta 
class Store {
    static getBooks(){ //LS'deki kitapları getirme
        let books;
        if(localStorage.getItem(`books`)===null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem(`books`));
        }

        return books;

    }

    static addBooks(book){ //LS kitap ekleme
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }

    static removeBook(isbn){ //LS'den kitap silme
        const books = Store.getBooks();

        books.forEach((book, index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        })

     localStorage.setItem('books', JSON.stringify(books))

    }
}










                












