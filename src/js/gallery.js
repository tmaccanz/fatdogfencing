
export default function galleryModule (){

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
};