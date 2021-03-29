var $letters = document.querySelectorAll('.letter');
var index = 0;

$letters[index].classList.add('underline');

document.addEventListener('keydown', function (event) {
  if (event.key === $letters[index].textContent) {
    $letters[index].className = 'correct';
    index++;
  } else {
    $letters[index].className = 'incorrect';
  }
  $letters[index].classList.add('underline');
});
