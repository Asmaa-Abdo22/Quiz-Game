export default class Quiz {
  constructor(difficulty, numberOfQuestions, category) {
    this.difficulty = difficulty;
    this.numberOfQuestions = numberOfQuestions;
    this.category = category;
    this.score = 0;
  }
  async getQuestions() {
    let response = await fetch(
      `https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`
    );
    let data = await response.json();
    console.log(data.results);
    return data.results;
  }
  endQuiz() {
    return `
    <div
      class="question shadow-lg col-lg-8 offset-lg-2 p-4 rounded-4 text-center"
      data-aos="zoom-in" data-aos-duration="800"
    >
      <h2 class="mb-0" data-aos="fade-down" data-aos-delay="300">
      ${
        this.score == this.numberOfQuestions
          ? `Congratulations, Champion! 🎉 you got full mark 

`
          : `Your score is ${this.score} of ${this.numberOfQuestions} `
      }      
      </h2>
      <button class="again btn mt-4 rounded-pill" data-aos="zoom-in" data-aos-delay="500">Try Again</button>
    </div>
    `;
  }
}
