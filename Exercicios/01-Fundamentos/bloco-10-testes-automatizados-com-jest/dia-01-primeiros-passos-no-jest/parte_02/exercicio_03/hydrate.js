function hydrate(string) {
  string = string.match(/\d+/g);
  const total = string.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, 10), 0);
  
  return total === 1 ? '1 copo de água' : `${total} copos de água`;
}

module.exports = hydrate;
