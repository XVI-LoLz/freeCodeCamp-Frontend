import React from 'react'
import Quote from './Quote'
import './styles/Box.css';

export default function Box(props) {
  return(
    <div className='box' id='quote-box'>
      <Quote text={props.text} author={props.author}/>
      <a 
        id='tweet-quote' 
        href='https://twitter.com/intent/tweet'
      >Tweet quote</a>
      <button className='next-quote' id='new-quote' onClick={() => props.nextQuote()}>New quote</button>
    </div>
  );
}