var feedbackButton = document.querySelector(".feedback-button");
var feedbackForm = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".form-close");

feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackForm.classList.add("modal-show");
})

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-show");
})