import * as dom from './dom-elements';
import LocalStorage from './local-storage';
import Task from './task';
import createTaskElement, {
  allocateSpaceForToDOList,
  getCheckedTaskElementId,
} from './task-element-utils';

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
  }

  doOnCheckboxChecked = (e) => {
    const id = e.target.id.split('-')[1];
    const task =
      this.storageManagement.readLocalStorage()[id];
    this.storageManagement.changeTaskStatus(
      task,
      e.target.checked,
    );
  };

  doOnDescriptionInputChanged = (e) => {
    const id = e.target.id.split('-')[1];
    const task =
      this.storageManagement.readLocalStorage()[id];
    this.storageManagement.changeTaskDescription(
      task,
      e.target.value,
    );
  };

  doOnDeleteButtonClicked = (e) => {
    const button = e.currentTarget;
    if (button.id.split('-')[0] === 'deleteButton') {
      const id = button.id.split('-')[1];
      const remainingTasks = this.storageManagement
        .readLocalStorage()
        .filter((task) => task.index !== +id);
      console.log(
        this.storageManagement
          .readLocalStorage()
          .filter((task) => task.index !== +id),
        id,
      );
      this.storageManagement.updateLocalStorage(
        remainingTasks,
      );
      this.displayUpdatedList();
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

    this.checkBoxes.forEach((checkbox) =>
      checkbox.addEventListener(
        'click',
        this.doOnCheckboxChecked,
      ),
    );
    this.descriptionInputs.forEach((input) =>
      input.addEventListener(
        'input',
        this.doOnDescriptionInputChanged,
      ),
    );
    this.deleteButtons.forEach((button) =>
      button.addEventListener(
        'click',
        this.doOnDeleteButtonClicked,
      ),
    );
  };

  sortTasks = (toDoTasks) =>
    toDoTasks.sort((obj1, obj2) => obj1.index - obj2.index);

  initializeApplication = () => {
    this.storageManagement.initializeLocalStorage();
    const toDoTasks =
      this.storageManagement.readLocalStorage();

    allocateSpaceForToDOList(this.listElement);

    this.sortTasks(toDoTasks).forEach((task) => {
      const taskElement = createTaskElement(task);
      this.listElement.appendChild(taskElement);
    });
    this.addEventsToDynamicElements();
  };

  addNewTaskToList = (task) => {
    this.storageManagement.addToLocalStorage(task);
    const newTask = createTaskElement(task);
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
    this.addNewTaskToList(this.createNewTask());
    this.clearTaskInput();
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

  getRemainingTasks = (checkedTasksIds) =>
    this.storageManagement
      .readLocalStorage()
      .filter((t, i) => !checkedTasksIds.includes(i));

  updateIndices = (remainingTasks) => {
    remainingTasks.forEach((task, index) => {
      task.index = index;
    });
    return remainingTasks;
  };

  removeTaskFromList = (checkedTasksIds) => {
    const remainingTasks =
      this.getRemainingTasks(checkedTasksIds);
    const updatedRemainingTasks =
      this.updateIndices(remainingTasks);
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
