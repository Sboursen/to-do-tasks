export default class LocalStorage {
  constructor() {
    this.toDoTasks = [];
  }

  initializeLocalStorage = () => {
    if (!localStorage.getItem('toDoTasks')) {
      localStorage.setItem('toDoTasks', this.toDoTasks);
    } else {
      this.toDoTasks = localStorage.getItem('toDoTasks');
    }
  };

  updateLocalStorage = (toDoTasks) => {
    this.toDoTasks = toDoTasks;
    localStorage.setItem('toDoTasks', this.toDoTasks);
  };

  readLocalStorage = () => {
    this.toDoTasks = localStorage.getItem('toDoTasks');
    return this.toDoTasks;
  };
}
