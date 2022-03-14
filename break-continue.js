// break 
// break in while loop 

var i = 0;
while (i < 10) {
  if (i == 4) {
    break;
  }
  console.log(i);
  i++;
}
// break in for loop 

for (var i = 0; i < 10; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

// continue 

// continue in while loop 

var i = 0;
while (i < 10) {
  i++;
  if (i == 4) {
    continue;
  }
  console.log(i);

}

// continue in for loop 

for (var i = 0; i < 6; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}


// continue and break for array using for loop 
// break 

var numbers = [23, 42, 64, 78, 63, 74, 32, 85, 12, 86, 42];
for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 70) {
    break;
  }
  console.log(number);
}
// continue 

for (i = 0; i < numbers.length; i++) {
  number = numbers[i];
  if (number > 70) {
    continue;
  }
  console.log(number);
}