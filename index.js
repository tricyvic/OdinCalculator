let firstNumber = '';
let secondNumber = '';
let operator = "";

const inputsNumbers = document.querySelectorAll("input")


const displayTop = document.querySelector(".top")
const displayBottom = document.querySelector(".bottom")

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
      break;

    case "-":
      return subtract(firstNumber, secondNumber);
      break;

    case "*":
      return multiply(firstNumber, secondNumber);
      break;

    case "/":
      return divide(firstNumber, secondNumber);
      break;

    default:
      return "sth went wrong";
      break;
  }
};
console.log(operate(firstNumber, operator, secondNumber));

inputsNumbers.forEach(input => {
  input.addEventListener("click",()=>{
    firstNumber = firstNumber + input.value;
    displayTop.innerHTML = firstNumber;
    return firstNumber;
  })
})








