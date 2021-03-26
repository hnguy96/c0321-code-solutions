var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {

  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      $tab[i].classList.remove('active');
      if ($tab[i] === e.target) {
        $tab[i].className = $tab[i].className + ' active';

        var dataView = $tab[i].getAttribute('data-view');

        for (var k = 0; k < $view.length; k++) {
          $view[k].classList.remove('hidden');
          if ($view[k].dataset.view !== dataView) {
            $view[k].className = $view[k].className + ' hidden';
          }
        }
      }
    }
  }
});
