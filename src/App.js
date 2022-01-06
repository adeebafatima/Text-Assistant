import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Assistant" />
      <div className="container my-3">
        <TextForm boxHeading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
