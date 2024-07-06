import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleInputchange} type="text" value={props.inputValue} />
      <button onClick={props.addInputItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
