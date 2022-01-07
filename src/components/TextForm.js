import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    let upperCaseText = text.toUpperCase(); // "text"'s current state will be taken and converted to uppercase
    setText(upperCaseText); // New "text" state is upper case text
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerCaseClick = () => {
    let lowerCaseText = text.toLowerCase(); // "text"'s current state will be taken and converted to lowercase
    setText(lowerCaseText); // New "text" state is lower case text
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCopytoClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Cleared", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.boxHeading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} // Value must be assigned with text. So as "text" changes, it will be reflected.
            onChange={handleOnChange} // In order to make text area editable,onChange event listner continously represent current "text" state
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2d2c31",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={
            text.length === 0 ||
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length === 0
          }
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpperCaseClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={
            text.length === 0 ||
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length === 0
          }
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowerCaseClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={
            text.length === 0 ||
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length === 0
          }
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          disabled={
            text.length === 0 ||
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length === 0
          }
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopytoClipboard}
        >
          Copy
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearText}>
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.replace(/\s/g, "").length} characters
        </p>
        <p>{text.length} characters (with spaces)</p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  boxHeading: PropTypes.string,
};

TextForm.defaultProps = {
  boxHeading: "Enter your text here",
};
