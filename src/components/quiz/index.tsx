import React, { Component } from "react";
import QuizEnd from "../quiz-end";
import QuizQuestion from "../quiz-question";

let quizData = require("../../common/quiz_data.json");

interface IQuestion {
  id: string;
  instruction_text: string;
  answer_options: string[];
}

export default class Quiz extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  showNextQuestion() {
    this.setState((state: { quiz_position: number }) => {
      return { quiz_position: state.quiz_position + 1 };
    });
  }

  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }
  render() {
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
          />
        )}
      </div>
    );
  }
}
