document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.js-popup');
  const buttonAccept = document.querySelector('.js-accept-button');
  const buttonDecline = document.querySelector('.js-decline-button');

  if (!localStorage.getItem('cookiesClicked')) {
    setTimeout(() => {
      modal.classList.remove('js-popup-hidden');
    }, 2000);
  }

  buttonAccept.addEventListener('click', () => {
    modal.classList.add('js-popup-hidden');
    localStorage.setItem('cookiesClicked', 'true');
  });
  buttonDecline.addEventListener('click', () => {
    modal.classList.add('js-popup-hidden');
    localStorage.setItem('cookiesClicked', 'false');
  });
});
