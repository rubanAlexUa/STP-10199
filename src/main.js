
new Swiper('.image-slider', {
    slidesPerView: 3,
    spaceBetween: 9.5,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        slidesOffsetBefore: 50,
  slidesOffsetAfter: 50,
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 8,
        },
       
        1200: {
            slidesPerView: 3,
            spaceBetween: 9.5,
        }
    }
});