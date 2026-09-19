const lessons = [
  {
    th: 'alpha beta',
    en: 'Start with one clear idea.',
  },
  {
    th: 'เรียนรู้ทีละแนวคิด',
    en: 'Build your IC License foundation step by step.',
  },
  {
    th: 'พร้อมเริ่มบทเรียนแล้วหรือยัง?',
    en: 'Your next step is ready.',
  },
];

const mascotButton = document.querySelector('#mascotButton');
const speechButton = document.querySelector('#speechButton');
const messageTh = document.querySelector('#messageTh');
const messageEn = document.querySelector('#messageEn');
const stepLabel = document.querySelector('#stepLabel');
const stepBar = document.querySelector('#stepBar');
const cta = document.querySelector('#cta');

let currentStep = 0;

function renderLesson() {
  const lesson = lessons[currentStep];
  messageTh.textContent = lesson.th;
  messageEn.textContent = lesson.en;
  stepLabel.textContent = `STEP ${currentStep + 1} / ${lessons.length}`;
  stepBar.style.width = `${((currentStep + 1) / lessons.length) * 100}%`;
  cta.hidden = currentStep !== lessons.length - 1;
}

function advanceLesson() {
  currentStep = Math.min(currentStep + 1, lessons.length - 1);
  renderLesson();
}

mascotButton.addEventListener('click', advanceLesson);
speechButton.addEventListener('click', advanceLesson);
renderLesson();
