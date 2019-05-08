import React, { Component } from "react";
import "./index.scss";
import TestButton from "../test-button";

class TestQuestion extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  handleClick() {
    this.props.showNextQuestionHandler();
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.test_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.test_question.answer_options.map(
              (answer_option: any, index: string | number | undefined) => {
                return (
                  <TestButton
                    key={index}
                    button_text={answer_option.answer}
                    clickHandler={this.handleClick.bind(this)}
                    answer_id={answer_option.answer_id}
                    selectAnswer={this.props.selectAnswer}
                  />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default TestQuestion;
