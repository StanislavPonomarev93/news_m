const containerSearch = document.querySelector('.container_search');
const inputSearch = document.querySelector('.input_search');

inputSearch.addEventListener('blur', () => {
  containerSearch.classList.add('container_display-none');
})


document.querySelector('.loupe').addEventListener('click', () => {
  containerSearch.classList.remove('container_display-none');
  inputSearch.focus();
});

// import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

// const swiper1 = new Swiper('.swiper1', {
//   modules: [Navigation, Pagination, EffectFade],
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction'
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   allowTouchMove: false,
//   spaceBetween: 10,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   }
// });

// const calcNews = () => {
//   const containerLandmark = document.querySelector('.container-landmark').offsetHeight;
//   const containerMainNews = document.querySelector('.container-main-news');
//   let containerNews = containerMainNews.querySelectorAll('.container-news');
//   containerMainNews.classList.remove('container_display-none');

//   while (containerMainNews.offsetHeight + 555 > containerLandmark) {
//     containerNews[containerNews.length - 1].remove();
//     containerNews = containerMainNews.querySelectorAll('.container-news');
//   }
// }

// calcNews();
