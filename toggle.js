// Homepage toggle button function
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const content = document.getElementById("architecture-styles");

    toggleButton.addEventListener("click", function () {
        content.classList.toggle("hidden");
    });
});



// Function to open the popup
function openPopup() {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popup-image');
    popup.style.display = 'block';
    popupImage.src = 'images/stonehenge-large-white.svg';
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function toggleContent() {
    var content = document.getElementById("content");
    content.classList.toggle("show");
}
