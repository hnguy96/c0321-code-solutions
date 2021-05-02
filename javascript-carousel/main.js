var $images = document.querySelectorAll('img');
var $nextBtn = document.querySelector('.fa-chevron-right');
var $prevBtn = document.querySelector('.fa-chevron-left');
var $circleNav = document.querySelector('.circle-icon-wrapper');
var timerId = null;

timerId = setInterval(showNextImage, 3000);

function showNextImage(event) {
  clearInterval(timerId);
  for (var i = 0; i < $images.length; i++) {
    if (!$images[i].className && $images[i] !== $images[$images.length - 1]) {
      $images[i].className = 'hidden';
      $images[i + 1].classList.remove('hidden');
      $circleNav.children[i].className = 'far fa-circle';
      $circleNav.children[i + 1].className = 'fas fa-circle';
      break;
    } else if ($images[i] === $images[$images.length - 1]) {
      $images[i].className = 'hidden';
      $images[0].classList.remove('hidden');
      $circleNav.children[i].className = 'far fa-circle';
      $circleNav.children[0].className = 'fas fa-circle';
    }
  }
  timerId = setInterval(showNextImage, 3000);
}

function showPrevImage(event) {
  for (var i = $images.length - 1; i >= 0; i--) {
    if (!$images[i].className && $images[i] !== $images[0]) {
      $images[i].className = 'hidden';
      $images[i - 1].classList.remove('hidden');
      $circleNav.children[i].className = 'far fa-circle';
      $circleNav.children[i - 1].className = 'fas fa-circle';
      break;
    } else if ($images[i] === $images[0]) {
      $images[i].className = 'hidden';
      $images[$images.length - 1].classList.remove('hidden');
      $circleNav.children[i].className = 'far fa-circle';
      $circleNav.children[$circleNav.children.length - 1].className = 'fas fa-circle';
    }
  }
}

$nextBtn.addEventListener('click', showNextImage);
$prevBtn.addEventListener('click', showPrevImage);
