import React, { Component, createContext } from 'react';
import { QuestionState } from './QuestionState';
import questions from '../data/Questions';

export const QuestionContext = createContext();

class QuestionContextProvider extends Component {

    state = {
        correctAnswer: null,
        buttonText: "Check",
        questionNumber: 0,
        questionState: new QuestionState()
    };

    constructor(props) {
        super(props);

        this.state.questionState.setState(this.state.questionState.noAnswer);
    }

    handleAnswerEntered = (answer) => {
        this.setState({
            correctAnswer: answer
        });

        this.state.questionState.getState().AnswerQuestion();
        console.log(this.state);

    }

    handleCheckAnswer = () => {

        if (this.state.correctAnswer) {

            if (this.state.questionState.getState().constructor.name === "HasCorrectAnswerState") {

                console.log("handleCheckAnswer");
                
                console.log(questions.length);
                console.log(this.state.questionNumber);
                
                if (questions.length == this.state.questionNumber + 1) {
                    console.log('the end');
                    this.setState({
                        questionNumber: -1
                    });
                } else {
                    this.setState({
                        questionNumber: this.state.questionNumber + 1
                    });
                }

            } else {

                this.state.questionState.getState().CheckAnswer(this.state.correctAnswer === "true");

                if (this.state.questionState.getState().constructor.name === "HasCorrectAnswerState") {
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
            this.state.questionState.setState(this.state.questionState.noAnswer);
        }

    }

    render() {
        return (
            <QuestionContext.Provider value={{
                buttonText: this.state.buttonText,
                actions: {
                    answerEntered: this.handleAnswerEntered,
                    checkAnswer: this.handleCheckAnswer
                },
                questionNumber: this.state.questionNumber
            }}>
                {this.props.children}
            </QuestionContext.Provider>
        );
    }
}

export default QuestionContextProvider;
