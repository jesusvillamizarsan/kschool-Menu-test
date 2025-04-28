document.addEventListener('DOMContentLoaded', function() {
    // Enlaces principales
    const formacionLink = document.getElementById('formacionLink');
    const somosksLink = document.getElementById('somosksLink');
    const kstalentLink = document.getElementById('kstalentLink');
      // Submenús
    const submenuFormacion = document.getElementById('submenu-formacion');
    const submenuSomosks = document.getElementById('submenu-somosks');
    const submenuKstalent = document.getElementById('submenu-kstalent');
      // Función para ocultar todos los submenús
    function hideAllSubmenus() {
        submenuFormacion.style.display = 'none';
        submenuSomosks.style.display = 'none';
        submenuKstalent.style.display = 'none';
        formacionLink.classList.remove('is-active');
        somosksLink.classList.remove('is-active');
        kstalentLink.classList.remove('is-active');
    }
      // Función para manejar clicks en los enlaces
    function handleMenuClick(link, submenu, event) {
        event.preventDefault();
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            hideAllSubmenus();
            submenu.style.display = 'flex';
            link.classList.add('is-active');
        } else {
            hideAllSubmenus();
        }
    }
      // Manejadores de eventos
    formacionLink.addEventListener('click', (e) => 
        handleMenuClick(formacionLink, submenuFormacion, e));
    
    somosksLink.addEventListener('click', (e) => 
        handleMenuClick(somosksLink, submenuSomosks, e));
    
    kstalentLink.addEventListener('click', (e) => 
        handleMenuClick(kstalentLink, submenuKstalent, e));
  
    // Cerrar al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.main-menu')) {
            hideAllSubmenus();
        }
    });
  
    // --- movil_menu.js agregado ---
  
    const toggleBtn = document.querySelector('.main-menu__toggle');
    const menuOverlay = document.querySelector('.main-menu__overlay');
  
    toggleBtn.addEventListener('click', function() {
      toggleBtn.classList.toggle('is-active');
      menuOverlay.classList.toggle('main-menu__overlay--open');
    });
  
    // Selecciona todos los botones que abren submenús
    const submenuButtons = document.querySelectorAll('.main-menu__mobile-item--has-submenu > .main-menu__mobile-link');
  
    submenuButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const parentItem = btn.parentElement;
        const isOpen = parentItem.classList.contains('is-open');
  
        // Cierra todos los submenús
        document.querySelectorAll('.main-menu__mobile-item--has-submenu').forEach(item => {
          item.classList.remove('is-open');
        });
  
        // Si el que pulsaste no estaba abierto, lo abre
        if (!isOpen) {
          parentItem.classList.add('is-open');
        }
      });
    });
  
  });
  
  // Cierra todos los submenús y quita clases activas al cambiar el tamaño de la ventana
  window.addEventListener('resize', function() {
    // Oculta todos los submenús
    document.querySelectorAll('.main-menu__submenu-block').forEach(function(submenu) {
        submenu.style.display = 'none';
        submenu.classList.remove('is-active');
    });
  
    // Quita la clase activa de los enlaces principales
    document.querySelectorAll('.main-menu__link.is-active').forEach(function(link) {
        link.classList.remove('is-active');
    });
  
    // Cierra el overlay móvil
    document.querySelector('.main-menu__overlay')?.classList.remove('main-menu__overlay--open');
  
    // Quita la animación de la hamburguesa
    document.querySelector('.main-menu__toggle')?.classList.remove('is-active');
  });