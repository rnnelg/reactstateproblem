import React, { useState } from 'react';
import Question from './Question';
import AnswerInput from './AnswerInput';

const FillInTheBlanksQuestion = (serializedQuestion) => {

  const [results, setResults] = useState({});

  setAnswers(serializedQuestion.answers.map((answer) => (
    {
      id: answer.id,
      result: "false"
    })
  ));

  const interpretAnswer = () => {
    var result = results.find(result => result == "false");
    return result;
  }

  return (
    <div>
      <Question text={serializedQuestion.question} />
      {serializedQuestion.answers.map((answer) =>
        <AnswerInput
          questionAnswer={answer}
          key={answer.id.toString()}
        />
      )}
    </div>
  );
}

export default FillInTheBlanksQuestion;