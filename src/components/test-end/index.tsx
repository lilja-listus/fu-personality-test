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
    const items = finalAnswers.map(answer => <div>{answer}</div>);

    return (
      <div>
        <p> Thanks for taking the test</p>
        <div>You are most probably:</div>
        <div>{React.Children.toArray(items)}</div>

        <Button
          variant="contained"
          color="secondary"
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
