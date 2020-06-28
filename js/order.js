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