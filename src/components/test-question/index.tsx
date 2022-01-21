import React, { Component } from "react";
import "./index.scss";
import TestButton from "../test-button";

class TestQuestion extends Component<any, any> {
  handleClick() {
    this.props.showNextQuestionHandler();
  }

  render() {
    return (
      <div className="buttons-root">
        <div className="question">
          {this.props.test_question.instruction_text}
        </div>
        <div className="buttons">
          {this.props.test_question.answer_options.map(
            (answer_option: any, index: string | number | undefined) => {
              return (
                <TestButton
                  key={index}
                  button_text={answer_option.answer}
                  clickHandler={this.handleClick.bind(this)}
                  answer={index}
                  selectAnswer={this.props.selectAnswer}
                />
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default TestQuestion;
