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

document.getElementById('sim1').addEventListener('click', function() {
  var url = 'simulaciones/Practica N1 - Acopladores_Aisladores_Empalmes.osd';
  window.open(url, '_blank');
});

document.getElementById('sim1pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 1 2.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim2').addEventListener('click', function() {
  var url = 'simulaciones/Practica N2 - Amplificacion óptica.osd';
  window.open(url, '_blank');
});

document.getElementById('sim2pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 1 2.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim3').addEventListener('click', function() {
  var url = 'simulaciones/Practica N3 - Multiplexacion DWDM.osd';
  window.open(url, '_blank');
});

document.getElementById('sim3pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 3 4.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim4').addEventListener('click', function() {
  var url = 'simulaciones/Practica N4 - Redes de Fibra Optica.osd';
  window.open(url, '_blank');
});

document.getElementById('sim4pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 3 4.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim5').addEventListener('click', function() {
  var url = 'simulaciones/Practica N5 - Redes PON y GPON.osd';
  window.open(url, '_blank');
});

document.getElementById('sim5pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 5 6.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim6').addEventListener('click', function() {
  var url = 'simulaciones/Practica N6 - FTTH.osd';
  window.open(url, '_blank');
});

document.getElementById('sim6pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 5 6.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim7').addEventListener('click', function() {
  var url = 'simulaciones/Practica N7 - Diodo emisor de luz.osd';
  window.open(url, '_blank');
});

document.getElementById('sim7pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 7 8.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim8').addEventListener('click', function() {
  var url = 'simulaciones/Practica N8 - Laser.osd';
  window.open(url, '_blank');
});

document.getElementById('sim8pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 7 8.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim9').addEventListener('click', function() {
  var url = 'simulaciones/Practica N9 - Detectores Opticos.osd';
  window.open(url, '_blank');
});

document.getElementById('sim9pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 9 10.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim10').addEventListener('click', function() {
  var url = 'simulaciones/Practica N10 - Ruido Fotodetectores Fotodiodos.osd';
  window.open(url, '_blank');
});

document.getElementById('sim10pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 9 10.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim11').addEventListener('click', function() {
  var url = 'simulaciones/Practica N11 - Redes Opticas PDH SHD SONET.osd';
  window.open(url, '_blank');
});

document.getElementById('sim11pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 1.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim12').addEventListener('click', function() {
  var url = 'simulaciones/Practica N12 - Red SDH SONET.osd';
  window.open(url, '_blank');
});

document.getElementById('sim12pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 1.pdf';
  window.open(url, '_blank');
});

document.getElementById('sim13').addEventListener('click', function() {
  var url = 'simulaciones/Practica N13 - Redes Opticas WDMs.osd';
  window.open(url, '_blank');
});

document.getElementById('sim13pdf').addEventListener('click', function() {
  var url = 'informes/Informe practica 1.pdf';
  window.open(url, '_blank');
});