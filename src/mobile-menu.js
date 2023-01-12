(() => {
    const mobileMenu = document.querySelector('.main-nav__wrapper');
    const openMenuBtn = document.querySelector('.menu-button');
    const closeMenuBtn = document.querySelector('.menu-button');
    const closeMenuLink = document.querySelectorAll('.site-nav__link');
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('main-nav__wrapper--is-open');
      openMenuBtn.classList.toggle('menu-button--is-open');
  
      if (matchMedia) {
        var screen = window.matchMedia('(max-width: 1199px)');
        screen.addListener(changes);
        changes(screen);
      }
      function changes(screen) {
        if (screen.matches) {
          const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
          bodyScrollLock[scrollLockMethod](document.body);
        }
      }
    };
  
    closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('main-nav__wrapper--is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();