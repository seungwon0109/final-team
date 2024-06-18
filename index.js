// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// 타이핑 효과
const $txt = document.querySelector(".txt-title");
const content = "안녕하세요 :)\n 이제그만쉬고싶조입니다.";
let contentIndex = 0;

let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

setInterval(typing, 200);

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

// 모달
const $modalBg = document.getElementsByClassName("modal-background");
const $btnOpen = document.getElementsByClassName("btn-open");
const $btnClose = document.getElementsByClassName("btn-close");

function modal(num) {
  $btnOpen[num].addEventListener("click", () => {
    $modalBg[num].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  $btnClose[num].addEventListener("click", () => {
    $modalBg[num].style.display = "none";
    document.body.style.overflow = "unset";
  });
}

for (let i = 0; i < $btnOpen.length; i++) {
  modal(i);
}

// 스크롤바
let scrollTop = 0;
let bar = document.getElementsByClassName("bar-ing")[0];

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide-images img');
  const nextButton = document.querySelector('.btn-next');
  const prevButton = document.querySelector('.btn-prev');
  let currentIndex = 0;

  const slideData = [
      { name: '발로란트', releaseDate: '2020.6.2', provider: 'Riot', genre: 'FPS' },
      { name: '리그 오브 레전드', releaseDate: '2009.10.27', provider: 'Riot', genre: 'MOBA' },
      { name: '배틀그라운드', releaseDate: '2017.12.20', provider: 'PUBG Corporation', genre: '배틀로얄' },
      { name: '오버워치 2', releaseDate: '2023.8.11', provider: '블리자드 엔터테인먼트', genre: 'Hyper FPS' },
  ];

  function updateInfo(index) {
      document.querySelector('.txt-about .name').textContent = slideData[index].name;
      document.querySelector('.txt-about .release-date').textContent = slideData[index].releaseDate;
      document.querySelector('.txt-about .provider').textContent = slideData[index].provider;
      document.querySelector('.txt-about .genre').textContent = slideData[index].genre;
  }

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
      updateInfo(index);
  }

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  showSlide(currentIndex);
});