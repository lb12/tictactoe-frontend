// React imports
import React from "react";

// Own imports
import "./Square.css";


export default ({ id, value, onClickSquare }) => {
  return (
    <div className="square" onClick={() => onClickSquare(id)}>
      <span>{value}</span>
    </div>
  );
};

