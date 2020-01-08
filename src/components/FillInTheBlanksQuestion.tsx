import React from 'react';
import Question from './Question';
import AnswerInput from './AnswerInput';
import { render } from '@testing-library/react';
import ISerializedQuestion from './ISerializedQuestion'

interface IResult {
  key: string,
  result: string
}

class FillInTheBlanksQuestion extends React.Component<ISerializedQuestion> {

  state = {
    answerInputs: Array<IResult>()
  };

  componentDidMount() {
    
  }
  
  render() {

    this.state.answerInputs = this.props.serializedQuestion.answers.map(( answer: any ) => {
      return { key: answer.id.toString(), result: "false" }
    });

    const interpretAnswers = (result: IResult) => {

      let newAnswerInputs = this.state.answerInputs.filter(p => p.key !== result.key)

      
      console.log("here");
      

      this.setState( prevState => {

        console.log("test");
        

        return {
          answerInputs: Array<IResult>()
        };
      });
      


      console.log(this.state.answerInputs);
      console.log("ho");




      

      let falseAnswers = this.state.answerInputs.filter(p => p.result === "false")
      
      return !falseAnswers;

    }  

    return(
      <div>
        <Question text={this.props.serializedQuestion.question} />
        {this.props.serializedQuestion.answers.map( (answer: any) =>
          <AnswerInput 
            questionAnswer={answer}
            key={answer.id.toString()}
            interpretAnswers={interpretAnswers}
            AnswerInputKey={answer.id.toString()}
          />  
        )}
      </div>
    );  
  }
}

export default FillInTheBlanksQuestion;
