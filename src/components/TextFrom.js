import React, { useState } from 'react';
// import Alert from './components/Alert';



export default function TextFrom(props) {
const handleUpClick = () => {
  let newText = text.toUpperCase()
  setText(newText)
  props.showAlert(" Converted to uppercase", "success")

}

const handleLoClick = () => {
  let newText = text.toLowerCase()
  setText(newText)
  props.showAlert(" Converted to lowercase", "success")

}

const handleClearClick = () => {
  let newText = " "
  setText(newText)
  props.showAlert(" Text cleared", "success")

}


const handleOnChange = (event) => {
  setText(event.target.value)
}

const handleCopy = ()=> {
  let text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert(" Coppied to Clipboard", "success")

}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/)
  setText(newText.join(' '))
  props.showAlert(" extra spaces removed", "success")

}

const handleChangeColorB = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'blue'
  props.showAlert(" Color changed to blue", "success")

}

const handleChangeColorG = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'green'
  props.showAlert(" Color changed to green", "success")

}

const handleChangeColorR = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'red'
  props.showAlert(" Color changed to red", "success")

}

const handleChangeColorY = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'yellow'
  props.showAlert(" Color changed to yellow", "success")

}

const handleChangeColorP = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'pink'
  props.showAlert(" Color changed to pink", "success")

}

const handleChangeColorD = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'black'
  props.showAlert(" Color changed to black", "success")

}

const handleChangeColorW = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'white'
  props.showAlert(" Color changed to white", "success")

}

const handleChangeColorGr = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'gray'
  props.showAlert(" Color changed to gray", "success")

}

const handleChangeColorLg = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'lightGray'
  props.showAlert(" Color changed to lightGray", "success")

}

const handleChangeColorSg = () => {
  let newText = document.getElementById("myBox")
  newText.style.color = 'lightseagreen'
  props.showAlert(" Color changed to lightseagreen", "success")

}

const handleChangeBold= () => {
  let newText = document.getElementById("myBox")
  newText.style.fontWeight = 'bold'
  props.showAlert(" Text bolded", "success")

}

const handleChangeItalic= () => {
  let newText = document.getElementById("myBox")
  newText.style.fontStyle = 'italic'
  props.showAlert(" Text converted to Italic", "success")

}

const handleChangeFontSize= () => {
  let newText = document.getElementById("myBox")
  newText.style.fontSize = '30px'
  props.showAlert(" font size increased", "success")

}



  const [text, setText] = useState('')
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="my-9">
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'lightgray':'white', color: props.mode==='dark'?'black':'black'}}></textarea>
      </div>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-2' onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        {/* <button className='btn btn-success mx-1 my-2' onClick={handleChangeColor}>Change Color</button> */}
        <div className="dropdown ">
          <button disabled={text.length===0} className="btn btn-secondary dropdown-toggle bg-success" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Change Color
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item active" href="#" onClick={handleChangeColorB}>Blue</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorG}>Green</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorR}>Red</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorY}>Yellow</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorP}>Pink</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorD}>Black</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorW}>White</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorGr}>Gray</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorLg}>Light Gray</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeColorSg}>Light Sea Green</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeBold}>Bold</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeItalic}>Italic</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleChangeFontSize}>Font Size Increase</a></li>

          </ul>
        </div>




       



    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>

    </>
  );
}



