import React from 'react';
import Quote from './Quote';
import GenerateQuote from './GenerateQuote';

const Window = (props) => {
  return(
    <>
      <Quote className='quote' text={props.text} author={props.author}/>
      <GenerateQuote className='generate-quote'  generateRandomQuote={props.generateRandomQuote} />
    </>
  );
}

export default Window;