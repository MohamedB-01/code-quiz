var questionsArr = [
  {
    question: "what color is the sky ?",
    answer1 : "blue",
    answer2 : "red",
    answer3 : "orange",
    answer4 : "green",
    correctAnswer: "blue"
  },
  {
    question : "what color is milk?",
    answer1 : "white",
    answer2 : "red",
    answer3 : "orange",
    answer4 : "green",
    correctAnswer: "white",
  },
  {
    question : "what is the color of snow?",
    answer1 : "white",
    answer2 : "red",
    answer3 : "orange",
    answer4 : "green",
    correctAnswer: "white", 
  },
  {
    question : "what is the color of blood?",
    answer1 : "white",
    answer2 : "red",
    answer3 : "orange",
    answer4 : "green",
    correctAnswer: "red", 
  }
];
var currentInd = 0;
var timerElement = document.querySelector(".timer-text"); 
var startBtn = document.querySelector("#start-btn");
var questionEl = document.querySelector("#questions");
var answerEl1 = document.querySelector(".answer1");
var answerEl2 = document.querySelector(".answer2");
var answerEl3 = document.querySelector(".answer3");
var answerEl4 = document.querySelector(".answer4");
var answerBtn = document.querySelectorAll(".answer"); 
var questionResult = document.querySelector("#question-result")
var startQuizEl = document.querySelector("#start-quiz");
var quizEl = document.querySelector("#quiz");
var endGameEl = document.querySelector(".end-game");
var correctEl = document.querySelector(".correct");
var wrongEl = document.querySelector(".wrong");
var scoreEl = document.querySelector("#score");
var correct = 0;
var wrong = 0;
var saveButton = document.querySelector("#save");
var intialsEl = document.querySelector("#intials");

function displayQuestion() {
  if (currentInd < questionsArr.length){
  questionEl.textContent = questionsArr[currentInd].question;
  answerEl1.textContent = questionsArr[currentInd].answer1;
  answerEl2.textContent = questionsArr[currentInd].answer2;
  answerEl3.textContent = questionsArr[currentInd].answer3;
  answerEl4.textContent = questionsArr[currentInd].answer4;
  } else{
    endGame();
  }
  ;
};

function correctAns(){
  

    questionResult.textContent = "correct answer!!";
    currentInd++;
    correct++;
    correctEl.textContent = correct;
    displayQuestion();
};

function wrongAns(){
  
    questionResult.textContent = "wrong answer!!";
    currentInd++;
    wrong++;
    wrongEl.textContent = wrong;
    timerCount-= 10; 
    displayQuestion();
   
};



answerBtn.forEach(function(ansBtn){
 
  
  ansBtn.addEventListener("click", function(event){
    var userAns = event.target.textContent;
 if ( userAns === questionsArr[currentInd].correctAnswer){
  correctAns();
 } else {
  wrongAns();
 }
 })
 });

  function startGame() {
    startQuizEl.style.display = "none";
    quizEl.style.display = "block";
    timerCount = 90;
    displayQuestion();
    startTimer()
  };



function startTimer() {
  
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
    
        endGame();
      }
    }, 1000);
  };

  function endGame() {
    startQuizEl.style.display = "none";
    quizEl.style.display = "none";
    endGameEl.style.display = "block";
    clearInterval(timer);
    scoreEl.textContent = "correct : " + correct + ", wrong: " + wrong;
  };

  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var UserScore = {
      intialsEl: intialsEl.value.trim(),
      correct: correct,
      wrong: wrong
    };
    
    localStorage.setItem("UserScore", JSON.stringify(UserScore));
    scoreMessage();
    
    });
    
    function scoreMessage() {
      var lastscore = JSON.parse(localStorage.getItem("UserScore"));
      if (lastscore !== null) {
        document.querySelector("#saved-score").textContent = intialsEl.value + 
        " answered  " + correct + " correct and " + wrong + " wrong"
      }
    }

  startBtn.addEventListener("click",startGame);
