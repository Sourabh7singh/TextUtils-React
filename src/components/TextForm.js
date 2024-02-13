import React,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("");
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Uppercase","success");
    }
    const handlelowclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lowercase","success");
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const handleclearclick=(event)=>{
        setText("");
        props.showalert("Text Cleared","success");
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showalert("Text copied to clipboard","success");
    }
    const handlelsentence=()=>{
        let newtext = text[0].toUpperCase() + text.substring(1)
        setText(newtext);
    }
    return (
        <>
        <div className="container">
        <h5>{props.heading}</h5>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleonchange}></textarea>
        </div>
        <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to Upper case</button>
        <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert to Lower case</button>
        <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handlelsentence}>Convert to Sentence case</button>
        <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear Text</button>
        <button disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        </div>
        <div className="container my-5">
            <h3>Your text summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.split(" ").filter((element)=>{return element.length!==0}).length} characters</p>
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length>0?text:"No text to preview"}</p>
        </div>
        </>
    )
}
