// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
      var createLi = document.createElement("li");
      createLi.style.listStyle = "none";
      createLi.style.marginBottom = "1rem";
      createLi.style.display = "flex";
      createLi.style.justifyContent = "space-between";
  
      var initialsSpan = document.createElement("span");
      initialsSpan.textContent = allScores[i].initials;
  
      var scoreSpan = document.createElement("span");
      scoreSpan.textContent = allScores[i].score;
  
      createLi.appendChild(initialsSpan);
      createLi.appendChild(scoreSpan);
      highScore.appendChild(createLi);
    }
  }

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});