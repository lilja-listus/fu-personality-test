import React, { Component } from "react";
import TestEnd from "../test-end";
import TestQuestion from "../test-question";
import "./index.scss";

let testData = require("../../common/data/test_data.json");

interface IQuestion {
  id: string;
  instruction_text: string;
  answer_options: string[];
}

export default class Test extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { test_position: 1, sumAnswers: 0 };
  }

  showNextQuestion() {
    this.setState((state: { test_position: number }) => {
      return { test_position: state.test_position + 1 };
    });
  }

  handleResetClick() {
    this.setState({ test_position: 1 });
  }

  selectAnswer = (id: any) => {
    this.setState({ sumAnswers: this.state.sumAnswers + id });
  };

  render() {
    console.log(this.state.sumAnswers);

    const isTestEnd =
      this.state.test_position - 1 === testData.test_questions.length;

    return (
      <div>
        {isTestEnd ? (
          <TestEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <TestQuestion
            test_question={
              testData.test_questions[this.state.test_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
            selectAnswer={this.selectAnswer}
          />
        )}
      </div>
    );
  }
}
