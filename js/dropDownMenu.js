let dropMenuWrapper = document.getElementsByClassName('gnb_dropMenu_wrap'),
    gnbMenuItem = document.getElementsByClassName('gnb_menu_item');

for(var i = 0; i < dropMenuWrapper.length; i++) {
   gnbMenuItem[i].addEventListener('mouseover', function(){
      this.classList.add('on');
   });
   dropMenuWrapper[i].addEventListener('mouseover', function(){
      var prevElement = this.previousElementSibling;
      prevElement.classList.add('on');
   });
   gnbMenuItem[i].addEventListener('mouseout', function(){
      this.classList.remove('on');
   });
   dropMenuWrapper[i].addEventListener('mouseout', function(){
      var prevElement = this.previousElementSibling;
      prevElement.classList.remove('on');
   });
}