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

const toDoList = document.querySelector('to-do-list');
const displayTasks = (e) => {
  if (e.currentTarget.classList.contains('to-do-list')) {
    toDoTasks.forEach((task) => {
      console.log(task);
    });
  }
};
toDoList.addEventListener('DOMContentLoaded', displayTasks);
