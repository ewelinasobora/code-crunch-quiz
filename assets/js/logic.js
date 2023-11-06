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
const submitButton = document.getElementById("submit");
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
  // startTimer();
  showQuestions();

}

// function that displays the questions and options on the screen
function showQuestions() {
  let score = 0;
  let questionIndex = 0;

  getQuestions.style.display = "block";
  // function that shows the next question
  function displayQuestion(index) {
    // it checks if there are no more questions to display
    if (index >= questions.length) {
      displayEndScreen();
      return;
    }
    // it displays the current question
    getQuestionTitle.textContent = questions[index].question;

    for (let j = 0; j < questions[index].options.length; j++) {
      // it creates a new button element for each option
      let optionButton = document.createElement("button");
      // it sets the 'option' class for each button
      optionButton.setAttribute("class", "option");
      // it sets the text content for each button
      optionButton.textContent = questions[index].options[j];
      // it appends the button to the choices div
      getChoices.appendChild(optionButton);

      // it listens for a click event on the option button
      optionButton.addEventListener("click", function () {
        if (questions[index].options[j] === questions[index].answer) {
          displayMessage("feedback correct", "Correct!")
          score++;
          localStorage.setItem("score", score);
        } else {
          displayMessage("feedback wrong", "Wrong!")
        }
        index++;
        // it resets the choices to ensure that the options for the previous question are not displayed
        getChoices.textContent = "";
        // once the user selects an option, the function displayQuestion is called to display the next question
        displayQuestion(index);
      });
    }
  }
  // it calls the displayQuestion function first time to start displaying the questions
  displayQuestion(questionIndex);
}

function displayFinalScore() {
  let score = localStorage.getItem("score");
  getFinalScore.textContent = score;
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
  displayFinalScore()
}

// function that displays the feedback
function displayMessage(type, message) {
  getFeedback.textContent = message;
  getFeedback.setAttribute("class", type);
}

// listener for the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  let initials = getInitials.value;

  // it checks if the initials are empty
  if (initials === "") {
    displayMessage("error", "Please enter your initials");
  } else {
    displayMessage("success", "Score saved successfully");

    localStorage.setItem("initials", initials);
  }
});
