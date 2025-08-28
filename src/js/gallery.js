import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.js-gallery .swiper', {
  modules: [Navigation],
  centeredSlides: false,
  watchOverflow: true,

  slidesPerView: 2.5,
  spaceBetween: 8,

  navigation: {
    enabled: false,
    nextEl: '.js-gallery .swiper-button-next',
    prevEl: '.js-gallery.swiper-button-prev',
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
