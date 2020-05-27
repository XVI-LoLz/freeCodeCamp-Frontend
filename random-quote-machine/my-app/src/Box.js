import React from 'react';
import Quote from './Quote';
import GenerateQuote from './GenerateQuote';

export default function Box(props) {
  return(
    <React.Fragment>
      <Quote className='quote' text={props.text} author={props.author}/>
      <GenerateQuote className='generate-quote'  nextQuote={props.nextQuote} />
    </React.Fragment>
  );
}