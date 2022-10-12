const slides = Array.from(document.querySelector('.product__preview-slides').children);
let activeSlideIndex = 0;

slides.forEach((img, index) => {
  img.addEventListener('mouseenter', () => {
    if (activeSlideIndex == index) return;
    const mainPictures = Array.from(document.querySelector('.product__main-image').children);

    mainPictures[activeSlideIndex].classList.remove('display-inline');
    mainPictures[index].classList.add('display-inline');
    activeSlideIndex = index;
  });
});
