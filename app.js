const clapSound = document.querySelector('#clap');
const boomSound = document.querySelector('#boom');
const hihatSound = document.querySelector('#hihat');
const kickSound = document.querySelector('#kick');
const openhatSound = document.querySelector('#openhat');
const rideSound = document.querySelector('#ride');
const snareSound = document.querySelector('#snare');
const tinkSound = document.querySelector('#tink');
const tomSound = document.querySelector('#tom');

const allDrumButtons = document.querySelectorAll('[data-sound]');

document.querySelector('.cat__img').src = '/assets/images/cat_up.png';

const playSound = (sound) => {
  switch (sound) {
    case 'Q':
      boomSound.currentTime = 0;
      boomSound.play();
      break;
    case 'W':
      clapSound.currentTime = 0;
      clapSound.play();
      break;

    case 'E':
      hihatSound.currentTime = 0;
      hihatSound.play();
      break;
    case 'A':
      kickSound.currentTime = 0;
      kickSound.play();
      break;
    case 'S':
      openhatSound.currentTime = 0;
      openhatSound.play();
      break;
    case 'D':
      rideSound.currentTime = 0;
      rideSound.play();
      break;
    case 'Z':
      snareSound.currentTime = 0;
      snareSound.play();
      break;
    case 'X':
      tinkSound.currentTime = 0;
      tinkSound.play();
      break;
    case 'C':
      tomSound.currentTime = 0;
      tomSound.play();
      break;
    default:
      '';
  }
};

console.log(allDrumButtons, 'ggg');

let buttons = {};

allDrumButtons.forEach((soundBtn) => {
  buttons[soundBtn.dataset.sound] = soundBtn;
  soundBtn.addEventListener('click', () => {
    playSound(soundBtn.dataset.sound);
    // -------- cat animation---------
    if (
      soundBtn.dataset.sound === 'Q' ||
      soundBtn.dataset.sound === 'A' ||
      soundBtn.dataset.sound === 'Z'
    ) {
      document.querySelector('.cat__img').src = '/assets/images/cat_left.png';
    } else if (
      soundBtn.dataset.sound === 'W' ||
      soundBtn.dataset.sound === 'S' ||
      soundBtn.dataset.sound === 'X'
    ) {
      document.querySelector('.cat__img').src = '/assets/images/cat_right.png';
    } else if (
      soundBtn.dataset.sound === 'E' ||
      soundBtn.dataset.sound === 'D' ||
      soundBtn.dataset.sound === 'C'
    ) {
      document.querySelector('.cat__img').src = '/assets/images/cat_down.png';
    }

    setTimeout(() => {
      document.querySelector('.cat__img').src = '/assets/images/cat_up.png';
    }, 150);
  });
});

document.body.addEventListener('keypress', (e) => {
  playSound(e.key.toUpperCase());

  let oneButton = buttons[e.key.toUpperCase()];
  oneButton.classList.add('active');

  // -------- cat animation---------
  if (e.key === 'q' || e.key === 'a' || e.key === 'z') {
    document.querySelector('.cat__img').src = '/assets/images/cat_left.png';
  } else if (e.key === 'w' || e.key === 's' || e.key === 'x') {
    document.querySelector('.cat__img').src = '/assets/images/cat_right.png';
  } else if (e.key === 'e' || e.key === 'd' || e.key === 'c') {
    document.querySelector('.cat__img').src = '/assets/images/cat_down.png';
  }

  setTimeout(() => {
    oneButton.classList.remove('active');
    document.querySelector('.cat__img').src = '/assets/images/cat_up.png';
  }, 150);
});
