const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
0. Copie esse arquivo e edite apenas ele;

1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
function addClass(element) {
  let previousElement = document.querySelector('.tech');
  if (previousElement) {
    previousElement.classList.remove('tech');
  }
  element.target.classList.add('tech');
  console.log(element);
}
divUm.addEventListener('mouseover', addClass);
divDois.addEventListener('mouseover', addClass);
divTres.addEventListener('mouseover', addClass);

// 2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeText(element) {
  document.querySelector('.tech').innerText = element.target.value;
}
input.addEventListener('keyup', changeText);

// 3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 3.1. Que tal redirecionar para seu portifólio?
function openPage() {
  window.open('https://github.com/LucianoJunior-Lj');
}
myWebpage.addEventListener('dblclick', openPage);

// 4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColor(element) {
  element.target.style.color = '#2fc18c';
}
function changeColorOrigin(element) {
  element.target.style.color = '';
}
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', changeColorOrigin);
