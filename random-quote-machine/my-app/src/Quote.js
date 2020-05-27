import React from 'react';

export default function Quote(props){
  return(
    <React.Fragment>
      <h1 className='text'><em><span>"</span>{props.text}<span>"</span></em></h1>
      <h2 className='author'>-{props.author}</h2>
    </React.Fragment>
  );
}