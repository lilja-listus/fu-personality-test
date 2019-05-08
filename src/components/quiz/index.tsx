import React, { Component } from "react";
import QuizEnd from "../quiz-end";
import QuizQuestion from "../quiz-question";

let quizData = require("../../common/data/quiz_data.json");

interface IQuestion {
  id: string;
  instruction_text: string;
  answer_options: string[];
}

export default class Quiz extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { quiz_position: 1, sumAnswers: 0 };
  }

  showNextQuestion() {
    this.setState((state: { quiz_position: number }) => {
      return { quiz_position: state.quiz_position + 1 };
    });
  }

  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }

  selectAnswer = (id: any) => {
    this.setState({ sumAnswers: this.state.sumAnswers + id });
  };

  render() {
    console.log(this.state.sumAnswers);

    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;

    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
            selectAnswer={this.selectAnswer}
          />
        )}
      </div>
    );
  }
}
