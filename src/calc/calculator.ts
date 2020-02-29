let expression: string[] = [];
let currentNumber = "";
let result = "";
let history: any = [];

class Calculator {
  constructor() {
    history = [];
    expression = [];
    currentNumber = '';
    result = '';
  }

  inputDigit(digit: string){
    if (result !== "") {
      result="";
      currentNumber=""
    }
    currentNumber += digit;
  }

  add(){
    if (currentNumber === "") {
      return;
    }
  
    expression.push(currentNumber);
    expression.push("+");
    
    currentNumber="";
  }

  subtract(){
    if (currentNumber === "") {
      return;
    }
  
    expression.push(currentNumber);
    expression.push("-");
    
    currentNumber="";
  }

  multiply(){
    if (currentNumber === "") {
      return;
    }
  
    expression.push(currentNumber);
    expression.push("*");
    
    currentNumber="";
  }

  divide(){
    if (currentNumber === "") {
      return;
    }
  
    expression.push(currentNumber);
    expression.push("/");
    
    currentNumber="";
  }

  equals(){
    if (currentNumber === "") {
      return;
    }
    expression.push(currentNumber);
    const ans = eval(expression.join(" "));
    result = ans;
    currentNumber = result.toString();
    history.unshift({express: expression.join(" "), answer: ans})
    expression = []
  }

  loadHistory(index: number) {
    currentNumber = history[index].answer.toString();
  }

  deleteHistory(){
    history = []
  }

  erase(){
    result=""
    currentNumber=""
    expression=[]
  }

  delete(){
    if (currentNumber === '') {
      return;
    }
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }

  toggle(){
    currentNumber = (parseFloat(currentNumber) * -1).toString();
  }

  addPoint(){
    if (result !== '') {
      result = '';
      currentNumber = '';         
    }

    if (currentNumber.indexOf('.') >= 0) {
      return;
    }

    if (currentNumber === '') {
      currentNumber += '0.';
    } else {
      currentNumber += '.';
    }
  }

  getExpression(){
    return expression.join(" "); 
  }

  getCurrentNumber() {
    return currentNumber;
  }

  getResult(){
    return result;
  }

  getHistory(){
    return history;
  }
};

export default Calculator;

