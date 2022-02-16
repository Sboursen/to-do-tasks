export default function createTaskElement(task) {
  const tmpWrapper = document.createElement('div');
  const taskStringElement = `<li class="task" id="task-${
    task.index
  }">
                <input type="checkbox" name="check-${
  task.index
}" id="check-${task.index}" ${
  task.completed ? 'checked' : null
}>
                <span class="description" id="description-${
  task.index
}">${task.description}</span>
                <button type="button" class="icon" id="button-${
  task.index
}">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </li>`;
  tmpWrapper.innerHTML = taskStringElement.trim();
  return tmpWrapper.firstElementChild;
}
