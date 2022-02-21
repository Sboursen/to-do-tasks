import * as dom from './dom-elements';
import LocalStorage from './local-storage';
import Task from './task';
import createTaskElement, {
  allocateSpaceForToDOList,
  getCheckedTaskElementId,
  enableClearButton,
  toggleShake,
  validateInputWithColor,
} from './task-element-utils';
import * as utils from './utils';

export default class CRUD {
  constructor() {
    this.storageManagement = new LocalStorage();
    this.listElement = dom.toDoList;
    this.clearButton = dom.clearButton;
    this.newTaskInput = dom.newTaskInput;
    this.addButton = dom.addButton;
    this.checkBoxes = document.querySelectorAll(
      'li input[type="checkbox"]',
    );
    this.descriptionInputs = document.querySelectorAll(
      'li input[type="text"]',
    );
    this.deleteButtons = document.querySelectorAll(
      'li button.delete-button',
    );
    this.moveButtons = document.querySelectorAll(
      'li button.move-button',
    );

    // event listeners
    this.addButton.addEventListener(
      'click',
      this.onAddButtonClicked,
    );

    this.clearButton.addEventListener(
      'click',
      this.onClearButtonClicked,
    );

    this.newTaskInput.addEventListener(
      'input',
      this.onTaskInputValueChanged,
    );

    this.newTaskInput.addEventListener(
      'keydown',
      this.doOnEnterPressed,
    );
  }

  doOnEnterPressed = (e) => {
    if (e.keyCode === 13) {
      if (utils.isValid(this.newTaskInput.value)) {
        this.newTaskInput.classList.add('not-valid');
        this.newTaskInput.classList.remove('valid');
        enableClearButton();
      }
      this.onAddButtonClicked();
    }
  };

  doOnCheckboxChecked = (e) => {
    const id = e.target.id.split('-')[1];
    const task = this.storageManagement.readLocalStorage()[id];
    this.storageManagement.changeTaskStatus(
      task,
      e.target.checked,
    );
  };

  doOnDescriptionInputChanged = (e) => {
    const id = e.target.id.split('-')[1];
    const task = this.storageManagement.readLocalStorage()[id];
    this.storageManagement.changeTaskDescription(
      task,
      e.target.value,
    );
  };

  doOnDeleteButtonClicked = (e) => {
    const button = e.currentTarget;
    if (button.id.split('-')[0] === 'deleteButton') {
      const id = button.id.split('-')[1];
      let remainingTasks = this.storageManagement
        .readLocalStorage()
        .filter((task) => task.index !== +id);
      remainingTasks = this.storageManagement.resetIndices(remainingTasks);
      this.storageManagement.updateLocalStorage(
        remainingTasks,
      );
      this.displayUpdatedList();
      enableClearButton();
    }
  };

  addEventsToDynamicElements = () => {
    this.checkBoxes = document.querySelectorAll(
      'li input[type="checkbox"]',
    );
    this.descriptionInputs = document.querySelectorAll(
      'li input[type="text"]',
    );
    this.deleteButtons = document.querySelectorAll(
      'li button.delete-button',
    );
    this.moveButtons = document.querySelectorAll(
      'li button.move-button',
    );

    this.checkBoxes.forEach((checkbox) => checkbox.addEventListener(
      'click',
      this.doOnCheckboxChecked,
    ));
    this.descriptionInputs.forEach((input) => input.addEventListener(
      'input',
      this.doOnDescriptionInputChanged,
    ));
    this.deleteButtons.forEach((button) => button.addEventListener(
      'click',
      this.doOnDeleteButtonClicked,
    ));
  };

  onTaskInputValueChanged = () => {
    if (!utils.isValid(this.newTaskInput.value)) {
      this.newTaskInput.classList.add('not-valid');
      this.newTaskInput.classList.remove('valid');
      enableClearButton();
    } else {
      this.newTaskInput.classList.remove('not-valid');
      this.newTaskInput.classList.add('valid');
      enableClearButton();
    }
  };

  initializeApplication = () => {
    this.storageManagement.initializeLocalStorage();
    const toDoTasks = this.storageManagement.readLocalStorage();

    allocateSpaceForToDOList(this.listElement);

    utils.sortTasks(toDoTasks).forEach((task) => {
      const taskElement = createTaskElement(task);
      this.listElement.appendChild(taskElement);
    });
    this.addEventsToDynamicElements();
  };

  addEventsToTaskElement = (newTask) => {
    const checkbox = newTask.querySelector(
      'input[type="checkbox"]',
    );
    const input = newTask.querySelector(
      'input[type="text"]',
    );
    const button = newTask.querySelector(
      'button.delete-button',
    );

    checkbox.addEventListener(
      'click',
      this.doOnCheckboxChecked,
    );

    input.addEventListener(
      'input',
      this.doOnDescriptionInputChanged,
    );

    button.addEventListener(
      'click',
      this.doOnDeleteButtonClicked,
    );
  };

  isInputValid = (inputValue) => {
    let result = true;
    const existingTasksDescriptions = this.storageManagement
      .readLocalStorage()
      .map((td) => td.description);
    if (utils.isEmpty(inputValue)) {
      result = false;
    } else if (!utils.isValid(inputValue)) {
      result = false;
    } else if (
      utils.isDuplicate(
        inputValue,
        existingTasksDescriptions,
      )
    ) {
      result = false;
    }
    return result;
  };

  addNewTaskToList = (task) => {
    this.storageManagement.addToLocalStorage(task);
    const newTask = createTaskElement(task);
    this.addEventsToTaskElement(newTask);
    this.listElement.appendChild(newTask);
  };

  createNewTask = () => {
    const description = this.newTaskInput.value;
    const index = this.storageManagement.toDoTasks.length;
    const newTask = new Task(index, description);
    return newTask;
  };

  clearTaskInput = () => {
    this.newTaskInput.value = '';
  };

  onAddButtonClicked = () => {
    if (this.isInputValid(this.newTaskInput.value)) {
      this.addNewTaskToList(this.createNewTask());
      validateInputWithColor(this.newTaskInput, true);
      this.clearTaskInput();
    } else {
      toggleShake(this.newTaskInput);
      validateInputWithColor(this.newTaskInput, false);
    }
  };

  getToBeDeletedTaskList = () => {
    const checkedTasksIds = [];
    const taskElements = [].slice.call(
      this.listElement.children,
    );

    taskElements.forEach((taskElement) => {
      const id = getCheckedTaskElementId(taskElement);
      if (id >= 0) {
        checkedTasksIds.push(id);
      }
    });
    return checkedTasksIds;
  };

  clearList = () => {
    this.listElement.innerHTML = '';
  };

  displayUpdatedList = () => {
    this.clearList();
    this.initializeApplication();
  };

  getRemainingTasks = (checkedTasksIds) => this.storageManagement
    .readLocalStorage()
    .filter((t, i) => !checkedTasksIds.includes(i));

  updateIndices = (remainingTasks) => {
    remainingTasks.forEach((task, index) => {
      task.index = index;
    });
    return remainingTasks;
  };

  removeTaskFromList = (checkedTasksIds) => {
    const remainingTasks = this.getRemainingTasks(checkedTasksIds);
    const updatedRemainingTasks = this.updateIndices(remainingTasks);
    this.storageManagement.updateLocalStorage(
      updatedRemainingTasks,
    );
    this.displayUpdatedList();
  };

  onClearButtonClicked = () => {
    const checkedTasksIds = this.getToBeDeletedTaskList();
    this.removeTaskFromList(checkedTasksIds);
  };
}
