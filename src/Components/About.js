import React from 'react'

export default function About(props) {

  let myStyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor: props.mode === 'dark' ? '#333' : 'white',
      border: `0.2px solid ${props.mode === 'dark' ? 'lightgrey':'#333'}`
  }

  return (
    <div className='container' >

      <h1 className='my-2' style={{color: props.mode === 'dark'? 'white':'black'}}>About Us</h1>

      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>TextDesk</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextDesk is a utility which gives you a way to analysze your text quickly and efficienty. Be it word count, character count, copy text, clear text or remove extra etc and also provides you theme change functionality from light to dark or vice versa.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextDesk is a free character counter tool that reports instant character count and word count statistics for a given text. Thus it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextDesk supports web browsers like Chrome, Firefox, Internet Explorer, Safari, Opera, mozilla firefox.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
