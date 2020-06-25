// modal for sign up
var modalSignBtn = document.querySelector('.modal-sign-btn');
var modalSignBg = document.querySelector('.modal-sign-bg');
var modalSignClose = document.querySelector('.modal-sign-close');

modalSignBtn.addEventListener('click',function(){
	modalSignBg.classList.add('bg-active');
});
modalSignClose.addEventListener('click',function(){
	modalSignBg.classList.remove('bg-active');
});

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

