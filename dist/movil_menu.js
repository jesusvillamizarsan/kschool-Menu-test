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