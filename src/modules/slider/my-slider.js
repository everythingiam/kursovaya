import './my-slider.scss';
import Swiper from 'swiper/bundle';
import swiperHTML from './index.html';
import myMini_card from '../../components/my-mini_card/my-mini_card';
import fakePosters from '../../helpers/fakePosters';

const posters = fakePosters.map(poster => myMini_card.create(poster))


function create() {
  const swiperComponent = document.createElement('section');
  swiperComponent.classList.add('swiper-poster');
  swiperComponent.innerHTML = swiperHTML;
  putPosters(swiperComponent, posters);

  // Инициализация Swiper происходит сразу при создании компонента
  setTimeout(() => {
    new Swiper(swiperComponent.querySelector('.swiper'), {
      loop: true,
      navigation: {
        nextEl: swiperComponent.querySelector('.swiper-button-next'),
        prevEl: swiperComponent.querySelector('.swiper-button-prev'),
      },
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 20,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        800: {
          slidesPerView: 2.5,
          spaceBetween: 50,

        },
        1000: {
          slidesPerView: 4,
        },
      },
    });
  });

  return swiperComponent;
}

function putPosters(swiperComponent, poster_array) {
  const wrapper = swiperComponent.querySelector('.swiper-wrapper');
  poster_array.forEach((elem) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.appendChild(elem);
    wrapper.appendChild(slide);
  });
}

export default {
  create,
};
