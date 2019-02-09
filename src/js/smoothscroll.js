import $ from "jquery";

export default function smoothScrollModule() {

  function smoothScroll() {

      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $("[name=' + this.hash.slice (1) +']");
    
        if (target.length) {
          const navHeightOffset = $("nav").height();
          $("html, body").animate({
    
            scrollTop: target.offset().top - navHeightOffset
          }, 1000);
    
          target.focus();
          if (target.is(":focus")) {
            return false;
          } else {
            target.attr("tabindex", "-1");
            target.focus();
          }
          return false;
        }
        }
    }
    
    function addSmoothScrollListeners() {
        const SmoothScrollLink = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    
        for (let i = 0; i < SmoothScrollLink.length; i++) {
        SmoothScrollLink[i].addEventListener("click", smoothScroll);
        }
    }
    
    addSmoothScrollListeners();

  };