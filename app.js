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

const recordBtn = document.getElementById('1');
const stopBtn = document.getElementById('2');
const clearBtn = document.getElementById('3');
const playBtn = document.getElementById('4');

document.querySelector('.cat__img').src = '/assets/images/cat_up.png';

let channel = [];
let isRecording = false;
let recordingStartTime;

recordBtn.addEventListener('click', () => {
  isRecording = true;

  if (channel.length === 0) {
    recordingStartTime = +new Date();
  }
  console.log(isRecording, 'hhhh');
});

stopBtn.addEventListener('click', () => {
  isRecording = false;
  console.log(isRecording, 'hhhh');
});

clearBtn.addEventListener('click', () => {
  channel = [];
  console.log(isRecording, 'hhhh');
});

playBtn.addEventListener('click', () => {
  playSong();
});

const playSong = () => {
  if (channel.length === 0) return;

  channel.forEach((note) => {
    setTimeout(() => {
      playSound(note.key);
    }, note.startTime);
  });
};

const playSound = (sound) => {
  if (isRecording === true) {
    channel.push({ key: sound, startTime: +new Date() - recordingStartTime });

    console.log(sound, 'notesq');

    console.log('ffff', channel);
  }
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
