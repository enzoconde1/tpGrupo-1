// Obtener elementos
var popupCaballos = document.getElementById('popup-caballos');
var popupBanco = document.getElementById('popup-banco');
var openPopup = document.getElementById('openPopup');
var closePopupBanco = document.getElementById('closePopupBanco');
var closePopupCaballos = document.getElementById('closePopupCaballos');

// Abrir el popup al hacer clic en la imagen
openPopup.onclick = function () {
  popupBanco.style.display = 'block';
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

  document.getElementById('popup-caballos').style.display = 'block';
}

// Cerrar el popup al hacer clic en la 'x'
closePopupBanco.onclick = function () {
  popupBanco.style.display = 'none';
};
closePopupCaballos.onclick = function () {
  popupCaballos.style.display = 'none';
};

// Cerrar el popup al hacer clic fuera del contenido del popup
window.onclick = function (event) {
  if (event.target == popupCaballos) {
    popupCaballos.style.display = 'none';
  }
  if (event.target == popupBanco) {
    popupBanco.style.display = 'none';
  }
};