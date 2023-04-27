import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted To UpperCase","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted To LowerCase","success");
    }
    const [text, setText] = useState('Enter Text Here');
    
    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} placeholder=""/>
                </div>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" id="myBox" rows="3" value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
  );
}

TextForm.prototype = {
    heading : PropTypes.string
}
            
TextForm.defaultProps = {
    heading : "Fill Your Details"
}
