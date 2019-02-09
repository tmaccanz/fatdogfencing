/* Sticky Menu
   ============================================================================= */
export default function stickyModule() {

    function stickyNavigation() {
      const nav = document.querySelector(".nav");
      const navTop = nav.offsetTop;
    
      if (window.scrollY > navTop) {
        nav.classList.add("sticky");
      } else {
        nav.paddingTop = 0;
        nav.classList.remove("sticky");
      }
    }
    
    window.addEventListener("scroll", stickyNavigation);
};