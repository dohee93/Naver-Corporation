let slideContainer = document.getElementsByClassName('slide')[0],
   slideInfobox = document.getElementsByClassName('slide-info-box'),
   currentIdx = document.getElementsByClassName('current')[0],
   slideCount = slideInfobox.length,
   slideImages = document.querySelectorAll('.slide-item'),
   fill = document.querySelector('.fill'),
   screenW = document.documentElement.offsetWidth,
   prevBtn = document.querySelector('.hero_btn_prev'),
   nextBtn = document.querySelector('.hero_btn_next');
let index = 0; 

// 버튼 누르면 슬라이드 이동
function clickSlide(){
   // 이전 버튼
   prevBtn.addEventListener('click', function(ev){
      index--;
      if(index < 0) { // index가 -1이 되면 5로 변환
         index = 5;
         slideContainer.style.transform = "translate3d(-" + (screenW * (slideCount-1)) + "px, 0px, 0px)";
         currentIdx.innerHTML = slideCount;
         fill.style.width = 16.7 * slideCount+'%';
         slideInfobox[index].style.display = 'block';
         slideInfobox[0].style.display = 'none';
      }
      else {
         slideContainer.style.transform = "translate3d(-" + (screenW * index) + "px, 0px, 0px)";
         currentIdx.innerHTML = index + 1;
         fill.style.width = 16.7 * (index + 1) +'%';
         slideInfobox[index].style.display = 'block';
         slideInfobox[index + 1].style.display = 'none';
      }
   });
   // 다음 버튼
   nextBtn.addEventListener('click', function(ev){
      index++;
      if(index >= slideCount) { // index가 6이 되면 0로 변환
         index = 0;
         slideContainer.style.transform = "translate3d(0px, 0px, 0px)";
         currentIdx.innerHTML = 1;
         slideInfobox[index].style.display = 'block';
         slideInfobox[slideCount - 1].style.display = 'none';
         fill.style.width = 16.7 * (index + 1) +'%';
      }
      else {
         slideContainer.style.transform = "translate3d(-" + (screenW * index) + "px, 0px, 0px)";
         currentIdx.innerHTML = index + 1;
         slideInfobox[index].style.display = 'block';
         slideInfobox[index - 1].style.display = 'none';
         fill.style.width = 16.7 * (index + 1) +'%';
      }
   });
}

// 8초 마다 자동 슬라이드 
function autoChangeSlide(){
   index++;
   if(index == slideCount) index = 0;
   slideInfobox[index].style.display = 'block';
   
   if(index == 0) {
      slideInfobox[slideCount-1].style.display = 'none';
      slideContainer.style.transform = "translate3d(0px, 0px, 0px)";
      currentIdx.innerHTML = 1;
      fill.style.width = 16.7 * (index + 1) +'%';
   } else {
      slideInfobox[index-1].style.display = 'none';
      currentIdx.innerHTML = index + 1;
      slideContainer.style.transform = "translate3d(-" + (screenW * index) + "px, 0px, 0px)";
      fill.style.width = 16.7 * (index + 1) +'%';
   }
   currentIdx.innerHTML = index + 1;
}

function init(){
   setInterval(autoChangeSlide, 5000);
   clickSlide();
}

init();
