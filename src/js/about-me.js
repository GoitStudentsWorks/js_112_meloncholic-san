import Accordion from 'accordion-js';
import sprite from '../img/icons/icon-sprite.svg';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-list', {
    duration: 400,
  });

  function toggleIcon(button, isOpen) {
    const iconUse = button.querySelector('use');
    if (iconUse) {
      const newIcon = isOpen ? 'icon-IconUp' : 'icon-IconDown';
      iconUse.setAttribute('xlink:href', `${sprite}#${newIcon}`);
    }
  }

  const items = document.querySelectorAll('.about-list-item');
  items.forEach(item => {
    const button = item.querySelector('.about-toggle-btn');
    const header = item.querySelector('.about-list-header');
    const content = item.querySelector('.about-list-content');

    header.addEventListener('click', function () {
      const isActive = item.classList.toggle('is-active');
      toggleIcon(button, isActive);

      if (isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
});

const slider = new Swiper('.swiper-skills-container', {
  modules: [Navigation],
  loop: true,
  oneWayMovement: true,
  edgeSwipeDetection: true,
  slideToClickedSlide: true,
  wrapperClass: 'skills-list',
  slideClass: 'skills-list-item',
  centeredSlides: false,
  loopedSlides: 6,
  navigation: {
    nextEl: '.skills-slider-btn',
  },
  cssMode: true,

  spaceBetween: 0,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
      centeredSlides: true,
    },
    1440: {
      slidesPerGroup: 1,
      slidesPerView: 6,
      centeredSlides: false,
    },
  },
});

document.querySelectorAll('.skills-list-item').forEach(item => {
  item.addEventListener('click', function () {
    if (!item.classList.contains('swiper-slide-active')) {
      slider.slideNext();
    }
  });
});
