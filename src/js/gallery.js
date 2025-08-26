import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.swiper', {
  modules: [Navigation],
  centeredSlides: false,
  watchOverflow: true,

  slidesPerView: 2.5,
  spaceBetween: 8,

  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1200: {
      slidesOffsetAfter: 60,
      slidesPerView: 3,
      spaceBetween: 9.5,
      navigation: {
        enabled: true,
      },
    },
  },
});
