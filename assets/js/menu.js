document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el botón y el menú
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    // Función para mostrar u ocultar el menú
    function toggleMenu() {
        // Cambiamos la visibilidad del menú
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block'; // Mostrar el menú
        } else {
            menu.style.display = 'none'; // Ocultar el menú
        }
    }

    // Asignamos el evento al botón
    menuToggle.addEventListener('click', toggleMenu);
});