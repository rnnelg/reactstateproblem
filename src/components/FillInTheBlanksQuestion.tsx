import React from 'react';
import Question from './Question';
import AnswerInput from './AnswerInput';

const FillInTheBlanksQuestion = (serializedQuestion: any) => {
  return(
    <div>
      <Question text={serializedQuestion.question} />
      {serializedQuestion.answers.map( (answer: any) =>
        <AnswerInput 
          questionAnswer={answer}
          key={answer.id.toString()}
        />  
      )}
    </div>
  );  
}

export default FillInTheBlanksQuestion;