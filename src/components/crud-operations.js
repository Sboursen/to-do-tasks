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
