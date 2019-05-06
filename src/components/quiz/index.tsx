import React, { Component } from "react";
import QuizEnd from "../quiz-end";
import QuizQuestion from "../quiz-question";

let quizData = require("../../common/quiz_data.json");
// let quizQuestions = quizData.quiz_questions;

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

    // const quiz_questions = quizQuestions.map((question: IQuestion) => (
    //   <div>
    //     {question.id}, {question.instruction_text}, {question.answer_options}
    //   </div>
    // ));

    // return <div> {React.Children.toArray(items)}</div>;
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
