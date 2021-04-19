let slideContainer = document.getElementsByClassName('slide'),
   slideInfobox = document.getElementsByClassName('slide-info-box'),
   currentIdx = document.getElementsByClassName('current')[0],
   slideCount = slideInfobox.length,
   slideImages = document.querySelectorAll('.slide-item'),
   fill = document.querySelector('.fill');
let index = 0; 

setInterval(changeText, 3000);
setInterval(changeSlideBar, 3000);


function changeText(){
   index++;
   if(index == slideCount) index = 0;
   slideInfobox[index].style.display = 'block';
   slideImages[index].style.display = 'block';
   if(index == 0) {
      slideInfobox[slideCount-1].style.display = 'none';
      slideImages[slideCount-1].style.display = 'none';
   } else {
      slideInfobox[index-1].style.display = 'none';
      slideImages[index-1].style.display = 'none';
   }
   currentIdx.innerHTML = index + 1;
}

function changeSlideBar(){
   if(index == 0) {
      fill.style.width = '16.7%';
   } else if (index == 1) {
      fill.style.width = '33.4%';
   } else if (index == 2) {
      fill.style.width = '50.1%';
   } else if (index == 3) {
      fill.style.width = '66.8%';
   } else if (index == 4) {
      fill.style.width = '83.5%';
   } else if (index == 5){
      fill.style.width = '100.2%';
   } else {
      fill.style.width = '0%';
   }
}
