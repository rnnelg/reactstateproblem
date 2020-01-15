import React, { createContext } from 'react';

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {
    const book = {
        title: 'war of the winds',
        author: 'jr token'
    }

    return(
        <QuestionContext.Provider value={{book, middle: 'qwer'}}>
            {props.children}
        </QuestionContext.Provider>
    );
}

export default QuestionContextProvider;