import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useContext } from 'react';
import {Datacontext} from "./components/Datacontext"
function App() {
  const {mode,togglemode,alert,showalert} = useContext(Datacontext);
  return (
    <>
    <Navbar title="Text-Helper" mode={mode} toggle={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} toggle={togglemode}/>
    </div>
    </>
  );
}

export default App;
