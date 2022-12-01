const swiper1 = new Swiper('.swiper1', {
  pagination: {
    el: '.swiper-pagination'
  },
  slidesPerView: 1.11,
});

const containerSearch2 = document.querySelector('.container_search2');
const inputSearch2 = document.querySelector('.input_search2');

document.querySelector('.loupe2').addEventListener('click', () => {
  if (containerSearch2.classList.contains('container_display-none1')) {
    containerSearch2.classList.remove('container_display-none1');
    document.querySelector('meta[name=viewport]').setAttribute('content',
      'width=device-width, minimum-scale=1.0, maximum-scale=1.0 initial-scale=1.0');
    inputSearch2.focus();
  } else {
    containerSearch2.classList.add('container_display-none1');
    document.querySelector('meta[name=viewport]').setAttribute('content', 'width=device-width, initial-scale=1.0');
  }

});

