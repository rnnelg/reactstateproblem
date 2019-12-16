import React, { Component } from 'react';

const QuizContext = React.createContext<IContext | null>(null);

export interface IContext {
    buttonText: string;
    actions: IActions;
  }

interface IActions {
    answerEntered: Function;
    checkAnswer: Function;
}

export class Provider extends Component {

   /*  let question = new Question2();

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
    } */

    question: Question2;

    constructor(props: any){
        super(props);
        this.question = new Question2();
        this.question.setState(this.question.noAnswer);
    }

    state = {
        correctAnswer: null,
        buttonText: "Check"
    };

    handleAnswerEntered = (answer: string) => {
        this.setState({
            correctAnswer: answer
        });

    }
    
    handleCheckAnswer = () => {
        if (this.state.correctAnswer) {
            if (this.state.correctAnswer === "true") {
                this.setState({
                    buttonText: "Correct - Next Question"
                });
                console.log("Correct");
            } else {
                this.setState({
                    buttonText: "Try Again"
                });
                console.log("wrong");
            }
        } else {
            this.setState({
            buttonText: "select an answer"
            });
            console.log("no anwser selected");
        }
    }

    appContext: IContext = {
        buttonText: this.state.buttonText,
        actions: {
            answerEntered: this.handleAnswerEntered,
            checkAnswer: this.handleCheckAnswer
        }
    };

    render() {
        
        return(
            <QuizContext.Provider value={this.appContext}>
                {this.props.children}
            </QuizContext.Provider>
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
  

export const Consumer = QuizContext.Consumer;
