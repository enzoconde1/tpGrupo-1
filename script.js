// Obtener elementos
var popup = document.getElementById('popup');
var openPopup = document.getElementById('openPopup');
var closePopup = document.getElementById('closePopup');

// Abrir el popup al hacer clic en la imagen
openPopup.onclick = function () {
  popup.style.display = 'block';
};

// Cerrar el popup al hacer clic en la 'x'
closePopup.onclick = function () {
  popup.style.display = 'none';
};

// Cerrar el popup al hacer clic fuera del contenido del popup
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
};

// VALIDACIÓN DE FORMULARIO DE CONTACTO
// VALIDACION AL TOCAR FORM
var nameInput = document.getElementById('name');
nameInput.addEventListener('blur', function () {
  nameValidation();
});
var phoneInput = document.getElementById('phone');
phoneInput.addEventListener('blur', function () {
  phoneValitaion();
});
var whyInput = document.getElementById('why');
whyInput.addEventListener('blur', function () {
  whyValitaion();
});

// VALIDACION DE NOMBRE
function nameValidation() {
  var name = nameInput.value;
  var nameLabel = document.querySelector('label[for="name"]');

  var nameHasNumbers = /\d/.test(name);
  var nameHasSpecialChars = /[^\w\s]/.test(name);

  var nameError;

  if (name === '') {
    nameError = 'Ingresa un nombre.';
  } else if (nameHasNumbers) {
    nameError = 'No debe contener números.';
  } else if (nameHasSpecialChars) {
    nameError = 'No debe contener caracteres especiales.';
  } else {
    nameError = '';
  }

  if (nameError !== '') {
    nameLabel.style.color = 'red';
    nameLabel.textContent = 'Nombre y Apellido - ' + nameError;
  } else {
    nameLabel.style.color = '#fff';
    nameLabel.textContent = 'Nombre';
  }
}

// VALIDACION DE TELEFONO
function phoneValitaion() {
  var phone = phoneInput.value;
  var phoneLabel = document.querySelector('label[for="phone"]');

  var phoneHasLetters = /[a-zA-Z]/.test(phone);
  var phoneHasSpecialChars = /[^\w\s]/.test(phone);

  var phoneError;

  if (phone === '') {
    phoneError = 'Ingresa un telefono.';
  } else if (phoneHasLetters) {
    phoneError = 'No debe contener letras.';
  } else if (phoneHasSpecialChars) {
    phoneError = 'No debe contener caracteres especiales.';
  } else {
    phoneError = '';
  }

  if (phoneError !== '') {
    phoneLabel.style.color = 'red';
    phoneLabel.textContent = 'Telefono - ' + phoneError;
  } else {
    phoneLabel.style.color = '#fff';
    phoneLabel.textContent = 'Telefono: ';
  }
}

// VALIDACION DE MENSAJE
function whyValitaion() {
  var why = whyInput.value;
  var whyLabel = document.querySelector('label[for="why"]');

  var whyError = why === '' ? 'Ingrese su razon.' : '';

  if (whyError !== '') {
    whyLabel.style.color = 'red';
    whyLabel.textContent = 'Razon - ' + whyError;
  } else {
    whyLabel.style.color = '#fff';
    whyLabel.textContent = '¿Por qué te gustaría ser voluntario?';
  }
}
