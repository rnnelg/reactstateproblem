import React from 'react';
import Question from './Question';
import AnswerButton from './AnswerButton';

const TrueFalseQuestion = (serializedQuestion: any) => {
  return(
    <div>
      <Question text={serializedQuestion.question} />
      {serializedQuestion.answers.map( (answer: any) =>
        <AnswerButton 
          questionAnswer={answer}
          key={answer.id.toString()}
        />  
      )}
    </div>
  );  
}

export default TrueFalseQuestion;