import Question from "./question.js";
import Quiz from "./quiz.js";
// &-----HTML ELEMENTS----
const categoryMenu = document.querySelector("#categoryMenu");
const difficultyOptions = document.querySelector("#difficultyOptions");
const questionsNumber = document.querySelector("#questionsNumber");
const startQuizBtn = document.querySelector("#startQuiz");
const quizOptions = document.querySelector("#quizOptions");
const appFooter = document.querySelector(".app-footer");
export const questionsContainer = document.querySelector(
  ".questions-container"
);
// ~-----GLOBAL VARIABLES----
export let questions = [];
export let currentQuiz = {};
// *-----FUNCTIONS----

// !-----EVENTS----
startQuizBtn.addEventListener("click", async () => {
  const category = categoryMenu.value;
  const difficulty = difficultyOptions.value;
  const amount = questionsNumber.value;
  currentQuiz = new Quiz(difficulty, amount, category);
  questions = await currentQuiz.getQuestions();
  console.log({ questions: questions });
  quizOptions.classList.add("d-none");
  appFooter.classList.add("d-none");
  questionsContainer.classList.remove("d-none");
  let firstQuestion = new Question(0);
  console.log(firstQuestion);
  firstQuestion.displayQuestion();
});
