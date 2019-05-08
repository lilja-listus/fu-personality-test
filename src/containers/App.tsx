import React, { Component } from "react";
import Quiz from "./../components/quiz/index";

class App extends Component<any, any> {
  state = {
    answer: ""
  };
  render() {
    return (
      <div>
        <Quiz />
      </div>
    );
  }
}

export default App;
