const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  // autoHeight: true,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.header__burger__btn').on('click', function(e) {
  console.log('test')
  e.preventDefault();
  $('.header__burger__btn').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
  // $('.header__content').toggleClass('header__content_active');
});

// $('.menu-btn').on('click', function(e) {
//   e.preventDefault();
//   $('.menu').toggleClass('menu_active');
//   $('.header__content').toggleClass('header__content_active');
// })


// scroll
// ScrollReveal().reveal('.header');
// ScrollReveal().reveal('.adv');
// ScrollReveal().reveal('.spec');
// ScrollReveal().reveal('.goods');
// ScrollReveal().reveal('.feedback');
// ScrollReveal().reveal('.footer');