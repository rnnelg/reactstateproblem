import React from 'react';
import './App.css';import Header from './components/Header';
import Question from './components/Question';
import Footer from './components/Footer';
import AnswerButton from './components/AnswerButton';
import questions from './data/Questions';
import AnswerInput from './components/AnswerInput';
import AnswerOrder from './components/AnswerOrder';
import { Consumer } from './components/Context';

const QuestionDeserializer = (props: any)  => {

console.log("props.questionNumber: " + props.questionNumber);

  let serializedQuestion = questions[props.questionNumber];
  
  let deserializedQuestion: any;

  switch(serializedQuestion.type) {
    case "MultipleChoiceQuestion":
      deserializedQuestion = MultipleChoiceQuestion(serializedQuestion);
      break;
    case "TrueFalseQuestion":
      deserializedQuestion = TrueFalseQuestion(serializedQuestion);
      break;
    case  "FillInTheBlanksQuestion":
      deserializedQuestion = FillInTheBlanksQuestion(serializedQuestion);
      break;
    case  "OrderingQuestion":
      deserializedQuestion = OrderingQuestion(serializedQuestion);
      break;
    default:
      break;
  }

  return(deserializedQuestion);
}

const MultipleChoiceQuestion = (serializedQuestion: any) => {
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

const OrderingQuestion = (serializedQuestion: any) => {
  return(
    <div>
      <Question text={serializedQuestion.question} />
      <AnswerOrder questionAnswer={serializedQuestion.answers}/>
    </div>
  );  
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Consumer>
          { (value) => {
            return(
              <QuestionDeserializer questionNumber={value?.questionNumber}/>
            );
          }}
        </Consumer>
        <Footer/>
      </div>
    );
  }
}

export default App;
