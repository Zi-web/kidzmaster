window.onload = function() {
 
var link = document.querySelector(".info-panel__login");
var popup = document.querySelector(".modal-content__login");
var close = popup.querySelector(".modal-content__close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-content");


link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content__login-show");
	overlay.classList.add("modal-content__overlay-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content__login-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-content__overlay-show");
});

form.addEventListener("submit", function() {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	} else {
			localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content__login-show")) {
		popup.classList.remove("modal-content__login-show");
		popup.classList.remove("modal-error");
		overlay.classList.remove("modal-content__overlay-show");
		}
	}
})


var link2 = document.querySelector(".info-panel__registration");
var popup2 = document.querySelector(".modal-content__registration");
var close2 = popup2.querySelector(".modal-content__registration-close");
var form2 = popup2.querySelector(".form2");
var login2 = popup2.querySelector("[name=login]");
var password2 = popup2.querySelector("[name=password]");
var repassword2 = popup2.querySelector("[name=repassword]");
var storage2 = localStorage.getItem("login");
var overlay2 = document.querySelector(".modal-content-reg");

link2.addEventListener("click", function(event) {
	event.preventDefault();
	popup2.classList.add("modal-content__registration-show");
	overlay2.classList.add("modal-content__overlay-show");

	if (storage2) {
		login2.value = storage2;
		password2.focus();
	} else {
		login2.focus();
	}
});

close2.addEventListener("click", function(event) {
	event.preventDefault();
	popup2.classList.remove("modal-content__registration-show");
	popup2.classList.remove("modal-error");
	overlay2.classList.remove("modal-content__overlay-show");
});

form2.addEventListener("submit", function() {
	if (!login2.value || !password2.value || !repassword2.value) {
		event.preventDefault();
		popup2.classList.add("modal-error");
	} 
	else {
			localStorage.setItem("login", login2.value);
	}
});


window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup2.classList.contains("modal-content__registration-show")) {
		popup2.classList.remove("modal-content__registration-show");
		popup2.classList.remove("modal-error");
		overlay2.classList.remove("modal-content__overlay-show");
		}
	}
})
}