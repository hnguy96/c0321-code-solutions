var $openModalBtn = document.querySelector('.open-modal-btn');
var $modalContainer = document.querySelector('.modal-container');
var $noBtn = document.querySelector('.no-btn');

function showModal(event) {
  $modalContainer.classList.replace('hidden', 'show');
}

function hideModal(event) {
  $modalContainer.classList.replace('show', 'hidden');
}

$openModalBtn.addEventListener('click', showModal);

$noBtn.addEventListener('click', hideModal);
