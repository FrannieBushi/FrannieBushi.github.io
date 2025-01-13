document.addEventListener("DOMContentLoaded", function() {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    // Función para mostrar u ocultar el menú
    function toggleMenu() {
        
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block'; // Mostrar el menú
        } else {
            menu.style.display = 'none'; // Ocultar el menú
        }
    }

    
    menuToggle.addEventListener('click', toggleMenu);
});
