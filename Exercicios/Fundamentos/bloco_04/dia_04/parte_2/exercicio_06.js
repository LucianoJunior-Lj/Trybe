let number = 5;

function sum(number){
  let sumAll = 0;
  for (let index = 1; index <= number; index += 1) {
    sumAll += index;
    
  }
  return sumAll;
}

console.log('Soma de 1 ate %d:', number, + sum(number));

