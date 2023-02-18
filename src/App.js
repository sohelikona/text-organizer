import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  } 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(" Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success")
    }
  }
  return (

    <>
<Navbar title="Text Organizer" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-90">
<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    <About mode={mode}/>
</div>

 
</>
  );

  
}

export default App;
