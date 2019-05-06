import React, { Component } from "react";

class QuizEnd extends Component<any, any> {
  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return (
      <div>
        <p> Thanks for being a poro</p>
        <a href="#" onClick={this.handleResetClick.bind(this)} />
      </div>
    );
  }
}

export default QuizEnd;
