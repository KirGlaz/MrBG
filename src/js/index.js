
//Меню
var burgerbtn = document.querySelector('#burgerbtn');
var menuphone = document.querySelector('#menuphone');
var mlink = document.querySelectorAll('.m-link');

burgerbtn.addEventListener('click', function (event) {
  event.preventDefault();
});

for (var i = 0; i < mlink.length; i++) {
  mlink[i].addEventListener('click', function (event) {
    menuphone.style.display = 'none';
  });
}

burgerbtn.addEventListener('click', function () {
  menuphone.style.display = 'block';
});

closebtn.addEventListener('click', function () {
  menuphone.style.display = 'none';
});

//Слайдер

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const inSlider = document.querySelector("#inSlider");

left.addEventListener('click', function (event) {
  event.preventDefault();
});

right.addEventListener('click', function (event) {
  event.preventDefault();
});

const minRight = 0;
const maxRight = 3840;
const step = 960;
let currentRight = 0;

inSlider.style.right = currentRight;

right.addEventListener("click", function () {
  if (currentRight < maxRight) {
    currentRight += step;
    inSlider.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function () {
  if (currentRight > minRight) {
    currentRight -= step;
    inSlider.style.right = currentRight + "px";
  }
});

//аккордеон меню

var liMenu = document.querySelectorAll('.vertical-accordeon__item'); //на ли
var oneLi = document.querySelector('.vertical-accordeon__item');
var bmenu = document.querySelectorAll('.vertical-accordeon__trigger'); //на ссылку
var ulmenu = document.querySelector('.vertical-accordeon__list'); //на ul
var span = document.querySelectorAll('.vertical-accordeon__title'); //на span


for (var i = 0; i < liMenu.length; i++) {
  liMenu[i].addEventListener('click', function (event) {
    event.preventDefault();
  });
}

for (var i = 0; i < bmenu.length; i++) {
  bmenu[i].addEventListener('click', function (event) {
    event.preventDefault();
  });
}

ulmenu.addEventListener('click', function (event) {
  const target = event.target.closest('a');

  if (!target) return;
  const currentItem = target.parentNode;
  const isActive = currentItem.classList.contains('vertical-accordeon__item_active');

  if (!isActive) {
    for (const oneLi of liMenu) {
      oneLi.classList.remove('vertical-accordeon__item_active');
    }
    currentItem.classList.add('vertical-accordeon__item_active');
  } else {
    currentItem.classList.remove('vertical-accordeon__item_active');
  };
});

//аккордеон Команда

var liCommand = document.querySelectorAll('.command-acco__item'); //на ли
var oneCommand = document.querySelector('.command-acco__item');
var aCommand = document.querySelectorAll('.command-acco__trigger'); //на ссылку
var ulCommand = document.querySelector('.command-acco'); //на ul

for (var i = 0; i < liCommand.length; i++) {
  liCommand[i].addEventListener('click', function (event) {
    event.preventDefault();
  });
}

for (var i = 0; i < aCommand.length; i++) {
  aCommand[i].addEventListener('click', function (event) {
    event.preventDefault();
  });
}

ulCommand.addEventListener('click', function (event) {
  const target = event.target.closest('a');

  if (!target) return;
  const currentItem = target.parentNode;
  const isActive = currentItem.classList.contains('command-acco__item_active');

  if (!isActive) {
    for (const oneCommand of liCommand) {
      oneCommand.classList.remove('command-acco__item_active');
    }
    currentItem.classList.add('command-acco__item_active');
  } else {
    currentItem.classList.remove('command-acco__item_active');
  };
});

//Форма заказа

const myform = document.querySelector("#myform");
const order = document.querySelector("#order");
const clean = document.querySelector("#clean");
const answer = document.querySelector("#answer");
const closeform = document.querySelector("#closeform");
const answerall = document.querySelector("#answerall");
const answerallno = document.querySelector("#answerallno");

closeform.addEventListener('click', function (event) {
  event.preventDefault();
  answerall.style.display = 'none';
});


order.addEventListener('click', function (event) {
  event.preventDefault();

  if (validateForm(myform)) {
    let data = new FormData();
    data.append("name", myform.elements.name.value);
    data.append("phone", myform.elements.phone.value);
    data.append("comment", myform.elements.comment.value);
    data.append("to", "my@gmail.com");
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(data);
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        answerall.style.display = 'flex';
        myform.reset();
      } else {
        answerallno.style.display = 'flex';
      }
    });
  };
});
clean.addEventListener('click', function (event) {
  event.preventDefault();
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;

    return false;
  } else {
    field.nextElementSibling.textContent = '';

    return true;
  }
}
// Отзывы    
let feedbackExit = document.querySelector('.popup__exit--feedback');  //Кнопка закрытия    
let popupFeedback = document.querySelector('.feedback-popup'); //Весь блок
let feedbackButtons = document.querySelectorAll('.btn-rev'); //На кнопки открытия
let reviews = document.querySelectorAll('.rewiews__hover'); //На блок с контентом по ховеру


feedbackExit.addEventListener('click', function () { popupFeedback.style.display = 'none' });
for (let i = 0; i < feedbackButtons.length; i++) {
  feedbackButtons[i].addEventListener('click', function () {
    popupFeedback.style.display = 'flex';
    let feetbackPopupName = document.querySelector('.feedback-popup__name');
    let feetbackPopupRewiews = document.querySelector('.feedback-popup__text');
    let cardReview = document.querySelectorAll('.rewiews__text');
    let feedbackCardName = document.querySelectorAll('.title-rewiews');
    feetbackPopupName.textContent = feedbackCardName[i].textContent;
    feetbackPopupRewiews.textContent = cardReview[i].textContent;
  })
}

//Скрол страниц

const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const countPositionPercent = sectionEq => {
  return `${sectionEq * -100}%`;
};

const switchActiveClass = (elems, elemNdx) => {
  elems
    .eq(elemNdx)
    .addClass("activescroll")
    .siblings()
    .removeClass("activescroll");
};

const unBlockScroll = () => {
  setTimeout(() => {
    inscroll = false;
  }, 1300); // подождать пока завершится инерция на тачпадах
};

const performTransition = sectionEq => {
  if (inscroll) return;
  inscroll = true;

  const position = countPositionPercent(sectionEq);
  const switchFixedMenuClass = () =>
    switchActiveClass($(".fixed-menu__item"), sectionEq);

  switchActiveClass(sections, sectionEq);
  switchFixedMenuClass();

  display.css({
    transform: `translateY(${position})`
  });

  unBlockScroll();
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".activescroll");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "next" : "prev";
    scrollViewport(direction);
  },
  keydown: e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

    if (userTypingInInputs) return;

    switch (e.keyCode) {
      case 40:
        scrollViewport("next");
        break;

      case 38:
        scrollViewport("prev");
        break;
    }
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  performTransition(parseInt($(e.currentTarget).attr("data-scroll-to")));
});

// разрешаем свайп на мобильниках
if (isMobile) {
  window.addEventListener(
    "touchmove",
    e => {
      e.preventDefault();
    },
    { passive: false }
  );

  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirecrion;
      if (direction === "up") scrollDirecrion = "next";
      if (direction === "down") scrollDirecrion = "prev";
      scrollViewport(scrollDirecrion);
    }
  });
}


//Плеер

var video = document.querySelector('.video__display');
var bigPlayBtn = document.querySelector('.video__playbtn');
var smallPlayBtn = document.querySelector('.video__controlls-play-play');
var smallPauseBtn = document.querySelector('.video__controlls-play-pause');
var volumeBtn = document.querySelector('.video__controlls-volume');
var poster = document.querySelector('.video__controlls-volume');
var circleProgress = document.querySelector('.video__controlls-circle--progress');
var progressBar = document.querySelector('.video__controlls-bar--progress');
var circleVolume = document.querySelector('.video__controlls-circle--volume');
var volumeBar = document.querySelector('.video__controlls-bar--volume');

circleVolume.style.left = '30%';
var currentVolume = 0.3;
video.volume = currentVolume;


bigPlayBtn.addEventListener('click', function (e) {
  e.preventDefault();
  video.play();
  bigPlayBtn.style.display = 'none';
  smallPauseBtn.style.display = 'block';
  smallPlayBtn.style.display = 'none';
})

video.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    bigPlayBtn.style.display = 'none';
    smallPlayBtn.style.display = 'none';
    smallPauseBtn.style.display = 'block';
  } else {
    video.pause();
    bigPlayBtn.style.display = 'block';
    smallPlayBtn.style.display = 'block';
    smallPauseBtn.style.display = 'none';
  }
})

video.addEventListener('timeupdate', function () {
  var position = video.currentTime / video.duration;
  circleProgress.style.left = position * 100 + '%';
})

smallPlayBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (video.paused) {
    video.play();
    bigPlayBtn.style.display = 'none';
    this.style.display = 'none';
    smallPauseBtn.style.display = 'block';

  } else {
    video.pause();

  }
})

smallPauseBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!video.paused) {
    video.pause();
    this.style.display = 'none';
    smallPlayBtn.style.display = 'block';
    bigPlayBtn.style.display = 'block';

  } else {
    video.play();
  }
})

progressBar.addEventListener('click', function (e) {
  if (video.paused) {
    bigPlayBtn.style.display = 'none';
    smallPauseBtn.style.display = 'block';
    smallPlayBtn.style.display = 'none';
  }
  let barWidth = this.offsetWidth;
  let clickPosition = e.offsetX;
  circleProgress.style.left = (100 * clickPosition / barWidth) + '%';
  video.currentTime = video.duration * clickPosition / barWidth;

  video.play();
})



volumeBar.addEventListener('click', function (e) {
  let barWidth = this.offsetWidth;
  let clickPosition = e.offsetX;
  circleVolume.style.left = (100 * clickPosition / barWidth) + '%';
  currentVolume = clickPosition / barWidth;
  video.volume = currentVolume;
  volumeBtn.classList.remove('active');
})

volumeBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    video.volume = 0;
  } else {
    video.volume = currentVolume;
  }
})

// Карта

ymaps.ready(init);

var placemarks = [
  {
    latitude: 59.98,
    longitude: 30.29,
    hintContent: '<div class="map__hint">Ул. Литераторов д.15</div>',
    balloonContent:
      'Самые вкусные бургеры у нас, приходите по адресу: ул. Литераторов, д. 15',
  },

  {
    latitude: 59.94,
    longitude: 30.38,
    hintContent: '<div class="map__hint">Ул. Пушкина д.17</div>',
    balloonContent:
      'Самые вкусные бургеры у нас, приходите по адресу: ул. Пушкина, д. 17',
  },

  {
    latitude: 59.89,
    longitude: 30.25,
    hintContent: '<div class="map__hint">Ул. Хлопушкина д.19</div>',
    balloonContent:
      'Самые вкусные бургеры у нас, приходите по адресу: ул. Хлопушкина, д. 19',
  },
];

function init() {
  var map = new ymaps.Map('map', {
    center: [59.92, 30.31],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  placemarks.forEach(function (obj) {
    var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: '<div class="map__hint">Ул. Литераторов д.15</div>',
      balloonContent:
        'Самые вкусные бургеры у нас, приходите по адресу: ул. Литераторов, д. 15',
    },
      {
        iconLayout: 'default#image',
        iconImageHref: './img/touch.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]

      });

    map.geoObjects.add(placemark);
  });
}