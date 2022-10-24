var headerDiv = document.getElementById('header');
var timerEl = document.getElementById('timer');
var displayDiv = document.getElementById('display');

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

function startGame() {
    // Create ordered list items
    var b1 = displayDiv.createElement("button");
    var b2 = displayDiv.createElement("button");
    var b3 = displayDiv.createElement("button");
    var b4 = displayDiv.createElement("button");
    // Question 1
    displayDiv.h1.textContent = "How many different kinds of data?";
    listEl.li1.textContent = "boolean";
    listEl.li2.textContent = "number";
    listEl.li3.textContent = "False";
    listEl.li4.textContent = "alerts";
}







function endGame() {
    
localStorage.setItem("loseCount", loseCounter);


}
var startButton = document.querySelector(".start-quiz");
startButton.addEventListener("click", function() {
    startTimer();
    startGame();
});