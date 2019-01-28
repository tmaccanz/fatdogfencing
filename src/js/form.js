import $ from "jquery";

function submitForm(e) {
	e.preventDefault();
	const $form = $(this);

	$.post($form.attr("action"), $form.serialize()).then(function() {
		$("feedback-input").val("");
		alert("Message Successfully Sent!");
	});
}

document.querySelector(".contact-form").addEventListener("submit", submitForm);