// Array of objects for quiz questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
var timer;
var currentTime = document.getElementById("currentTime");
var secondsLeft = 75;
var questionIndex = 0;

var questionsDiv = document.getElementById("questionsDiv");
var ulCreate = document.createElement("ul");

// Renders questions and choices to the page
function render() {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    var currentQuestion = questions[questionIndex];
    var userQuestion = currentQuestion.title;
    var userChoices = currentQuestion.choices;

    questionsDiv.textContent = userQuestion;

    userChoices.forEach(function (choice) {
        var listItem = document.createElement("li");
        listItem.textContent = choice;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", compare);
    });
}

var timer;
var currentTime = document.getElementById("currentTime");
var secondsLeft = 75;
var questionIndex = 0;

var questionsDiv = document.getElementById("questionsDiv");
var ulCreate = document.createElement("ul");

// Renders questions and choices to the page
function render() {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    var currentQuestion = questions[questionIndex];
    var userQuestion = currentQuestion.title;
    var userChoices = currentQuestion.choices;

    questionsDiv.textContent = userQuestion;

    userChoices.forEach(function (choice) {
        var listItem = document.createElement("li");
        listItem.textContent = choice;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", compare);
    });
}

function compare() {
    // Logic to compare the selected choice with the correct answer
    // ...

    // Move to the next question
    questionIndex++;

    // Render the next question
    render();
}

// Triggers timer on button click and starts the quiz
var startQuizBtn = document.getElementById("startQuizBtn");
startQuizBtn.addEventListener("click", function () {
    timer = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            // Handle when time runs out
        }
    }, 1000);

    render();
});