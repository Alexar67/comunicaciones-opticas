document.getElementById('descargarpdf').addEventListener('click', function() {
  var url = 'docs/cap1.pdf'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});

document.getElementById('descargarword').addEventListener('click', function() {
  var url = 'docs/cap1.docx'; // Reemplaza con la URL de tu archivo PDF o Word
  
  // Abrir el enlace en una nueva pestaña
  window.open(url, '_blank');
});
