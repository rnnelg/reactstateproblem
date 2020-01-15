import React, { useContext } from 'react';
import { Consumer } from '../contexts';
import { QuestionContext } from '../contexts/QuestionContext';

class Footer extends React.Component {
    render() {

      return(
        <Consumer>
          { ({ actions, buttonText }) => {
            return(
              <div>
                <div>
                    <button onClick={() => actions.checkAnswer()}>{ buttonText }</button>
                  </div>
              </div>
            );
          }}
        </Consumer>
      );
    }
}

export const Footer2 = () => {
  const {book} = useContext(QuestionContext);
  return (
    <div>{book.title}</div>  
  );
}

export default Footer;
