// adding a Hooke named useState
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpperCase = () => {
        const toupper = text.toUpperCase();
        setText(toupper);
        props.showalert("Converted to upper case","success");
    }
    
    const handleLowerCase = () => {
        const toLower = text.toLowerCase();
        setText(toLower);
        props.showalert("Converted to lower case","success");
    }
    
    const CapitalizeWord =()=>{
        let textArr = text.split(' ');
        for(var i=0;i<textArr.length;i++){
            textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1,);
        }
        let firstToUpper = textArr.join(" ");
        setText(firstToUpper);
        props.showalert("First letter of each word of text has been capitalized","success");
    }

    const CapitalizeSentense = () => {
        let str = text.split(". ");
        for(var i=0;i<str.length;i++){
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        let firstToUpperStr = str.join(". ");
        setText(firstToUpperStr);
        props.showalert("Converted first character of sentence to upper case","success")
    }

    const clearText = () => {
        let clear = "";
        setText(clear);
        props.showalert("Text has been cleared","success")
    }
    
    // special
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Text copied to clipboard","success")
    }
    
    // special
    const handlExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra spaces has been removed","success")
    }
    
    const handleOnChange = (event) => {
        console.log("On change");
        // updating previous text inside textbox with newly text entered by user ⤵  
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text" // wrong way to change the state
    // setText = "new Text" // correct way to change the state

    // calculating character length
    return (
        <>
            <div className='container'>
                <h2 style={{color: props.mode === 'dark'? 'white':'black'}} className="my-4" >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="10" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#333' : '#ced4da', border: 'none'}}></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={CapitalizeWord}>Capitalize Word</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={CapitalizeSentense}>Capitalize Sentense</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2">
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Text Summary</h2>
                <p style={{ color: props.mode === 'dark' ? 'lightgrey' : 'black' }}>{text.split(" ").filter((element)=> element.length !== 0).length} Words and {text.length} Characters</p>  {/* <---- word count issue need to be fixed*/}
                <p style={{ color: props.mode === 'dark' ? 'lightgrey' : 'black' }}>{0.008 * text.split(" ").filter((element)=> element.length !== 0).length} Minutes Read</p>
                <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h3>
                <p style={{ color: props.mode === 'dark' ? 'lightgrey' : 'black' }}>{text.length>0 ? text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Enter text below"
}