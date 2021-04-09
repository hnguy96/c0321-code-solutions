var $images = document.querySelectorAll('img');
var $nextBtn = document.querySelector('.fa-chevron-right');
var $prevBtn = document.querySelector('.fa-chevron-left');
var $circleNav = document.querySelector('.circle-icon-wrapper');
// console.log('circlenav', $circleNav);
var timerId = null;

// setInterval(selectCircleNav, 3000);
timerId = setInterval(showNextImage, 3000);

function showNextImage(event) {
  clearInterval(timerId);
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
  timerId = setInterval(showNextImage, 3000);
  // selectCircleNav('next');
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
  // selectCircleNav('prev');
}

// function selectCircleNav(change) {
//   if (change === 'next') {
//     for (var i = 0; i < $circleNav.length; i++) {
//       if ($images[i] !== $images[$images.length - 1]) {
//         $circleNav[i + 1].className = 'far fa-circle';
//         break;
//       }
//     }
//   }
// }

$nextBtn.addEventListener('click', showNextImage);
$prevBtn.addEventListener('click', showPrevImage);
