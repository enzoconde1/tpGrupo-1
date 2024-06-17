// VALIDACION AL TOCAR FORM
var nameInput = document.getElementById('name_v');
let nameInputError = document.getElementById('mensajeErrorName');
nameInput.addEventListener('blur', function () {
  nameValidation();
});

var phoneInput = document.getElementById('phone_v');
let phoneInputError = document.getElementById('mensajeErrorPhone');
phoneInput.addEventListener('blur', function () {
  phoneValidation();
});

var whyInput = document.getElementById('why_v');
let whyInputError = document.getElementById('mensajeErrorWhy');
whyInput.addEventListener('blur', function () {
  whyValidation();
});

// VALIDACION DE NOMBRE
function nameValidation() {
  var name = nameInput.value;
  var nameHasNumbers = /\d/.test(name);
  var nameHasSpecialChars = /[^\w\s]/.test(name);

  var nameError;
  if (name === '') {
    nameError = 'Complete el campo.';
  } else if (nameHasNumbers) {
    nameError = 'No debe contener números.';
  } else if (nameHasSpecialChars) {
    nameError = 'No debe contener caracteres especiales.';
  } else {
    nameError = '';
  }

  if (nameError !== '') {
    nameInputError.textContent = nameError;
    nameInputError.classList.add('visible');
  } else {
    nameInputError.textContent = '';
    nameInputError.classList.remove('visible');
  }

  fieldsVerification();
}

// VALIDACION DE PHONE
function phoneValidation() {
  var phone = phoneInput.value;
  var phoneHasLetters = /[a-zA-Z]/.test(phone);
  var phoneHasSpecialChars = /[^\w\s]/.test(phone);

  var phoneError;
  if (phone === '') {
    phoneError = 'Complete el campo.';
  } else if (phoneHasLetters) {
    phoneError = 'No debe contener letras.';
  } else if (phoneHasSpecialChars) {
    phoneError = 'No debe contener caracteres especiales.';
  } else {
    phoneError = '';
  }

  if (phoneError !== '') {
    phoneInputError.textContent = phoneError;
    phoneInputError.classList.add('visible');
  } else {
    phoneInputError.textContent = '';
    phoneInputError.classList.remove('visible');
  }

  fieldsVerification();
}

function whyValidation() {
  var why = whyInput.value;
  var whyError = why === '' ? 'Complete el campo.' : '';

  if (whyError !== '') {
    whyInputError.textContent = whyError;
    whyInputError.classList.add('visible');
  } else {
    whyInputError.textContent = '';
    whyInputError.classList.remove('visible');
  }

  fieldsVerification();
}

// VERIFICACION DE ERRORES PARA DESHABILITAR BOTON
function fieldsVerification() {
  var name = nameInput.value;
  var phone = phoneInput.value;
  var why = whyInput.value;
  var button = document.querySelector('.boton_form');

  var nameError = name === '' || nameInputError.classList.contains('visible');
  var phoneError =
    phone === '' || phoneInputError.classList.contains('visible');
  var whyError = why === '' || whyInputError.classList.contains('visible');

  if (nameError || phoneError || whyError) {
    button.classList.add('disabled');
    button.disabled = true;
  } else {
    button.classList.remove('disabled');
    button.disabled = false;
  }
}
