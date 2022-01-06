import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d2c31";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="Text Assistant" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm boxHeading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
