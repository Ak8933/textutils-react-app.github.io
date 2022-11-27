import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };

  const handleClearClick = () => {
    let newText2 = " ";
    setText(newText2);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text=document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraspaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    
  };




  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes required to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
