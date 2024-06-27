/**
 * 
 */

 
 document.addEventListener('DOMContentLoaded', function() {
    const sliderh = document.querySelector('.sliderh');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let counter = 0;
    const slideWidth = sliderh.clientWidth;

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter === sliderh.children.length) {
            counter = 0;
        }
        sliderh.style.transform = `translateX(${-slideWidth * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = sliderh.children.length - 1;
        }
        sliderh.style.transform = `translateX(${-slideWidth * counter}px)`;
    });
});
