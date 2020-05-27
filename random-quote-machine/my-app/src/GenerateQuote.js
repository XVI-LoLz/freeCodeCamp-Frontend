import React from 'react';

export default function GenerateQuote(props){
  return(
    <button className='generate-button' onClick={() => props.nextQuote()}>New quote</button>
  );
}