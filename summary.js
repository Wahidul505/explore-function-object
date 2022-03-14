// funtion 
function moneyGiven(cash1, cash2) {
  var totalCash = cash1 + cash2;
  return totalCash;
}
var totalMoneyGiven = moneyGiven(450, 780);
console.log('Ammu gave me', totalMoneyGiven, 'taka');

// another function 
function calculation(num1, num2, num3, num4) {
  var addition = num1 + num2;
  var multiplication = addition * num3;
  var division = multiplication / num4;
  return division;
}
var total = calculation(10, 20, 20, 50);
console.log('the total is :', total);

// object 
var noteBook = {
  brand: 'Good luck',
  pages: 100,
  color: 'Goldenrod',
  type: 'reel',
  quality: 'A4'
}
// to see the value of object property
console.log(noteBook.brand);
console.log(noteBook['color']);
var noteBookType = 'type';
console.log(noteBook[noteBookType]);
// to change the value of object property 
noteBook.brand = 'RFL';
noteBook['pages'] = 70;
var noteBookQuality = 'quality';
noteBook[noteBookQuality] = 'A5';
console.log(noteBook);

// switch 

var brand = 'nokia';
switch (brand) {
  case 'xiaomi':
    console.log('my phone is from xiaomi');
    break;
  case 'iPhone':
    console.log('my phone is from iPhone');
    break;
  case 'samsung':
    console.log('my phone is from samsung');
    break;
  case 'realme':
    console.log('my phone is from realme');
    break;
  case 'nokia':
    console.log('my phone is from nokia');
    break;
  default:
    console.log('my phone is from outer space');
    break;
}

// break and continue 
// break 
var numbers = [28, 53, 64, 78, 23, 34, 87, 39, 44];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (numbers[i] > 80) {
    break;
  }
  console.log(number);
}

// continue
var i = 0;
while (i < numbers.length) {
  var element = numbers[i];
  i++;
  if (element > 50) {
    continue;
  }
  console.log(element);

}