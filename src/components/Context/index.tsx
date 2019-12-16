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

export const Consumer = QuizContext.Consumer;
