let stringWord = 'trybe';
let stringEnding = 'be';

function checkEndingWord(stringWord, stringEnding) {
  let index2 = stringWord.length - 1;
  for (let index = stringEnding.length - 1; index >= 0; index -= 1) {
    if (stringEnding[index] != stringWord[index2]) {
      return false;
    }
    index2 -= 1;
  }

  return true;
}

console.log('%s é o final de %s:', stringEnding, stringWord, checkEndingWord(stringWord, stringEnding));
