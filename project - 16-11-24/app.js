const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentIndex = 0;

function updateSliderPosition() {
    const slideWidth = document.querySelector('.skill-card').offsetWidth + 20; // card width + margin
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    const totalSlides = sliderWrapper.children.length;
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});
