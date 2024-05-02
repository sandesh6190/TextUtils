import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';

function App() {
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#092540';
      showAlert("Dark mode has been enabled.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
    }
  }
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{    //built-in function
      setAlert(null)
    },3000)
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" /> 
    {/* toggleMode is passed only to call from navbar.js */}
    <Alert alert={alert} />
    <div className='container'>
    <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to anlyze"/>
    {/* <About /> */}
    </div>
</>
  );
}

export default App;
