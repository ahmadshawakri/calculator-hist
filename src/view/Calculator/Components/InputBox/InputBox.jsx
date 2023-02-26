import React from "react";
import classes from "./InputBox.module.css"

const InputBox = ({value}) => {
  return (
    <div className={classes.calcInput}>
      <h2>{value}</h2>
    </div>
  );
};

export default InputBox;
