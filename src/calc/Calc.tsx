import React, {useState} from "react";
import Calc from "./calculator";
import ControlPanel from "./ContolPanel";
import Keyboard from "./Keyboard";
import Display from "./Display";
import History from "./History";

const calc = new Calc();

function Calculator() {
  const [value, setValue] = useState<string>("");
  const [history, setHistory] = useState<any[]>([]);
  const [expression, setExpression] = useState<string>("");
  const [showHistory, setShowHistory] = useState<boolean>(false);

  function onClick(event: any) {
    calc.inputDigit(event.target.value);

    setValue(calc.getCurrentNumber());

  }

  function addClick() {
    calc.add();
    setExpression(calc.getExpression());
    setValue(calc.getCurrentNumber());
  }

  function subtractClick() {
    calc.subtract();
    setExpression(calc.getExpression());
    setValue(calc.getCurrentNumber());
  }

  function multiplyClick() {
    calc.multiply();
    setExpression(calc.getExpression());
    setValue(calc.getCurrentNumber());
  }

  function divideClick() {
    calc.divide();
    setExpression(calc.getExpression());
    setValue(calc.getCurrentNumber());
  }

  function getResult() {
    calc.equals();
    setValue(calc.getResult());
    setExpression(calc.getExpression());
    setHistory(calc.getHistory());
  }

  function resetResult() {
    calc.erase();
    setHistory(calc.getHistory());
    setExpression(calc.getExpression());
    setValue(calc.getCurrentNumber());
  }

  function onDelete() {
   calc.delete();
   setValue(calc.getCurrentNumber());
  }
  
  function addPoint() {
    calc.addPoint();
    setValue(calc.getCurrentNumber()); setExpression(calc.getExpression());
  }

  function onToggle(){
    calc.toggle();
    setValue(calc.getCurrentNumber());
  }

  function onToggleHistory(){
    setShowHistory(!showHistory)
  }

  function loadHistory(index: number){
    calc.loadHistory(index);
    setExpression(history[index].express)
    setValue(calc.getCurrentNumber());
  }

  function clearHistory(){
    calc.deleteHistory()
    setHistory(calc.getHistory())
    setShowHistory(false)
  }

return (
  <div>
    <Display topText={expression} bottomText={value} />
    <ControlPanel anyHistory={history.length > 0} onClick={onToggleHistory}/>
    {
      !showHistory ? (
        <Keyboard
          resetResultClick={() => resetResult()}
          onDelete={() => onDelete()}
          divideClick={() => divideClick()}
          inputClick={(event: any) => onClick(event)}
          multiplyClick={() => multiplyClick()}
          subtractClick={() => subtractClick()}
          addClick={() => addClick()}
          onToggle={() => onToggle()}
          addPoint={() => addPoint()}
          getResultClick={() => getResult()}
        />
      ) : 
      (
        <History
          history={history}
          onDelete={() => clearHistory()}
          onSelected={loadHistory}
        />
        
      )
    }
   
  </div>
)
};

export default Calculator;
