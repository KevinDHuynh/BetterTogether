// Modals that did not make it into final project because of backend time constraints
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


/*
 HTML for Modals that did not make it into final project because of backend time constraints
  <!-- modal sign up -->
  <div class="modal-sign-bg">
    <div class="modal">
      <h2>Sign Up For Better Together!</h2>
      <label for="usernameS">Username:</label>
      <input type="text" name="usernameS" id="usernameS">
      <label for="passwordS">Password:</label>
      <input type="text" name="passwordS" id="passwordS">
      <button>Sign Up!</button>
      <span class="modal-sign-close">X</span>  
    </div>
  </div>

  <!-- modal log in -->
  <div class="modal-log-bg">
    <div class="modal">
      <h2>Log In To Better Together!</h2>
      <label for="usernameL">Username:</label>
      <input type="text" name="usernameL" id="usernameL">
      <label for="passwordL">Password:</label>
      <input type="text" name="passwordL" id="passwordL">
      <button>Sign Up!</button>
      <span class="modal-log-close">X</span>  
    </div>
  </div>
*/
