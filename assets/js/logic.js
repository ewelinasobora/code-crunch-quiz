const startQuizButton = document.querySelector(".start");
const getStartScreen  = document.getElementById("start-screen");
const timer = document.querySelector(".timer");
const getEndScreen = document.getElementById("end-screen");

startQuizButton.addEventListener("click", startQuiz)

// function that starts the quiz
function startQuiz() {
    hideStartScreen();
    startTimer ();
}

// function that hides the start screen and shows the questions
function hideStartScreen() {
    getStartScreen.style.display = "none";
}

// function that starts the timer
function startTimer () {
    let timeLeft = 3;
    let timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            displayEndScreen();
        }
    }, 1000);

}

// function that displays the end screen
function displayEndScreen () {
  getEndScreen.style.display = "block";
}
