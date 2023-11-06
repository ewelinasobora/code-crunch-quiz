const startQuizButton = document.querySelector(".start");
const timer = document.querySelector(".timer");
const getFeedback = document.querySelector(".feedback");
const getScores = document.querySelector(".scores");
const getStartScreen = document.getElementById("start-screen");
const getQuestions = document.getElementById("questions");
const getQuestionTitle = document.getElementById("question-title");
const getChoices = document.getElementById("choices");
const getFinalScore = document.getElementById("final-score");
const getInitials = document.getElementById("initials");
const getSubmit = document.getElementById("submit");
const getEndScreen = document.getElementById("end-screen");

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest country in the world?",
    options: ["Russia", "Canada", "China", "USA"],
    answer: "Russia"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  }
];

// event listener that starts the quiz
startQuizButton.addEventListener("click", startQuiz)

// function that starts the quiz
function startQuiz() {
  hideStartScreen();
  startTimer();
  showQuestions();

}

// function that displays the questions and options on the screen
function showQuestions() {
  let i = 0;

  getQuestions.style.display = "block";
  getChoices.innerHTML = "";

  for (let j = 0; j < questions[i].options.length; j++) {
    getQuestionTitle.textContent = questions[i].question;

    var optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option");
    optionButton.textContent = questions[i].options[j];
    getChoices.appendChild(optionButton);
  }
}

// function that hides the start screen and shows the questions
function hideStartScreen() {
  getStartScreen.style.display = "none";
}

// function the starts the timer and displays the end screen
function startTimer() {
  let timeLeft = 100;
  let timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayEndScreen();
    }
  }, 1000);

}

// function that displays the end screen
function displayEndScreen() {
  getQuestions.style.display = "none";
  getEndScreen.style.display = "block";
}
