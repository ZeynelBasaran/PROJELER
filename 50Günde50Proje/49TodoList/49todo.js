const form = document.querySelector(`form`)
const list = document.querySelector(`.list`)
const input = document.querySelector(`input`)

//JSON.parse(): Bu fonksiyon, JSON biçimindeki bir metni JavaScript nesnesine dönüştürmek için kullanılır. LS'den array list olarak çekilir ve gönderilir.
const todos = JSON.parse(localStorage.getItem("todos"))
console.log(todos)
if (todos) {
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {


        let domEl = document.createElement("li")

        if (todo && todo.completed) {//LS'den yüklenirken line kontrolü
            domEl.classList.add("line")
        }

        domEl.innerText = todoText
        list.appendChild(domEl)

        //Element Silme 
        domEl.addEventListener("click", () => {
            domEl.classList.toggle("line")
            updadeLS()
        })
        domEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            domEl.remove()
            updadeLS()
        })

        //İnput temizleme
        input.value = ""
        updadeLS()
    }
}

function updadeLS() {
    todossEl = document.querySelectorAll(`li`)

    const todos = []

    todossEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("line")
        })
    })

    localStorage.setItem("todos", JSON.stringify(todos))
}




/*

static getBooks(){ //LS'deki kitapları getirme
    let books;
   

    return books;

}

   static addBooks(book){ //LS kitap ekleme
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }
*/