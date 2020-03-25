var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '1',
  loop: true,
  speed: 1000,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});