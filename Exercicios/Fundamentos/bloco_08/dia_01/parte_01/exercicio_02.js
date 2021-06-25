const checkGame = (chosenNumber, drawNumber) => chosenNumber === drawNumber;

function drawResult(chosenNumber, check) {
  drawNumber = Math.floor((Math.random() * 5) + 1);
  
  return check(chosenNumber, drawNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(drawResult(5, checkGame));