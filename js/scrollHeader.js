var didScroll;
var lastScrollTop = 0;
var delta = 5;
var header = document.getElementsByTagName('header')[0];

window.onscroll = function(e) {
   didScroll = true;
};
//0.25초마다 스크롤 여부 체크, hasScrolled() 함수 호출
setInterval(function(){
   if(didScroll){
      hasScrolled();
      didScroll = false;
   }
}, 250);

function hasScrolled() {
   var nowScrollTop = window.pageYOffset;
   var pageH = window.pageYOffset;
   if(Math.abs(lastScrollTop - nowScrollTop) <= delta) {
      return;
   }
   if(nowScrollTop > lastScrollTop) {
      header.className = 'header-up';
   } else {
      header.className = 'header-down';
   } 
   lastScrollTop = nowScrollTop;
}