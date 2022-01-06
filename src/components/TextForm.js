import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const stopwords = [["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]];

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

  
  const handleRemoveStopWordsClick = () => {
    let withoutStopwordsText = text.replace(stopwords,""); // "text"'s current state will be taken and converted to uppercase
    setText(withoutStopwordsText); // New "text" state is upper case text
  };

  return (
      <>
    <div className="container">
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
      <button className="btn btn-primary mx-3" onClick={handleUpperCaseClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLowerCaseClick}>
        Convert to Lowercase
      </button>
    </div>

    <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>

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
