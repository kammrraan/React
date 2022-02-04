import React, { useState } from 'react';
import Button from './Button';

export const TextForm = (props) => {

    const [text, setText] = useState('Enter text here')
    
    const handlerUpCase = () => {
        const newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to uppercase','Success')
    }

    const handlerLoCase = () => {
        const newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleralternateCase=()=>{
        var alternateCase = function (text) {
            var chars = text.toLowerCase().split("");
            for (var i = 0; i < chars.length; i += 2) {
              chars[i] = chars[i].toUpperCase();
            }
            return chars.join("");
          };

          setText(alternateCase);
          
    }

    const handlerOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3 container">
                <h1>{props.heading}</h1>
                <textarea type="text" value={text} onChange={handlerOnChange} className="form-control" rows='8' />
                <Button title='Convert to uppercase' click={handlerUpCase} />
                <Button title='Convert to lowercase' click={handlerLoCase}></Button>
                <Button title='Convert to AlTeRnTeCaSe' click={handleralternateCase}></Button>
            </div>
            <div className='conatiner my-4'>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>

            </div>

        
        </>);



};
