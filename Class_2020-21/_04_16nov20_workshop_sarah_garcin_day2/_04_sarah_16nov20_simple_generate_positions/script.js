
var texts = document.querySelectorAll('.text');
var count = 0;

texts.forEach(text =>{
	count ++;
	count = count / 2 ;
	var randomTop = Math.floor(Math.random() * (300*count));
	var randomLeft = Math.floor(Math.random() * 400);
	text.style.top = randomTop + "px";
	text.style.left = randomLeft + "px";
});