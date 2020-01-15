import React from 'react';
import './App.css'; import Header from './components/Header';
import Footer, { Footer2 } from './components/Footer';
import { Consumer } from './contexts';
import QuestionDeserializer from './components/QuestionDeserializer';
import QuestionContextProvider from './contexts/QuestionContext';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Consumer>
          {(value) => {
            return (
              <QuestionDeserializer questionNumber={value?.questionNumber} />
            );
          }}
        </Consumer>
        <Footer />
        <QuestionContextProvider>
          <Footer2 />
        </QuestionContextProvider>
      </div>
    );
  }
}

export default App;
