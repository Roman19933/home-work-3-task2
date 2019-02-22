$('.slide-show').slick({
	dots:true,
	nextArrow:true,
	prevArrow:true,
	autoplay: true,
  	autoplaySpeed: 5000

	
});
var bar = document.getElementById('menu-bars');
var close = document.getElementById('close-bars');
var menu = document.getElementById('menu-items');
bar.onclick=function(){

	bar.style.display='none';
	close.style.display='block';
	menu.style.display='block';
}
close.onclick=function(){
	bar.style.display='block';
	close.style.display='none';
	menu.style.display='none';
}

// var btn = document.querySelector('#button-prev-next');
// var slide = document.querySelector('#slide-show');
// btn.onclick=function(){
// 	slide.style.display='none';
// };






