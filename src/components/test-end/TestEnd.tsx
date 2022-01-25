import React from "react";
import "./index.scss";
import { findFinalAnswer } from "../../common/services/count-answer";
import { Button } from "@material-ui/core";
import est from '../../img/estonia.png'
import fin from '../../img/finland.jpg'
import sami from '../../img/sami.png'
import hun from '../../img/hungary.png'
import mansi from '../../img/mansi.gif'
import khanty from '../../img/khanty.png'
import erzya from '../../img/erzya.png'
import perm from '../../img/permyak.png'
import moksa from '../../img/moksa.png'
import mari from '../../img/mari.svg'
import udmurt from '../../img/udmurt.png'
import karelia from '../../img/karelia.png'
import komi from '../../img/komi.png'
import veps from '../../img/veps.svg'
import { useLanguage } from "../../common/LanguageContext";


const flagsMapping: any = {
  "Hungarian": hun,
  "Mansi": mansi,
  "Khanty": khanty,
  "Komi": komi,
  "Permyak": perm,
  "Udmurt": udmurt,
  "Mari": mari,
  "Erzya": erzya,
  "Moksha": moksa,
  "Sami": sami,
  "Estonian": est,
  "Veps": veps,
  "Karelian": karelia,
  "Finnish": fin

}
interface TestEndProps {
  resetClickHandler: () => void,
  nationalities: string[]
}


const TestEnd: React.FC<TestEndProps> = ({ resetClickHandler, nationalities }) => {

  const finalAnswers = findFinalAnswer(nationalities);

  let output = "";
  const picLinks = [];

  finalAnswers.forEach(ans => picLinks.push(ans))

  if (finalAnswers.length > 1) {
    const last = finalAnswers.pop();
    output += finalAnswers.join(", ") + " or " + last;
  } else {
    output += finalAnswers[0];
  }

  const { language } = useLanguage()


  const buttonText = language === 'eng' ? 'You are most probably: ' : 'Du bist'
  const resetText = language === 'eng' ? 'Reset The Test ' : 'Resetti'

  return (
    <div className="output">
      <p className="text">{buttonText}</p>
      <p>{output}</p>
      {finalAnswers.map((ans: string) => <img key={ans} src={flagsMapping[ans]} alt={ans} />)}

      <Button
        variant="contained"
        color="default"
        href="#"
        onClick={resetClickHandler}
      >
        {resetText}
      </Button>
    </div>


  )
}

export default TestEnd;
