function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  const technologies = [];
  array.sort().map((technology) => {
    technologies.push({ name, tech: technology });
  });

  return technologies;
}

module.exports = { techList };
