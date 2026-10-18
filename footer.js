const shareButton = document.getElementById("shareButton");
const shareMenu = document.querySelector(".share-menu");
shareButton.addEventListener("click", function () {
    shareMenu.classList.toggle("active");
});