import React from "react";
import "./styles.css";

const Grid = ({ coin }) => {
  return <div className="grid-container">{coin.name}</div>;
};

export default Grid;
