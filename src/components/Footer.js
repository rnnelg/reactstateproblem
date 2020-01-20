import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const Footer = () => {
  const { actions, buttonText } = useContext(QuestionContext);
  console.log(actions);
  return (
    <div>
      <button onClick={() => actions.checkAnswer()}>{buttonText}</button>
    </div>
  );
}

export default Footer;
