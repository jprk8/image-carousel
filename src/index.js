import './style.css';

const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const slides = document.querySelector('.slides');
// slide position (right) is index * slideWidth
const slideWidth = 480;
const totalSlides = 5;

// make the nav-dots by js
function makeDots() {
  const navDots = document.querySelector('.nav-dots');
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('index', i);
    dot.addEventListener('click', () => {
      setPosition(i);
    });
    navDots.appendChild(dot);
  }
}

function highlightDot() {
  const currentIndex = parseInt(slides.getAttribute('index'));
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => {
    if (parseInt(dot.getAttribute('index')) === currentIndex) {
      dot.style.backgroundColor = 'white';
    } else {
      dot.style.backgroundColor = '';
    }
  });
}

navRight.addEventListener('click', () => {
  slideRight();
  highlightDot();
});

navLeft.addEventListener('click', () => {
  slideLeft();
  highlightDot();
});

function setPosition(index) {
  slides.setAttribute('index', index);
  const newPosition = slideWidth * index;
  slides.style.right = `${newPosition}px`;
  highlightDot();
}

function slideRight() {
  const currentIndex = parseInt(slides.getAttribute('index'));
  if (currentIndex < totalSlides - 1) {
    slides.setAttribute('index', currentIndex + 1);
    const newPosition = slideWidth * (currentIndex + 1);
    slides.style.right = `${newPosition}px`;
  } else {
    slides.setAttribute('index', 0);
    slides.style.right = 0;
  }
}

function slideLeft() {
  const currentIndex = parseInt(slides.getAttribute('index'));
  if (currentIndex != 0) {
    slides.setAttribute('index', currentIndex - 1);
    const newPosition = slideWidth * (currentIndex - 1);
    slides.style.right = `${newPosition}px`;
  } else {
    const lastIndex = totalSlides - 1;
    slides.setAttribute('index', lastIndex);
    const newPosition = slideWidth * lastIndex;
    slides.style.right = `${newPosition}px`;
  }
}

makeDots();
highlightDot();
