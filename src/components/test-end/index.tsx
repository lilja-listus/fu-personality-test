import React, { Component } from "react";
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

class TestEnd extends Component<any, any> {
  handleResetClick() {
    this.props.resetClickHandler();
  }

  showResult() {}

  render() {
    const finalAnswers = findFinalAnswer(this.props.nationalities);

    let output = "";
    const picLinks = [];

    finalAnswers.forEach(ans => picLinks.push(ans))

    if (finalAnswers.length > 1) {
      const last = finalAnswers.pop();
      output += finalAnswers.join(", ") + " or " + last;
    } else {
      output += finalAnswers[0];
    }

    return (
  
        <div className="output"> 
        <p className="text">You are most probably:</p>
        <p>{output}</p>
        {finalAnswers.map(ans => <img  src={flagsMapping[ans]} alt={ans} />)}
        <Button
          variant="contained"
          color="default"
          href="#"
          onClick={this.handleResetClick.bind(this)}
        >
          Reset The Test
        </Button>
      </div>
    );
  }
}

export default TestEnd;
