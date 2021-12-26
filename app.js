const signUpLink = document.querySelector('#sign-up-link');
const signInLink = document.querySelector('#sign-in-link');

const container = document.querySelector('.container');

signUpLink.addEventListener('click', () => {
    container.classList.add("sign-up-mode"); 
});

signInLink.addEventListener('click', () => {
    container.classList.remove("sign-up-mode"); 
});