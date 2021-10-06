const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides a");
let currentIndex = 0;//현재 몇 번째 슬라이드인지?
let slideCount = slide.length
let slideWidth = 200;
let slideMargin = 30;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

makeClone();

function makeClone(){
    for(let i = 0; i < slideCount; i++){
        let cloneSlide = slide[i].cloneNode(true);//slide[i]의 모든 요소를 복제
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);//slides 뒤에 cloneSlide 추가
    }
    for(let i = slideCount-1; i >= 0; i--){
        let cloneSlide = slide[i].cloneNode(true);//slide[i]의 모든 요소를 복제
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
        slides.prepend(cloneSlide);//slides 앞에 cloneSlide 추가
    }
    updateWidth();
    setInitialPosition();
    setTimeout(function(){
        slides.classList.add('animated');
    }, 100);
}

function updateWidth(){
    const currentSlides = document.querySelectorAll(".slides a");
    const newSlideCount = currentSlides.length;
    
    const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPosition(){
    const initialTransferValue =  - (slideWidth + slideMargin) * slideCount;
    //.slides{
    //    transform: translateX(-1000px);
    //}
    slides.style.transform = `translateX(${initialTransferValue}px)`;
}

nextButton.addEventListener("click", moveRight);

function moveRight(){
    moveSlide(currentIndex + 1);
    console.log("right");
}

prevButton.addEventListener("click", moveLeft);

function moveLeft(){
    moveSlide(currentIndex - 1);
    console.log("left");
}

function moveSlide(number){
    slides.style.left = - number * (slideWidth + slideMargin) + 'px';
    currentIndex = number;
    if(currentIndex == slideCount || currentIndex == -slideCount){
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIndex = 0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
    }
}