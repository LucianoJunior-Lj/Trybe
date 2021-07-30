function fetchPromise() {
  new Promise((resolve, reject) => {
    const array = Array.from({ length: 10}, () => (
      Math.pow((Math.floor(Math.random() * 50) + 1), 2)
    ));
    const sum = array.reduce((accumulator, current) => accumulator + current);
    (sum > 8000) ? resolve() : reject();    
  })
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
}

fetchPromise();