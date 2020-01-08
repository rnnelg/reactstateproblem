import React, { Component } from 'react';

const QuizContext = React.createContext<IContext | null>(null);

export interface IContext {
    buttonText: string;
    actions: IActions;
    questionNumber: number;
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

    state = {
        correctAnswer: null,
        buttonText: "Check",
        questionNumber: 3
    };

    question: Question2;

    constructor(props: any){
        super(props);
        this.question = new Question2();
        this.question.setState(this.question.noAnswer);
    } 

    handleAnswerEntered = (answer: string) => {
        this.setState({
            correctAnswer: answer
        });

        this.question.getState().AnswerQuestion();
    }
    
    handleCheckAnswer = () => {

        if (this.state.correctAnswer) {

          if(this.question.getState().constructor.name === "HasCorrectAnswerState") {
            
            this.setState({
                questionNumber: this.state.questionNumber + 1
            });
            
          } else {

            this.question.getState().CheckAnswer(this.state.correctAnswer === "true");

            if(this.question.getState().constructor.name === "HasCorrectAnswerState") {
                console.log("Correct - Next Question");
                this.setState({
                    buttonText: "Correct - Next Question"
                });
            } else {
                console.log("Incorrect - Try Again");
                this.setState({
                    buttonText: "Incorrect - Try Again"
                });
            } 
          }
        } else {
          console.log("No answer - Check");
          this.setState({
              buttonText: "No answer - Check"
          });
          this.question.setState(this.question.noAnswer);
        }
       
    }

    render() {
        return(
            <QuizContext.Provider value={{
              buttonText: this.state.buttonText,
              actions: {
                  answerEntered: this.handleAnswerEntered,
                  checkAnswer: this.handleCheckAnswer
              },
              questionNumber: this.state.questionNumber
          }}>
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
