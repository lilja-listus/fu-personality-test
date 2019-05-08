import React, { Component } from "react";
import Test from "./../components/test/index";

class App extends Component<any, any> {
  state = {
    answer: ""
  };
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

export default App;
