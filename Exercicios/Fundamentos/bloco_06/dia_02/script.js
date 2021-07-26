function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (const state of stateOptions) {
    const options = document.createElement('option');
    options.innerHTML = state;
    options.value = state;
    states.appendChild(options);
  }
}

function createStartDate() {
  const picker = new Pikaday({
    field: document.querySelector('[name=start-date]'),
    format: 'DD MM YYYY',
    format: 'D/M/YYYY',
    toString(date, format) {
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  });  
}

window.onload = function () {
  createStateOptions();
  createStartDate();
}