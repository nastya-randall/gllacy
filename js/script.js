var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

var feedback = popup.querySelector(".feedback-form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userMessage = popup.querySelector("textarea");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-show-overlay");
    popup.classList.add("modal-show");
    userName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show-overlay");
});

feedback.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userMessage.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault ();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("modal-show-overlay");
        }
    }
});