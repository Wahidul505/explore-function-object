var laptop = {
  model: 'Dell',
  prize: 32000,
  color: 'Black',
  ram: '4gb',
  processor: 'core i3'
};
console.log(laptop);

// 3 ways to see the property from an object 

console.log(laptop.color);
console.log(laptop['ram']);
var laptopPrize = 'prize';
console.log(laptop[laptopPrize]);

// 3 ways to update the value in an Object 
// first way 
laptop.prize = 30000;
console.log(laptop);
// second way
laptop['ram'] = '8gb';
console.log(laptop);
// third way 
var changingColor = 'color';
laptop[changingColor] = 'lightcyan';
console.log(laptop);

// another object named profile of jhon snow 
var profile = {
  name: 'Jhon Snow',
  nationality: 'British',
  age: 30,
  heigh: 5.6
}

profile.nationality = 'bangladeshi';
console.log(profile.nationality);

profile['age'] = 32;
console.log(profile['age']);

var newHeight = 'height';
profile[newHeight] = 6.6;
console.log(profile[newHeight]);
