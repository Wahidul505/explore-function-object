// Times Table of 13 through function
function timesTable(number) {
  for (var i = 0; i <= 10; i++) {
    var result = i * number;
    console.log(number, 'X', i, '=', result);
  }
}
timesTable(13);

// converting text from random case to lower case 
function convertToLowerCase(words) {
  var speech = words.toLowerCase();
  return speech;
}
var talk = convertToLowerCase('I am WahiD');
console.log(talk);
var talk2 = convertToLowerCase('I came This FAr. I aM EnJoyiNg ThE JourNeY. YeiI!')
console.log(talk2);

// adding two part of a full name through function 
function fullName(firstPart, secondPart) {
  var fullPart = firstPart + ' ' + secondPart;
  return fullPart;
}
var myName = fullName('Wahidul', 'Alam');
console.log(myName);
var herName = fullName('Morsheda', 'Begum');
console.log(herName);

// returning the square of a number through function 
function convertingToSquare(number) {
  var square = number * number;
  return square;
}
var result = convertingToSquare(7);
console.log(result);

// to declare an object names "pizza" , and display a particular property
const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}
console.log(pizza.toppings[2]);