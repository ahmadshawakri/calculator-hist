import React, { useState } from "react";
import { evaluate } from "mathjs";
import classes from "./Style.module.css";
import InputBox from "./Components/InputBox/InputBox";
import ResultBox from "./Components/ResultBox/ResultBox";
import ButtonBox from "./Components/ButtonBox/ButtonBox";
import Button from "../../Components/Button";
import HistoryBox from "./Components/HistoryBox/HistoryBox";

const buttonValues = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  ["0", ".", "="],
];

const Calculator = () => {
  const [state, setState] = useState({
    operation: "",
    result: "",
  });
  const [history, setHistory] = useState([]);

  const operationEvaluate = () => {
    try {
      const opResult = evaluate(state.operation);
      setHistory((prevHistory) => [
        ...prevHistory,
        { operation: state.operation, result: opResult },
      ]);
      setState({
        operation: opResult,
        result: opResult,
      });
    } catch (error) {}
  };

  const btnClickHandler = (event) => {
    const btnValue = event.target.value;

    switch (btnValue) {
      case "C":
        setState({
          operation: "",
          result: "",
        });
        setHistory([]);
        break;
      case "=":
        operationEvaluate();
        break;
      default:
        setState((prevState) => ({
          operation: prevState.operation + btnValue,
          result: prevState.result,
        }));
        break;
    }
  };

  const historyListClickHandler = (item, itemIndex) => {
    setState({
      operation: item,
      result: "",
    });
    const leftHistory = history.slice(0, itemIndex + 1);
    setHistory(leftHistory)
  };

  return (
    <div className={classes.calcCont}>
      <HistoryBox history={history} onClick={historyListClickHandler} />
      <div className={classes.calculator}>
        <InputBox value={state.operation} />
        <ResultBox value={state.result} />
        <ButtonBox>
          {buttonValues.flat().map((btn, index) => (
            <Button key={index} value={btn} onClick={btnClickHandler}>
              {btn}
            </Button>
          ))}
        </ButtonBox>
      </div>
    </div>
  );
};

export default Calculator;
