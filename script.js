const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const formImage = document.getElementById('formImage');

const loginImage = "login.jpg";
const signupImage = "signup.jpeg";

// Toggle via top buttons
loginToggle.addEventListener('click', () => {
  loginToggle.classList.add('active');
  signupToggle.classList.remove('active');
  loginForm.classList.add('active-form');
  signupForm.classList.remove('active-form');
  formImage.src = loginImage;
});

signupToggle.addEventListener('click', () => {
  signupToggle.classList.add('active');
  loginToggle.classList.remove('active');
  signupForm.classList.add('active-form');
  loginForm.classList.remove('active-form');
  formImage.src = signupImage;
});

// Toggle via links inside forms
document.getElementById('goToSignup').addEventListener('click', e => {
  e.preventDefault();
  signupToggle.click();
});

document.getElementById('goToLogin').addEventListener('click', e => {
  e.preventDefault();
  loginToggle.click();
});
