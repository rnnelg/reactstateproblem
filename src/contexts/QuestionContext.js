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
        });
        
        this.questionState.getState().AnswerQuestion();
    }

    const handleCheckAnswer = () => {

        if (question.correctAnswer) {

            if (this.questionState.getState().constructor.name === "HasCorrectAnswerState") {

                setQuestion({
                    correctAnswer: question.correctAnswer,
                    buttonText: question.buttonText,
                    questionNumber: this.state.questionNumber + 1
                });

            } else {

                this.questionState.getState().CheckAnswer(this.state.correctAnswer === "true");

                if (this.questionState.getState().constructor.name === "HasCorrectAnswerState") {
                    console.log("Correct - Next Question");
                    setQuestion({
                        correctAnswer: question.correctAnswer,
                        buttonText: "Correct - Next Question",
                        questionNumber: this.state.questionNumber + 1
                    });
                } else {
                    console.log("Incorrect - Try Again");
                    setQuestion({
                        correctAnswer: question.correctAnswer,
                        buttonText: "Incorrect - Try Again",
                        questionNumber: this.state.questionNumber + 1
                    });
                }
            }
        } else {
            console.log("No answer - Check");
            setQuestion({
                correctAnswer: question.correctAnswer,
                buttonText: "No answer - Check",
                questionNumber: this.state.questionNumber + 1
            });
            this.questionState.setState(this.questionState.noAnswer);
        }

    }

    return(
        <QuestionContext.Provider value={{book, middle: 'qwer', question, setQuestion, buttonText: this.state.buttonText,}}>
            {props.children}
        </QuestionContext.Provider>
    );
}

export default QuestionContextProvider;