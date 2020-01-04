import React from 'react';
import Question from './Question';
import AnswerOrder from './AnswerOrder';

const OrderingQuestion = (serializedQuestion: any) => {
  return(
    <div>
      <Question text={serializedQuestion.question} />
      <AnswerOrder questionAnswer={serializedQuestion.answers}/>
    </div>
  );  
}

export default OrderingQuestion;