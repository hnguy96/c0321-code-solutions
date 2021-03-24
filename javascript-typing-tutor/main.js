var $letter = document.querySelector('span');

function getLetter(event) {
  for (var i = 0; i < $letter.length; i++) {
    switch (event.key) {
      case 'g': $letter.classList.add('correct');
        break;
      default: $letter.classList.add('incorrect');
    }
  }
}

$letter.addEventListener('keydown', getLetter);
