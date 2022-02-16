export default class LocalStorage {
  constructor() {
    this.toDoTasks = [];
  }

  initializeLocalStorage = () => {
    if (!localStorage.getItem('toDoTasks')) {
      this.toDoTasks = [];
      localStorage.setItem(
        'toDoTasks',
        JSON.stringify(this.toDoTasks),
      );
    } else {
      this.toDoTasks = JSON.parse(
        localStorage.getItem('toDoTasks'),
      );
    }
  };

  updateLocalStorage = (toDoTasks) => {
    this.toDoTasks = toDoTasks;
    localStorage.setItem(
      'toDoTasks',
      JSON.stringify(this.toDoTasks),
    );
  };

  addToLocalStorage = (task) => {
    this.toDoTasks.push(task);
    localStorage.setItem(
      'toDoTasks',
      JSON.stringify(this.toDoTasks),
    );
  };

  changeTaskStatus = (task, status) => {
    this.toDoTasks[task.index].completed = status;
    console.log(this.toDoTasks[task.index].completed);
    localStorage.setItem(
      'toDoTasks',
      JSON.stringify(this.toDoTasks),
    );
  };

  readLocalStorage = () => {
    this.toDoTasks = JSON.parse(
      localStorage.getItem('toDoTasks'),
    );
    return this.toDoTasks;
  };
}
