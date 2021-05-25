let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array) {
  let arrayEven = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > 1) {
      arrayEven.push(...arrayOfNumbers(array[index]));
    }
    else{
      if (array[index] % 2 === 0) {
        arrayEven.push(array[index]);
      }
    }
    
  }

  return arrayEven;
  
}

console.log('Os números pares do array são: ' + arrayOfNumbers(vector));
