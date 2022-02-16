import * as dom from './dom-elements';
import LocalStorage from './local-storage';
import Task from './task';
import createTaskElement from './task-element-utils';

export default class CRUD {
  constructor() {
    this.storageManagement = new LocalStorage();
    this.listElement = dom.toDoList;
  }

  sortTasks = () => {
    this.storageManagement.toDoTasks.sort(
      (obj1, obj2) => obj1.index - obj2.index,
    );
  }

  initializeApplication = () => {
    this.storageManagement.initializeLocalStorage();
    this.storageManagement
      .readLocalStorage()
      .sortTasks().forEach((task) => {
        const taskElement = createTaskElement(task);
        this.listElement.appendChild(taskElement);
      });
  };
}



// export default function initializeApplication() {
//   toDoTasks
//     .sort((obj1, obj2) => obj1.index - obj2.index)
//     .forEach((task) => {
//       const li = `<li class="task">
//                 <input type="checkbox" name="check-${
//                   task.index
//                 }" id="${task.index}" ${
//         task.completed ? 'checked' : null
//       }>
//                 <span class="description">${
//                   task.description
//                 }</span>
//                 <button type="button" class="icon">
//                   <i class="fa-solid fa-ellipsis-vertical"></i>
//                 </button>
//               </li>`;

//       dom.toDoList.innerHTML += `\n ${li}`;
//     });
// }
