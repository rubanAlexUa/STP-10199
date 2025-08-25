new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 9.5,
    centeredSlides: false,
    slidesOffsetBefore: 50, 
    slidesOffsetAfter: 50, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 8,
            slidesOffsetBefore: 0, 
            slidesOffsetAfter: 0,
            navigation: false,     
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 9.5,
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    }
});