const cards = document.querySelectorAll('.section-two__card');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayTitle = overlay.querySelector('.overlay-title');
const overlaySubtitle = overlay.querySelector('.overlay-subtitle');
const nameInput = document.getElementById("nameInput");
const addressInput = document.getElementById("addressInput");
const phoneInput = document.getElementById("phoneInput");


cards.forEach(card => {
    const cardImage = card.querySelector('img');
    const cardTitle = card.querySelector('.section-two__card-title');
    const cardSubTitle = card.querySelector('.section-two__card-subtitle');

    
    cardImage.addEventListener('click', () => {
        overlayImage.src = cardImage.src;
        overlayTitle.textContent = cardTitle.textContent;
        overlaySubtitle.textContent = cardSubTitle.textContent;
        overlay.classList.add('show-overlay');
    });
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.classList.remove('show-overlay');
    }
});

function sendReq() {
    event.preventDefault();
    var popup = document.getElementById("popup");
    popup.style.right = "50px";
    setTimeout(() => {
        popup.style.right = "-300px";
    }, 2000);
    nameInput.value = "";
    addressInput.value = "";
    phoneInput.value = "";
}


document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});



