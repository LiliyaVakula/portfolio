$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 15);
 
});

// OPEN CONTACT
if(screen.width > 850) {
  $('.contact__btn, .button--about, .contact__btn--menu').click(function() {
    $('.contact__modal').toggleClass('hide');
    $('body').css({
      'animation': 'hideScrollBar',
      'animation-delay': '1s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'hideHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'showShadow',
      'animation-delay': '0.3s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left').css({
      'animation': 'moveModalBlockForvardLeft',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.right').css({
      'animation': 'moveModalBlockForvardRight',
      'animation-delay': '0.2s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
} else {
  $('.contact__btn, .button--about, .contact__btn--menu').click(function() {
    $('.contact__modal').toggleClass('hide');
    $('body').css({
      'position': 'fixed',
      'animation': 'hideScrollBar',
      'animation-delay': '0s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'hideHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'showShadow',
      'animation-delay': '0.3s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left').css({
      'animation': 'moveModalBlockForvardLeft_mob',
      'animation-delay': '0.1s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.right').css({
      'animation': 'moveModalBlockForvardRight_mob',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
}

// CLOSE CONTACT
if(screen.width > 850) {
  $('.header__close--contact').click(function() {
    setTimeout(function () {
      $('.contact__modal').toggleClass('hide');
    }, 900);
    $('body').css({
      'animation': 'showScrollBar',
      'animation-delay': '0.8s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'showHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'hideShadow',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left').css({
      'animation': 'moveModalBlockBackwardLeft',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.right').css({
      'animation': 'moveModalBlockBackwardRight',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
} else {
  $('.header__close--contact').click(function() {
    setTimeout(function () {
      $('.contact__modal').toggleClass('hide');
    }, 900);
    $('body').css({
      'position': 'static',
      'animation': 'showScrollBar',
      'animation-delay': '0s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'showHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'hideShadow',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left, .contact__modal-block.right').css({
      'animation': 'moveModalBlockBackward_mob',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
}

// OPEN MOBILE MENU
$('.header__burger').click(function() {
  $('.mobile-menu').toggleClass('hide');
  $('.header__close--menu').addClass('header__close--menu-active');
  $('body').css({
    'animation': 'hideScrollBar',
    'animation-delay': '0s',
    'animation-duration': '0s',
    'animation-fill-mode': 'both',
  });
  $('.mobile-menu').css({
    'animation': 'openMobileMenu',
    'animation-delay': '0',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__close--menu').css({
    'animation': 'openHeaderClose',
    'animation-delay': '0.5s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-nav').css({
    'animation': 'openHeaderNav',
    'animation-delay': '0.2s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-social-nav').css({
    'animation': 'openHeaderSocial',
    'animation-delay': '0.2s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-lang').css({
    'animation': 'openMobileNav',
    'animation-delay': '0.2s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
});

// CLOSE MOBILE MENU
$('.header__close--menu-active, .contact__btn--menu').click(function() {
  setTimeout(function () {
    $('.mobile-menu').toggleClass('hide');
  }, 900);
  $('.header__close--menu').removeClass('header__close--menu-active');
  $('body').css({
    'animation': 'showScrollBar',
    'animation-delay': '0s',
    'animation-duration': '0s',
    'animation-fill-mode': 'both',
  });
  $('.mobile-menu').css({
    'animation': 'closeMobileMenu',
    'animation-delay': '0.4s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__close--menu').css({
    'animation': 'closeHeaderClose',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-nav').css({
    'animation': 'closeHeaderNav',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-social-nav').css({
    'animation': 'closeHeaderSocial',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-lang').css({
    'animation': 'closeMobileNav',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
})

// Scroll
$("body").on('click', '[href*="exp"]', function(e){
  var fixed_offset = 20;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$("body").on('click', '[href*="main"]', function(e){
  var fixed_offset = 20;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 800);
  e.preventDefault();
});

// multilanguage-site

// словарь
var dictionary = {
  en: {
    nav1: 'Case Studies',
    nav2: 'Experiments',
    nav3: 'Contact',
    mobileNav1: 'Home',
    mobileNav2: 'Case Studies',
    mobileNav3: 'Experiments',
    mobileNav4: 'Contact',
    headerTitle: 'Liliya Vakula',
    headerBtn: 'About Me',
    contactTitle: 'About Me',
    contactText: "Hi! My name is Liliya! I am a freelance Front-end developer. I like to bring ideas to life in the browser, solve design problems, create a smart user interface and make it convenient by developing UI&UX for web applications. I'm constantly working on improving my skills and I like what I'm doing!",
    // "I'm Nikita Vakula, a ??-year-old Russian freelance Front-end developer. I'm a strange guy who likes to do strange things with web technologies. I like to solve design problems, create smart user interface and make it usable by developing UI&UX for web applications."
    contactSubtitle: "Let's create a cool project together",
    contactBtn: 'Send',
    formLabel1: 'Name *',
    formLabel2: 'Message *',
    blockTitle1: 'Latest Works',
    blockSubtitle1: 'CASE STUDIES',
    blockTitle2: 'Web is fun.',
    blockSubtitle2: 'EXPERIMENTS & OPEN SOURCE',
    caseBtn: 'Case Study',
    caseTitle1: 'ICEMLAW',
    caseSubtitle1: 'Catherine Muratova Immigration Center.',
    caseTitle2: 'Ciel De Paris',
    caseSubtitle2: 'My experience with foreign business.',
    caseTitle3: 'BWA - drones',
    caseSubtitle3: 'A project that introduces a line of new drones.',
    caseTitle4: 'Good Sign Company',
    caseSubtitle4: 'A company that comes from India.',
    expTitle: 'TITLE',
  },
  ru: {
    nav1: 'Сайты',
    nav2: 'Эксперименты',
    nav3: 'Контакты',
    mobileNav1: 'Главная',
    mobileNav2: 'Сайты',
    mobileNav3: 'Эксперименты',
    mobileNav4: 'Контакты',
    headerTitle: 'Лилия Вакула',
    headerBtn: 'Обо мне',
    contactTitle: 'Обо мне',
    contactText: "Привет! Меня зовут Лилия! Я фрилансер Front-end developer. Мне нравится воплощать идеи в жизнь в браузере, решать проблемы дизайна, создавать умный пользовательский интерфейс и делать его удобным, разрабатывая UI&UX для веб-приложений. Постоянно работаю над улучшением своих навыков и мне нравится то, что я делаю!",
    contactSubtitle: 'Давайте вместе создадим крутой проект',
    contactBtn: 'Отправить',
    formLabel1: 'Имя *',
    formLabel2: 'Сообщение *',
    blockTitle1: 'Последние Работы',
    blockSubtitle1: 'САЙТЫ',
    blockTitle2: 'Web is fun.',
    blockSubtitle2: 'ЭКСПЕРИМЕНТЫ',
    caseBtn: 'Перейти',
    caseTitle1: 'ICEMLAW',
    caseSubtitle1: 'Иммиграционный центр Екатерины Муратовой.',
    caseTitle2: 'Ciel De Paris',
    caseSubtitle2: 'Мой опыт работы с зарубежным бизнесом.',
    caseTitle3: 'BWA - drones',
    caseSubtitle3: 'Проект, который представляет линейку новых дронов.',
    caseTitle4: 'Good Sign Company',
    caseSubtitle4: 'Компания, родом из Индии.',
    expTitle: 'НАЗВАНИЕ',
  }
}

// клик по кнопке языка сайта
$('.lang-en-js').click(function(){
  document.cookie = "lang=en"
  location.reload();
})

$('.lang-ru-js').click(function(){
  document.cookie = "lang=ru"
  location.reload();
})

$(document).ready(function() {
 
    // при запуске определяем язык браузера
    if (getCookie('lang')) {
      language = getCookie('lang')
    } else {
      language = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "en";
      language = language.substr(0, 2).toLowerCase();
    }

    if (language == 'ru') {
      $('.lang-ru-js').addClass('active');
      // nav
      $('a[href="#main"]').html(dictionary.ru.nav1);
      $('a[href="#exp"]').html(dictionary.ru.nav2);
      $('.contact__btn>a').html(dictionary.ru.nav3);
      // mobile nav
      $('.header__mobile-nav__item:nth-child(1)').html(dictionary.ru.mobileNav1);
      $('.header__mobile-nav__item:nth-child(2)').html(dictionary.ru.mobileNav2);
      $('.header__mobile-nav__item:nth-child(3)').html(dictionary.ru.mobileNav3);
      $('.header__mobile-nav__item:nth-child(4)').html(dictionary.ru.mobileNav4);
      // header
      $('.header__content-title').html(dictionary.ru.headerTitle);
      $('.header__btn>span').html(dictionary.ru.headerBtn);
      // contact
      $('.contact__modal__title.left').html(dictionary.ru.contactTitle);
      $('.contact__modal__text').html(dictionary.ru.contactText);
      $('.contact__modal-block.right>.contact__modal__subtitle').html(dictionary.ru.contactSubtitle);
      $('label[for="form__name"]').html(dictionary.ru.formLabel1);
      $('label[for="message"]').html(dictionary.ru.formLabel2);
      $('input[type="submit"]').val(dictionary.ru.contactBtn);
      // main & title
      $('.block-title.first').html(dictionary.ru.blockTitle1);
      $('.block-title.second').html(dictionary.ru.blockTitle2);
      $('.block-subtitle.first').html(dictionary.ru.blockSubtitle1);
      $('.block-subtitle.second').html(dictionary.ru.blockSubtitle2);
      $('.main__item>span.button__text').html(dictionary.ru.caseBtn);
      $('.main__item.first>.main__item-info>.main__item-title').html(dictionary.ru.caseTitle1);
      $('.main__item.second>.main__item-info>.main__item-title').html(dictionary.ru.caseTitle2);
      $('.main__item.third>.main__item-info>.main__item-title').html(dictionary.ru.caseTitle3);
      $('.main__item.fourth>.main__item-info>.main__item-title').html(dictionary.ru.caseTitle4);
      $('.main__item.first>.main__item-info>.main__item-subtitle>i').html(dictionary.ru.caseSubtitle1);
      $('.main__item.second>.main__item-info>.main__item-subtitle>i').html(dictionary.ru.caseSubtitle2);
      $('.main__item.third>.main__item-info>.main__item-subtitle>i').html(dictionary.ru.caseSubtitle3);
      $('.main__item.fourth>.main__item-info>.main__item-subtitle>i').html(dictionary.ru.caseSubtitle4);
      // exp
      $('.exp__item-title').html(dictionary.ru.expTitle);
    } else {
      $('.lang-en-js').addClass('active');
      // nav
      $('a[href="#main"]').html(dictionary.en.nav1);
      $('a[href="#exp"]').html(dictionary.en.nav2);
      $('.contact__btn>a').html(dictionary.en.nav3);
      // mobile nav
      $('.header__mobile-nav__item:nth-child(1)').html(dictionary.en.mobileNav1);
      $('.header__mobile-nav__item:nth-child(2)').html(dictionary.en.mobileNav2);
      $('.header__mobile-nav__item:nth-child(3)').html(dictionary.en.mobileNav3);
      $('.header__mobile-nav__item:nth-child(4)').html(dictionary.en.mobileNav4);
      // header
      $('.header__content-title').html(dictionary.en.headerTitle);
      $('.header__btn>span').html(dictionary.en.headerBtn);
      // contact
      $('.contact__modal__title.left').html(dictionary.en.contactTitle);
      $('.contact__modal__text').html(dictionary.en.contactText);
      $('.contact__modal__subtitle.right').html(dictionary.en.contactSubtitle);
      $('label[for="form__name"]').html(dictionary.en.formLabel1);
      $('label[for="message"]').html(dictionary.en.formLabel2);
      $('input[type="submit"]').val(dictionary.en.contactBtn);
      // main & title
      $('.block-title.first').html(dictionary.en.blockTitle1);
      $('.block-title.second').html(dictionary.en.blockTitle2);
      $('.block-subtitle.first').html(dictionary.en.blockSubtitle1);
      $('.block-subtitle.second').html(dictionary.en.blockSubtitle2);
      $('.main__item-info>.button>span.button__text').html(dictionary.en.caseBtn);
      $('.main__item-info>.button>svg').css({
        'left': '135px',
      })
      $('.main__item.first>.main__item-info>.main__item-title').html(dictionary.en.caseTitle1);
      $('.main__item.second>.main__item-info>.main__item-title').html(dictionary.en.caseTitle2);
      $('.main__item.third>.main__item-info>.main__item-title').html(dictionary.en.caseTitle3);
      $('.main__item.fourth>.main__item-info>.main__item-title').html(dictionary.en.caseTitle4);
      $('.main__item.first>.main__item-info>.main__item-subtitle>i').html(dictionary.en.caseSubtitle1);
      $('.main__item.second>.main__item-info>.main__item-subtitle>i').html(dictionary.en.caseSubtitle2);
      $('.main__item.third>.main__item-info>.main__item-subtitle>i').html(dictionary.en.caseSubtitle3);
      $('.main__item.fourth>.main__item-info>.main__item-subtitle>i').html(dictionary.en.caseSubtitle4);
      // exp
      $('.exp__item-title').html(dictionary.en.expTitle);
    }
 
});

// функция возвращаение значение куки
function getCookie (cookieName) {
  var results = document.cookie.match ('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
  if (results)
    return (unescape (results[2]));
  else
    return null;
}