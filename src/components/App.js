import About from './About';
import Navbar from './Navbar';
import { TextForm } from './TextForm';
import React, { useState } from 'react';
import Alert from './Alert';




function App() {

  const[mode, setMode] = useState('light');

  const toggleMode=()=>{
    mode==='light'? setMode('dark'): setMode('light')
  }

  const [alert, setAlert] = useState(null);
  const showAlert=(message , type)=>{
   setAlert({
    message: message,
    type : type,
   })
  }
  
  return (
    <div>
      <Navbar title='TextUtil' about='About site' mode={mode} toggleMode={toggleMode}/>
      <div className='container  my-3'>
        {/* <TextForm heading='Enter your text below'/> */}
        <TextForm showAlert={showAlert}/>
        <Alert alert={alert}/>
        </div>
      
    </div>
  ); 
}

export default App;
