let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function getBiggerName(array) {
  let biggerName = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > biggerName.length) {
      biggerName = array[index];
    }
    
  }

  return biggerName;
}

console.log('O maior nome da lista é: ' + getBiggerName(array));