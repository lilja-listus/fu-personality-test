import React, { Component } from "react";
import "./index.scss";
import Button from "@material-ui/core/Button";

class QuestionButton extends Component<any, any> {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
    this.props.selectAnswer(this.props.answer);
  }

  render() {
    return (
      <div>
        {" "}
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            {this.props.button_text}{" "}
          </Button>
        </div>
      </div>
    );
  }
}

export default QuestionButton;
