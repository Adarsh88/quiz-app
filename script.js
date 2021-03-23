const quizData = [
  {
    question: "How old is James?",
    a: "10",
    b: "17",
    c: "20",
    d: "25",
    correct: "c",
  },
  {
    question: "What is the most used programming language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of India",
    a: "Narendra Modi",
    b: "Ram Nath Kovind",
    c: "Pranab Mukherjee",
    d: "Rajnath Singh",
    correct: "b",
  },
  {
    question: "What is the full form of WWW?",
    a: "World Web Wide",
    b: "World Wide Web",
    c: "World Wake Win",
    d: "World Wack Way",
    correct: "b",
  },
  {
    question: "What is the capital of Canada?",
    a: "Ottawa",
    b: "Toronto",
    c: "Montreal",
    d: "Vancouver",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answersE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const subBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersE1s.forEach((answerE1) => {
    answerE1.checked = false;
  });
}

subBtn.addEventListener("click", () => {
  //Check to see the answer
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
