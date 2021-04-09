var $images = document.querySelectorAll('img');
var $nextIcon = document.querySelector('.fa-chevron-right');
var $prevIcon = document.querySelector('.fa-chevron-left');

setInterval(showNextImage, 3000);

function showNextImage(event) {
  for (var i = 0; i < $images.length; i++) {
    if (!$images[i].className && $images[i] !== $images[$images.length - 1]) {
      $images[i].className = 'hidden';
      $images[i + 1].classList.remove('hidden');
      break;
    } else if ($images[i] === $images[$images.length - 1]) {
      $images[i].className = 'hidden';
      $images[0].classList.remove('hidden');
    }

  }
}

function showPrevImage(event) {
  for (var i = $images.length - 1; i >= 0; i--) {
    if (!$images[i].className && $images[i] !== $images[0]) {
      $images[i].className = 'hidden';
      $images[i - 1].classList.remove('hidden');
      break;
    } else if ($images[i] === $images[0]) {
      $images[i].className = 'hidden';
      $images[$images.length - 1].classList.remove('hidden');
    }
  }
}

$nextIcon.addEventListener('click', showNextImage);
$prevIcon.addEventListener('click', showPrevImage);
