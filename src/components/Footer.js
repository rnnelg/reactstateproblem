import React from 'react';
import { Consumer } from '../Context';

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

export default Footer;