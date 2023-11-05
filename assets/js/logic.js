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
    choices: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "China", "USA"],
    answer: "Russia"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  }
];

// event listener that starts the quiz
startQuizButton.addEventListener("click", startQuiz)

// function that starts the quiz
function startQuiz() {
  hideStartScreen();
  showQuestions()
  startTimer();
}

// function that shows the questions and choices on the screen
function showQuestions() {
  getQuestions.style.display = "block";

  for (let i = 0; i < questions.length; i++) {
    getQuestionTitle.textContent = questions[i].question;

    // creates a button for each choice value
    for (let j = 0; j < questions[i].choices.length; j++) {
      let choiceButton = document.createElement("button");
      choiceButton.textContent = questions[i].choices[j];
      getChoices.appendChild(choiceButton);
    }
  }
}

// function that hides the start screen and shows the questions
function hideStartScreen() {
  getStartScreen.style.display = "none";
}

// function the starts the timer and displays the end screen
function startTimer() {
  let timeLeft = 15;
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
