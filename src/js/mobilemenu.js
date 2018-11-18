
function mobileMenu() {
    const mobileNav = document.querySelector(".mobile-menu");
  
    mobileNav.classList.toggle("mobile-menu--open");
  }
  
  document.querySelector(".nav__menu-mobile-icon").addEventListener("click", mobileMenu);
  
  function addMobileListeners() {
    const mobileLink = document.getElementsByClassName("mobile-menu__link");
  
    for (let i = 0; i < mobileLink.length; i++) {
      mobileLink[i].addEventListener("click", mobileMenu);
    }
  }
  
  addMobileListeners();
  