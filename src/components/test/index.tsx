import React, { Component } from "react";
import TestEnd from "../test-end";
import TestQuestion from "../test-question";
import "./index.scss";
import { countAnswers } from "../../common/services/count-answer";

let testData = require("../../common/data/test_data.json");

export default class Test extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { test_position: 1 };
  }

  showNextQuestion() {
    this.setState((state: { test_position: number }) => {
      return { test_position: state.test_position + 1 };
    });
  }

  handleResetClick() {
    this.setState({ test_position: 1 });
  }

  selectAnswer = (answer: any) => {
    const dataToUpdate =
      testData.test_questions[this.state.test_position - 1].answer_options[
        answer
      ].update;

    countAnswers(testData.nationalities, dataToUpdate);
  };

  render() {
    const isTestEnd =
      this.state.test_position - 1 === testData.test_questions.length;

    return (
      <div>
        {isTestEnd ? (
          <TestEnd
            resetClickHandler={this.handleResetClick.bind(this)}
            nationalities={testData.nationalities}
          />
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
