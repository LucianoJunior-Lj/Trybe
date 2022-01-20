const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words) {
  const arrayWordLengths = [];
  for (const iterator of words) {
    arrayWordLengths.push(iterator.length);
  }
  return arrayWordLengths;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);