import React, { Component } from "react";

let quizData = require("../../common/quiz_data.json");
let quizQuestions = quizData.quiz_questions;

interface IQuestion {
  id: string;
  instruction_text: string;
  answer_options: string[];
}

export default class Quiz extends Component {
  render() {
    const items = quizQuestions.map((question: IQuestion) => (
      <div>
        {question.id}, {question.instruction_text}, {question.answer_options}
      </div>
    ));

    return <div> {React.Children.toArray(items)}</div>;
  }
}
