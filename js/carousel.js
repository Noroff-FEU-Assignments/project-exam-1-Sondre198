import { api } from "./keys.js"
let recipes = await fetch(api + "/posts?per_page=100&").then(r=>r.json())
let latestRecipes0 = recipes[0]
let latestRecipes1 = recipes[1]
let latestRecipes2 = recipes[2]

const latestRecipeImg = document.getElementById("carousel__image")
latestRecipeImg.src = recipes.content.rendered;
const latestRecipeLink = document.getElementById("carousel__link")
latestRecipeLink.href = "blog.html?recipeId=" + latestRecipes0.id

const latestRecipeImg1 = document.getElementById("carousel__image2")
latestRecipeImg1.src = latestRecipes1.content.rendered;
const latestRecipeLink1 = document.getElementById("carousel__link2")
latestRecipeLink1.href = "blog.html?recipeId=" + latestRecipes1.id

const latestRecipeImg2 = document.getElementById("carousel__image3")
latestRecipeImg2.src = latestRecipes2.content.rendered;
const latestRecipeLink2 = document.getElementById("carousel__link3")
latestRecipeLink2.href = "blog.html?recipeId=" + latestRecipes2.id


function setContainerInfo(container, recipe){
    container.getElementsByTagName("h3")[0].innerText = recipe.name
    const img = container.getElementsByTagName("img")[0]
    img.src = recipe.images[0].src
    const link = container.getElementsByTagName("a")[0]
    link.href = "blog.html?recipeId=" + recipe.id
}

setContainerInfo(document.getElementById("recipe_1"), recipes[1])
setContainerInfo(document.getElementById("recipe_2"), recipes[2])
setContainerInfo(document.getElementById("recipe_3"), recipes[4])



const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);



const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }   else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }   else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


// when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');
    
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    
    
})
