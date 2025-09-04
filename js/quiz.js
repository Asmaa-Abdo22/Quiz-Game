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
}
