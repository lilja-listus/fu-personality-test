import React, { Component } from "react";
import "./index.scss";

class QuestionButton extends Component<any, any> {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
    this.props.selectAnswer(this.props.answer);
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
