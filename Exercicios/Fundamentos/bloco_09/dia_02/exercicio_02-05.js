function sumRandomNumbers() {
  const array = Array.from({ length: 10 }, () => (
    Math.pow((Math.floor(Math.random() * 50) + 1), 2)
  ));
  const sum = array.reduce((accumulator, current) => accumulator + current, 0);

  if (sum > 8000) {
    throw new Error();
  }
  return sum
}

async function fetchPromise() {
  try {
    const sum = await sumRandomNumbers();
    const sumArray = [2, 3, 5, 10].map(number => sum / number)
      .reduce((accumulator, current) => accumulator + current);
    
    console.log(sumArray);
  }
  catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

fetchPromise();