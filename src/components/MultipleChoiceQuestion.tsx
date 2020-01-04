import React from 'react';
import Question from './Question';
import AnswerButton from './AnswerButton';
import ISerializedQuestion from './ISerializedQuestion';

class MultipleChoiceQuestion extends React.Component<ISerializedQuestion> {

    //constructur not necessary here
    /*
    constructor(props: ISerializedQuestion) {
      super(props);    
    } 
    */
    
  render(){
    return(
      <div>
        <Question text={this.props.serializedQuestion.question} />
        {this.props.serializedQuestion.answers.map( (answer: any) =>
          <AnswerButton 
            questionAnswer={answer}
            key={answer.id.toString()}
          />  
        )}
      </div>
    );
  }
}

export default MultipleChoiceQuestion;