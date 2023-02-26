import React from "react";
import classes from "./ResultBox.module.css";

const ResultBox = ({ value }) => {
  return (
    <div className={classes.resultBox}>
      <h4>{value}</h4>
    </div>
  );
};

export default ResultBox;
