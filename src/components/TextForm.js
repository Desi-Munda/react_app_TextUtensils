import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here')
  
const handleUpClick = () => {
    setText(text.toUpperCase())
}
const handleLoClick = () => {
    setText(text.toLowerCase())
}
const handleClearClick = () => {
    let newText='';
    setText(newText)
}
const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);    
}
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));    
}

// allows you to write more text in textarea
const handleOnChange = (event) => {
    setText(event.target.value)
  }

return (
<>
<div className='container'>
    <h3>{props.heading}</h3>
    <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label">{props.textAreaLabel}</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
<div className="container my-3">
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
  )
}
