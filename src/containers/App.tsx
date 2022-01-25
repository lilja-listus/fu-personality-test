import React, { Component } from "react";
import Test from "../components/test/Test";
import "./index.scss";
import { LanguageProvider } from "../common/LanguageContext"

class App extends Component<any, any> {
  render() {
    return (
      <LanguageProvider>
        <Test />
      </LanguageProvider>
    );
  }
}

export default App;
