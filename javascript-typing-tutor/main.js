var $letters = document.querySelectorAll('.letter');
var index = 0;

$letters[index].classList.add('underline');

document.addEventListener('keydown', function (event) {

  if (event.key === $letters[index].textContent) {
    $letters[index].className = 'correct';
    index++;
  } else if ($letters[index].className === 'letter space underline' && event.code === 'Space') {
    $letters[index].className = 'correct';
    index++;
  } else {
    if ($letters[index].className === 'letter space underline') {
      $letters[index].className = 'letter space';
    } else {
      if ($letters[index].className === 'letter space underline') {
        $letters[index].className = 'underline-incorrect';
      }
      $letters[index].className = 'incorrect';
    }
  }
  $letters[index].classList.add('underline');
});
