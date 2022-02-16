export function getCheckedTaskElementId(taskElement) {
  let res = -1;
  if (taskElement.children[0].checked === true) {
    res = Number(taskElement.id.split('-')[1]);
  }
  return res;
}

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
  const description = checkbox.parentNode.children[1];
  if (checkbox.checked) {
    description.style.textDecoration = 'line-through';
  } else {
    description.style.textDecoration = 'none';
  }
  checkbox.addEventListener('click', onCheckboxToggle);
}

function onDescriptionInputFocused(e) {
  const taskElement = e.target.parentNode.parentNode;
  const moveButton = taskElement.querySelector(
    'button.move-button',
  );
  const deleteButton = taskElement.querySelector(
    'button.delete-button',
  );
  moveButton.style.zIndex = '-1';
  deleteButton.style.zIndex = '1';
  taskElement.style.backgroundColor = '#b99a7d';
}

function onDescriptionInputBlured(e) {
  const taskElement = e.target.parentNode.parentNode;
  const moveButton = taskElement.querySelector(
    'button.move-button',
  );
  const deleteButton = taskElement.querySelector(
    'button.delete-button',
  );
  moveButton.style.zIndex = '1';
  deleteButton.style.zIndex = '-1';
  taskElement.style.backgroundColor = 'transparent';
}

function addInputFocusEvent(taskElement) {
  const moveButton = taskElement.querySelector(
    'button.move-button',
  );

  const deleteButton = taskElement.querySelector(
    'button.delete-button',
  );

  const descriptionInput = taskElement.querySelector(
    'label.description > input',
  );

  descriptionInput.addEventListener(
    'focus',
    onDescriptionInputFocused,
  );

  descriptionInput.addEventListener(
    'blur',
    onDescriptionInputBlured,
  );
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
        <label for="description" class="description">
          <input type="text" name="description" value="${
            task.description
          }" id="description-${task.index}">
        </label>
        <button type="button" class="icon move-button" id="moveButton-${
          task.index
        }">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <button type="button" class="icon delete-button" id="deleteButton-${
          task.index
        }">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>`;
  tmpWrapper.innerHTML = taskStringElement.trim();

  const taskElement = tmpWrapper.firstElementChild;
  addCheckEvent(taskElement);
  addInputFocusEvent(taskElement);

  return taskElement;
}

export function allocateSpaceForToDOList(toDoList) {
  toDoList.style.gridTemplateRows = `repeat(${
    Object.keys(toDoList).length
  }, 48px);`;
}

