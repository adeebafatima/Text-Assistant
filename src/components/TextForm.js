import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    let upperCaseText = text.toUpperCase(); // "text"'s current state will be taken and converted to uppercase
    setText(upperCaseText); // New "text" state is upper case text
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerCaseClick = () => {
    let lowerCaseText = text.toLowerCase(); // "text"'s current state will be taken and converted to uppercase
    setText(lowerCaseText); // New "text" state is upper case text
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
        <button className="btn btn-primary mx-3" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
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
