import React from 'react';
import './App.css';import Header from './components/Header';
import Question from './components/Question';
import Footer from './components/Footer';
import AnswerButton from './components/AnswerButton';
import questions from './data/Questions';
import AnswerInput from './components/AnswerInput';
import AnswerOrder from './components/AnswerOrder';

let questionNumber = 2;

const QuestionDeserializer = ()  => {

  let serializedQuestion = questions[questionNumber];
  
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

    let question = new Question2();

    question.setState(question.noAnswer);
    console.log(`Order state: ${(question.getState()).constructor.name}`);
    question.getState().AnswerQuestion();
    question.getState().CheckAnswer(false);
    console.log(`Order state: ${(question.getState()).constructor.name}`);
    question.getState().CheckAnswer(true);
    console.log(`Order state: ${(question.getState()).constructor.name}`);
    question.getState().AnswerQuestion();
    console.log(`Order state: ${(question.getState()).constructor.name}`);
    question.getState().CheckAnswer(true);
  
    if(question.getState().constructor.name === "HasCorrectAnswerState") {
      console.log("correct answer next question");
    } else {
      console.log("not the correct answer try again");
    }
    
    return (
      <div>
        <Header />
        <QuestionDeserializer />
        <Footer/>
      </div>
    );
  }
}

interface QuestionState{
  question: Question2;

  AnswerQuestion(): void;
  CheckAnswer(correctAnswer: boolean): void;
}

class Question2{
  public noAnswer: QuestionState;
  public hasAnswer: QuestionState;
  public hasCorrectAnswer: QuestionState;
  public hasIncorrectAnswer: QuestionState;

  public currentQuestionState!: QuestionState;

  constructor(){
    this.noAnswer = new NoAnswerState(this);
    this.hasAnswer = new HasAnswerState(this);
    this.hasCorrectAnswer = new HasCorrectAnswerState(this);
    this.hasIncorrectAnswer = new HasIncorrectAnswerState(this);

    this.setState(this.noAnswer)
  }

  public setState(questionState: QuestionState){
    this.currentQuestionState = questionState;
  }

  public getState(): QuestionState{
    return this.currentQuestionState;
  }
}

class NoAnswerState implements QuestionState{
    public question: Question2;
    
    constructor(question: Question2){
      this.question = question;
    }

    AnswerQuestion(): void {
      this.question.setState(this.question.hasAnswer);
      console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }

    CheckAnswer(correctAnswer: boolean): void {
      this.question.setState(this.question.noAnswer);
      console.log(`Status: ${(this.question.getState()).constructor.name}`);
    }
}

class HasAnswerState implements QuestionState{
  public question: Question2;
  
  constructor(question: Question2){
    this.question = question;
  }

  AnswerQuestion(): void {
    this.question.setState(this.question.hasAnswer);
    console.log(`Status: ${(this.question.getState()).constructor.name}`);
  }
  CheckAnswer(correctAnswer: boolean): void {
    if (correctAnswer){
      this.question.setState(this.question.hasCorrectAnswer);
    } else{
      this.question.setState(this.question.hasIncorrectAnswer);
    }
    console.log(`Status: ${(this.question.getState()).constructor.name}`);
  }
}

class HasCorrectAnswerState implements QuestionState{
  public question: Question2;
  
  constructor(question: Question2){
    this.question = question;
  }

  AnswerQuestion(): void {
    this.question.setState(this.question.hasAnswer);
    console.log(`Status: ${(this.question.getState()).constructor.name}`);
  }

  CheckAnswer(correctAnswer: boolean): void {
    if (correctAnswer){
      this.question.setState(this.question.hasCorrectAnswer);
    } else{
      this.question.setState(this.question.hasIncorrectAnswer);
    }
    console.log(`Status: ${(this.question.getState()).constructor.name}`);
  }
}

class HasIncorrectAnswerState implements QuestionState{
  public question: Question2;
  
  constructor(question: Question2){
    this.question = question;
  }

  AnswerQuestion(): void {
    this.question.setState(this.question.hasAnswer);
    console.log(`Status: ${(this.question.getState()).constructor.name}`);
  }

  CheckAnswer(correctAnswer: boolean): void {
    if (correctAnswer){
      this.question.setState(this.question.hasCorrectAnswer);
    } else{
      this.question.setState(this.question.hasIncorrectAnswer);
    }
    console.log(`Status: ${(this.question.getState()).constructor.name}`);
  }
}

export default App;
