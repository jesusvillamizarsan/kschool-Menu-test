(function($) { // Wrapper de jQuery para WordPress
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        // Variables para menú desktop
        const formacionLink = document.getElementById('formacionLink');
        const somosksLink = document.getElementById('somosksLink');
        const kstalentLink = document.getElementById('kstalentLink');
        
        const submenuFormacion = document.getElementById('submenu-formacion');
        const submenuSomosks = document.getElementById('submenu-somosks');
        const submenuKstalent = document.getElementById('submenu-kstalent');
        
        // Variables para menú móvil
        const toggleBtn = document.querySelector('.main-menu__toggle');
        const menuOverlay = document.querySelector('.main-menu__overlay');
        const submenuButtons = document.querySelectorAll('.main-menu__mobile-item--has-submenu > .main-menu__mobile-link');

        // Función para ocultar todos los submenús desktop
        function hideAllSubmenus() {
            [submenuFormacion, submenuSomosks, submenuKstalent].forEach(submenu => {
                if (submenu) submenu.style.display = 'none';
            });
            [formacionLink, somosksLink, kstalentLink].forEach(link => {
                if (link) link.classList.remove('is-active');
            });
        }

        // Manejador de clicks para menú desktop
        function handleMenuClick(link, submenu, event) {
            if (!link || !submenu) return;
            event.preventDefault();
            const isHidden = submenu.style.display === 'none' || submenu.style.display === '';
            hideAllSubmenus();
            if (isHidden) {
                submenu.style.display = 'flex';
                link.classList.add('is-active');
            }
        }

        // Event listeners para menú desktop
        if (formacionLink) {
            formacionLink.addEventListener('click', (e) => 
                handleMenuClick(formacionLink, submenuFormacion, e));
        }
        if (somosksLink) {
            somosksLink.addEventListener('click', (e) => 
                handleMenuClick(somosksLink, submenuSomosks, e));
        }
        if (kstalentLink) {
            kstalentLink.addEventListener('click', (e) => 
                handleMenuClick(kstalentLink, submenuKstalent, e));
        }

        // Cerrar al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.main-menu')) {
                hideAllSubmenus();
            }
        });

        // Toggle menú móvil
        if (toggleBtn && menuOverlay) {
            toggleBtn.addEventListener('click', function() {
                toggleBtn.classList.toggle('is-active');
                menuOverlay.classList.toggle('main-menu__overlay--open');
            });
        }

        // Acordeón menú móvil
        submenuButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const parentItem = btn.parentElement;
                const isOpen = parentItem.classList.contains('is-open');

                document.querySelectorAll('.main-menu__mobile-item--has-submenu')
                    .forEach(item => item.classList.remove('is-open'));

                if (!isOpen) {
                    parentItem.classList.add('is-open');
                }
            });
        });
    });

    // Manejador de resize
    window.addEventListener('resize', function() {
        // Ocultar submenús desktop
        document.querySelectorAll('.main-menu__submenu-block').forEach(function(submenu) {
            submenu.style.display = 'none';
            submenu.classList.remove('is-active');
        });

        // Quitar clases activas
        document.querySelectorAll('.main-menu__link.is-active').forEach(function(link) {
            link.classList.remove('is-active');
        });

        // Cerrar menú móvil
        const menuOverlay = document.querySelector('.main-menu__overlay');
        const toggleBtn = document.querySelector('.main-menu__toggle');
        
        if (menuOverlay) {
            menuOverlay.classList.remove('main-menu__overlay--open');
        }
        if (toggleBtn) {
            toggleBtn.classList.remove('is-active');
        }
    });

})(jQuery); // Cierre del wrapper de jQuery