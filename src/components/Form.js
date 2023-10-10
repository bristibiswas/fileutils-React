import React, { useState } from "react";
import Alert from "./Alert";

export default function Form(props) {
  const [count, setCount] = useState("");

  const clickedUp = () => {
    console.log("clicked button" + count);
    let newCount = count.toUpperCase();
    setCount(newCount);
    props.showAlert("success","convert to Uppercase");
  };
  const clickedLo = () => {
    console.log("clicked button" + count);
    let newCount = count.toLowerCase();
    setCount(newCount);
    props.showAlert("success","Convert to Lowercase");
  };
  const clickedClear = () => {
    console.log("clicked button" + count);
    let newCount = "";
    setCount(newCount);
    props.showAlert("success","Clear All Text");
  };
  const clickedReplace = () => {
    console.log("clicked button" + count);
    let newCount = count.replace("and", "&");
    setCount(newCount);
  };
  const clickedToTrim = () => {
    console.log("clicked button" + count);
    let newCount = count.trim();
    setCount(newCount);
  };
  const changeValue = (event) => {
    console.log("onchange");
    setCount(event.target.value);
  };

  return (
    <>
      {/* {console.log(props.vip?.backgroundColor)} */}
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${ props.mode==='light'?'light':'secondary'} text-${ props.mode==='light'?'dark':'light'}`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={count}
            onChange={changeValue}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={clickedUp}>
          Convert to Uppercase
        </button>
        <button className=" mx-3 btn btn-primary" onClick={clickedLo}>
          Convert to Lowercase
        </button>
        <button
          className=" mx-1 btn btn-primary btn-block mx-3"
          onClick={clickedClear}
        >
          Clear Text
        </button>
        <button
          className=" mx-1 btn btn-primary btn-block mx-3"
          onClick={clickedReplace}
        >
          Replace
        </button>
        <button
          className=" mx-1 btn btn-primary btn-block mx-3"
          onClick={clickedToTrim}
        >
          Trim
        </button>
      </div>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Word Counter</h3>
        <p>
          {count.split(" ").length} words and {count.length} charecters
        </p>
      <h3>Time Taking</h3>
      <p>{0.008 * count.split(" ").length} Minutes need</p>
      <h3>Preview</h3>
      <p>{count.length>0?count:"Enter your Text to Preview"}</p>
      </div>
      
    </>
  );
}
