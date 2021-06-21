const button = document.querySelector('button');

button.addEventListener('click', () => {
  let count = document.querySelector('span');
  count.innerText = parseInt(count.innerText, 10) + 1;
})