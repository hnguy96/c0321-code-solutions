var $heading = document.querySelector('h1');

function countdown() {
  window.setInterval(changeText, 2000);
}

function changeText() {
  if ($heading.textContent === '4') {
    $heading.textContent = '3';
  } else if ($heading.textContent === '3') {
    $heading.textContent = '2';
  } else if ($heading.textContent === '2') {
    $heading.textContent = '1';
  } else if ($heading.textContent === '1') {
    $heading.textContent = 'Earth Beeeelooowww Us~';
  }
}

countdown();
