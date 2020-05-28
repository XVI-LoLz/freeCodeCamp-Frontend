import React from 'react'
import Quote from './Quote'
import Interaction from './Interaction'
import './styles/Box.css';

export default function Box(props) {
  return(
    <div className='box' id='quote-box'>
      <Quote text={props.text} author={props.author}/>
      <Interaction nextQuote={props.nextQuote}/>
    </div>
  );
}