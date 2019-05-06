import React, { Component } from "react";

class QuestionButton extends Component<any, any> {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
  }
  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)} />
        {this.props.button_text}
      </li>
    );
  }
}

export default QuestionButton;
