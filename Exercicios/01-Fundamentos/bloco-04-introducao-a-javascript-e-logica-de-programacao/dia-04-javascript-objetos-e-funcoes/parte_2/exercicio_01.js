let word = 'teste';

function isPalindrome(word) {
  let lengthWord = word.length - 1;
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] != word[lengthWord]) {
      return false;
    }

    lengthWord -= 1;
  }
  return true;
}

console.log(word + ' é um palíndromo: ' + isPalindrome(word));