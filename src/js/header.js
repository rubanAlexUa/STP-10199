const burgerButton = document.querySelector('.burger-button');
const exitButton = document.querySelector('.exit-button');
const menu = document.querySelector('.menu');
const navigationItems = document.querySelectorAll('.link-navigation');

burgerButton.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  burgerButton.classList.add('js-invisible');
  exitButton.classList.remove('js-invisible');
  menu.classList.remove('js-hidden');
});

exitButton.addEventListener('click', exitMenu);
function exitMenu() {
  document.body.style.overflow = 'visible';
  burgerButton.classList.remove('js-invisible');
  exitButton.classList.add('js-invisible');
  menu.classList.add('js-hidden');
}
function smoothScroll(section) {
  console.log(section);
  const elem = document.querySelector(`#${section}`);
  window.scrollTo({
    top: elem.offsetTop - 70,
    behavior: 'smooth',
  });
}
navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    exitMenu();
    smoothScroll(item.dataset.id);
  });
});
