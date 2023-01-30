// variables for page elements
// time and score
let timerEl = document.getElementById('timer');
let secondsLeft = 75;
let scoreEl = document.getElementById('score');

// start prompt
const startPrompt = document.getElementById('start');

// quiz section
const quizEl = document.getElementById('quiz');
let question = document.getElementById('question');
let questionCount = 0;
const answerCheck = document.getElementById('answerCheck');

// quiz end
const enterHS = document.getElementById('enterHS');
let initialsInput = document.getElementById('initials');

// highscores
const highscores = document.getElementById('highscores');
let scoreListEl = document.getElementById('score-list');
let scoreList = [];

// buttons
const startBtn = document.getElementById('start-quiz-btn');

const ansBtn = document.querySelectorAll('button.ansBtn');

const ansBtn1 = document.getElementById('btn1');

const ansBtn2 = document.getElementById('btn2');

const ansBtn3 = document.getElementById('btn3');

const ansBtn4 = document.getElementById('btn4');

const submitScoreBtn = document.getElementById('submit-score');

const goBackBtn = document.getElementById('goback');

const clearScrBtn = document.getElementById('clearscores');

const viewHSBtn = document.getElementById('viewHighscore');

// Question array
const questions = [
    {
        question : "Commonly used data types do NOT include:",
        answers : ["1. boolean", "2. number", "3. strings", "4. alerts"],
        correctAnswer : "3"
    },
    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers : ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer : "3"
    },
    {
        question : "The condition in an if / else statement is enclosed with:",
        answers : ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer : "1"
    },
    {
        question : "Arrays in JavaScript can be used to store:",
        answers : ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer : "3"
    },
    {
        question : "Inside what HTML element do we put JavaScript?",
        answers : ["<p>", "<script>", "<scr>", "<div>"],
        correctAnswer : "1"
    }
]

// Timer
function setTimer() {
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = `Time Remaining: ${secondsLeft}`;
      // Tests if time has run out
      if (secondsLeft === 0 || questionCount === questions.length) {
        clearInterval(timerInterval);
        quizEl.style.display = "none";
        enterHS.style.display = "block";
        scoreEl.textContent = secondsLeft;
      }
    }, 1000);
}

function startQuiz() {
    startPrompt.style.display = "none";
    quizEl.style.display = "block";
    questionCount = 0;

    setTimer();
    setQuestion(questionCount);   
}

function setQuestion(id) {
    if (id < questions.length) {
        question.textContent = questions[id].question;
        ansBtn1.textContent = questions[id].answers[0];
        ansBtn2.textContent = questions[id].answers[1];
        ansBtn3.textContent = questions[id].answers[2];
        ansBtn4.textContent = questions[id].answers[3];
    }
}

function checkAnswer(event) {
    event.preventDefault();

    // show section
    answerCheck.style.display = "block";
    let p = document.createElement('p');
    answerCheck.appendChild(p);

    // set timeout
    setTimeout(function () {
        p.style.display = "none";
    }, 1000);

    // display response
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct Answer";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "wrong";
    }

    // increment question number
    if (questionCount < questions.length) {
        questionCount++;
    }

    // set next question
    setQuestion(questionCount);
}

function addScore(event) {
    event. preventDefault();

    enterHS.style.display = "none";
    highscores.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

// Event Listeners
startBtn.addEventListener("click", startQuiz);

ansBtn.forEach(item => {
    item.addEventListener("click", checkAnswer);
});

submitScoreBtn.addEventListener("click", addScore);

goBackBtn.addEventListener("click", function () {
    highscores.style.display = "none";
    startPrompt.style.display = "block";
    secondsLeft = 75;
    timerEl.textContent = `Time Remaining: ${secondsLeft}`;
});

clearScrBtn.addEventListener("click", clearScores);

viewHSBtn.addEventListener("click", function () {
    if (highscores.style.display === "none") {
        highscores.style.display = "block";
    } else if (highscores.style.display === "block") {
        highscores.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
});

