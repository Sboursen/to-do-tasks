import './style.css';
import CRUD from './components/crud-operations';

const crud = new CRUD();

window.addEventListener(
  'DOMContentLoaded',
  crud.initializeApplication,
);
