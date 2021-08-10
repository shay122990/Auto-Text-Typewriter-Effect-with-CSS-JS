const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = "Let us take you on a HERO tour..."
let index = 1;
let speed = 150 / speedEl.value;

textEffect()

function textEffect(){
  textEl.innerText = text.slice(0, index)
  index++
  if (index > text.length) {
    index = 1
  }
  setTimeout(textEffect, speed)
}

speedEl.addEventListener('input', (e)=> speed = 150/e.target.value)
