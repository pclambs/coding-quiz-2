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
var holdInterval = 0;
var score = 0;
var penalty = 15;
var startQuizBtn = document.getElementById("startQuizBtn");

var questionsDiv = document.getElementById("questionsDiv");
var ulCreate = document.createElement("ul")

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

function compare(event) {
    // Logic to compare the selected choice with the correct answer
    var element = event.target;

    if (element.matches("li")) {

        var feedbackDiv = document.createElement("div");
        feedbackDiv.setAttribute("id", "feedbackDiv");
        if (element.textContent == questions[questionIndex].answer) {
            // correct
            score++;
            feedbackDiv.textContent = "Correct!";
        } else {
            // incorrect deducts 15 seconds off secondsLeft
            secondsLeft = secondsLeft - penalty;
            feedbackDiv.textContent = "Wrong! The correct answer was:  " + questions[questionIndex].answer;
        }
    }
    
    // Move to the next question
    questionIndex++;
    
    if (questionIndex >= questions.length) {
        // End quiz. Will append last page with user stats
        quizEnd(); 
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(feedbackDiv);
}

// Triggers timer on button click and starts the quiz
startQuizBtn.addEventListener("click", function () {
    timer = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            quizEnd();
            currentTime.textContent = "Time's up!";
        }
    }, 1000);
    render();
});
// end page for quiz
function quizEnd() {
    questionsDiv.innerText = "";
    currentTime.innerText = "";
    // heading
    var endH1 = document.createElement("h1");
    endH1.setAttribute("id", "createH1");
    endH1.textContent = "All Done!"

    questionsDiv.appendChild(endH1);
    // paragraph
    var endP = document.createElement("p");
    endP.setAttribute("id", "endP");

    questionsDiv.appendChild(endP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var endP2 = document.createElement("p");
        clearInterval(holdInterval)
        endP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(endP2);
    }
    // Label
    var endLabel = document.createElement("label");
    endLabel.setAttribute("id", "endLabel");
    endLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(endLabel);

    // input
    var endInput = document.createElement("input");
    endInput.setAttribute("type", "text");
    endInput.setAttribute("id", "initials");
    endInput.textContent = "";

    questionsDiv.appendChild(endInput);

    // submit
    var endSubmit = document.createElement("button");
    endSubmit.setAttribute("type", "submit");
    endSubmit.setAttribute("id", "Submit");
    endSubmit.textContent = "Submit";

    questionsDiv.appendChild(endSubmit);

}