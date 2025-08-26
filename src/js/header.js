const burgerButton = document.querySelector('.burger-button');
const exitButton = document.querySelector('.exit-button');
const menu = document.querySelector('.menu');
const navigationItems = document.querySelectorAll('.link-navigation');

burgerButton.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  burgerButton.classList.add('invisible');
  exitButton.classList.remove('invisible');
  menu.classList.remove('hidden');
});
function openmodal() {}

exitButton.addEventListener('click', exitMenu);
function exitMenu() {
  document.body.style.overflow = 'visible';
  burgerButton.classList.remove('invisible');
  exitButton.classList.add('invisible');
  menu.classList.add('hidden');
}
function smoothScroll(section) {
  console.log(section);
  const elem = document.querySelector(`#${section}`);
  window.scrollTo({
    top: elem.offsetTop,
    behavior: 'smooth',
  });
}
navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    exitMenu();
    smoothScroll(item.dataset.id);
  });
});
