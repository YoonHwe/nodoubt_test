const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".content_popular_top_contents");
let currentIndex = 0;//현재 몇 번째 슬라이드인지?
let slideCount = slide.length;
let entireIndex = parseInt(slideCount / 3);
let slideWidth = 230;//.content_popular_top_contents의 width + padding 양 옆 + border 1px 양 옆 (+ 4.22 a의 픽셀)
let slideMargin = 30;//.slides a의 margin-right
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const presButton = document.querySelector(".present");

makeClone();

if(currentIndex == 0){
    prevButton.style.visibility = "hidden";
}
presButton.innerText = `${currentIndex + 1} / ${entireIndex}`;

function makeClone(){
    // for(let i = 0; i < slideCount; i++){
    //     let cloneSlide = slide[i].cloneNode(true);//slide[i]의 모든 요소를 복제
    //     cloneSlide.classList.add('clone');
    //     slides.appendChild(cloneSlide);//slides 뒤에 cloneSlide 추가
    // }
    // for(let i = slideCount-1; i >= 0; i--){
    //     let cloneSlide = slide[i].cloneNode(true);//slide[i]의 모든 요소를 복제
    //     cloneSlide.classList.add('clone');
    //     slides.appendChild(cloneSlide);
    //     slides.prepend(cloneSlide);//slides 앞에 cloneSlide 추가
    // }
    updateWidth();
    setInitialPosition();
    setTimeout(function(){
        slides.classList.add('animated');
    }, 100);

}

function updateWidth(){
    const currentSlides = document.querySelectorAll(".content_popular_top_contents");
    const newSlideCount = currentSlides.length;
    const newWidth = (slideWidth + slideMargin + 3) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPosition(){
    const initialTransferValue =  - (slideWidth + slideMargin) * slideCount;
    //.slides{
    //    transform: translateX(-1000px);
    //}
    // slides.style.transform = `translateX(${initialTransferValue}px)`;
}

nextButton.addEventListener("click", moveRight);

function moveRight(){
    moveSlide(currentIndex + 1);
    presButton.innerText = `${currentIndex + 1} / ${entireIndex}`;
    if(currentIndex == entireIndex - 1){
        nextButton.style.visibility = "hidden";
    }
    else{
        nextButton.style.visibility = "visible";
    }
    if(currentIndex == 0){
        prevButton.style.visibility = "hidden";
    }
    else{
        prevButton.style.visibility = "visible";
    }
}

prevButton.addEventListener("click", moveLeft);

function moveLeft(){
    moveSlide(currentIndex - 1);
    presButton.innerText = `${currentIndex + 1} / ${entireIndex}`;
    if(currentIndex == entireIndex - 1){
        nextButton.style.visibility = "hidden";
    }
    else{
        nextButton.style.visibility = "visible";
    }
    if(currentIndex == 0){
        prevButton.style.visibility = "hidden";
    }
    else{
        prevButton.style.visibility = "visible";
    }
}

function moveSlide(number){
    slides.style.left = 3 * (- number * (slideWidth + slideMargin)) + 'px';
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