import React from "react";

interface Props {
  inputClick: any;
  resetResultClick: any;
  onDelete: any;
  divideClick: any;
  multiplyClick: any;
  subtractClick: any;
  addClick: any; 
  onToggle: any;
  addPoint: any;
  getResultClick: any;
}

function Keyboard({
  inputClick,
  resetResultClick,
  onDelete,
  divideClick,
  multiplyClick,
  subtractClick,
  addClick,
  onToggle,
  addPoint,
  getResultClick
}: Props) {
return (
    <div className="calc_pad">
      <button className="number" onClick={resetResultClick}>CE</button>
      <button className="number" onClick={onDelete}>C</button>
      <button className="number">L</button>
      <button className="number"  onClick={divideClick}>/</button>
      <button className="number" value="7" onClick={inputClick}>7</button>
      <button className="number" value="8" onClick={inputClick}>8</button>
      <button className="number" value="9" onClick={inputClick}>9</button>
      <button className="number"  onClick={multiplyClick}>*</button>
      <button className="number" value="4" onClick={inputClick}>4</button>
      <button className="number" value="5" onClick={inputClick}>5</button>
      <button className="number" value="6" onClick={inputClick}>6</button>
      <button className="number" value="-" onClick={subtractClick}>-</button>
      <button className="number" value="1" onClick={inputClick}>1</button>
      <button className="number" value="2" onClick={inputClick}>2</button>
      <button className="number" value="3" onClick={inputClick}>3</button>
      <button className="number" value="+"  onClick={addClick}>+</button>
      <button className="number"  onClick={onToggle}>+-</button>
      <button className="number" value="0" onClick={inputClick}>0</button>
      <button className="number" onClick={addPoint}>.</button>
      <button className="number" onClick={getResultClick}>=</button>
    </div>
  )
};

export default Keyboard;
