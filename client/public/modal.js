// modal for sign up
var modalSignBtn1 = document.querySelector('#signBtn1');
var modalSignBtn2 = document.querySelector('#signBtn2');
var modalSignBtn3 = document.querySelector('#signBtn3');

//modal hidden by default
var modalSignBg = document.querySelector('.modal-sign-bg');
var modalSignClose = document.querySelector('.modal-sign-close');

//onclick applies bg-active makes modal visible
modalSignBtn1.addEventListener('click',function(){
	modalSignBg.classList.add('bg-active');
});
modalSignBtn2.addEventListener('click',function(){
	modalSignBg.classList.add('bg-active');	
});
modalSignBtn3.addEventListener('click',function(){
	modalSignBg.classList.add('bg-active');	
});
// on x click unapplies bg-active
modalSignClose.addEventListener('click',function(){
	modalSignBg.classList.remove('bg-active');
});

//modal for log in
var modalLogBtn = document.querySelector('.modal-log-btn');

//modal hidden by default
var modalLogBg = document.querySelector('.modal-log-bg');
var modalLogClose = document.querySelector('.modal-log-close');

//applies bg-active on click makes modal visible
modalLogBtn.addEventListener('click',function(){
	modalLogBg.classList.add('bg-active');
});

// on x click unapplies bg-active
modalLogClose.addEventListener('click',function(){
	modalLogBg.classList.remove('bg-active');
});

