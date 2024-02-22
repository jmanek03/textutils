import React, {useState} from 'react'



export default function TextForm(props) {
    const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick= ()=>{
        console.log("Uppercase Was Clicked");
        setText(text.toUpperCase());
    }
    const handleDownClick= ()=>{
        console.log("Lowercase Was Clicked");
        setText(text.toLowerCase());
    }
    const handleClearClick= ()=>{
        console.log("Clear");
        setText('');
    }
const [text,setText]= useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
       <button className="btn btn-secondary mx-2" onClick={handleDownClick}>Convert to Lower case</button>
       <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
