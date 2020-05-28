import React from 'react';
import './styles/Quote.css'

export default function Quote(props){
  return(
    <div className='quote'>
      <h1 className='text' id='text'><em><span>"</span>{props.text}<span>"</span></em></h1>
      <h2 className='author' id='author'>-{props.author}</h2>
    </div>
  );
}