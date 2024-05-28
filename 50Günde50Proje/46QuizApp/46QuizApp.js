
const quizData = [
    {
        "quess": "1-Which language runs in a web browser",
        "A": "Java",
        "B": "C",
        "C": "Python",
        "D": "Javascript",
        "correct": "d"
    },
    {
        "quess": "2-What does CSS stand for",
        "A": "Centrel Style Sheets",
        "B": "Casceding Style Sheets",
        "C": "Cascadşng Simple Sheets",
        "D": "Cars Suvs Sailbaits",
        "correct": "b",
    },
    {
        "quess": "3-What does HTML stand for",
        "A": "Hypertext Markup Langueage",
        "B": "Casceding Style Sheets",
        "C": "Cascadşng Simple Sheets",
        "D": "Cars Suvs Sailbaits",
        "correct": "a"

    },
    {
        "quess": "4-What year was JS launched",
        "A": "1995",
        "B": "1996",
        "C": "1994",
        "D": "none the above",
        "correct": "b"

    }
]

const quiz = document.querySelector(".container")
const answerEls = document.querySelectorAll(".answer")
const quesEl = document.querySelector(".question")
const a_text = document.querySelector("#a_text")
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")
const submitBtn = document.querySelector(".submitt")

let curretQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAns()//Tüm elemenlerdeki checked kaldırmak için

    const curretQuizData = quizData[curretQuiz]

    quesEl.innerHTML = curretQuizData.quess
    a_text.innerHTML = curretQuizData.A
    b_text.innerHTML = curretQuizData.B
    c_text.innerHTML = curretQuizData.C
    d_text.innerHTML = curretQuizData.D
}

function deselectAns() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

//Event başlatarak verilen cevabı kontrol ettirip bir sonraki soruya geçiş
submitBtn.addEventListener("click", (e)=> {
    e.preventDefault()
   
    const answer = getSelected()
  

    if (answer === quizData[curretQuiz].correct) {
        score++
    }

    curretQuiz++

    if (curretQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
            <h2>You answered correcctly at ${score}/${quizData.length} questions </h2>

            <button onclick="location.reload()">Reload</button>
            `
    }

})

//Cevabı almak için Q
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}




