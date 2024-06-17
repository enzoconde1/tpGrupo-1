// Obtener elementos
var popup = document.getElementById('popup');
var openPopup = document.getElementById('openPopup');
var closePopup = document.getElementById('closePopup');

// Abrir el popup al hacer clic en la imagen
openPopup.onclick = function () {
  popup.style.display = 'block';
};

// Abrir el popup al hacer clic en la imagen
function openPopupDescription(imageSrc, horse) {
  document.getElementById('popup-img').src = imageSrc;

  if (horse === 'guerrero') {
    document.getElementById('popup-caption').textContent = 'Guerrero';
    document.getElementById('popup-description').innerHTML =
      'Un grupo de hombres se encontraban llevándolo a tiro con otro caballo, su cuerpo deteriorado no lo soportó… Guerrero cayó agotado por tanto esfuerzo.<br>' +
      'Justo en ese momento pasaba Gonzalo en su vehículo y salió a su defensa. Gonzalo nos dio aviso, la policía llegó para custodiarlo y comenzó la carrera a contrarreloj para salvarle la vida.';
  } else if (horse === 'kenai') {
    document.getElementById('popup-caption').textContent = 'Kenai';
    document.getElementById('popup-description').innerHTML =
      'Llego a nosotros desde el Campo de Ezeiza, no tenia fuerzas para mantenerse de pie, de lo desnutrida que estaba.<br>' +
      'Necesitamos 10 voluntarios para trasladarla hasta donde se encuentra ahora.';
  } else if (horse === 'magnolia') {
    document.getElementById('popup-caption').textContent = 'Magnolia';
    document.getElementById('popup-description').innerHTML =
      'Más de 20 años de maltrato y abandono hicieron en su cuerpo estragos, dejando cicatrices de por vida. Pero ahora nadie la obliga a hacerlo llevando un enorme carro cargado a sus espaldas.<br>' +
      'Hoy Magnolia disfruta de una vida digna en libertad. Sin embargo, su potrillo aún sigue esperando a la burocracia de la UFI N°2 de Esteban Echeverría.';
  } else if (horse === 'chimy') {
    document.getElementById('popup-caption').textContent = 'Chimy';
    document.getElementById('popup-description').textContent =
      'Sin esperanza y con pocas posibilidades de vida, fui superando hipoxia cerebrales, sepsis y una grave neumonía. El tratamiento fue muy largo, pero mi cuerpo empezó a responder. Se curó mi neumonía, las bacterias en mi sangre ya estaban controladas y desaparecieron';
  } else if (horse === 'charles') {
    document.getElementById('popup-caption').textContent = 'Charles';
    document.getElementById('popup-description').textContent =
      'Su comienzo en esta vida estuvo plagado de tristeza y obstáculos. Sin embargo, hoy crece grande y fuerte gracias al apoyo de todos ustedes que nos ayudaron a criarlo con sustituto lácteo.';
  } else if (horse === 'ocaso') {
    document.getElementById('popup-caption').textContent = 'Ocaso';
    document.getElementById('popup-description').innerHTML =
      'Llegó de Ezeiza en estado de desnutrición. Siempre curioso y con una mirada tierna, eso nunca cambió.<br>' +
      'Está creciendo bello, sano, libre y fuerte, con energías para galopar junto a su compañera Teela.';
  }

  document.getElementById('popup').style.display = 'block';
}

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



//VALIDACIONES DE FORMULARIO

let formulario_voluntarios = document.getElementById('container_voluntarios');
let formulario_adopcion ;
let label = document.getElementsByClassName('mensajeError');

formulario_voluntarios.addEventListener('submit', validacion=(e)=>{
  e.preventDefault();
  let name = document.getElementById('name_v');
  let phone = document.getElementById('phone_v');
  let text = document.getElementById('why_v');
  let status = true; 


  if(phoneValitaion(phone)!= ''){
    status = false;
    label[0].style.opacity = "1";

    }else{
      label[0].style.opacity = "0";
    }

    if(nameValidation(name)!= ''){
      status = false;
      label[1].style.opacity = "1";
  
      }else{
        label[1].style.opacity = "0";
      }

      if(whyValitaion(text)!= ''){
        status = false;
        label[2].style.opacity = "1";
    
        }else{
          label[2].style.opacity = "0";
        }
 
})


// VALIDACION DE TELEFONO
function phoneValitaion(phone) {
  // var phoneLabel = document.querySelector('label[for="phone"]');
  // let mensajeError = document.getElementById('mensajeError2');
  var phoneHasLetters = /[a-zA-Z]/.test(phone);
  var phoneHasSpecialChars = /[^\w\s]/.test(phone);

  var phoneError ='';

  if (phone === '') {
    phoneError = 'Ingresa un telefono.';
  } else if (phoneHasLetters) {
    phoneError = 'No debe contener letras.';
  } else if (phoneHasSpecialChars) {
    phoneError = 'No debe contener caracteres especiales.';
  } else {
    phoneError = '';
  }

  return phoneError;
}


// VALIDACION DE MENSAJE
function whyValitaion(why) {
  // var why = whyInput.value;
  // var whyLabel = document.querySelector('label[for="why"]');
  // let mensajeError = document.getElementById('mensajeError3');
    var whyError = why === '' || why.lenght== 0 ? 'Ingrese su razon.' : '';


    return whyError;

  // if(whyError !== ''){
  //   mensajeError.textContent = nameError;
  //   mensajeError.style.opacity = 1;
  // } else{
  //   mensajeError.style.opacity = 0;
  // }
  

  // if (whyError !== '') {
  //   whyLabel.style.color = 'red';
  //   whyLabel.textContent = 'Razon - ' + whyError;
  // } else {
  //   whyLabel.style.color = '#fff';
  //   whyLabel.textContent = '¿Por qué te gustaría ser voluntario?';
  // }
}


// VALIDACION DE NOMBRE



function nameValidation(name) {
  // var name = nameInput.value;
  // var nameLabel = document.querySelector('label[for="name"]');
  // let mensajeError = document.getElementById('mensajeError1');

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

  return nameError;
  // if (nameError !== '') {
  //   // nameLabel.style.color = 'red';
  //   // nameLabel.textContent = 'Nombre y Apellido - ' + nameError;
  //   mensajeError.textContent = nameError;
  //   mensajeError.style.opacity = 1;
  // } else{
  //   mensajeError.style.opacity = 0;
  // }
  // else {
  //   nameLabel.style.color = '#fff';
  //   nameLabel.textContent = 'Nombre';
  // }
}