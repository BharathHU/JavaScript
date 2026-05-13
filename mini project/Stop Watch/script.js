let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

const display = document.getElementById("display");

function updateDisplay() {

  let hr = hours < 10 ? "0" + hours : hours;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  display.innerText = `${hr} : ${min} : ${sec} : ${ms}`;
}

function stopwatch() {

  milliseconds++;

  if(milliseconds == 100){
    milliseconds = 0;
    seconds++;
  }

  if(seconds == 60){
    seconds = 0;
    minutes++;
  }

  if(minutes == 60){
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", () => {

  if(timer !== null) return;

  timer = setInterval(stopwatch, 10);
});

document.getElementById("stopBtn").addEventListener("click", () => {

  clearInterval(timer);
  timer = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {

  clearInterval(timer);
  timer = null;

  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  updateDisplay();
});