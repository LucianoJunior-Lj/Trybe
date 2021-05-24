let array = [2, 4, 6, 7, 10, 0, -3];

function getLowestValueIndex(array) {
  let lowestValue = array[0];
  let indexArray = 0;
  
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < lowestValue) {
      lowestValue = array[index];
      indexArray = index;
    }
  }

  return indexArray;
}

console.log('O índice do menor valor do array ' + array + ' é: ' + getLowestValueIndex(array));