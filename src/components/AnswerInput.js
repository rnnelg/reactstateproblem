import React, { useState, useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const AnswerInput = (props) => {

  const { actions } = useContext(QuestionContext);
  const [ questionAnswer ] = useState(props.questionAnswer);

  const interpretAnswer = (inputValue) => {

    let result = "false";

    if (questionAnswer.value.toLowerCase() === inputValue.toLowerCase()) {
      result = "true";
    } else {
      result = "false";
    }

    return result;

  }

  return (
    <div>
      <input
        type="text"
        name="answer"
        onChange={event => actions.answerEntered(interpretAnswer(event.target.value))}
      />
    </div>
  );
}

export default AnswerInput;