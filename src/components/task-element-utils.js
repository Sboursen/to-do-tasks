import * as utils from './utils';
import { clearButton, newTaskInput } from './dom-elements';

export function getCheckedTaskElementId(taskElement) {
  let res = -1;
  if (taskElement.children[0].checked === true) {
    res = Number(taskElement.id.split('-')[1]);
  }
  return res;
}

export function toggleShake(element) {
  element.classList.toggle('lost-focus-with-errors');
}

export function validateInputWithColor(element, isValid) {
  if (isValid) {
    element.classList.remove('not-valid');
    element.classList.add('valid');
  } else {
    element.classList.remove('valid');
    element.classList.add('not-valid');
  }
}

export function enableClearButton() {
  clearButton.disabled = false;
}

function disableClearButton() {
  clearButton.disabled = true;
}

function onCheckboxToggle(e) {
  const checkbox = e.currentTarget;
  const description = checkbox.parentNode.children[1];
  if (checkbox.checked) {
    description.style.textDecoration = 'line-through';
  } else {
    description.style.textDecoration = 'none';
  }
  enableClearButton();
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
  const descriptionInput = e.target;
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

  if (
    utils.isEmpty(descriptionInput.value) ||
    !utils.isValid(descriptionInput.value)
  ) {
    toggleShake(descriptionInput);
    descriptionInput.focus();
    disableClearButton();
  } else {
    enableClearButton();
  }
}

function onDescriptionInputChanged(e) {
  const descriptionInput = e.target;
  if (
    utils.isEmpty(descriptionInput.value) ||
    !utils.isValid(descriptionInput.value)
  ) {
    descriptionInput.classList.add('not-valid');
    descriptionInput.classList.remove('valid');
    disableClearButton();
  } else {
    descriptionInput.classList.remove('not-valid');
    descriptionInput.classList.add('valid');
    enableClearButton();
  }
}

function addInputEvents(taskElement) {
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

  descriptionInput.addEventListener(
    'input',
    onDescriptionInputChanged,
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
  addInputEvents(taskElement);
  return taskElement;
}

export function allocateSpaceForToDOList(toDoList) {
  toDoList.style.gridTemplateRows = `repeat(${
    Object.keys(toDoList).length
  }, 48px);`;
}
