const firstNumber = 1;
const secondNumber = 2;
const operator = "/"

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


const operate = (firstNumber,operator,secondNumber) => {
    switch (operator) {
        case "+":
            return add(firstNumber,secondNumber); 
            break;

        case "-":
            return subtract(firstNumber,secondNumber)
            break;

        case "*":
            return multiply(firstNumber,secondNumber)
            break;

        case "/":
            return divide(firstNumber,secondNumber)
            break;

        default:
            return "sth went wrong"
            break;
    }
}
console.log(operate(firstNumber,operator,secondNumber));


