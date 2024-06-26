import React, { useState } from 'react'

export default function TextForm(props) {

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleUpClick = () => {
    console.log(text);
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Text converted to upper case.", "success");

  }

  const handleLwClick = () => {
    let lwText = text.toLowerCase();
    setText(lwText);
    props.showAlert("Text converted to lower case.", "success");

  }

  const handleClrClick = () => {
    let clearText = '';
    setText(clearText);
    props.showAlert("Text cleared.", "success");

  }


  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard.", "success");
  }

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);  //using regex (regular expression)
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed.", "success");
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container my-4 mb-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#092540', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length == 0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length == 0} className='btn btn-warning mx-2 my-2' onClick={handleLwClick}>Convert to lowercase</button>
        <button disabled={text.length == 0} className='btn btn-success mx-2 my-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length == 0} className='btn btn-success mx-2 my-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length == 0} className='btn btn-danger mx-2 my-2' onClick={handleClrClick}>Clear Text</button>


        <div className='container my-3'>
          <h1>Your Text Summary</h1>
          <p> {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
          <h2>Preview</h2>
          <p>{text === '' ? "No Text To Preview." : text}</p>
        </div>
      </div>
    </>
  );
}
