var $background = document.querySelector('.container');
var $lightBulb = document.querySelector('.button');

$lightBulb.addEventListener('click', function (event) {
  $lightBulb.classList.toggle('btn-on');
  $background.classList.toggle('bg-on');
});
