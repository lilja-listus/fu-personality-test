import React from "react";
import "./index.scss";
import TestButton from "../test-button/TestButton";

interface ITestQuestionProps {
  showNextQuestionHandler: () => void,
  selectAnswer: (answer: string | number) => void,
  testQuestion: {
    instructionText: string,
    answerOptions: string[]
  }
}

const TestQuestion: React.FC<ITestQuestionProps> = ({ showNextQuestionHandler, selectAnswer, testQuestion }) => {

  return (<div className="buttons-root">
    <div className="question">
      {testQuestion.instructionText}
    </div>
    <div className="buttons">
      {testQuestion.answerOptions.map(
        (answerOption: any, index: string | number) => (
          <TestButton
            key={index}
            buttonText={answerOption.answer}
            clickHandler={showNextQuestionHandler}
            answer={index}
            selectAnswer={selectAnswer}
          />
        )
      )}
    </div>
  </div>)
}


export default TestQuestion;
