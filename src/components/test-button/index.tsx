import React, { Component } from "react";

class QuestionButton extends Component<any, any> {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
    let answerId = this.props.id;
    this.props.selectAnswer(answerId);
  }

  render() {
    return (
      <div>
        {" "}
        <li>
          <button onClick={this.handleClick.bind(this)} />
          {this.props.button_text}
        </li>
      </div>
    );
  }
}

export default QuestionButton;
