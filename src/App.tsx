import React from 'react';
import './App.css';import Header from './components/Header';
import Footer from './components/Footer';
import { Consumer } from './Context';
import QuestionDeserializer from './components/QuestionDeserializer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Consumer>
          { (value) => {
            return(
              <QuestionDeserializer questionNumber={value?.questionNumber}/>
            );
          }}
        </Consumer>
        <Footer/>
      </div>
    );
  }
}

export default App;
