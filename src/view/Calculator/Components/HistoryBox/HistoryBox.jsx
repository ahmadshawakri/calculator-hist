import React from "react";
import classes from "./HistoryBox.module.css";

const HistoryBox = ({ history, onClick }) => {
  const histClickHandler = (value, index) => {
    onClick(value.result, index);
  };
  return (
    <div className={classes.history}>
      <h2>Recent Calculations</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>
            <span>{value.operation}</span>
            <span>=</span>
            <span onClick={() => histClickHandler(value, index)}>
              {value.result}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryBox;
