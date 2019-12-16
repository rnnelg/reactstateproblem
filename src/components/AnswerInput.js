import React from 'react';
import { Consumer } from './Context';

class AnswerInput extends React.Component {

    state = {
      questionAnswer: this.props.questionAnswer,
    };
    
    render() {

      const interpretAnswer = (inputValue) => {

        let result = "false";

        if (this.state.questionAnswer.value.toLowerCase() === inputValue.toLowerCase()) {
          result = "true";
        } else {
          result = "false";
        }

        return result;
        
      }

      return(
        <Consumer>
          { ({ actions }) => {
            return(
              <div>
                <input 
                  type="text" 
                  name="answer"
                  onChange={event => actions.answerEntered(interpretAnswer(event.target.value))} 
                />
              </div>
            );
          }}
        </Consumer>
      );
    }
};

export default AnswerInput;