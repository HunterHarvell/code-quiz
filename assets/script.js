var headerDiv = document.getElementById('header');
var timerEl = document.getElementById('timer');
var displayDiv = document.getElementById('display');
var questionEl = document.getElementById('question');
var startPrompt = document.getElementById('startPrompt');
var response = document.getElementById("response");

// Question array
let questions = [
    {
        question : "Commonly used data types do NOT include:",
        choiceA : "1. boolean",
        choiceB : "2. number",
        choiceC : "3. strings",
        choiceD : "4. alerts",
        correct : "A"
    },
    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA : "1. JavaScript",
        choiceB : "2. terminal/bash",
        choiceC : "3. for loops",
        choiceD : "4. console.log",
        correct : "D"
    },
    {
        question : "The condition in an if / else statement is enclosed with:",
        choiceA : "1. quotes",
        choiceB : "2. curly brackets",
        choiceC : "3. parenthesis",
        choiceD : "4. square brackets",
        correct : "C"
    },
    {
        question : "Arrays in JavaScript can be used to store:",
        choiceA : "1. numbers and strings",
        choiceB : "2. other arrays",
        choiceC : "3. booleans",
        choiceD : "4. all of the above",
        correct : "D"
    },
    {
        question : "Inside what HTML element do we put JavaScript?",
        choiceA : "<p>",
        choiceB : "<script>",
        choiceC : "<scr>",
        choiceD : "<div>",
        correct : "B"
    }
]

// Timer
function startTimer() {
    var timer;
    timerCount = 75;
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = "Time Remaining: " + timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endGame();
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