var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (e) {
  console.log('e.target: ', e.target);
  console.log('e.target.tagName: ', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    var taskList = e.target.closest('.task-list-item');
    console.log(taskList);
    taskList.remove();
  }
});
