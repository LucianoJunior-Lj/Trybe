const skills = ['css', 'html', 'java script', 'git', 'java'];
const phrase = 'Tryber x aqui!';

const changeX = (string) => phrase.replace('x', string);
const createText = (string) => `${string} Minhas cinco principais habilidades são: ${skills.sort()}`

console.log(createText(changeX('Luciano')));