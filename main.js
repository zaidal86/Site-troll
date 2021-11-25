const rotate = document.getElementById('rotate');
const random = document.getElementById('random');
const link = document.getElementById('text');
const screen = document.getElementById('screen');
const box = document.getElementById('box');
const textRotate = document.getElementById('textRotate');
const textRandom = document.getElementById('textRandom');
const textLink = document.getElementById('textLink');
let checkedRotate,
  checkedRandom,
  started,
  imgURL;


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const start = () => {
  if (rotate.checked === true) {
    checkedRotate = true;
  } else {
    checkedRotate = false;
  };
  if (random.checked === true) {
    checkedRandom = true;
  } else {
    checkedRandom = false;
  };
  if (link.value.length > 8) {
    if (checkedRandom === true || checkedRotate === true) {
      imgURL = link.value;
      screen.style = 'opacity:1';
      textRotate.innerHTML = `La Rotation est: <span id="${checkedRotate}">${checkedRotate}</span>`;
      textRandom.innerHTML = `Le Random est: <span id="${checkedRandom}">${checkedRandom}</span>`;
      textLink.innerHTML = `Le lien: <span id="link">${link.value}</span>`;
      box.remove();
    } else {
      alert('Il faut au moins 1 des 2 cocher');
    };
  } else {
    alert('Entre un lien !');
  };
};

const run = async () => {
  document.getElementById('screen').remove();
  if (checkedRotate === true && checkedRandom === false) {
    AddIMGRotate();
  };
  if (checkedRandom === true && checkedRotate === false) {
    AddIMGrandom();
    randomFunction();
  };
  if (checkedRotate === true && checkedRandom === true) {
    AddIMGrotateXrandom();
    randomFunction();
  };
  await sleep(10);
  started = true;
};

const AddIMGrandom = () => {
  const img = document.createElement('img');
  img.setAttribute('src', imgURL);
  img.setAttribute('class', 'random');
  img.setAttribute('style', "position:absolute;");
  document.querySelector('body').appendChild(img);
};

const AddIMGRotate = () => {
  const img = document.createElement('img');
  img.setAttribute('src', imgURL);
  img.setAttribute('style', "animation: 1s rond linear infinite");
  document.querySelector('body').appendChild(img);
};

const AddIMGrotateXrandom = () => {
  const img = document.createElement('img');
  img.setAttribute('src', imgURL);
  img.setAttribute('class', 'random');
  img.setAttribute('style', "position:absolute; animation: 1s rond linear infinite");
  document.querySelector('body').appendChild(img);
};

const randomFunction = () => {
  let number = document.getElementsByClassName('random');
  for (let i = 0; i < number.length; i++) {
    let x = Math.random() * 1920;
    let y = Math.random() * 1080;
    number[i].style.setProperty('--x', `${x}px`);
    number[i].style.setProperty('--y', `${y}px`);
  }
  setTimeout(randomFunction, 100);
};

addEventListener('click', (e) => {
  if (started) {
    if (checkedRotate === true && checkedRandom === false) {
      AddIMGRotate();
    };
    if (checkedRandom === true && checkedRotate === false) {
      AddIMGrandom();
      randomFunction();
    };
    if (checkedRotate === true && checkedRandom === true) {
      AddIMGrotateXrandom();
      randomFunction();
    };
  };
})