import React from 'react';
import './App.css';
import Box from './Box';
import { getArchive, getRandomQuote } from './archive'

export default function App () {
  const [ currentIndex, setCurrentIndex ] = React.useState(0)
  const { text, author } = {...getArchive()}[`quote${currentIndex}`]

  React.useEffect(() => {
    setCurrentIndex(getRandomQuote())
  }, [])

  return (
    <div className="App">
      <Box 
        className='App-window' 
        text={text}
        author={author}
        nextQuote={() => setCurrentIndex(getRandomQuote())}
      />
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     currentIndex: 0,
//     currentQuote: {
//       author: '',
//       text: ''
//     }
//   }
//   pickRandomQuote = () => {
//     const array = Object.keys(archive);
//     const max = array.length;
//     const randomIndex = generateRandom(max)
//     const updatedQuote = archive[`quote${randomIndex + 1}`].text;
//     const updatedAuthor = archive[`quote${randomIndex + 1}`].author;
//   }
//   render(){
    
//   }
// }

// export default App;
