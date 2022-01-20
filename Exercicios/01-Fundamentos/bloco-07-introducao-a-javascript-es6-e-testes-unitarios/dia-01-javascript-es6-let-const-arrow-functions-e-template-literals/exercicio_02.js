function getBiggerWord(phrase) {
  const wordList = phrase.split(" ");
  let biggerWord = wordList[0];

  for (let index = 1; index < wordList.length; index += 1) {
    if (wordList[index].length > biggerWord.length) {
      biggerWord = wordList[index];
    }
  }
  return biggerWord;
}

console.log(getBiggerWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
