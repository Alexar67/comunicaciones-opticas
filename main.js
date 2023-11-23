// JavaScript para manejar el despliegue de los submenús al hacer clic
document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('show');
    });
  });
});
