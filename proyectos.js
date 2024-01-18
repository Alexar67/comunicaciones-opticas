document.getElementById('python').addEventListener('click', function() {
  var url = 'docs/informe python opticas.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('gpon').addEventListener('click', function() {
  var url = 'docs/Informe Proyecto Final GPON Cotopaxi.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('optico').addEventListener('click', function() {
  var url = 'docs/Formatoinforme Sistema Optico.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('pythonrar').addEventListener('click', function() {
  var url = 'docs/Final.rar'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('gponrar').addEventListener('click', function() {
  var url = 'docs/Final.rar'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('opticorar').addEventListener('click', function() {
  var url = 'docs/Final.rar'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

//                   VENTANA DE PREGUNTAS

document.getElementById('iniciarLeccion').addEventListener('click', function() {
  document.getElementById('ventanaEmergente').style.display = 'flex';
});

document.getElementById('cerrarVentana').addEventListener('click', function() {
  document.getElementById('ventanaEmergente').style.display = 'none';
});

document.getElementById('calcularResultado').addEventListener('click', function() {
  // Lógica para calcular la puntuación y las respuestas correctas/incorrectas
  let puntuacion = 0;
  const respuestasCorrectas = [];
  const respuestasIncorrectas = [];

  // Lógica de cálculo de puntuación - Ejemplo para la primera pregunta
  const respuestaPregunta1 = document.querySelector('input[name="pregunta1"]:checked');
  if (respuestaPregunta1) {
    if (respuestaPregunta1.value === '1939') {
      puntuacion++;
      respuestasCorrectas.push('Pregunta 1');
    } else {
      respuestasIncorrectas.push('Pregunta 1');
    }
  }

  const respuestaPregunta2 = document.querySelector('input[name="pregunta2"]:checked');
  if (respuestaPregunta2) {
    if (respuestaPregunta1.value === '1939') {
      puntuacion++;
      respuestasCorrectas.push('Pregunta 2');
    } else {
      respuestasIncorrectas.push('Pregunta 2');
    }
  }

  const respuestaPregunta3 = document.querySelector('input[name="pregunta3"]:checked');
  if (respuestaPregunta3) {
    if (respuestaPregunta3.value === '1939') {
      puntuacion++;
      respuestasCorrectas.push('Pregunta 3');
    } else {
      respuestasIncorrectas.push('Pregunta 3');
    }
  }

  const respuestaPregunta4 = document.querySelector('input[name="pregunta4"]:checked');
  if (respuestaPregunta4) {
    if (respuestaPregunta4.value === '1939') {
      puntuacion++;
      respuestasCorrectas.push('Pregunta 4');
    } else {
      respuestasIncorrectas.push('Pregunta 4');
    }
  }

  const respuestaPregunta5 = document.querySelector('input[name="pregunta5"]:checked');
  if (respuestaPregunta5) {
    if (respuestaPregunta5.value === '1939') {
      puntuacion++;
      respuestasCorrectas.push('Pregunta 5');
    } else {
      respuestasIncorrectas.push('Pregunta 5');
    }
  }

  // Calcula la puntuación total y muestra los resultados
  const totalPreguntas = 5; // Reemplaza con el número total de preguntas
  const puntuacionFinal = (puntuacion / totalPreguntas) * 10;

  document.getElementById('puntuacion').innerHTML = `Puntuación: ${puntuacionFinal.toFixed(1)}/10`;
  document.getElementById('respuestasCorrectas').innerHTML = `Respuestas correctas: ${respuestasCorrectas.join(', ')}`;
  document.getElementById('respuestasIncorrectas').innerHTML = `Respuestas incorrectas: ${respuestasIncorrectas.join(', ')}`;

  document.getElementById('resultado').style.display = 'block';
});

/*REGRESAR ARRIBA*/
window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('back-to-top');

  if (window.pageYOffset > 300) { // Muestra el botón después de desplazarse 300px hacia abajo
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Hace el scroll suave hacia arriba al hacer clic
});
