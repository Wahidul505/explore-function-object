// function of adding numbers 

function addingNumbers(number1, number2) {
  console.log(number1, number2);
  var total = number1 + number2;
  return total;
}

var resultOfTotal = addingNumbers(31, 69);
console.log('the total is:', resultOfTotal);

// function of substracting a number from another 

function substractingNumbers(num1, num2) {
  var substract = num1 - num2;
  return substract;
}

var firstNumber = 234;
var secondNumber = 153;
var result = substractingNumbers(firstNumber, secondNumber);
console.log('the substraction is :', result);

// function of multiplying two numbers 

function multiplyNumbers(num1, num2) {
  var multiple = num1 * num2;
  return multiple;
}

var multiplicationResult = multiplyNumbers(23, 10);
console.log('the multiplication is :', multiplicationResult);

// function of deviding a number from another

function dividingNumbers(numberA, numberB) {
  var division = numberA / numberB;
  return division;
}

var divisionResult = dividingNumbers(350, 5);
console.log('the division is :', divisionResult);