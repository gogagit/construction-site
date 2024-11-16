//Show and close menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLink = document.querySelectorAll('.nav-link');
if (navToggle){
    
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
};
if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
};
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(link => link.addEventListener('click', linkAction));
// scroll header
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY > 50 ? header.classList.add('header-scroll'): header.classList.remove('header-scroll');
}
window.addEventListener('scroll', scrollHeader)