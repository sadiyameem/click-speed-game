document.addEventListener("DOMContentLoaded", function(){

  // game variables
  var score = 0;
  var timeLeft = 30;
  var timer;
  var gameRunning = false;

  var button = document.getElementById("clickButton");
  var scoreDisplay = document.getElementById("score");
  var message = document.getElementById("message");

  var timerDisplay = document.createElement("p");
  timerDisplay.textContent = "Time Left:"+ timeLeft;
  document.querySelector(".container").appendChild(timerDisplay);

// function to start timer
  function startTimer() {
    timer = setInterval(function () {
      timeLeft--;
      timerDisplay.textContent = "Time Left:"+ timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        message.textContent = "Time's up! Final Score:"+ score;
      }
    }, 1000);
  }

  button.addEventListener("click", function () {
    if (!gameRunning) {
      gameRunning = true;
      startTimer();
    }
    
    score++;
    scoreDisplay.textContent = score;

    // move button randomly
    var randomX = Math.floor(Math.random()*300);
    var randomY = Math.floor(Math.random()*300);
    button.style.position = "relative";
    button.style.left = randomX +"px";
    button.style.top = randomY +"px";
  });
});









