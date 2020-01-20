import React, { useContext } from 'react';
import './App.css'; import Header from './components/Header';
import Footer from './components/Footer';
import QuestionDeserializer from './components/QuestionDeserializer';
import { QuestionContext } from './contexts/QuestionContext';

const App = () => {
  const { questionNumber } = useContext(QuestionContext);
  return (
    <div>
      <Header />
      <QuestionDeserializer questionNumber={questionNumber} />
      <Footer />
    </div>
  );
}

export default App;
