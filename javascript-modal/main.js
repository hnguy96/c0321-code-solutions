var $openModalBtn = document.querySelector('.open-modal-btn');
var $modalContainer = document.querySelector('.modal-container');
var $noBtn = document.querySelector('.no-btn');

function showModal(event) {
  $modalContainer.classList.remove('hidden');
}

function hideModal(event) {
  $modalContainer.classList.add('hidden');
}

$openModalBtn.addEventListener('click', showModal);

$noBtn.addEventListener('click', hideModal);
