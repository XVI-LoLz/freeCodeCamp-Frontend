import React from 'react';

const GenerateQuote = (props) => {
  return(
    <button className='generate-button' onClick={() => props.generateRandomQuote()}>New quote</button>
  );
}

export default GenerateQuote;