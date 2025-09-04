import { currentQuiz, questions, questionsContainer } from "./index.js";
let liElements;
export default class Question {
  constructor(index) {
    this.index = index;
    this.question = questions[index].question;
    this.correct = questions[index].correct_answer;
    this.wrongAnswers = questions[index].incorrect_answers;
    this.category = questions[index].category;
    this.allAnswers = this.concatWrongAndCorrectAnswers();
    this.answered = false;
  }

  concatWrongAndCorrectAnswers() {
    return this.wrongAnswers.concat(this.correct).sort();
  }

  displayQuestion() {
    questionsContainer.innerHTML += ` 
      <div class="question shadow-lg col-lg-8 offset-lg-2 p-4 rounded-4">
        <div class="question-header">
          <span class="btn btn-category">${this.category}</span>
          <span class="btn btn-questions">${this.index + 1} of ${
      questions.length
    } Questions</span>
        </div>
        
        <h2 class="question-text">${this.question}</h2>
        
        <ul class="choices list-unstyled m-0">
          ${this.allAnswers
            .map(
              (answer) => `
            <li class="choice-item">${answer}</li>
          `
            )
            .join("")}
        </ul>
        
        <div class="score-display">
          <h2 class="score-color">
            Score: ${currentQuiz.score}
          </h2>
        </div>
      </div>
    `;
    liElements = document.querySelectorAll(".choices li");
    liElements.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.checkAnswer(e);
      });
    });
  }

  checkAnswer(e) {
    if (!this.answered) {
      this.answered = true;
      if (this.correct === e.target.innerHTML) {
        e.target.style.backgroundColor = "#4ade80";
        currentQuiz.score++;
      } else {
        e.target.style.backgroundColor = "rgb(240, 30, 30)";
      }
    }
  }
}
