// carousel for experience section
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages =document.querySelectorAll('.con-banner img') ;

console.log(carouselImages)
//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
// var size = carouselImages[0].clientWidth;
var size = carouselImages[0].offsetWidth;
if(size == 0) // when hosted  both the offsetWidth and clienWidth return 0. this is a workaround.
{
    size = 660;
}
console.log(size);
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners for next and previous buttons

nextBtn.addEventListener('click',() => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',() => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Gets rid of animations to help jump between clones to make it seem like a never ending loop insted of how images are structue  LastClone First...Last First Clone
carouselSlide.addEventListener('transitionend',() => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';        
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';        
    }
});