

export default function navigationPhoneModule() {

	function addPhoneOpen() {
		const phoneText = document.querySelector(".phone-container__text");

		phoneText.classList.toggle("phone-container__text--open");
	}

	document.querySelector(".phone-container__icon").addEventListener("mouseenter", addPhoneOpen);
	document.querySelector(".phone-container__icon").addEventListener("mouseleave", addPhoneOpen);
	
};