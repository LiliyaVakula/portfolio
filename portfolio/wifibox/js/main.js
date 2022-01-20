jQuery(function ($) {

    // ===================================================== Fix fixed bg's jump

    /MSIE [6-8]|Mac/i.test(navigator.userAgent) || $("header, article, footer").each(function () {
        if ("fixed" == $(this).css("backgroundAttachment")) {
            var i = $(this), a = /WebKit/i.test(navigator.userAgent) ? 9 : 8;
            i.addClass("froid-fixed-bg").data({
                bgX: i.css("backgroundPosition").slice(0, i.css("backgroundPosition").indexOf(" ")),
                bgY: i.css("backgroundPosition").slice(i.css("backgroundPosition").indexOf(" ")),
                margin: a
            })
        }
    }), $(window).bind("SIModals.modalsOpen", function () {
        $(".froid-fixed-bg").each(function () {
            var i = $(this);
            i.css("backgroundPosition", "calc(" + i.data("bgX") + " - " + i.data("margin") + "px) " + i.data("bgY"))
        })
    }), $(window).bind("SIModals.modalsClose", function () {
        $(".froid-fixed-bg").each(function () {
            var i = $(this);
            i.css("backgroundPosition", i.data("bgX") + " " + i.data("bgY"))
        })
    });

    // ===================================================== Mobile full-width && disable animation

    if (is_mobile()) {

        // Fix mobile fixed bg's
        $("header, section, article, footer, .section-bg-block::before").each(function () {
            if ("fixed" == $(this).css("backgroundAttachment")) $(this).css('backgroundAttachment', 'scroll');
        });

        // Remove animation
        function removeAnimation(block, className) {
            block.css({
                'transform': 'none',
                '-webkit-transform': 'none',
                '-moz-transform': 'none',
                '-ms-transform': 'none',
                '-o-transform': 'none',
                'transition': 'none',
                '-webkit-transition': 'none',
                'opacity': 1
            }).removeClass(className);
        }

        function removeTransform(block, className) {
            block.css({
                'transform': 'none',
                '-webkit-transform': 'none',
                '-moz-transform': 'none',
                '-ms-transform': 'none',
                '-o-transform': 'none'
            }).removeClass(className);
        }

        removeAnimation($('.cre-animate'), 'cre-animate');
        removeTransform($('.si-floating'), 'si-floating');
        removeTransform($('.si-floating2'), 'si-floating2');
        removeTransform($('.si-floating3'), 'si-floating3');
        removeTransform($('.si-floating4'), 'si-floating4');

        // Mobile stretch

        $('html').css('width', window.innerWidth + 'px');
        $(window).resize(function () {
           $('html').css('width', window.innerWidth + 'px');
        });
        $(window).bind('scroll', function () {
           $('html').css('width', window.innerWidth + 'px');
        });

        // ===================================================== All sound load
        $.ionSound({
            sounds: ["bip-1", "bip-2", "wuf-1", "wuf-2", "wuf-3", "wuf-4"],
            path: template_url + "/sounds/",
            volume: 0
        });
    }
    else {

        // ===================================================== All sound load
        $.ionSound({
            sounds: ["bip-1", "bip-2", "wuf-1", "wuf-2", "wuf-3", "wuf-4"],
            path: template_url + "/sounds/",
            volume: 0.3
        });

        // ===================================================== Sounds
        $(document).on('mouseenter',
            '.btn, ' +
            '.si-close, ' +
            '.phone-link, ' +
            '.si-jump, ' +
            '.swiper-button-prev, ' +
            '.swiper-button-next, ' +
            '.swiper-pagination-bullet, ' +
            '.tab-link', function () {
                $.ionSound.play('bip-2');
            });
        SIModals.beforeOpen = function () {
            $.ionSound.play('wuf-4');
        };
        SIModals.beforeClose = function () {
            $.ionSound.play('wuf-3');
        };

        // ===================================================== smooth scrolling
        if (!navigator.userAgent.match(/Trident\/7\./)) { // if not IE
            SmoothScroll({stepSize: 100});
        } else {
            document.body.addEventListener("mousewheel", function () {
                event.preventDefault();
                var wd = event.wheelDelta;
                var csp = window.pageYOffset;
                window.scrollTo(0, csp - wd);
            });
        }
    }

    if (is_OSX()) {
        $('html, body').addClass('osx');
    }


    // ===================================================== Init all plugins and scripts
    $.fn.SIInit = function () {

        //Modal photos
        $("[data-fancybox]").fancybox({
            loop: true,
            thumbs: {
                autoStart: true
            },
            youtube: {},
            vimeo: {}
        });

        //Forms
        $('.send-form').SIForms({
            'validateFields': {
                'client_name': 'Укажите ваше имя',
                'client_phone': 'Укажите ваш телефон',
                'client_mail': 'Укажите ваш e-mail'
            },
            'checkExtra': function (form) {
                if (!$(form).find('.form-agree-check').hasClass('checked')) {
                    SIPageMessages.show('Для отправки формы вы должны согласиться на обработку персональных данных.');
                    return false;
                }
            },
            'sendSuccess': function (res) {
                //grecaptcha.reset(recaptcha);
                //yaCounter.reachGoal('target' + res.id);
				//ga('send', 'event', res.gcode, res.gcode);
				// ym(61135417,'reachGoal','form');
				// ga('send', 'event', 'wifi', 'form');
				// fbq('track', 'Lead');
            }
        });

        //Jump links
        $('.si-jump').SIJump();

        //Page messages
        SIPageMessages.init();
    };

    $.fn.SIInit();

    // ===================================================== Modals
    $.fn.SIModalInit = function () {
        SIModals.init();

        // Init modals
        SIModals.attachModal('.open-phone-modal', '.phone-modal', {'.send-extra': 'extra'});
        SIModals.attachModal('.open-text-modal', '.text-modal', false, function () {
            return '.text-modal-' + $(this).data('id');
        });

        // Modal controls
        SIModals.attachClose('.si-close');
    };

    $.fn.SIModalInit();

    //SIModals.afterOpen = function () {
    //grecaptcha.reset(recaptcha);
    //};

    // ===================================================== Styler
    $('input[type=file], input[type=radio], input[type=checkbox], select').styler();
    $('input[type=radio]').change(function () {
        var label = $(this).closest('label'),
            name = $(this).attr('name');
        $('input[name=' + name + ']').closest('label').removeClass('checked');
        if ($(this).is(':checked'))
            label.addClass('checked');
    });
    $('input[type=checkbox]').change(function () {
        var label = $(this).closest('label');
        if ($(this).is(':checked'))
            label.addClass('checked');
        else
            label.removeClass('checked');
    });

    // ===================================================== spoiler
    $(".spoiler").spoiler();

    // ===================================================== swiper
	var certificateSlider = new Swiper('.certificate-slider', {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.certificate-pagination',
        	type: 'fraction',
		},
		navigation: {
			nextEl: '.certificate-button-next',
			prevEl: '.certificate-button-prev',
		},
		lazy: true,
		loop: true,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
		},
		on: {
			slideChange: function() {
				$.ionSound.play('wuf-1');
			}
		}
	});

	var exampleSlider = new Swiper('.example-slider', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		spaceBetween: 20,
		pagination: {
			el: '.example-pagination',
        	type: 'fraction',
		},
		navigation: {
			nextEl: '.example-button-next',
			prevEl: '.example-button-prev',
		},
		loop: true,
		lazy: true,
		on: {
			slideChange: function() {
				$.ionSound.play('wuf-1');
			}
		}
	});

    // ===================================================== custom scripts

    //label
    $('.ani-label').click(function () {
        var label = $(this),
            holder = label.parent(),
            input = holder.find('.ani-input');

        holder.toggleClass('active');
        input.focus();
    });

    //accordion
    $('.question-item:first').addClass('active').find('.answer').css('display', 'block');
    $('.question-item').each(function () {
        var item = $(this),
            question = item.find('.question'),
            answer = item.find('.answer');
        answer.slideUp();
        if (item.hasClass('active')) {
            $(this).find('.answer').slideDown();
        }
        question.click(function () {
            if (question.parents('.question-item').hasClass('active')) {
                answer.slideUp();
                item.removeClass('active');
            }
            else {
                item.parents('.questions-block').find('.question-item').find('.answer').slideUp();
                answer.slideDown();
                item.parents('.questions-block').find('.question-item').removeClass('active');
                item.addClass('active');
            }
        });
	});

	//parallax
	$('.questions-image img').paroller({
		factor: 0.15,
		direction: 'vertical',
		type:'foreground',
		transition: 'translate 0.1s ease'
	});

	// ===================================================== mobile menu
	function closeGlobalNav(timeout) {
		var globalNavigation = $('.mobile-nav');

		$('html').removeClass('opened');
		$('.c-hamburger').removeClass('is-active');
		globalNavigation.removeClass('active');
		setTimeout(function () {
			globalNavigation.removeClass('visible');
		}, timeout);
	}

	//show menu button
	$('.c-hamburger').click(function (e) {
		var globalNavigation = $('.mobile-nav');

		if ($(this).hasClass('is-active')) {
			closeGlobalNav(600);
		}
		else {
			$('html').addClass('opened');
			$(this).addClass('is-active');
			globalNavigation.addClass('visible').addClass('active');
		}
	});

	//navigation overlay click
	$('.nav-overlay').click(function () {
		closeGlobalNav(600);
	});

	//close button click
	$('.nav-close').click(function () {
		closeGlobalNav(600);
	});

	//global link click
	$('.mobile-nav-link').click(function (e) {
		closeGlobalNav(1200);
	});

	//show cost goods
	let findCost = $('.goods-time-period span');
	findCost.each(function() {
		$(this).click(function() {
			let goodsCost = $(this).data('cost');
			$(this).parent().siblings('.goods-cost').children('i').html(goodsCost);
			$(this).addClass('selected');
			$(this).siblings().removeClass('selected');
		});
	});

	//count to
	$('.item-heading i').countTo();

	//show tab nav
	let fixedCtrl = $('.nav.nav-tabs');
	$(window).bind('scroll load', function () {

		let thisScrollTop = $(this).scrollTop();
		let topGoods = $('.goods-block').offset().top;

		if(!is_mobile()) {
			if (thisScrollTop > 5300 && thisScrollTop < topGoods + 1692) {
				fixedCtrl.addClass('fixed-control');
			} else {
				fixedCtrl.removeClass('fixed-control');
			}

			if (thisScrollTop > 5300) {
				fixedCtrl.addClass('min-control');
			}
			else {
				fixedCtrl.removeClass('min-control');
			}
		}
	});

	//show/hide goods block add
	let choiceGoods = $('.choice-goods-block');
	let goodsBlock = $('.goods-additionally');

	choiceGoods.click(function() {
		let id = $(this).data('id');

		if ($(this).hasClass('active')) {
			goodsBlock.removeClass('goods-additionally-visible');
			$(this).removeClass('active');
			return false;
		}

		choiceGoods.removeClass('active');
		$(this).addClass('active');

		goodsBlock.removeClass('goods-additionally-visible');
		$(id).addClass('goods-additionally-visible');
		
	});

	$('.tab-link').click(function() {
		let id = $(this).data('id');
		goodsBlock.removeClass('goods-additionally-visible');
		$(id).addClass('goods-additionally-visible');

		choiceGoods.each(function(i, el) {
			$(this).removeClass('active');
			if ($(this).data('id') == id) {
				$(this).addClass('active');
			}
		});
	});

});