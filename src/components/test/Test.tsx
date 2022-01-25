import React, { useEffect, useState, useContext } from "react";
import TestEnd from "../test-end/TestEnd";
import TestQuestion from "../test-question/TestQuestion";
import "./index.scss";
import { countAnswers } from "../../common/services/count-answer";
import { useLanguage, useLanguageUpdate } from "../../common/LanguageContext";

let testDataEn = require("../../common/data/test_data.json");
let testDataHu = require("../../common/data/test_data_hu.json");


const Test: React.FC = () => {
  const [testPosition, setTestPosition] = useState(1);
  const [isTestEnd, setIsTestEnd] = useState(false);
  const [testData, setTestData] = useState(testDataEn)

  const { language } = useLanguage()
  const { changeLanguage } = useLanguageUpdate()


  useEffect(() => {
    testPosition === testData.testQuestions.length && setIsTestEnd(true);
  },
    [testPosition])

  useEffect(() => {
    language === 'eng' ? setTestData(testDataEn) : setTestData(testDataHu)
  }, [language])


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
      <>
        <button onClick={() => changeLanguage('eng')}>English</button>
        <button onClick={() => changeLanguage('magyar')}>Magyar</button>
        <TestQuestion
          testQuestion={
            testData.testQuestions[testPosition - 1]
          }
          showNextQuestionHandler={showNextQuestionHandler}
          selectAnswer={selectAnswer}
        />
      </>

    )
    }
  </div >);
}

export default Test; 
