import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ".././styles/calculator.css";
function Calculator() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const operation: string[] = ["+", "-", "*", "/"];
  function updateData(v: string) {
    //check if the value already contain the operation
    if (operation.includes(value.slice(-1)) && operation.includes(v)) {
      return;
    }
    //check if the value already contain value and user input is operation
    if (operation.includes(v) && value == "") {
      return;
    }
    //check the error message
    if (value === "Error") {
      return;
    }
    //check if the user input is operation than calculate
    if (operation.includes(v)) {
      calculateResult();
    }
    //set value
    setValue((prev) => prev + v);
  }
  function calculateResult() {
    //check if there is operation at end of line
    if (operation.includes(value.slice(-1))) {
      return;
    }
    //check if the value is empty
    if (value == "") {
      return;
    }
    let flag = false;
    //check if the value have operation when calculate 
    for (let i = 0; i < value.length; i++) {
      if (operation.includes(value[i])) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      return;
    }
    // if(operation.includes(value) && )
    const res: string = eval(value).toString();
    if (res === "Infinity") {
      setValue("Error");
      return;
    }
    if (res === "0") {
      setValue("");
    }
    setValue(res);
    setHistory((prevHistory) => [res, ...prevHistory]);
  }
  function deleteOpertaion() {
    setValue(value.slice(0, -1));
  }
  const historyList = history.map(function (history, index) {
    return <li key={index}>{history}</li>;
  });
  return (
    <div className="calculator">
      <div className="display">
        <div className="history">{historyList}</div>

        <div className="value">
          <p>{value ? value : 0}</p>
        </div>
      </div>
      <div className="operations">
        <div className="row">
          <button
            className="btn"
            onClick={() => {
              setValue("");
            }}
          >
            C
          </button>
          <button className="btn" onClick={() => deleteOpertaion()}>
            DEL
          </button>

          <button
            className="btn lightOrange"
            onClick={() => {
              navigate("/support");
            }}
          >
            ?
          </button>
          <button className="btn op " onClick={() => updateData("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => updateData("1")}>
            1
          </button>
          <button className="btn" onClick={() => updateData("2")}>
            2
          </button>
          <button className="btn" onClick={() => updateData("3")}>
            3
          </button>
          <button className="btn op" onClick={() => updateData("*")}>
            x
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => updateData("4")}>
            4
          </button>
          <button className="btn" onClick={() => updateData("5")}>
            5
          </button>
          <button className="btn" onClick={() => updateData("6")}>
            6
          </button>
          <button className="btn op" onClick={() => updateData("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => updateData("7")}>
            7
          </button>
          <button className="btn" onClick={() => updateData("8")}>
            8
          </button>
          <button className="btn" onClick={() => updateData("9")}>
            9
          </button>
          <button className="btn op" onClick={() => updateData("+")}>
            +
          </button>
        </div>
        <div className="row lastRow">
          <button className="btn" onClick={() => updateData("0")}>
            0
          </button>
          <button className="btn op" onClick={() => calculateResult()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
