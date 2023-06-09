import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/

function App() {

  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled","success");
    }
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled","success");
    }
  }

  return (
    <>
      {/*<Router>*/}
        <Navbar title="ArbiTrade" aboutUs="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/*<Routes>*/}
            {/*<Route exact path="/about" element={<About />} />*/}
            {/*<Route exact path="/" element={*/}<TextForm showAlert={showAlert} heading="Fill Your Details" mode={mode}/>{/*} />*/}
          {/*</Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
