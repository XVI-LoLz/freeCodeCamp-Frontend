import React from 'react';
import './App.css';
import Window from './Window';

class App extends React.Component {
  state = {
    archive: {
      quote1: {
        author: 'Lao Tzu',
        text: 'Great acts are made up of small deeds.'
      },
      quote2: {
        author: 'Plato',
        text: 'The greatest wealth is to live content with little.'
      },
      quote3: {
        author: 'Albert Einstein',
        text: 'Great spirits have always encountered violent opposition from mediocre minds.'
      },
      quote4: {
        author: 'Ralph Waldo Emerson',
        text: 'Our greatest glory is not in never failing, but in rising up every time we fail.'
      },
      quote5: {
        author: 'John F. Kennedy',
        text: 'Those who dare to fail miserably can achieve greatly.'
      },
      quote6:{
        author: 'Richard Nixon',
        text: 'I can take it. The tougher it gets, the cooler I get.'
      },
      quote7:{
        author: 'Rick Warren',
        text: `You need to understand something that will liberate your life: You don't need other people's approval to be happy.`
      },
      quote8:{
        author: 'Alan Retana',
        text: 'Todas hieren, la última mata.'
      },
      quote9:{
        author: 'Horace',
        text: 'Carpe diem'
      },
      quote10: {
        author: 'Ovid',
        text:'Courage conquers all things: it even gives strength to the body.'
      }
    },
    currentIndex: 0,
    currentQuote: {
      author: '',
      text: ''
    }
  }
  generateRandomQuote = () => {
    const array = Object.keys(this.state.archive);
    console.log(...array);
    const max = array.length;
    const randomIndex = Math.floor(Math.random() * max);
    
    const updatedQuote = this.state.archive[`quote${randomIndex + 1}`].text;
    const updatedAuthor = this.state.archive[`quote${randomIndex + 1}`].author;
    console.log(updatedQuote);
    console.log(updatedAuthor);

    this.setState({
      currentIndex: randomIndex,
      currentQuote: {
        author: updatedAuthor,
        text: updatedQuote,
      }
    });

    console.log(this.state.currentQuote.text);
    console.log(this.state.currentQuote.author);
  }
  componentDidMount(){
    this.generateRandomQuote();
  }
  render(){
    return (
      <>
        <div className="App">
          <Window className='App-window' archive={this.state.archive} text={this.state.currentQuote.text} author={this.state.currentQuote.author} currentIndex={this.state.currentIndex} generateRandomQuote={this.generateRandomQuote}/>
        </div>
      </>
    );
  }
}

export default App;
