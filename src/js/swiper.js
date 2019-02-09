import Swiper from "swiper";

export default function swiperModule() {

  const mySwiper = new Swiper(".swiper-container", {

      direction: "horizontal",
      loop: true,
      simulateTouch:false,
    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
};
