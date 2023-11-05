const startQuizButton = document.querySelector(".start");
const getStartScreen  = document.getElementById("start-screen");

startQuizButton.addEventListener("click", startQuiz)

// function that starts the quiz
function startQuiz() {
    hideStartScreen();
}

// function that hides the start screen and shows the questions
function hideStartScreen() {
    getStartScreen.style.display = "none";
}
