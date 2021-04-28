
let slideWrapper = document.querySelector('.main-slide'),
   slideContainer = document.querySelector('.slide'),
   slides = document.querySelectorAll('.slide-item'),
   currentIdx = 0,
   slideCount = slides.length,
   topHeight = 0,
   slidePaddingTop = 80,
   screenW = document.documentElement.offsetWidth,
   screenPadding = 3.5,
   prevBtn = document.querySelector('.hero_btn_prev'),
   nextBtn = document.querySelector('.hero_btn_next');

// 슬라이드 높이 지정
function calculateTallestSlide() {
   for(var i = 0; i < slideCount; i++) {
      // console.log(slides[i].offsetHeight);
      if(slides[i].offsetHeight > topHeight) {
         topHeight = slides[i].offsetHeight;
      }
   }
   slideWrapper.style.height = topHeight + slidePaddingTop + 'px';
   slideContainer.style.height = topHeight + 'px';
}
calculateTallestSlide();

//슬라이드 가로 배열
for(var i = 0; i < slideCount; i++) {
   slides[i].style.width = screenW + 'px';
}
slideContainer.style.width = screenW * slideCount + 'px';

makeClone();
// 슬라이드 앞 뒤에 이어지는 슬라이드 복사 함수
function makeClone() {
   var cloneSlideFirst = slides[0].cloneNode(true);
   cloneSlideFirst.classList.add('clone');
   slideContainer.appendChild(cloneSlideFirst);

   var cloneSlideLast = slides[slideCount-1].cloneNode(true);
   cloneSlideLast.classList.add('clone');
   slideContainer.prepend(cloneSlideLast);

   updateWidth();
   setInitialPos();
   setTimeout(function(){
      slideContainer.classList.add('animated');
   }, 100);
}
// 전체 슬라이드(클론 슬라이드 포함)를 감싸는 너비 재설정
function updateWidth(){
   var currentSlides = document.querySelectorAll('.slide-item');
   var newSlideCount = currentSlides.length;
   console.log(currentSlides, newSlideCount);
   var newWidth = newSlideCount * (screenW + screenPadding ) + 'px';
   slideContainer.style.width = newWidth;
}
// 처음 위치 설정
function setInitialPos(){
   var initialTranslateValue = -(screenW + screenPadding);
   console.log(initialTranslateValue);
   slideContainer.style.transform = 'translateX(' + initialTranslateValue+ 'px)';
}
// 버튼 클릭시 슬라이드 이동 함수 실행
nextBtn.addEventListener('click', function(){
   moveSlide(currentIdx + 1);
   changeSlideBar(currentIdx);
});
prevBtn.addEventListener('click', function(){
   moveSlide(currentIdx - 1);
   changeSlideBar(currentIdx);
});

// 슬라이드 이동 함수
function moveSlide(num){
   slideContainer.style.left = -num * (screenW + screenPadding) + 'px';
   currentIdx = num;
   if(currentIdx == slideCount){
      setTimeout(function(){
         slideContainer.classList.remove('animated');
         slideContainer.style.left = '0px';
         currentIdx = 0;
      }, 500);
      setTimeout(function(){
         slideContainer.classList.add('animated');
      }, 600); 
   }
   if(currentIdx == -1){
      setTimeout(function(){
         slideContainer.classList.remove('animated');
         slideContainer.style.left = -(slideCount - 1) * (screenW + screenPadding) + 'px';
         currentIdx = slideCount - 1;
      }, 500);
      setTimeout(function(){
         slideContainer.classList.add('animated');
      }, 600); 
   }
}
var progressBar = document.querySelector('.fill'),
   currentNumber = document.querySelector('.current');
var slideInfoBox = document.querySelectorAll('.slide-info-box');
var unitBar = 100 / slideCount;
   
// 슬라이드 진행 바 변경 함수
function changeSlideBar(index){
   for(var i = 0; i < slideCount; i++) slideInfoBox[i].style.display = 'none';
   if(index == -1){
      progressBar.style.width = unitBar * slideCount +'%';
      currentNumber.innerHTML = slideCount;
      slideInfoBox[slideCount - 1].style.display = 'block';
   } else if(index == slideCount) {
      progressBar.style.width = unitBar +'%';
      currentNumber.innerHTML = '1';
      slideInfoBox[0].style.display = 'block';
      // console.log(slideInfoBox[1]);
   } else {
      for(var i = 0; i < slideCount; i++) {
         if(i == index) {
            progressBar.style.width = unitBar * (i + 1) +'%';
            currentNumber.innerHTML = i + 1;
            slideInfoBox[i].style.display = 'block';
            // console.log(slideInfoBox[i]);
         } 
      }
   }
}
// 자동 슬라이드 함수
setInterval(() => {
   autoSlide();
}, 5000);

function autoSlide(){
   moveSlide(currentIdx + 1);
   changeSlideBar(currentIdx);
}