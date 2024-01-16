/*REGRESAR ARRIBA*/
window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('back-to-top');

  if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('proteus').addEventListener('click', function() {
  var url = 'manuales/proteus.pdf';
  window.open(url, '_blank');
});

document.getElementById('python').addEventListener('click', function() {
  var url = 'manuales/python.pdf';
  window.open(url, '_blank');
});

document.getElementById('labview').addEventListener('click', function() {
  var url = 'manuales/labview.pdf';
  window.open(url, '_blank');
});

document.getElementById('optisystem').addEventListener('click', function() {
  var url = 'manuales/optisystem.pdf';
  window.open(url, '_blank');
});

document.getElementById('matlab').addEventListener('click', function() {
  var url = 'manuales/matlab.pdf';
  window.open(url, '_blank');
});