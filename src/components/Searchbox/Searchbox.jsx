import React from "react";
import "./Searchbox.scss";

const Searchbox = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <input type="text" name={label} value={searchTerm} onInput={handleInput} className="searchbox__input"/>
  );
};

export default Searchbox;
