document.getElementById('libro1').addEventListener('click', function() {
  var url = 'libros/Conceptos basicos de fibra optica.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro2').addEventListener('click', function() {
  var url = 'libros/Fiber Optic Communication.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro3').addEventListener('click', function() {
  var url = 'libros/Fibra óptica.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro4').addEventListener('click', function() {
  var url = 'libros/Ingeniería de Tráfico HWCR.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro5').addEventListener('click', function() {
  var url = 'libros/Plan-de-Telecomunicaciones-y-TI..pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro6').addEventListener('click', function() {
  var url = 'libros/Sistemas de comunicaciones opticas.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro7').addEventListener('click', function() {
  var url = 'libros/Libros unidos.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('libro8').addEventListener('click', function() {
  var url = 'libros/Transmisión de Datos y Redes de Comunicación.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
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
