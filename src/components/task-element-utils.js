function onCheckboxToggle(e) {
  const checkbox = e.currentTarget;
  const description = checkbox.parentNode.children[1];
  if (checkbox.checked) {
    description.style.textDecoration = 'line-through';
  } else {
    description.style.textDecoration = 'none';
  }
}

function addCheckEvent(taskElement) {
  const checkbox = taskElement.querySelector(
    'input[type="checkbox"]',
  );
  checkbox.addEventListener('click', onCheckboxToggle);
}

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

  const taskElement = tmpWrapper.firstElementChild;
  addCheckEvent(taskElement);

  return taskElement;
}

export function allocateSpaceForToDOList(toDoList) {
  toDoList.style.gridTemplateRows = `repeat(${
    Object.keys(toDoList).length
  }, 48px);`;
}
