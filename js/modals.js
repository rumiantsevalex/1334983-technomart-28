/*Модалка заказа в каталоге*/

var buyButtons = document.querySelectorAll(".buy-item");
var modalOrder = document.querySelector(".modal-order");
var orderCloseButtons = document.querySelectorAll(".order-close");

for (index = 0; index < buyButtons.length; index++) {
    buyButton = buyButtons[index];
    buyButton.addEventListener("click", function (event) {
        event.preventDefault();
        modalOrder.classList.add("modal-show");
    });
} 

for (index = 0; index < orderCloseButtons.length; index++) {
    closeButton = orderCloseButtons[index];
    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        modalOrder.classList.remove("modal-show");
    });
} 

/*Модалка формы обратной связи*/ 

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


/*Модалка открытия карты*/ 

var littleMap = document.querySelector(".little-map-img");
var bigMap = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");

littleMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.add("modal-show");
})

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.remove("modal-show");
})


