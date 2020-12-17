import '../scss/main.scss';
import 'intersection-observer';
import $ from 'jquery';
import 'jquery-ui'
import 'jquery-ui/ui/effect'
import 'bootstrap';
import 'bootstrap-star-rating';
import 'popper.js';
import Swiper from 'swiper/dist/js/swiper.min';
import noUiSlider from 'nouislider';


$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.main-wrapper').slideDown(300);
        b.addClass('ios');
    } else {
        $('.main-wrapper').slideDown(300);
        b.addClass('web');
    }

    b.removeClass('loaded');
});

$(function () {
    // Swiper slider
    if ($('.swiper-container').length) {
        let slider;
        let slide = document.querySelectorAll('.swiper-container .swiper-slide').length;

        if (slide > 1) {
            slider = new Swiper('.swiper-container', {
                observer: true,
                observeParents: true,
                loop: true,
                autoplay: true,
                spaceBetween: 25,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                /*scrollbar: {
                    el: '.swiper-scrollbar',
                },*/
                dynamicBullets: true,
            });
        }
    }

    // Range slide
    if ($('input[type="range"]')) {
        let sliderRange = document.querySelectorAll('.slider-range');
        let sliderHandles = document.querySelectorAll('.slider-handles');

        if (sliderRange.length) {
            sliderRange.forEach(function (elem) {
                let input = elem.childNodes[0];
                let startValue = input.hasAttribute('value') ? Number(input.getAttribute('value')) : 1;
                let minValue = input.hasAttribute('min') ? Number(input.getAttribute('min')) : 1;
                let maxValue = input.hasAttribute('max') ? Number(input.getAttribute('max')) : 100;

                input.remove();

                noUiSlider.create(elem, {
                    start: [startValue],
                    step: 1,
                    behavior: 'tap',
                    connect: [true, false],
                    range: {
                        'min': [minValue],
                        'max': [maxValue]
                    }
                });
            });
        }

        if (sliderHandles.length) {
            sliderHandles.forEach(function (elem) {
                let input = elem.childNodes[0];
                let minValue = input.hasAttribute('min') ? Number(input.getAttribute('min')) : 1;
                let maxValue = input.hasAttribute('max') ? Number(input.getAttribute('max')) : 100;

                input.remove();

                noUiSlider.create(elem, {
                    start: [minValue, maxValue / 2],
                    step: 1,
                    behavior: 'tap-drag',
                    connect: true,
                    range: {
                        'min': minValue,
                        'max': maxValue
                    }
                });
            });
        }
    }

    // Star rating
    if ($('.rating-input').length) {
        let rateInput = document.querySelectorAll('.rating-input');
        rateInput.forEach(function (input) {
            if (input.classList.contains('rating-read')) {
                $(input).rating({
                    showCaption: false,
                    showClear: false,
                    displayOnly: true,
                    max: 5,
                    size: 'xs',
                    emptyStar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="none" stroke="#FA8D03" stroke-width="21.943" d="M512 47.927l115.19 354.52h372.767L698.382 621.553l2.465 7.581 112.728 346.938L512 756.965 210.427 976.072l115.19-354.519L24.044 402.447h372.765l115.19-354.52z"/></svg>',
                    filledStar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><linearGradient id="logo-gradient" x1="33%" y1="0%" x2="50%" y2="100%" ><stop offset="0%" stop-color="#F1FF0A"></stop><stop offset="100%" stop-color="#FF5C00"></stop></linearGradient></defs><path fill="url(\'#logo-gradient\')" d="M512 25.059l120.868 371.99H1024L707.565 626.952l120.87 371.989L512 769.037 195.566 998.941l120.868-371.989L0 397.049h391.133l120.868-371.99z"/><path fill="url(\'#logo-gradient\')" d="M512 25.059l120.868 371.99H1024L707.565 626.952l120.87 371.989L512 769.037 195.566 998.941l120.868-371.989L0 397.049h391.133l120.868-371.99z"/></svg>',
                });
            } else {
                $(input).rating({
                    showCaption: false,
                    showClear: false,
                    stars: 5,
                    min: 0,
                    max: 5,
                    step: 1,
                    size: 'xs',
                    emptyStar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="none" stroke="#FA8D03" stroke-width="21.943" d="M512 47.927l115.19 354.52h372.767L698.382 621.553l2.465 7.581 112.728 346.938L512 756.965 210.427 976.072l115.19-354.519L24.044 402.447h372.765l115.19-354.52z"/></svg>',
                    filledStar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><linearGradient id="logo-gradient" x1="33%" y1="0%" x2="50%" y2="100%" ><stop offset="0%" stop-color="#F1FF0A"></stop><stop offset="100%" stop-color="#FF5C00"></stop></linearGradient></defs><path fill="url(\'#logo-gradient\')" d="M512 25.059l120.868 371.99H1024L707.565 626.952l120.87 371.989L512 769.037 195.566 998.941l120.868-371.989L0 397.049h391.133l120.868-371.99z"/><path fill="url(\'#logo-gradient\')" d="M512 25.059l120.868 371.99H1024L707.565 626.952l120.87 371.989L512 769.037 195.566 998.941l120.868-371.989L0 397.049h391.133l120.868-371.99z"/></svg>',
                });
            }
        });
    }

    // Accordion list
    if ($('.accordion-list').length) {
        let textBox = $('.accordion-list__box-text'),
            currentItem = $('.accordion-list__box.active'),
            currentText = currentItem.find('.accordion-list__box-text');

        textBox.slideUp(0);
        currentText.slideDown(0);

        $('.accordion-list__box').on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').find('.accordion-list__box-text').slideUp(350);
            } else {
                $('.accordion-list__box.active').removeClass('active').find('.accordion-list__box-text').slideUp(350);
                $(this).addClass('active').find('.accordion-list__box-text').slideDown(350);
            }
            e.stopPropagation();
        });
    }

    // Lazy load observer
    const imagesAll = document.querySelectorAll('img[data-src]');
    let imgObserve = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio >= 0 && entry.target.hasAttribute('data-src')) {
                let current = entry.target;
                let source = current.getAttribute('data-src');

                current.setAttribute('src', source);
                current.removeAttribute('data-src');
            }
        });
    });
    if (imagesAll.length > 0) {
        imagesAll.forEach(function (image) {
            imgObserve.observe(image);
        });
    }
});