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
  });
});

document.body.addEventListener('keypress', (e) => {
  playSound(e.key.toUpperCase());

  let oneButton = buttons[e.key.toUpperCase()];
  oneButton.classList.add('active');

  setTimeout(() => {
    oneButton.classList.remove('active');
  }, 150);
});
