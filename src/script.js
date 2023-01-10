const swiper1 = new Swiper('.swiper1', {
  pagination: {
    el: '.swiper-pagination'
  },
  slidesPerView: 1.11,
});

const swiper2 = new Swiper('.swiper2', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

const containerSearch2 = document.querySelector('.container_search2');
const inputSearch2 = document.querySelector('.input_search2');

document.querySelector('.loupe2').addEventListener('click', () => {
  if (containerSearch2.classList.contains('container_display-none')) {
    containerSearch2.classList.remove('container_display-none');
    document.querySelector('meta[name=viewport]').setAttribute('content',
      'width=device-width, minimum-scale=1.0, maximum-scale=1.0 initial-scale=1.0');
    inputSearch2.focus();
  } else {
    containerSearch2.classList.add('container_display-none');
    document.querySelector('meta[name=viewport]').setAttribute('content', 'width=device-width, initial-scale=1.0');
  }
});

const openSwiperBig = () => {
  const swiperBig = document.querySelector('.swiper-big');
  let windowScrollY = 0;
  document.querySelectorAll('.open-swiper-big').forEach(el => {
    el.addEventListener('click', () => {
      windowScrollY = window.scrollY;
      swiperBig.classList.remove('container_display-none');
      window.scrollTo(0, 0);
    });
  });
  document.querySelectorAll('.close-swiper-big').forEach(el => {
    el.addEventListener('click', () => {
      swiperBig.classList.add('container_display-none');
      window.scrollTo(0, windowScrollY);
    })
  })
}

if (document.querySelector('.open-swiper-big')) {
  openSwiperBig();
}

document.querySelectorAll('img').forEach(el => {
  if (el.getAttribute('src') === '') {
    el.src = 'img/plug.webp';
  }
});

if (document.querySelector('.open-social-network')) {
  document.querySelectorAll('.open-social-network').forEach((el, ind) => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('.share-social-network')[ind].classList.toggle('container_display-none');
    })
  })
}

const menu = document.querySelector('.menu');
document.querySelector('.menu-btn').addEventListener('click', (e) => {
  if (e.target.getAttribute('src') === 'img/icon/menu.svg') {
    e.target.src = 'img/icon/close_dark.svg';
    menu.classList.remove('container_display-none');
  } else {
    e.target.src = 'img/icon/menu.svg';
    menu.classList.add('container_display-none');
  }
})