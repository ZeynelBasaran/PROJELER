const quizData = [
    {
        "quess": "1-Which language runs in a web browser",
        "A": "Java",
        "B": "C",
        "C": "Python",
        "D": "Javascript",
        "correct":"d"
    },
    {
        "quess": "2-What does CSS stand for",
        "A": "Centrel Style Sheets",
        "B": "Casceding Style Sheets",
        "C": "Cascadşng Simple Sheets",
        "D": "Cars Suvs Sailbaits",
        "correct":"b",
    },
    {
        "quess": "3-What does HTML stand for",
        "A": "Hypertext Markup Langueage",
        "B": "Casceding Style Sheets",
        "C": "Cascadşng Simple Sheets",
        "D": "Cars Suvs Sailbaits",
        "correct":"a"

    },
    {
        "quess": "4-What year was JS launched",
        "A": "1995",
        "B": "1996",
        "C": "1994",
        "D": "none the above",
        "correct":"b"

    }
]

const quiz = document.querySelector(".container")
const answerEl = document.querySelectorAll("answer")
const quesEl = document.querySelector(".question")
const a_text = document.querySelector("#a_text")
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")
const submitBtn = document.querySelector(".submit")

let curretQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAns()//Tüm elemenlerdeki checked kaldırmak için
    
    const curretQuizData = quizData[curretQuiz]
    console.log(curretQuizData)

    quesEl.innerHTML=curretQuizData.quess
    a_text.innerHTML=curretQuizData.A
    b_text.innerHTML=curretQuizData.B
    c_text.innerHTML=curretQuizData.C
    d_text.innerHTML=curretQuizData.D
}

function deselectAns(){
    answerEl.forEach(answerEl=> answerEl.checked = false)
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected()
})

function getSelected(){
    
}













/*

`
    <h2 class="baslik">${quizData[number].quess}</h2>
    <ul class="list">
            <li>
                <input type="radio" name="answer" id="a" value="${quizData[number].A}"> 
                <label for="a" id="a_text">${quizData[number].A}</label>
            </li>
            
            <li>
                <input type="radio" name="answer" id="b" value="${quizData[number].A}"> 
                <label for="b" id="b_text">${quizData[number].B}</label>
            </li>
           
            <li>
                <input type="radio" name="answer" id="c" value="${quizData[number].A}">
                <label for="c" id="c_text">${quizData[number].C}</label>
            </li>
         
            <li>
                <input type="radio" name="answer" id="d" value="${quizData[number].A}"> 
                <label for="d" id="d_text">${quizData[number].D}</label>
            </li>
    </ul>
    <button type="submit" class="send">Send</button>

    `


    */