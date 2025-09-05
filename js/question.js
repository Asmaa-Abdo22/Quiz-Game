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
    questionsContainer.innerHTML = ` 
      <div class="question shadow-lg col-lg-8 offset-lg-2 p-4 rounded-4" data-aos="zoom-in" data-aos-duration="600">
        <div class="question-header" data-aos="fade-down" data-aos-delay="200">
          <span class="btn btn-category" data-aos="fade-right" data-aos-delay="300">${this.category}</span>
          <span class="btn btn-questions" data-aos="fade-left" data-aos-delay="300">${this.index + 1} of ${
      questions.length
    } Questions</span>
        </div>
        
        <h2 class="question-text" data-aos="fade-up" data-aos-delay="400">${this.question}</h2>
        
        <ul class="choices list-unstyled m-0" data-aos="fade-in" data-aos-delay="500">
          ${this.allAnswers
            .map(
              (answer, index) => `
            <li class="choice-item" data-aos="fade-right" data-aos-delay="${600 + index * 100}">${answer}</li>
          `
            )
            .join("")}
        </ul>
        
        <div class="score-display" data-aos="fade-up" data-aos-delay="800">
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
      if (this.correct.toLowerCase() === e.target.innerHTML.toLowerCase()) {
        e.target.style.backgroundColor = "#4ade80";
        currentQuiz.score++;
      } else {
        e.target.style.backgroundColor = "rgb(240, 30, 30)";
      }
      setTimeout(() => {
        this.nextQuestions();
      }, 1000);
    }
  }
  nextQuestions() {
    if (this.index < questions.length - 1) {
      this.index++;
      let nextQuestion = new Question(this.index);
      nextQuestion.displayQuestion();
      return;
    }
    questionsContainer.innerHTML = currentQuiz.endQuiz();
    const tryAgainBtn = document.querySelector(".again");
    tryAgainBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
}
