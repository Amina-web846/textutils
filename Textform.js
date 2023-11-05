import React, {useState} from 'react'

export default function Textform(props) {
  const HandleOnChange = (event)=> {
    console.log("On change");
    setText(event.target.value)
  }
  const HandleUpClick = ()=> {
    console.log("Upper case was clicked")
    let newText  = text.toUpperCase();
    setText(newText)
    props.showAlert("Text changed to Uppercase", "success" );
  }
  const HandleLoClick = ()=> {
    console.log("Lower case was clicked")
    let newText  = text.toLowerCase();
    setText(newText)
    props.showAlert("Text changed to Lowercase", "success" );
  }
  const HandleClearClick = ()=> {
    let newText  = ("");
    setText(newText)
    props.showAlert("Text has been cleared", "success" );
  }
  const HandlCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard!", "success" );
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Message has been spoken", "success" );
}
  const [text, setText] = useState('');
  return (
    <div className= "container">
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={HandleUpClick}>Convert to Upper Case</button>
  <button className='btn btn-primary mx-2' onClick={HandleLoClick}>Convert to Lower Case</button>
  <button className='btn btn-primary mx-2' onClick={HandleClearClick}>Clear</button>
  <button className='btn btn-primary mx-2' onClick={HandlCopyClick}>Copy</button>
  <button  onClick={speak} className='btn btn-primary mx-2'>Speak</button>


<div className="container my-3">
  <h2>Your text summary is here</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split("").length} minutes read. </p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </div>
  )
}