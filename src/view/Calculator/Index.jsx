import React from "react";
import classes from "./Style.module.css";
import InputBox from "./Components/InputBox";
import ResultBox from "./Components/ResultBox";
import ButtonBox from "./Components/ButtonBox";
import Button from "../../Components/Button";

const buttonValues = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  ["0", ".", "="],
];

const Calculator = () => {
  const btnClickHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={classes.calculator}>
      <InputBox />
      <ResultBox />
      <ButtonBox>
        {buttonValues.flat().map((btn, index) => (
          <Button key={index} value={btn} onClick={btnClickHandler}>
            {btn}
          </Button>
        ))}
      </ButtonBox>
    </div>
  );
};

export default Calculator;
