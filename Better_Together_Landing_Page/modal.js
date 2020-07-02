// modal for sign up
<<<<<<< Updated upstream
var modalSignBtn = document.querySelector('.modal-sign-btn');
var modalSignBg = document.querySelector('.modal-sign-bg');
var modalSignClose = document.querySelector('.modal-sign-close');

modalSignBtn.addEventListener('click',function(){
=======
// var modalSignBtn = document.querySelector('.modal-sign-btn');
var modalSignBtn1 = document.querySelector('#signBtn1');
var modalSignBtn2 = document.querySelector('#ctaBigBtn');
var modalSignBtn3 = document.querySelector('#signBtn3');


var modalSignBg = document.querySelector('.modal-sign-bg');
var modalSignClose = document.querySelector('.modal-sign-close');

modalSignBtn1.addEventListener('click',function(){
>>>>>>> Stashed changes
	modalSignBg.classList.add('bg-active');
});
modalSignClose.addEventListener('click',function(){
	modalSignBg.classList.remove('bg-active');
});

<<<<<<< Updated upstream
=======
modalSignBtn2.addEventListener('click',function(){
	modalSignBg.classList.add('bg-active');
	console.log(btn2)	
});
modalSignBtn3.addEventListener('click',function(){
	modalSignBg.classList.add('bg-active');
	console.log(btn2)	
});
// modalSignClose.addEventListener('click',function(){
// 	modalSignBg.classList.remove('bg-active');
// });
>>>>>>> Stashed changes
//modal for log in
var modalLogBtn = document.querySelector('.modal-log-btn');
var modalLogBg = document.querySelector('.modal-log-bg');
var modalLogClose = document.querySelector('.modal-log-close');

modalLogBtn.addEventListener('click',function(){
	modalLogBg.classList.add('bg-active');
});
modalLogClose.addEventListener('click',function(){
	modalLogBg.classList.remove('bg-active');
});

