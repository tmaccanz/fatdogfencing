import $ from "jquery";

export default function formModule (){



	let testForm = document.querySelector(".form-item__select");
      
	testForm.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(testForm);
	fetch(testForm.getAttribute('action'), {
		method: 'POST',
		headers: {
		'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: new URLSearchParams(formData).toString(),  
	})
		.then(res => {
			if (res) {
					alert("Thank you! Daniel will be in touch shortly.")
					$(".feedback-input").val("");
			}
		});
	});

};