import './style.css';
import Task from './components/task';
import displayTasks, * as crud from './components/crud-operations';

let myTask = new Task('Play guitar', false, 67);

window.addEventListener('DOMContentLoaded', displayTasks);
