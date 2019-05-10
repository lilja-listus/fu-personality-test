import React, { Component } from "react";
import "./index.scss";
import { findFinalAnswer } from "../../common/services/count-answer";
import { Button } from "@material-ui/core";

class TestEnd extends Component<any, any> {
  handleResetClick() {
    this.props.resetClickHandler();
  }

  showResult() {}

  render() {
    const finalAnswers = findFinalAnswer(this.props.nationalities);

    let output = "";

    if (finalAnswers.length > 1) {
      const last = finalAnswers.pop();
      output += finalAnswers.join(", ") + " or " + last;
    } else {
      output += finalAnswers[0];
    }

    return (
      <div>
        <div className="text">You are most probably:</div>
        <div className="output">{output}</div>

        <Button
          variant="contained"
          color="default"
          href="#"
          onClick={this.handleResetClick.bind(this)}
        >
          Reset The Test{" "}
        </Button>
      </div>
    );
  }
}

export default TestEnd;
