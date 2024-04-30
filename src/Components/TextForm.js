import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    console.log(text);
    let upText = text.toUpperCase();
    setText(upText);
  }

  const handleLwClick = () =>{
    let lwText = text.toLowerCase();
    setText(lwText);
  }

  const handleClrClick = () =>{
    let clearText = '';
    setText(clearText);
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-warning mx-2' onClick={handleLwClick}>Convert to lowercase</button>
        <button className='btn btn-danger' onClick={handleClrClick}>Clear Text</button>

        
        <div className='container my-3'>
          <h1>Your Text Summary</h1>
          <p> {text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>  
          <p>{text}</p>
        </div>
    </div>

  );
}
