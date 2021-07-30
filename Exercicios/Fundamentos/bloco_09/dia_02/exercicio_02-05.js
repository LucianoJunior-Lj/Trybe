function fetchPromise() {
  new Promise((resolve, reject) => {
    const array = Array.from({ length: 10}, () => (
      Math.pow((Math.floor(Math.random() * 50) + 1), 2)
    ));
    const sum = array.reduce((accumulator, current) => accumulator + current);
    (sum > 8000) ? resolve(sum) : reject();    
  })
    .then((sum) => [2, 3, 5, 10].map(number => sum / number))
    .then((array) => console.log(array.reduce((accumulator, current) => accumulator + current)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();