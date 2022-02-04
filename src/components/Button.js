import React from 'react';

const Button = (props) => {
  return (<div>
      <button className='my-3 btn-primary' onClick={props.click} >{props.title}</button>
  </div>);
};

export default Button;
