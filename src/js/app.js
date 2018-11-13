import $ from "jquery";
import Swiper from "swiper";
import {TweenMax, TimelineLite} from "gsap";
const mapsapi = require("google-maps-api")("AIzaSyBMrBP0irD3XSwAUHbK5t8Mckz6KD7FWlg");

/* Sticky Menu
   ============================================================================= */

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

/* mobile-menu
   ============================================================================= */

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

/* Smooth-scroll
 ============================================================================= */

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

/* Navigation Phone Animation
  ============================================================================= */

function addPhoneOpen() {
	const phoneText = document.querySelector(".phone-container__text");

	phoneText.classList.toggle("phone-container__text--open");
}

document.querySelector(".phone-container__icon").addEventListener("mouseenter", addPhoneOpen);
document.querySelector(".phone-container__icon").addEventListener("mouseleave", addPhoneOpen);

/* Services
  ============================================================================= */

const mySwiper = new Swiper(".swiper-container", {

  direction: "horizontal",
  loop: true,
  simulateTouch:false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Gallery
  ============================================================================= */

function gallery() {
	const modal = document.querySelector(".gallery-modal");
	const modalOverlay = document.querySelector(".gallery__modal-overlay");
	const closeButton = document.querySelector(".modal-overlay__close");

	function openModalEvent(e) {
		const modalImage = document.querySelector(".gallery-modal__img");

		modal.classList.toggle("gallery-modal--closed");
		modalOverlay.classList.toggle("gallery-modal--closed");
		modalImage.src = e.target.src.replace("100%x100%", "100%x100%");
	}

	function loopImages() {
		const images = document.querySelectorAll(".card__img");

		for (let i = 0; i < images.length; i++) {
			images[i].addEventListener("click", openModalEvent);
		}
	}

	loopImages();

	function closeButtonEvent() {
		closeButtonEvent.stopPropagation();

		modal.classList.toggle("gallery-modal--closed");
		modalOverlay.classList.toggle("gallery-modal--closed");
	}

	closeButton.addEventListener("click", closeButtonEvent);

	function closeModalEvent() {
		modal.classList.toggle("gallery-modal--closed");
		modalOverlay.classList.toggle("gallery-modal--closed");
	}

	modalOverlay.addEventListener("click", closeModalEvent);
}

gallery();

/* Quote
============================================================================= */

function quote() {

	function dropdown() {
		const	dropdownAccent = document.querySelector(".down-accent");
		const	dropdownContainer = document.querySelector(".quote-dropdown__item-container");
		const	dropdownItemType = document.querySelector(".quote-dropdown__item-type");
		const	dropdownItem = document.querySelector(".quote-dropdown__item");

    document.querySelector(".quote-dropdown").addEventListener("mouseover", function(e) {
		  e.preventDefault();

			$(".quote-dropdown__item-container").slideDown(300);
			dropdownAccent.classList.add("dropdown-animate");
		});

		document.querySelector(".quote-dropdown").addEventListener("mouseleave", function(e) {
			e.preventDefault();

			$(".quote-dropdown__item-container").slideUp(300);
			dropdownAccent.classList.remove("dropdown-animate");
		});

		function selectItem(e) {
			e.preventDefault();
			dropdownItemType.innerHTML = dropdownItem.innerHTML;
			dropdownContainer.style.display = "none";
		}

		dropdownItem.addEventListener("click", selectItem);
	}

	dropdown();

	function slideOutput() {

		const slideInput = document.querySelector(".quote-range__input").value;
		const slideOutput = document.querySelector(".quote-range__value");
		const quoteOutput = document.querySelector(".quote__output");
    const fenceType = {
			timber: 90,
		};

		const quoteSum = slideInput * fenceType.timber;
		slideOutput.innerHTML = slideInput;
		quoteOutput.innerHTML = quoteSum;

  }

	document.querySelector(".quote-range__input").addEventListener("input", slideOutput);

	function slideAnimation() {
		const sliderImage = document.querySelector("#quote-timber-fence");
		const tlSlideAnimate = new TimelineLite();
		tlSlideAnimate.set(sliderImage, {x : "-100%"});

		document.querySelector(".quote-range__input").addEventListener("input", function() {
			const calcAnimate = document.querySelector(".quote-range__input").value - 100;
			TweenMax.to(sliderImage, 1, {x : calcAnimate + "%"});
		});
	}

	slideAnimation();

	function sliderColourStyle() {

		const val = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
		this.style.backgroundImage = [ "-webkit-gradient(linear, left top, right top, " + "color-stop(" + val + ", #6BA543), " + "color-stop(" + val + ", #000)" + ")" ].join("");
	}

	document.querySelector('input[type="range"]').addEventListener("input", sliderColourStyle);
}

quote();

/* Map api
 ============================================================================= */

mapsapi().then( function(maps) {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		center: {
			lat: -37.692499,
			lng: 176.175315
		}
	});

	setMarkers(map);
});

const fences = [

	["Fatdog Fencing", -37.679322, 176.167573, 30],
	["Fatdog Fencing", -37.707032, 176.158646, 29],
	["Fatdog Fencing", -37.715724, 176.177186, 28],
	["Fatdog Fencing", -37.743963, 176.166886, 27],
	["Fatdog Fencing", -37.744506, 176.176156, 26],
	["Fatdog Fencing", -37.680137, 176.122941, 25],
	["Fatdog Fencing", -37.682039, 176.111268, 24],
	["Fatdog Fencing", -37.736090, 176.112641, 23],
	["Fatdog Fencing", -37.737176, 176.105088, 22],
	["Fatdog Fencing", -37.730931, 176.101998, 21],
	["Fatdog Fencing", -37.754550, 176.108178, 20],
	["Fatdog Fencing", -37.833906, 176.057366, 19],
	["Fatdog Fencing", -37.831736, 176.128777, 18],
	["Fatdog Fencing", -37.792136, 176.187142, 17],
	["Fatdog Fencing", -37.632979, 176.046036, 16],
	["Fatdog Fencing", -37.640592, 176.030243, 15],
	["Fatdog Fencing", -37.643582, 176.023034, 14],
	["Fatdog Fencing", -37.645757, 176.036767, 13],
	["Fatdog Fencing", -37.653912, 176.027840, 12],
	["Fatdog Fencing", -37.680001, 176.230401, 11],
	["Fatdog Fencing", -37.673480, 176.227654, 10],
	["Fatdog Fencing", -37.680001, 176.235894, 9],
	["Fatdog Fencing", -37.697389, 176.261986, 8],
	["Fatdog Fencing", -37.707168, 176.303185, 7],
	["Fatdog Fencing", -37.718032, 176.334771, 6],
	["Fatdog Fencing", -38.109693, 176.225594, 5],
	["Fatdog Fencing", -38.138322, 176.226967, 4],
	["Fatdog Fencing", -38.141022, 176.244820, 3],
	["Fatdog Fencing", -38.131301, 176.293572, 2],
	["Fatdog Fencing", -37.773414, 176.499566, 1]
];

function setMarkers(map) {

	const image = {

		url: "/images/dog-marker.png",
		size: new google.maps.Size(60, 43),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0),
	};

	const shape = {
			coords: [1, 1, 1, 20, 18, 20, 18, 1],
			type: "poly"
	};

	for (let i = 0; i < fences.length; i++) {
		const fence = fences[i];
		const marker = new google.maps.Marker({

			position: {
				lat: fence[1],
				lng: fence[2]
			},
				map: map,
				icon: image,
				shape: shape,
				title: fence[0],
				zIndex: fence[3]
		});
	}
}

/* Form success modal
 ============================================================================= */

function submitForm(e) {
	e.preventDefault();
	const $form = this;

	$.post($form.attr("action"), $form.serialize()).then(function() {
		$("feedback-input").val("");
		alert("Message Successfully Sent!");
	});
}

document.querySelector(".contact-form").addEventListener("submit", submitForm);
