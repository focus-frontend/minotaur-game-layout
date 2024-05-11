var first = new Swiper('.first .swiper', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  speed: 200,
  coverflowEffect: {
    rotate: 0,
    stretch: 72,
    depth: 0,
    scale: 1,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.first__next',
    prevEl: '.first__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    991: {
      coverflowEffect: {
        rotate: 0,
        stretch: 128,
        depth: 0,
        scale: 1,
        modifier: 1,
        slideShadows: false,
      },
    },
  },
})
var featuresText = new Swiper('.features .swiper', {
  slidesPerView: 1,
  allowTouchMove: true,
  speed: 200,
  loop: true,
  navigation: {
    nextEl: '.features__next',
    prevEl: '.features__prev',
  },
})
var tipsSlider = new Swiper('.tips .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.tips__next',
    prevEl: '.tips__prev',
  },
  breakpoints: {
    // when window width is >= 969
    969: {
      slidesPerView: 3,
      centeredSlides: false,
      allowTouchMove: false,
    },
  },
})
var gamesText = new Swiper('.home .popular .swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 35,
  speed: 200,
  loop: true,
  navigation: {
    nextEl: '.popular .games__next',
    prevEl: '.popular .games__prev',
  },
  breakpoints: {
    // when window width is >= 969
    969: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
})
var sportsText = new Swiper('.home .sports .swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 35,
  speed: 200,
  loop: true,
  navigation: {
    nextEl: '.sports .games__next',
    prevEl: '.sports .games__prev',
  },
  breakpoints: {
    // when window width is >= 969
    969: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
})
$('.header__burger').click(function (e) {
  $('.modal').hide()
  $('.header__mobile-menu').addClass('active')
})
$('.registration .button').click(function (e) {
  $('.register__form').hide()
  $('.register__success').show()
})
$(
  '.header__mobile-close, .header__mobile-login, .header__mobile-sign, .header__mobile-link'
).click(function (e) {
  $('.header__mobile-menu').removeClass('active')
})
$(
  '.popup-cookies__close, .modal__overlay, .popup-cookies__answers .button'
).click(function (e) {
  $('.modal').hide()
})
if (document.cookie.indexOf('accepted_cookies=') < 0) {
  $('.popup-cookies').show()
}
$('.popup-cookies__answers .button').click(function (e) {
  document.cookie = 'accepted_cookies=yes;'
})
$('.registration__close').click(function (e) {
  $('.modal').hide()
})
$(
  '.header__sign, .authorization__registration, .header__mobile-sign, .login__register, .games__register'
).click(function (e) {
  $('.modal').hide()
  $('.registration').show()
})
$('.login__close, .game-popup__close').click(function (e) {
  $('.modal').hide()
})
$(
  '.header__login, .authorization__login, .header__mobile-login, .register__login'
).click(function (e) {
  $('.modal').hide()
  $('.login').show()
})
$('a.games__item').click(function (event) {
  event.preventDefault()
  $('.game-popup__content iframe').attr('src', $(this).attr('href'))
  $('.game-popup').show()
})
$('.game-popup .modal__overlay, .game-popup__close').click(function (event) {
  $('.game-popup__content iframe').attr('src', '')
})
$('.register__close').click(function () {
  $('.modal').hide()
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})
