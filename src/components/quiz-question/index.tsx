import React, { Component } from "react";
import QuestionButton from "../question-button";

class QuizQuestion extends Component<any, any> {
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
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option: any, index: string | number | undefined) => {
                return (
                  <QuestionButton
                    key={index}
                    button_text={answer_option.answer}
                    clickHandler={this.handleClick.bind(this)}
                    id={answer_option.id}
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

export default QuizQuestion;
