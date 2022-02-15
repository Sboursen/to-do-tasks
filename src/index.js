import './style.css';

const toDoTasks = [
  {
    description: 'Play guitar',
    completed: false,
    index: 0,
  },
  {
    description: 'Eat ice cream',
    completed: false,
    index: 1,
  },
  {
    description: 'Watch a movie',
    completed: false,
    index: 2,
  },
  {
    description: 'Hangout with friends',
    completed: false,
    index: 3,
  },
];

const toDoList = document.querySelector('.to-do-list');
toDoList.style.gridTemplateRows = `repeat(${
  Object.keys(toDoTasks).length
}, 48px);`;
console.log(Object.keys(toDoTasks).length);
const displayTasks = () => {
  toDoTasks.forEach((task) => {
    let li = `<li class="task">
                <input type="checkbox" name="check-${
                  task.index
                }" id="${task.index}" ${
      task.completed ? 'checked' : null
    }>
                <span class="description">${
                  task.description
                }</span>
                <button type="button" class="icon">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </li>`;

    toDoList.innerHTML += `\n ${li}`;
  });
};
window.addEventListener('DOMContentLoaded', displayTasks);
