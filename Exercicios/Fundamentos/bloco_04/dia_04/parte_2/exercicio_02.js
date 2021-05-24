let array = [2, 3, 6, 7, 10, 1];

function getIndexHighestValue(array) {
  let highestValue = array[0];
  let indexArray = 0;
  
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highestValue) {
      highestValue = array[index];
      indexArray = index;
    }
  }

  return indexArray;
}

console.log('O índice do maior valor do array ' + array + ' é: ' + getIndexHighestValue(array));