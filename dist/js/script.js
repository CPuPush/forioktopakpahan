// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});


// navbar Fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }
}

/*
classList.add
classList.remove
classList.toogle => melakukan keduanya

window.onscroll detect when display on scroll
*/