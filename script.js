//Variable declaration
var score = 0;
var timer;
var isPlaying = false;
var currentQuestion = 0;

//Query Selectors
var startBtn = document.querySelector("#start");
var highscoreBtn = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question");
var aBtn = document.querySelector("#optionA");
var bBtn = document.querySelector("#optionB");
var cBtn = document.querySelector("#optionC");
var dBtn = document.querySelector("#optionD");
var answerEl = document.querySelector("#answer");
var buttonEl = document.querySelector("button");

// var quizObject = {
//   // would an array of objects be better? 
//   questionOne: ["Is coding fun?", "yes", "no", "maybe", "idk", "yes"],
//   questionTwo: ["Question Two", "option 1", "option 2", "option 3", "option 4", "option 2"],
//   questionThree: ["Question Three", "option 1", "option 2", "option 3", "option 4", "option 3"],
//   questionFour: ["Question Four", "option 1", "option 2", "option 3", "option 4", "option 4"],
//   questionFive: ["Question Five", "option 1", "option 2", "option 3", "option 4", "option 1"],
// }

var quizArray = [
  { question: "What is Mario's last name?",
    correctAnwer: "Mario",
    answers: {
      optionA: "Mario", //Correct
      optionB: "Bros",
      optionC: "Miyamoto",
      optionD: "Smith"
    }
  },
  { question: "Who is the main protagonist of the Halo franchise?",
    correctAnwer: "Master Chief",
    answers: {
      optionA: "Sergeant Johnson",
      optionB: "Papa Smurf",
      optionC: "Master Chief", //Correct
      optionD: "Gordon Freeman"
    },
  },
  {
    question: "What inspired gamemaker Satoshi Tajiri to create Pokémon?",
    correctAnwer: "Butterflies",
    answers: {
      optionA: "A dream",
      optionB: "Butterflies", //Correct
      optionC: "An old TV show",
      optionD: "His mom"
    },
  },
  {
    question: "What was Sonic the hedgehog's original name?",
    correctAnwer: "Mr Needlemouse",
    answers: {
      optionA: "Fast Blue Hedgehog",
      optionB: "Colin the Hedgehog",
      optionC: "Mr Needlemouse", //Correct
      optionD: "Steven"
    }
  },
  {
    question: "What was the first commercially successful video game?",
    correctAnwer: "Pong",
    answers: {
      optionA: "Pong", //Correct
      optionB: "Donkey Kong Country",
      optionC: "Super Mario Bros",
      optionD: "Shaq Fu"
    }
  }
]

//Load questions and answers into document
function loadNextQuestion(question) {
  questionEl.textContent = quizArray[currentQuestion].question;
  aBtn.textContent = quizArray[currentQuestion].answers.optionA;
  bBtn.textContent = quizArray[currentQuestion].answers.optionB;
  cBtn.textContent = quizArray[currentQuestion].answers.optionC;
  dBtn.textContent = quizArray[currentQuestion].answers.optionD;
}


function startQuiz() {
  isPlaying = true;
  timer = 75;
  console.log("Started game");
  //startBtn.classList.add('hide');
  setTime();
}

function setTime() {
  var timerInterval = setInterval(function() {

    timer--;
    //timerEl.textContent = timer;
    timerEl.textContent = "Time: " + timer;

    if(timer === 0 || currentQuestion === 4) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function gameOver() {

}


// aBtn.addEventListener("click", compareQuestion);
// bBtn.addEventListener("click", compareQuestion);
// cBtn.addEventListener("click", compareQuestion);
// dBtn.addEventListener("click", compareQuestion);
// highscoreBtn.addEventListener("click", viewHighscores);
startBtn.addEventListener("click", startQuiz);

// PSEUDO CODE
// I need to store a set of questions in an object or array
// when the start button is clicked 
// pull first question from object/array
// comapre input with database of answers
// on correct answer
//  go to next page
// on incorrect answer
//  deduct points
//  go to next page
// when timer reaches 0 or no more questions game over, transition to score page
// display score and input field for initials
// submit button to submit score to high score list
// UI needs a View highscore option to 

// var quiz = {
//   // would an array of objects be better? 
//   questionOne: ["is coding fun?", "yes", "no", "maybe", "idk", "yes"],
//   questionTwo: ["Question Two", "option 1", "option 2", "option 3", "option 4", "option 2",
//   questionThree: ["Question Three", "option 1", "option 2", "option 3", "option 4", "option 3"],
//   questionFour: ["Question Four", "option 1", "option 2", "option 3", "option 4", "option 4"],
//   questionFive: ["Question Five", "option 1", "option 2", "option 3", "option 4", "option 1"],
// }

//var timer;
//var quizStarted = false;
//HTML elements to capture
//timerEl = document.QuerySelector("#timer");
//highscoreEl ...
//startButtonEl ...
//quizContainerEl/mainContentEl ...
//initialsEl
//submitHsEl

//EventListeners
//highscoreEl.Event Listener
//start quiz. event listener
//submit HS. Event listener
//initalsEl.Event listerner

//while loop for question looping
//user click on start Quiz button
  // event listener changes quizStarted to true
//mainContentEl updates with questionOne

//functions needed
  //compareAnswer(); returns true or false
  //  if selectedAnswer === correctAnswer
  //    update display("Correct")
  //  else
  //    update display("Incorrect")
  //    deductTime()
  //      timer = timer - 10;
  //      update timerEl
  //  loadNextQuestion()

  //loadNextQuestion(); sets HTML elements to next question
    //addButton; add button for each choice for question
  //deductTime(); subtracts time from timer
  //showAnswer(); when user clicks on choice, update ui to show whether it was right or wrong
  //gameOver(); when game is over load gameOver screen
  //saveScore();


// User Story
// AS A coding bootcamp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score