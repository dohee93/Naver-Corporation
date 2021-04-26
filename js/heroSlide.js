
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

// 슬라이드 앞 뒤에 이어지는 슬라이드 복사
makeClone();

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

function updateWidth(){
   var currentSlides = document.querySelectorAll('.slide-item');
   var newSlideCount = currentSlides.length;
   console.log(currentSlides, newSlideCount);
   var newWidth = newSlideCount * (screenW + screenPadding ) + 'px';
   slideContainer.style.width = newWidth;
}

function setInitialPos(){
   var initialTranslateValue = -(screenW + screenPadding);
   console.log(initialTranslateValue);
   slideContainer.style.transform = 'translateX(' + initialTranslateValue+ 'px)';
}

nextBtn.addEventListener('click', function(){
   moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click', function(){
   moveSlide(currentIdx - 1);
});

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