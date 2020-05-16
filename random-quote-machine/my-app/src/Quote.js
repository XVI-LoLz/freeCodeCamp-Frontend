import React from 'react';

const Quote = (props) => {
  return(
    <>
      <h1 className='text'><em><span>"</span>{props.text}<span>"</span></em></h1>
      <h2 className='author'>-{props.author}</h2>
    </>
  );
}

export default Quote;