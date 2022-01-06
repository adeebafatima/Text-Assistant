import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  const handleUpperCaseClick = () => {
    let upperCaseText = text.toUpperCase(); // "text"'s current state will be taken and converted to uppercase
    setText(upperCaseText); // New "text" state is upper case text
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>{props.boxHeading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} // Value must be assigned with text. So as "text" changes, it will be reflected.
          onChange={handleOnChange} // In order to make text area editable,onChange event listner continously represent current "text" state
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCaseClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}

TextForm.propTypes = {
  boxHeading: PropTypes.string,
};

TextForm.defaultProps = {
  boxHeading: "Enter your text here",
};
