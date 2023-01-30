// variables for page elements
// time and score
let timerEl = document.getElementById("timer");
let secondsLeft = 75;
let scoreEl = document.getElementById("#score");

// start prompt
const startPrompt = document.getElementById('#start');

// quiz section
const quizEl = document.getElementById('#quiz');
let question = document.getElementById('#question');
let questionCount = 0;
const answerCheck = document.getElementById('#answerCheck');

// quiz end
const enterHS = document.getElementById('#enterHS');
let initialsInput = document.getElementById('#initials');

// highscores
const highscores = document.getElementById('#highscores');
let scoreList = document.getElementById('#score-list');
let coreList = [];

// buttons
const startBtn = document.getElementById('#start-quiz-btn');

const ansBtn = document.querySelectorAll('button.ansBtn');

const ansBtn1 = document.getElementById('#btn1');

const ansBtn2 = document.getElementById('#btn2');

const ansBtn3 = document.getElementById('#btn3');

const ansBtn4 = document.getElementById('#btn4');

const submitScoreBtn = document.getElementById('#submit-score');

const goBackBtn = document.getElementById('#goback');

const clearScrBtn = document.getElementById('#clearscores');

const viewHSBtn = document.getElementById('#viewHighscore');


var headerDiv = document.getElementById('header');
var displayDiv = document.getElementById('display');


var response = document.getElementById("response");

// Question array
const questions = [
    {
        question : "Commonly used data types do NOT include:",
        answers : ["1. boolean", "2. number", "3. strings", "4. alerts"],
        correctAnswer : "1"
    },
    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers : ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer : "4"
    },
    {
        question : "The condition in an if / else statement is enclosed with:",
        answers : ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer : "3"
    },
    {
        question : "Arrays in JavaScript can be used to store:",
        answers : ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer : "4"
    },
    {
        question : "Inside what HTML element do we put JavaScript?",
        answers : ["<p>", "<script>", "<scr>", "<div>"],
        correctAnswer : "2"
    }
]

// Timer
function setTimer() {
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = 'Time Remaining: ${secondsLeft}';
      // Tests if time has run out
      if (secondsLeft === 0 || questionCount === questions.length) {
        clearInterval(timerInterval);
        quizEl.style.display = "none";
        enterHS.style.display = "block";
        scoreEl.textContent = secondsLeft;
      }
    }, 1000);
}

function answerisCorrect() {
    response.textContent = "Correct!";
}

function answerisWrong() {
    response.textContent = "Wrong!";
    timerCount = timerCount-10;
}
// sets index to cycle questions
var lastQuestionIndex = questions.length-1;
var runningQuestionIndex = 0;
function startGame() {
    startButton.setAttribute("style", "display: none");
    startPrompt.setAttribute("style", "display: none");
    // Create ordered list items
    var b1 = document.createElement("button")
    b1.className += "btn";
    var b2 = document.createElement("button")
    b2.className += "btn";
    var b3 = document.createElement("button")
    b3.className += "btn";
    var b4 = document.createElement("button")
    b4.className += "btn";
    displayDiv.appendChild(b1);
    displayDiv.appendChild(b2);
    displayDiv.appendChild(b3);
    displayDiv.appendChild(b4);

    function renderQuestion() {
        let q = questions[runningQuestionIndex];
        questionEl.textContent = q.question;
        b1.textContent = q.choiceA;
        b2.textContent = q.choiceB;
        b3.textContent = q.choiceC;
        b4.textContent = q.choiceD;
    }
    // checks our answer and displays the corresponding text
    function checkAnswer() {
        if(questions[runningQuestionIndex].correct == answer) {
            answerisCorrect();
        } else{
            answerisWrong();
        }
        if(runningQuestionIndex == lastQuestionIndex) {
            function endGame() {
                var score = timerCount;

            }
        }
    }
    renderQuestion();
    var answer = displayDiv.addEventListener("click", "")
    checkAnswer();
    runningQuestionIndex++;
}

// start button
var startButton = document.querySelector(".start-quiz");
startButton.addEventListener("click", function() {
    startTimer();
    startGame();
});