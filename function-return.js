function singaraCalculation(taka) {
  console.log('amar kache ase hocche', taka, 'taka');
  var perSingara = 10;
  var singaraquantity = taka / perSingara;
  return singaraquantity;
}

var singara = singaraCalculation(200);

console.log('ami singara pabo hocche', singara, 'ta');
console.log(typeof singara);