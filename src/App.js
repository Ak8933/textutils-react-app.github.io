import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const[mode, setMode]=useState('light') ;
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Text" mode={mode} />
      <div className="container my-3 ">
        <TextForm heading="Enter the text to analyze  " />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
