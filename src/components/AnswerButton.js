import React from 'react';
import { Consumer } from '../Context';

class AnswerButton extends React.Component {

    state = {
      questionAnswer: this.props.questionAnswer,
    };
    
    render() {

      const interpretAnswer = () => {

        let result = false;
  
        if (this.state.questionAnswer.value === "true") {
          result = "true";
        } else {
          result = "false";
        }

        console.log(result);
  
        return result;
        
      }

      return(
        <Consumer>
          { ({ actions }) => {
            return(
              <div>
                <button onClick={() => actions.answerEntered(interpretAnswer())}>
                  {this.state.questionAnswer.name}
                </button>
              </div>
            );
        }}
        </Consumer>
      );
    }
};

export default AnswerButton;