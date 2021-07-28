import './node_modules/just-validate/dist/js/just-validate.js';

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

function configureJustValidation() {
  console.log('entrou');
  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 4,
        maxLength: 40,
      },
      email: {
        required: true,
        email: true,
        maxLength: 50,
      },
      cpf: {
        required: true,
        maxLength: 11,
      },
      address:{
        required: true,
        maxLength: 200,
      },
      city:{
        required: true,
        maxLength: 28,
      },
      state:{
        required: true,
      },
      house:{
        required: true,
      },
      resume:{
        required: true,
        maxLength: 1000,
      },
      role:{
        required: true,
        maxLength: 40,
      },
      description:{
        required: true,
        maxLength: 500,
      },
      date:{
        required: true,
      },
    },
    submitHandler: function (form, values) {
      console.log(form, values);
    },
  });
}

window.onload = function () {
  createStateOptions();
  createStartDate();
  configureJustValidation();
}