let array = [2, 3, 2, 5, 8, 2, 3];

function getNumberMoreRepeat(array) {
  let counter;
  let counterAux = 0;
  let number = array[0];
  
  for (let index of array) {
    counter = 0;
    for (let index2 of array) {
      if (index === index2) {
        counter += 1;
      }
    }
    console.log(counter, counterAux);
    
    if (counter > counterAux) {
      number = index;
      counterAux = counter;
    }
  }

  return number;
}

console.log('O numero que mais se repete no array é: ' + getNumberMoreRepeat(array));
