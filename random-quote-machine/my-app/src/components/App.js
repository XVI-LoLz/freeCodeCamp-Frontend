import React from 'react'
import Box from './Box'
import { getArchive, getRandomQuote } from '../utils/archive'
import './styles/App.css'

export default function App () {
  const [ currentIndex, setCurrentIndex ] = React.useState(0)
  const { text, author } = {...getArchive()}[`quote${currentIndex}`]

  React.useEffect(() => {
    setCurrentIndex(getRandomQuote())
  }, [])

  return (
    <div className="App">
      <Box 
        text={text}
        author={author}
        nextQuote={() => setCurrentIndex(getRandomQuote())}
      />
    </div>
  );
}