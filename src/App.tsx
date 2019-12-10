import React from 'react';
import logo from './logo.svg';
import './App.css';

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

  let aTMMachine = new ATMMachine();

  console.log(aTMMachine.getATMState());
  aTMMachine.AnswerQuestion();
  console.log(aTMMachine.getATMState());

  let myTesla = new ModelS();
  myTesla = new RearFacingSeats(myTesla);

  myTesla = new EnhancedAutoPilot(myTesla);

  

  console.log(myTesla.cost());
  console.log(myTesla.getDescription());


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
          Learn React <br/>
Hi there!
        </a>
        <User userName={"dtom"} name="dick" age={25}/>
      </header>
    </div>
  );
}

interface ATMState {
  AnswerQuestion(): void;
  CheckAnswer(correctAnswer: boolean): void;
}

class ATMMachine {
  
  noAnswer: ATMState;
  hasAnswer: ATMState;
  hasCorrectAnswer: ATMState;
  hasIncorrectAnswer: ATMState;

  atmState!: ATMState;
  
  constructor() {
    this.noAnswer = new NoAnswer(this);
    this.hasAnswer = new HasAnswer(this);
    this.hasCorrectAnswer = new HasCorrectAnswer(this);
    this.hasIncorrectAnswer = new HasIncorrectAnswer(this);

    this.atmState = this.noAnswer;
  }

  setATMState(newATMState: ATMState): void {
    this.atmState = newATMState;
  }

  getATMState(): ATMState {
    return this.atmState;
  }
  
  AnswerQuestion(): void {
    this.atmState.AnswerQuestion();
  }

  CheckAnswer(): void {
    this.atmState.CheckAnswer(true);
  }

  GetHasAnswerState(): ATMState {
    return this.hasAnswer;
  }

  GetNoAnswerState(): ATMState {
    return this.noAnswer;
  }

  GetHasCorrectAnswerState(): ATMState {
    return this.hasCorrectAnswer;
  }

  GetHasIncorrectAnswerState(): ATMState {
    return this.hasIncorrectAnswer;
  }

}

class NoAnswer implements ATMState {

  atmMachine: ATMMachine;

  constructor(newATMMachine: ATMMachine) {
    this.atmMachine = newATMMachine;
  }

  AnswerQuestion(): void {
    this.atmMachine.setATMState(this.atmMachine.GetHasAnswerState());
    console.log("NoAnswer - HasAnswerStat");
  }  
  
  CheckAnswer(correctAnswer: boolean): void {
    this.atmMachine.setATMState(this.atmMachine.GetNoAnswerState());
    console.log("NoAnswer - NoAnswerState");
  }
}

class HasAnswer implements ATMState {

  atmMachine: ATMMachine;

  constructor(newATMMachine: ATMMachine) {
    this.atmMachine = newATMMachine;
  }

  AnswerQuestion(): void {
    this.atmMachine.setATMState(this.atmMachine.GetHasAnswerState())
  }  
  
  CheckAnswer(correctAnswer: boolean): void {
    if (correctAnswer) {
      this.atmMachine.setATMState(this.atmMachine.GetHasCorrectAnswerState())
    } else {
      this.atmMachine.setATMState(this.atmMachine.GetHasIncorrectAnswerState())
    }
    
  }
}

class HasCorrectAnswer implements ATMState {

  atmMachine: ATMMachine;

  constructor(newATMMachine: ATMMachine) {
    this.atmMachine = newATMMachine;
  }

  AnswerQuestion(): void {
    this.atmMachine.setATMState(this.atmMachine.GetHasAnswerState())
  }  
  
  CheckAnswer(correctAnswer: boolean): void {
    if (correctAnswer) {
      this.atmMachine.setATMState(this.atmMachine.GetHasCorrectAnswerState())
    } else {
      this.atmMachine.setATMState(this.atmMachine.GetHasIncorrectAnswerState())
    }
  }
}

class HasIncorrectAnswer implements ATMState {

  atmMachine: ATMMachine;

  constructor(newATMMachine: ATMMachine) {
    this.atmMachine = newATMMachine;
  }

  AnswerQuestion(): void {
    this.atmMachine.setATMState(this.atmMachine.GetHasAnswerState())
  }  
  
  CheckAnswer(correctAnswer: boolean): void {
    if (correctAnswer) {
      this.atmMachine.setATMState(this.atmMachine.GetHasCorrectAnswerState())
    } else {
      this.atmMachine.setATMState(this.atmMachine.GetHasIncorrectAnswerState())
    }
  }
}

//https://www.youtube.com/watch?v=MGEx35FjBuo
//left off at 20:06


abstract class Car{
  public description: string = "";

  public getDescription(): string{
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car{
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car{
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car{
  decoratedCar: Car | undefined;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions{
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string{
    return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
  }

  public cost(): number{
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions{
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string{
    return this.decoratedCar.getDescription() + ', Rear facing seats';
  }

  public cost(): number{
    return this.decoratedCar.cost() + 4000;
  }
}



export default App;
