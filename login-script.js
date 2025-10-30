const passwordInput = document.getElementById('password');
const showPass = document.getElementById('show-pass');

// Show/hide password
showPass.addEventListener('change', function() {
  passwordInput.type = this.checked ? 'text' : 'password';
});

// Get the form element
const form = document.querySelector('form');

// Form submission validation
form.addEventListener('submit', function(e) {
  const password = passwordInput.value.trim();

  // Minimum 8 characters check
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    e.preventDefault(); // Stop form submission
  }
});

// Forgot password popup
const forgotLink = document.querySelector('.forgot');
forgotLink.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default link behavior
  alert('Forgot Password? Please contact Circuit Press.');
});
