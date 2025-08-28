const burgerButton = document.querySelector('.js-burger-button');
const exitButton = document.querySelector('.js-exit-button');
const menu = document.querySelector('.js-menu');
const navigationItems = document.querySelectorAll('.js-link-navigation');

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
    top: elem.offsetTop - 100,
    behavior: 'smooth',
  });
}
navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    exitMenu();
    smoothScroll(item.dataset.id);
  });
});
