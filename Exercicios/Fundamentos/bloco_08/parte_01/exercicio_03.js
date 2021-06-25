function checkAnswer(rightAnswer, answer) {
  if (answer === 'N.A') {
    return 0;
  }

  return rightAnswer === answer ? 1 : -0.5;
}

function getScore(arrayRightAnswer, arrayAnswer, check) {
  let score = 0;
  for (const key in arrayRightAnswer) {
      score += check(arrayRightAnswer[key], arrayAnswer[key]);
  }
  return score;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(getScore(rightAnswers, studentAnswers, checkAnswer));