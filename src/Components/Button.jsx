import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={props.value === "=" ? classes.equalsBtn : classes.btn}
      type="button"
      value={props.value}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
