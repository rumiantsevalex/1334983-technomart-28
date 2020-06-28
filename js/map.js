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