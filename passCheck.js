const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirm-password');
const mismatch = document.querySelector('#invalid-pw');

function checkPassword() {
  if (confirmpassword.value === '') {
    mismatch.textContent = "";
  }
  else if (password.value !== confirmpassword.value) {
    mismatch.textContent = "Passwords must match.";
    mismatch.classList.add('invalid-text');
    mismatch.classList.remove('valid-text');
    password.classList.add('invalidinput');
  }
  else if (password.value === confirmpassword.value) {
    mismatch.textContent = "Passwords match!";
    mismatch.classList.add('valid-text');
    mismatch.classList.remove('invalid-text');
    password.classList.remove('invalidinput');
  }
  else {
    return;
  }
}

password.addEventListener('input', function() {
  checkPassword();
})

confirmpassword.addEventListener('input', function() {
  checkPassword();
})