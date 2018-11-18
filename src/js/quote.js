import $ from "jquery";
import {TweenMax, TimelineLite} from "gsap";

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
    
    dropdownItemType.addEventListener("click", function(e) {
      e.preventDefault();
    });
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
