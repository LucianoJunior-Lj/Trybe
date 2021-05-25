let stringRoman = 'LXXIX'

function convertsToDecimal(stringRoman) {
  let romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 100
  }
  
  let decimal = [];
  let sumDecimal = 0;

  for (let index = 0; index < stringRoman.length; index += 1) {
    for (let key in romanNumeral) {
        if (stringRoman[index] === key) {
          decimal.push(romanNumeral[key]);
        }
    }
  }

  for (let index = 0; index < decimal.length; index += 1) {
    if (decimal[index] < decimal[index+1] ) {
      sumDecimal -= decimal[index];
    }
    else{
      sumDecimal += decimal[index];
    }
  }

  return sumDecimal;
  
}

console.log(stringRoman + ' em decimal: ' + convertsToDecimal(stringRoman));
