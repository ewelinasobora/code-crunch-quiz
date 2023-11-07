const clearHighScores = document.getElementById("clear");
const highScores = document.getElementById("highscores");

// function that gets the scores from local storage
function getScores() {
  let userData = JSON.parse(localStorage.getItem("userData") || "[]");

  // it displays all records from local storage
  for (let i = 0; i < userData.length; i++) {
    let scores = userData[i].score;
    let initials = userData[i].initials;

    if (scores && initials) {
      let record = document.createElement("p");
      record.textContent = scores + " - " + initials;
      record.setAttribute("class", "user-data");
      highScores.appendChild(record);
    } else {
      return userData;
    }
  }
}

// function that clears the scores from local storage
function clearScores() {
  localStorage.removeItem("score");
  localStorage.removeItem("userData");
  getScores();
}

// it calls the getScores function to display the scores
getScores();
// listener for the clear highscores button button
clearHighScores.addEventListener("click", clearScores);
