import React, { createContext, useState } from 'react';
import { QuestionState } from './QuestionState';

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {
    
    const [question, setQuestion] = useState({
        correctAnswer: null,
        buttonText: "Check",
        questionNumber: 0
    });
    
    const book = {
        title: 'war of the winds',
        author: 'jr token',
        count: 0
    }

    const questionState = new QuestionState();

    const handleAnswerEntered = (answer) => {
        setQuestion({
            correctAnswer: answer,
            buttonText: question.buttonText,
            questionNumber: question.questionNumber
        })
        
        this.questionState.getState().AnswerQuestion();
    }

    const handleCheckAnswer = () => {

        if (question.correctAnswer) {

            if (this.questionState.getState().constructor.name === "HasCorrectAnswerState") {

                this.setState({
                    questionNumber: this.state.questionNumber + 1
                });

            } else {

                this.questionState.getState().CheckAnswer(this.state.correctAnswer === "true");

                if (this.questionState.getState().constructor.name === "HasCorrectAnswerState") {
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
            this.questionState.setState(this.questionState.noAnswer);
        }

    }

    return(
        <QuestionContext.Provider value={{book, middle: 'qwer', question, setQuestion}}>
            {props.children}
        </QuestionContext.Provider>
    );
}

export default QuestionContextProvider;