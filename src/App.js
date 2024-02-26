// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode, setMode] = useState('light')
  // const [mode, setMode] = useState('dark')
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode}/>

      <div className="container my-3"> 
        <TextForm heading="Enter the Text to Analyze"/>
        {/* <TextForm textAreaLabel="Enter the Text to Analyze"/> */}
      </div>
    </>
  );
}

export default App;
