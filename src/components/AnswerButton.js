import React, { useState, useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const AnswerButton = (props) => {
  
  const { actions } = useContext(QuestionContext);
  const [ questionAnswer ] = useState(props.questionAnswer);

  const interpretAnswer = () => {

    let result = false;

    if (questionAnswer.value === "true") {
      result = "true";
    } else {
      result = "false";
    }

    console.log(result);

    return result;

  }
  
  return (
    <div>
      <button onClick={() => actions.answerEntered(interpretAnswer())}>
        {questionAnswer.name}
      </button>
    </div>
  );
}

export default AnswerButton;