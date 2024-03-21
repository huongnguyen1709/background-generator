var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const generateBtn = document.querySelector('.button-40');

randomGradientBg();

function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

// setGradient();

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background + ';';
}

function randomGradientBg() {
  color1.value = randomHexColorCode();
  color2.value = randomHexColorCode();
  setGradient();
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

generateBtn.addEventListener('click', randomGradientBg);
