import './style.css';

console.log('image carousel');

const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const slides = document.querySelector('.slides');
// slide position (right) is index * slideWidth
const slideWidth = 480;
const totalSlides = 5;

navRight.addEventListener('click', () => {
    slideRight();
});

navLeft.addEventListener('click', () => {
    slideLeft();
});

function slideRight() {
    const index = parseInt(slides.getAttribute('index'));
    if (index < totalSlides - 1) {
        slides.setAttribute('index', index + 1);
        const newPosition = slideWidth * (index + 1);
        slides.style.right = `${newPosition}px`;
    } else {
        // Executes when end of slides
        // Set position to first to make loop
        slides.setAttribute('index', 0);
        slides.style.right = 0;
    }
}

function slideLeft() {
    const index = parseInt(slides.getAttribute('index'));
    if (index != 0) {
        slides.setAttribute('index', index - 1);
        const newPosition = slideWidth * (index - 1);
        slides.style.right = `${newPosition}px`;
    } else {
        const lastIndex = totalSlides - 1;
        slides.setAttribute('index', lastIndex);
        const newPosition = slideWidth * lastIndex;
        slides.style.right = `${newPosition}px`;
    }
}