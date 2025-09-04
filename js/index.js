import Quiz from "./quiz.js";

// &-----HTML ELEMENTS----
const categoryMenu = document.querySelector("#categoryMenu");
const difficultyOptions = document.querySelector("#difficultyOptions");
const questionsNumber = document.querySelector("#questionsNumber");
const startQuizBtn = document.querySelector("#startQuiz");
const quizOptions = document.querySelector("#quizOptions");
const questionsContainer = document.querySelector(".questions-container");
// ~-----GLOBAL VARIABLES----
// *-----FUNCTIONS----
// !-----EVENTS----
startQuizBtn.addEventListener("click", async () => {
  const category = categoryMenu.value;
  const difficulty = difficultyOptions.value;
  const amount = questionsNumber.value;
  const currentQuiz = new Quiz(difficulty, amount, category);
  const questions = await currentQuiz.getQuestions();
  console.log({ questions: questions });
  quizOptions.classList.add("d-none")
  questionsContainer.classList.remove("d-none")
});
