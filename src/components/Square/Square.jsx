import React from "react";
import "./Square.css";

export default props => {
  const { id, value, onClickSquare } = props;
  return (
    <div className="square" onClick={() => onClickSquare(id)}>
      <span>{value}</span>
    </div>
  );
};

