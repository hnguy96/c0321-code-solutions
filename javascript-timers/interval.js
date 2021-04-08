var $heading = document.querySelector('h1');
var timerID = null;
var countdown = 4;

function changeText() {
  countdown--;
  if (countdown >= 1) {
    $heading.textContent = countdown;
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerID);
  }
}

timerID = setInterval(changeText, 2000);
