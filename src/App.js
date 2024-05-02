import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#092540';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const [mode, setMode] = useState('light');

  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" /> 
  
    {/* toggleMode is passed only to call from navbar.js */}
    <div className='container'>
    <TextForm mode={mode} heading="Enter the text to anlyze"/>
    {/* <About /> */}
    </div>
</>
  );
}

export default App;
