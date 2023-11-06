const clearHighScores = document.getElementById("clear");
const highScores = document.getElementById("highscores");

// function that gets the scores from local storage
function  getScores() {
    let scores = localStorage.getItem("score");
    let initials = localStorage.getItem("initials");
    if (scores && initials) {
      highScores.textContent = scores + " " + initials;
    } else {
        return [];
    }
}

// function that clears the scores from local storage
function clearScores() {
    localStorage.removeItem("score");
    localStorage.removeItem("initials");
    getScores();
}

// it calls the getScores function to display the scores
getScores();
// listener for the clear highscores button button
clearHighScores.addEventListener("click", clearScores);
