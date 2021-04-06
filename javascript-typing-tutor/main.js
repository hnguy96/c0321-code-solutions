var $letters = document.querySelectorAll('.letter');
var index = 0;

$letters[index].classList.add('underline');

document.addEventListener('keydown', function (event) {
  if (event.key === $letters[index].textContent) {
    $letters[index].className = 'correct';
    index++;
  } else if ($letters[index].className.includes('space') && event.code === 'Space') {
    $letters[index].className = 'correct';
    index++;
  } else if (!$letters[index].className.includes('space')) {
    $letters[index].className = 'incorrect';
  } else {
    $letters[index].className = 'incorrect space';
  }
  $letters[index].classList.add('underline');
});
