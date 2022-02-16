import * as dom from './dom-elements';
import LocalStorage from './local-storage';
import Task from './task';
import createTaskElement from './task-element-utils';

export default class CRUD {
  constructor() {
    this.storageManagement = new LocalStorage();
    this.listElement = dom.toDoList;
    this.clearButton = dom.clearButton;
    this.newTaskInput = dom.newTaskInput;
    this.addButton = dom.addButton;

    // event listeners
    this.addButton.addEventListener(
      'click',
      this.onAddButtonClicked,
    );
  }

  sortTasks = (toDoTasks) =>
    toDoTasks.sort((obj1, obj2) => obj1.index - obj2.index);

  initializeApplication = () => {
    this.storageManagement.initializeLocalStorage();
    const toDoTasks =
      this.storageManagement.readLocalStorage();

    this.sortTasks(toDoTasks).forEach((task) => {
      const taskElement = createTaskElement(task);
      this.listElement.appendChild(taskElement);
    });
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

  onAddButtonClicked = (e) => {
    this.addNewTaskToList(this.createNewTask());
    this.clearTaskInput();
  };
}
