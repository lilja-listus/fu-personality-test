import React, { useEffect, useState } from "react";
import TestEnd from "../test-end/TestEnd";
import TestQuestion from "../test-question/TestQuestion";
import "./index.scss";
import { countAnswers } from "../../common/services/count-answer";

let testData = require("../../common/data/test_data.json");


const Test: React.FC = () => {
  const [testPosition, setTestPosition] = useState(1);
  const [isTestEnd, setIsTestEnd] = useState(false);

  useEffect(() => {
    testPosition === testData.testQuestions.length && setIsTestEnd(true);
  },
    [testPosition])

  const selectAnswer = (answer: string | number): void => {
    const dataToUpdate =
      testData.testQuestions[testPosition - 1].answerOptions[
        answer
      ].update;

    countAnswers(testData.nationalities, dataToUpdate);
  };

  const resetClickHandler = (): void => {
    setTestPosition(1)
    setIsTestEnd(false);
  }

  const showNextQuestionHandler = () => setTestPosition(testPosition + 1)

  return (<div>
    {isTestEnd ? (
      <TestEnd
        resetClickHandler={resetClickHandler}
        nationalities={testData.nationalities}
      />
    ) : (
      <TestQuestion
        testQuestion={
          testData.testQuestions[testPosition - 1]
        }
        showNextQuestionHandler={showNextQuestionHandler}
        selectAnswer={selectAnswer}
      />
    )}
  </div>);
}

export default Test; 
