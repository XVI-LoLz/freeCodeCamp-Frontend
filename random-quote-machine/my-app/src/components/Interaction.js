import React from 'react'
import './styles/Interaction.css'

export default function Interaction(props){
  return(
    <div className='interaction'>
      <a 
        className='tweet'
        id='tweet-quote' 
        href='https://twitter.com/intent/tweet'
      >

        <i className="fab fa-twitter">&nbsp;</i>
        Tweet quote
      </a>
      <button className='next-quote' id='new-quote' onClick={() => props.nextQuote()}>New quote</button>
    </div>
  )
}