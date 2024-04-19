const addBtn = document.querySelector(`.add`)
addBtn.addEventListener("click", addNewNote)


function addNewNote(){
    const note = document.createElement(`div`)
    note.classList.add("note")

    note.innerHTML = `
    <div class="tools">
    <span class="material-symbols-outlined edit">edit</span>
    <span class="material-symbols-outlined delete">delete</span>
    </div>

    <div class="main"></div>
    <textarea></textarea>
    `
    const editBtn = note.querySelector(`.edit`)
    const deleteBtn = note.querySelector(`.delete`)
    const main = note.querySelector(`.main`)
    const textArea = note.querySelector(`textarea`)



    deleteBtn.addEventListener("click", () => {
        note.remove()
    })
    editBtn.addEventListener("click", () => {
        main.classList.toggle(`hidden`)
        textArea.classList.toggle(`hidden`)
    })


    document.body.appendChild(note)
}


