// Carrusel
const carousel = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showItem(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

// Funcionalidad de los botones de WhatsApp
const whatsappBtns = document.querySelectorAll('.whatsapp-btn');

whatsappBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const phone = btn.getAttribute('data-phone');
        const message = encodeURIComponent('Hola, me gustaría obtener más información.');
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
});