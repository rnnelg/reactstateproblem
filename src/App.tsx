import React from 'react';
import logo from './logo.svg';
import './App.css';
import { string } from 'prop-types';

interface IUser {
  userName: String;
  name: String;
  age: Number;
}

class User extends React.Component<IUser> {
  render() {
    return(
    <div>
  hi there i'm {this.props.name} the user!
      userName: {this.props.userName}
      age: {this.props.age}

    </div>
    )};
}

const App: React.FC = () => {

  let question = new Question();

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <User userName={"dtom"} name="dick" age={25}/>
      </header>
    </div>
  );
}


//-------------------------------------------------------------------------

interface QuestionState{
  question: Question;

  AnswerQuestion(): void;
  CheckAnswer(correctAnswer: boolean): void;
}

class Question{
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
    public question: Question;
    
    constructor(question: Question){
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
  public question: Question;
  
  constructor(question: Question){
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
  public question: Question;
  
  constructor(question: Question){
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
  public question: Question;
  
  constructor(question: Question){
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
