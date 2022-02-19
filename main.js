/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/crud-operations.js":
/*!*******************************************!*\
  !*** ./src/components/crud-operations.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CRUD)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/components/dom-elements.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ "./src/components/local-storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/components/task.js");
/* harmony import */ var _task_element_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-element-utils */ "./src/components/task-element-utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CRUD = /*#__PURE__*/_createClass(function CRUD() {
  var _this = this;

  _classCallCheck(this, CRUD);

  _defineProperty(this, "doOnCheckboxChecked", function (e) {
    var id = e.target.id.split('-')[1];

    var task = _this.storageManagement.readLocalStorage()[id];

    _this.storageManagement.changeTaskStatus(task, e.target.checked);
  });

  _defineProperty(this, "doOnDescriptionInputChanged", function (e) {
    var id = e.target.id.split('-')[1];

    var task = _this.storageManagement.readLocalStorage()[id];

    _this.storageManagement.changeTaskDescription(task, e.target.value);
  });

  _defineProperty(this, "doOnDeleteButtonClicked", function (e) {
    var button = e.currentTarget;

    if (button.id.split('-')[0] === 'deleteButton') {
      var id = button.id.split('-')[1];

      var remainingTasks = _this.storageManagement.readLocalStorage().filter(function (task) {
        return task.index !== +id;
      });

      remainingTasks = _this.storageManagement.resetIndices(remainingTasks);

      _this.storageManagement.updateLocalStorage(remainingTasks);

      _this.displayUpdatedList();

      (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.enableClearButton)();
    }
  });

  _defineProperty(this, "addEventsToDynamicElements", function () {
    _this.checkBoxes = document.querySelectorAll('li input[type="checkbox"]');
    _this.descriptionInputs = document.querySelectorAll('li input[type="text"]');
    _this.deleteButtons = document.querySelectorAll('li button.delete-button');
    _this.moveButtons = document.querySelectorAll('li button.move-button');

    _this.checkBoxes.forEach(function (checkbox) {
      return checkbox.addEventListener('click', _this.doOnCheckboxChecked);
    });

    _this.descriptionInputs.forEach(function (input) {
      return input.addEventListener('input', _this.doOnDescriptionInputChanged);
    });

    _this.deleteButtons.forEach(function (button) {
      return button.addEventListener('click', _this.doOnDeleteButtonClicked);
    });
  });

  _defineProperty(this, "onTaskInputValueChanged", function () {
    if (!_utils__WEBPACK_IMPORTED_MODULE_4__.isValid(_this.newTaskInput.value)) {
      _this.newTaskInput.classList.add('not-valid');

      _this.newTaskInput.classList.remove('valid');

      (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.enableClearButton)();
    } else {
      _this.newTaskInput.classList.remove('not-valid');

      _this.newTaskInput.classList.add('valid');

      (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.enableClearButton)();
    }
  });

  _defineProperty(this, "initializeApplication", function () {
    _this.storageManagement.initializeLocalStorage();

    var toDoTasks = _this.storageManagement.readLocalStorage();

    (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.allocateSpaceForToDOList)(_this.listElement);
    _utils__WEBPACK_IMPORTED_MODULE_4__.sortTasks(toDoTasks).forEach(function (task) {
      var taskElement = (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(task);

      _this.listElement.appendChild(taskElement);
    });

    _this.addEventsToDynamicElements();
  });

  _defineProperty(this, "addEventsToTaskElement", function (newTask) {
    var checkbox = newTask.querySelector('input[type="checkbox"]');
    var input = newTask.querySelector('input[type="text"]');
    var button = newTask.querySelector('button.delete-button');
    checkbox.addEventListener('click', _this.doOnCheckboxChecked);
    input.addEventListener('input', _this.doOnDescriptionInputChanged);
    button.addEventListener('click', _this.doOnDeleteButtonClicked);
  });

  _defineProperty(this, "isInputValid", function (inputValue) {
    var result = true;

    var existingTasksDescriptions = _this.storageManagement.readLocalStorage().map(function (td) {
      return td.description;
    });

    if (_utils__WEBPACK_IMPORTED_MODULE_4__.isEmpty(inputValue)) {
      result = false;
    } else if (!_utils__WEBPACK_IMPORTED_MODULE_4__.isValid(inputValue)) {
      result = false;
    } else if (_utils__WEBPACK_IMPORTED_MODULE_4__.isDuplicate(inputValue, existingTasksDescriptions)) {
      result = false;
    }

    return result;
  });

  _defineProperty(this, "addNewTaskToList", function (task) {
    _this.storageManagement.addToLocalStorage(task);

    var newTask = (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(task);

    _this.addEventsToTaskElement(newTask);

    _this.listElement.appendChild(newTask);
  });

  _defineProperty(this, "createNewTask", function () {
    var description = _this.newTaskInput.value;
    var index = _this.storageManagement.toDoTasks.length;
    var newTask = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](index, description);
    return newTask;
  });

  _defineProperty(this, "clearTaskInput", function () {
    _this.newTaskInput.value = '';
  });

  _defineProperty(this, "onAddButtonClicked", function () {
    if (_this.isInputValid(_this.newTaskInput.value)) {
      _this.addNewTaskToList(_this.createNewTask());

      (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.validateInputWithColor)(_this.newTaskInput, true);

      _this.clearTaskInput();
    } else {
      (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.toggleShake)(_this.newTaskInput);
      (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.validateInputWithColor)(_this.newTaskInput, false);
    }
  });

  _defineProperty(this, "getToBeDeletedTaskList", function () {
    var checkedTasksIds = [];
    var taskElements = [].slice.call(_this.listElement.children);
    taskElements.forEach(function (taskElement) {
      var id = (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.getCheckedTaskElementId)(taskElement);

      if (id >= 0) {
        checkedTasksIds.push(id);
      }
    });
    return checkedTasksIds;
  });

  _defineProperty(this, "clearList", function () {
    _this.listElement.innerHTML = '';
  });

  _defineProperty(this, "displayUpdatedList", function () {
    _this.clearList();

    _this.initializeApplication();
  });

  _defineProperty(this, "getRemainingTasks", function (checkedTasksIds) {
    return _this.storageManagement.readLocalStorage().filter(function (t, i) {
      return !checkedTasksIds.includes(i);
    });
  });

  _defineProperty(this, "updateIndices", function (remainingTasks) {
    remainingTasks.forEach(function (task, index) {
      task.index = index;
    });
    return remainingTasks;
  });

  _defineProperty(this, "removeTaskFromList", function (checkedTasksIds) {
    var remainingTasks = _this.getRemainingTasks(checkedTasksIds);

    var updatedRemainingTasks = _this.updateIndices(remainingTasks);

    _this.storageManagement.updateLocalStorage(updatedRemainingTasks);

    _this.displayUpdatedList();
  });

  _defineProperty(this, "onClearButtonClicked", function () {
    var checkedTasksIds = _this.getToBeDeletedTaskList();

    _this.removeTaskFromList(checkedTasksIds);
  });

  this.storageManagement = new _local_storage__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.listElement = _dom_elements__WEBPACK_IMPORTED_MODULE_0__.toDoList;
  this.clearButton = _dom_elements__WEBPACK_IMPORTED_MODULE_0__.clearButton;
  this.newTaskInput = _dom_elements__WEBPACK_IMPORTED_MODULE_0__.newTaskInput;
  this.addButton = _dom_elements__WEBPACK_IMPORTED_MODULE_0__.addButton;
  this.checkBoxes = document.querySelectorAll('li input[type="checkbox"]');
  this.descriptionInputs = document.querySelectorAll('li input[type="text"]');
  this.deleteButtons = document.querySelectorAll('li button.delete-button');
  this.moveButtons = document.querySelectorAll('li button.move-button'); // event listeners

  this.addButton.addEventListener('click', this.onAddButtonClicked);
  this.clearButton.addEventListener('click', this.onClearButtonClicked);
  this.newTaskInput.addEventListener('input', this.onTaskInputValueChanged);
});



/***/ }),

/***/ "./src/components/dom-elements.js":
/*!****************************************!*\
  !*** ./src/components/dom-elements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearButton": () => (/* binding */ clearButton),
/* harmony export */   "toDoList": () => (/* binding */ toDoList),
/* harmony export */   "newTaskInput": () => (/* binding */ newTaskInput),
/* harmony export */   "addButton": () => (/* binding */ addButton)
/* harmony export */ });
var clearButton = document.querySelector('.clear-button');
var toDoList = document.querySelector('.to-do-list');
var newTaskInput = document.querySelector('#new-task');
var addButton = document.querySelector('#add-task-button');

/***/ }),

/***/ "./src/components/local-storage.js":
/*!*****************************************!*\
  !*** ./src/components/local-storage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LocalStorage = /*#__PURE__*/_createClass(function LocalStorage() {
  var _this = this;

  _classCallCheck(this, LocalStorage);

  _defineProperty(this, "initializeLocalStorage", function () {
    if (!localStorage.getItem('toDoTasks')) {
      _this.toDoTasks = [];
      localStorage.setItem('toDoTasks', JSON.stringify(_this.toDoTasks));
    } else {
      _this.toDoTasks = JSON.parse(localStorage.getItem('toDoTasks'));
    }
  });

  _defineProperty(this, "resetIndices", function (modifiedToDoTasks) {
    return modifiedToDoTasks.map(function (task, order) {
      task.index = order;
      return task;
    });
  });

  _defineProperty(this, "updateLocalStorage", function (toDoTasks) {
    _this.toDoTasks = toDoTasks;
    localStorage.setItem('toDoTasks', JSON.stringify(_this.toDoTasks));
  });

  _defineProperty(this, "addToLocalStorage", function (task) {
    _this.toDoTasks.push(task);

    localStorage.setItem('toDoTasks', JSON.stringify(_this.toDoTasks));
  });

  _defineProperty(this, "changeTaskStatus", function (task, status) {
    _this.toDoTasks[task.index].completed = status;
    localStorage.setItem('toDoTasks', JSON.stringify(_this.toDoTasks));
  });

  _defineProperty(this, "changeTaskDescription", function (task, description) {
    _this.toDoTasks[task.index].description = description;
    localStorage.setItem('toDoTasks', JSON.stringify(_this.toDoTasks));
  });

  _defineProperty(this, "readLocalStorage", function () {
    _this.toDoTasks = JSON.parse(localStorage.getItem('toDoTasks'));
    return _this.toDoTasks;
  });

  this.toDoTasks = [];
});



/***/ }),

/***/ "./src/components/task-element-utils.js":
/*!**********************************************!*\
  !*** ./src/components/task-element-utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCheckedTaskElementId": () => (/* binding */ getCheckedTaskElementId),
/* harmony export */   "toggleShake": () => (/* binding */ toggleShake),
/* harmony export */   "validateInputWithColor": () => (/* binding */ validateInputWithColor),
/* harmony export */   "enableClearButton": () => (/* binding */ enableClearButton),
/* harmony export */   "default": () => (/* binding */ createTaskElement),
/* harmony export */   "allocateSpaceForToDOList": () => (/* binding */ allocateSpaceForToDOList)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements */ "./src/components/dom-elements.js");


function getCheckedTaskElementId(taskElement) {
  var res = -1;

  if (taskElement.children[0].checked === true) {
    res = Number(taskElement.id.split('-')[1]);
  }

  return res;
}
function toggleShake(element) {
  element.classList.toggle('lost-focus-with-errors');
}
function validateInputWithColor(element, isValid) {
  if (isValid) {
    element.classList.remove('not-valid');
    element.classList.add('valid');
  } else {
    element.classList.remove('valid');
    element.classList.add('not-valid');
  }
}
function enableClearButton() {
  _dom_elements__WEBPACK_IMPORTED_MODULE_1__.clearButton.disabled = false;
}

function disableClearButton() {
  _dom_elements__WEBPACK_IMPORTED_MODULE_1__.clearButton.disabled = true;
}

function onCheckboxToggle(e) {
  var checkbox = e.currentTarget;
  var description = checkbox.parentNode.children[1];

  if (checkbox.checked) {
    description.style.textDecoration = 'line-through';
  } else {
    description.style.textDecoration = 'none';
  }

  enableClearButton();
}

function addCheckEvent(taskElement) {
  var checkbox = taskElement.querySelector('input[type="checkbox"]');
  var description = checkbox.parentNode.children[1];

  if (checkbox.checked) {
    description.style.textDecoration = 'line-through';
  } else {
    description.style.textDecoration = 'none';
  }

  checkbox.addEventListener('click', onCheckboxToggle);
}

function onDescriptionInputFocused(e) {
  var taskElement = e.target.parentNode.parentNode;
  var moveButton = taskElement.querySelector('button.move-button');
  var deleteButton = taskElement.querySelector('button.delete-button');
  moveButton.style.zIndex = '-1';
  deleteButton.style.zIndex = '1';
  taskElement.style.backgroundColor = '#b99a7d';
}

function onDescriptionInputBlured(e) {
  var descriptionInput = e.target;
  var taskElement = e.target.parentNode.parentNode;
  var moveButton = taskElement.querySelector('button.move-button');
  var deleteButton = taskElement.querySelector('button.delete-button');
  moveButton.style.zIndex = '1';
  deleteButton.style.zIndex = '-1';
  taskElement.style.backgroundColor = 'transparent';

  if (_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty(descriptionInput.value) || !_utils__WEBPACK_IMPORTED_MODULE_0__.isValid(descriptionInput.value)) {
    toggleShake(descriptionInput);
    descriptionInput.focus();
    disableClearButton();
  } else {
    enableClearButton();
  }
}

function onDescriptionInputChanged(e) {
  var descriptionInput = e.target;

  if (_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty(descriptionInput.value) || !_utils__WEBPACK_IMPORTED_MODULE_0__.isValid(descriptionInput.value)) {
    descriptionInput.classList.add('not-valid');
    descriptionInput.classList.remove('valid');
    disableClearButton();
  } else {
    descriptionInput.classList.remove('not-valid');
    descriptionInput.classList.add('valid');
    enableClearButton();
  }
}

function addInputEvents(taskElement) {
  var descriptionInput = taskElement.querySelector('label.description > input');
  descriptionInput.addEventListener('focus', onDescriptionInputFocused);
  descriptionInput.addEventListener('blur', onDescriptionInputBlured);
  descriptionInput.addEventListener('input', onDescriptionInputChanged);
}

function createTaskElement(task) {
  var tmpWrapper = document.createElement('div');
  var taskStringElement = "<li class=\"task\" id=\"task-".concat(task.index, "\">\n        <input type=\"checkbox\" name=\"check-").concat(task.index, "\" id=\"check-").concat(task.index, "\" ").concat(task.completed ? 'checked' : null, ">\n        <label for=\"description\" class=\"description\">\n          <input type=\"text\" name=\"description\" value=\"").concat(task.description, "\" id=\"description-").concat(task.index, "\">\n        </label>\n        <button type=\"button\" class=\"icon move-button\" id=\"moveButton-").concat(task.index, "\">\n          <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n        </button>\n        <button type=\"button\" class=\"icon delete-button\" id=\"deleteButton-").concat(task.index, "\">\n          <i class=\"fas fa-trash-alt\"></i>\n        </button>\n      </li>");
  tmpWrapper.innerHTML = taskStringElement.trim();
  var taskElement = tmpWrapper.firstElementChild;
  addCheckEvent(taskElement);
  addInputEvents(taskElement);
  return taskElement;
}
function allocateSpaceForToDOList(toDoList) {
  toDoList.style.gridTemplateRows = "repeat(".concat(Object.keys(toDoList).length, ", 48px);");
}

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = /*#__PURE__*/_createClass(function Task(index, description) {
  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _classCallCheck(this, Task);

  this.index = index;
  this.description = description;
  this.completed = completed;
});



/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortTasks": () => (/* binding */ sortTasks),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "isDuplicate": () => (/* binding */ isDuplicate)
/* harmony export */ });
function sortTasks(toDoTasks) {
  return toDoTasks.sort(function (obj1, obj2) {
    return obj1.index - obj2.index;
  });
}
function isEmpty(string) {
  var pattern = /^(\s)+$/;
  return pattern.test(string);
}
function isValid(string) {
  var pattern = /^(\w)+(\w|-|\s)*$/;
  return pattern.test(string.trim());
}
function isDuplicate(string, existingTasksDescriptions) {
  var result = false;
  existingTasksDescriptions.forEach(function (td) {
    if (string.trim().toUpperCase() === td.trim().toUpperCase()) {
      result = true;
    }
  });
  return result;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/nier.woff2 */ "./src/font/nier.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/nier.woff */ "./src/font/nier.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n\n@font-face {\n  font-family: NierFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image: linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow: rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  visibility: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type='checkbox'] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type='text'] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type='text']:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.valid {\n  background-color: var(--bg-color-list);\n}\n\n.not-valid {\n  background-color: var(--color-warning);\n}\n\ninput[type='text'].not-valid:focus {\n  background-color: var(--color-warning);\n}\n\ninput[type='text'].valid:focus {\n  background-color: var(--bg-color-body);\n}\n\n.lost-focus-with-errors {\n  animation: shake 0.82s\n    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.task .icon {\n  font-size: 17px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: z-index 0.6s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: z-index 0.6s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background: linear-gradient(\n    to left,\n    var(--bg-color-list) 50%,\n    var(--bg-color-active) 50%\n  );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: '';\n}\n\n.clear-button:hover:enabled {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 50ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');\n\n@font-face {\n  font-family: NierFont;\n  src: url('./font/nier.woff2') format('woff2'),\n    url('./font/nier.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image: linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow: rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  visibility: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type='checkbox'] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type='text'] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type='text']:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.valid {\n  background-color: var(--bg-color-list);\n}\n\n.not-valid {\n  background-color: var(--color-warning);\n}\n\ninput[type='text'].not-valid:focus {\n  background-color: var(--color-warning);\n}\n\ninput[type='text'].valid:focus {\n  background-color: var(--bg-color-body);\n}\n\n.lost-focus-with-errors {\n  animation: shake 0.82s\n    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.task .icon {\n  font-size: 17px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: z-index 0.6s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: z-index 0.6s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background: linear-gradient(\n    to left,\n    var(--bg-color-list) 50%,\n    var(--bg-color-active) 50%\n  );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: '';\n}\n\n.clear-button:hover:enabled {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 50ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/font/nier.woff":
/*!****************************!*\
  !*** ./src/font/nier.woff ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "187b103db36df4f18f78.woff";

/***/ }),

/***/ "./src/font/nier.woff2":
/*!*****************************!*\
  !*** ./src/font/nier.woff2 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "256be22b3747d8acbcff.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_crud_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/crud-operations */ "./src/components/crud-operations.js");


var crud = new _components_crud_operations__WEBPACK_IMPORTED_MODULE_1__["default"]();
window.addEventListener('DOMContentLoaded', crud.initializeApplication);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUEsSUFBTW1GLElBQUksR0FBRyxJQUFJbkksbUVBQUosRUFBYjtBQUVBb0ksTUFBTSxDQUFDeEcsZ0JBQVAsQ0FDRSxrQkFERixFQUVFdUcsSUFBSSxDQUFDN0QscUJBRlAsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy9jcnVkLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jb21wb25lbnRzL2RvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvdGFzay1lbGVtZW50LXV0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCwge1xuICBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QsXG4gIGdldENoZWNrZWRUYXNrRWxlbWVudElkLFxuICBlbmFibGVDbGVhckJ1dHRvbixcbiAgdG9nZ2xlU2hha2UsXG4gIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IsXG59IGZyb20gJy4vdGFzay1lbGVtZW50LXV0aWxzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDUlVEIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudCA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZG9tLnRvRG9MaXN0O1xuICAgIHRoaXMuY2xlYXJCdXR0b24gPSBkb20uY2xlYXJCdXR0b247XG4gICAgdGhpcy5uZXdUYXNrSW5wdXQgPSBkb20ubmV3VGFza0lucHV0O1xuICAgIHRoaXMuYWRkQnV0dG9uID0gZG9tLmFkZEJ1dHRvbjtcbiAgICB0aGlzLmNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuICAgIHRoaXMubW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5vbkFkZEJ1dHRvbkNsaWNrZWQsXG4gICAgKTtcblxuICAgIHRoaXMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLm9uQ2xlYXJCdXR0b25DbGlja2VkLFxuICAgICk7XG5cbiAgICB0aGlzLm5ld1Rhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2lucHV0JyxcbiAgICAgIHRoaXMub25UYXNrSW5wdXRWYWx1ZUNoYW5nZWQsXG4gICAgKTtcbiAgfVxuXG4gIGRvT25DaGVja2JveENoZWNrZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICBjb25zdCB0YXNrID1cbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVhZExvY2FsU3RvcmFnZSgpW2lkXTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmNoYW5nZVRhc2tTdGF0dXMoXG4gICAgICB0YXNrLFxuICAgICAgZS50YXJnZXQuY2hlY2tlZCxcbiAgICApO1xuICB9O1xuXG4gIGRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCA9IChlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgIGNvbnN0IHRhc2sgPVxuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5yZWFkTG9jYWxTdG9yYWdlKClbaWRdO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQuY2hhbmdlVGFza0Rlc2NyaXB0aW9uKFxuICAgICAgdGFzayxcbiAgICAgIGUudGFyZ2V0LnZhbHVlLFxuICAgICk7XG4gIH07XG5cbiAgZG9PbkRlbGV0ZUJ1dHRvbkNsaWNrZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmlkLnNwbGl0KCctJylbMF0gPT09ICdkZWxldGVCdXR0b24nKSB7XG4gICAgICBjb25zdCBpZCA9IGJ1dHRvbi5pZC5zcGxpdCgnLScpWzFdO1xuICAgICAgbGV0IHJlbWFpbmluZ1Rhc2tzID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudFxuICAgICAgICAucmVhZExvY2FsU3RvcmFnZSgpXG4gICAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXggIT09ICtpZCk7XG4gICAgICByZW1haW5pbmdUYXNrcyA9XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVzZXRJbmRpY2VzKHJlbWFpbmluZ1Rhc2tzKTtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQudXBkYXRlTG9jYWxTdG9yYWdlKFxuICAgICAgICByZW1haW5pbmdUYXNrcyxcbiAgICAgICk7XG4gICAgICB0aGlzLmRpc3BsYXlVcGRhdGVkTGlzdCgpO1xuICAgICAgZW5hYmxlQ2xlYXJCdXR0b24oKTtcbiAgICB9XG4gIH07XG5cbiAgYWRkRXZlbnRzVG9EeW5hbWljRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgICk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnbGkgaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICk7XG4gICAgdGhpcy5kZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICAgKTtcbiAgICB0aGlzLm1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBidXR0b24ubW92ZS1idXR0b24nLFxuICAgICk7XG5cbiAgICB0aGlzLmNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICB0aGlzLmRvT25DaGVja2JveENoZWNrZWQsXG4gICAgICApLFxuICAgICk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT5cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgIHRoaXMuZG9PbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkLFxuICAgICAgKSxcbiAgICApO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgdGhpcy5kb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCxcbiAgICAgICksXG4gICAgKTtcbiAgfTtcblxuICBvblRhc2tJbnB1dFZhbHVlQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBpZiAoIXV0aWxzLmlzVmFsaWQodGhpcy5uZXdUYXNrSW5wdXQudmFsdWUpKSB7XG4gICAgICB0aGlzLm5ld1Rhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdub3QtdmFsaWQnKTtcbiAgICAgIHRoaXMubmV3VGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5ld1Rhc2tJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmFsaWQnKTtcbiAgICAgIHRoaXMubmV3VGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICAgIH1cbiAgfTtcblxuICBpbml0aWFsaXplQXBwbGljYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5pbml0aWFsaXplTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgdG9Eb1Rhc2tzID1cbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVhZExvY2FsU3RvcmFnZSgpO1xuXG4gICAgYWxsb2NhdGVTcGFjZUZvclRvRE9MaXN0KHRoaXMubGlzdEVsZW1lbnQpO1xuXG4gICAgdXRpbHMuc29ydFRhc2tzKHRvRG9UYXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRzVG9EeW5hbWljRWxlbWVudHMoKTtcbiAgfTtcblxuICBhZGRFdmVudHNUb1Rhc2tFbGVtZW50ID0gKG5ld1Rhc2spID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgICk7XG4gICAgY29uc3QgaW5wdXQgPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICk7XG4gICAgY29uc3QgYnV0dG9uID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2J1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25DaGVja2JveENoZWNrZWQsXG4gICAgKTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnaW5wdXQnLFxuICAgICAgdGhpcy5kb09uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQsXG4gICAgKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZG9PbkRlbGV0ZUJ1dHRvbkNsaWNrZWQsXG4gICAgKTtcbiAgfTtcblxuICBpc0lucHV0VmFsaWQgPSAoaW5wdXRWYWx1ZSkgPT4ge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGNvbnN0IGV4aXN0aW5nVGFza3NEZXNjcmlwdGlvbnMgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50XG4gICAgICAucmVhZExvY2FsU3RvcmFnZSgpXG4gICAgICAubWFwKCh0ZCkgPT4gdGQuZGVzY3JpcHRpb24pO1xuICAgIGlmICh1dGlscy5pc0VtcHR5KGlucHV0VmFsdWUpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1ZhbGlkKGlucHV0VmFsdWUpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdXRpbHMuaXNEdXBsaWNhdGUoXG4gICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgIGV4aXN0aW5nVGFza3NEZXNjcmlwdGlvbnMsXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBhZGROZXdUYXNrVG9MaXN0ID0gKHRhc2spID0+IHtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmFkZFRvTG9jYWxTdG9yYWdlKHRhc2spO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgICB0aGlzLmFkZEV2ZW50c1RvVGFza0VsZW1lbnQobmV3VGFzayk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgfTtcblxuICBjcmVhdGVOZXdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5uZXdUYXNrSW5wdXQudmFsdWU7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnRvRG9UYXNrcy5sZW5ndGg7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGluZGV4LCBkZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG4gIH07XG5cbiAgY2xlYXJUYXNrSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5uZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgfTtcblxuICBvbkFkZEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNJbnB1dFZhbGlkKHRoaXMubmV3VGFza0lucHV0LnZhbHVlKSkge1xuICAgICAgdGhpcy5hZGROZXdUYXNrVG9MaXN0KHRoaXMuY3JlYXRlTmV3VGFzaygpKTtcbiAgICAgIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IodGhpcy5uZXdUYXNrSW5wdXQsIHRydWUpO1xuICAgICAgdGhpcy5jbGVhclRhc2tJbnB1dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2dnbGVTaGFrZSh0aGlzLm5ld1Rhc2tJbnB1dCk7XG4gICAgICB2YWxpZGF0ZUlucHV0V2l0aENvbG9yKHRoaXMubmV3VGFza0lucHV0LCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFRvQmVEZWxldGVkVGFza0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tlZFRhc2tzSWRzID0gW107XG4gICAgY29uc3QgdGFza0VsZW1lbnRzID0gW10uc2xpY2UuY2FsbChcbiAgICAgIHRoaXMubGlzdEVsZW1lbnQuY2hpbGRyZW4sXG4gICAgKTtcblxuICAgIHRhc2tFbGVtZW50cy5mb3JFYWNoKCh0YXNrRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBnZXRDaGVja2VkVGFza0VsZW1lbnRJZCh0YXNrRWxlbWVudCk7XG4gICAgICBpZiAoaWQgPj0gMCkge1xuICAgICAgICBjaGVja2VkVGFza3NJZHMucHVzaChpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrZWRUYXNrc0lkcztcbiAgfTtcblxuICBjbGVhckxpc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICBkaXNwbGF5VXBkYXRlZExpc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICB0aGlzLmluaXRpYWxpemVBcHBsaWNhdGlvbigpO1xuICB9O1xuXG4gIGdldFJlbWFpbmluZ1Rhc2tzID0gKGNoZWNrZWRUYXNrc0lkcykgPT5cbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50XG4gICAgICAucmVhZExvY2FsU3RvcmFnZSgpXG4gICAgICAuZmlsdGVyKCh0LCBpKSA9PiAhY2hlY2tlZFRhc2tzSWRzLmluY2x1ZGVzKGkpKTtcblxuICB1cGRhdGVJbmRpY2VzID0gKHJlbWFpbmluZ1Rhc2tzKSA9PiB7XG4gICAgcmVtYWluaW5nVGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBpbmRleDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVtYWluaW5nVGFza3M7XG4gIH07XG5cbiAgcmVtb3ZlVGFza0Zyb21MaXN0ID0gKGNoZWNrZWRUYXNrc0lkcykgPT4ge1xuICAgIGNvbnN0IHJlbWFpbmluZ1Rhc2tzID1cbiAgICAgIHRoaXMuZ2V0UmVtYWluaW5nVGFza3MoY2hlY2tlZFRhc2tzSWRzKTtcbiAgICBjb25zdCB1cGRhdGVkUmVtYWluaW5nVGFza3MgPVxuICAgICAgdGhpcy51cGRhdGVJbmRpY2VzKHJlbWFpbmluZ1Rhc2tzKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnVwZGF0ZUxvY2FsU3RvcmFnZShcbiAgICAgIHVwZGF0ZWRSZW1haW5pbmdUYXNrcyxcbiAgICApO1xuICAgIHRoaXMuZGlzcGxheVVwZGF0ZWRMaXN0KCk7XG4gIH07XG5cbiAgb25DbGVhckJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tlZFRhc2tzSWRzID0gdGhpcy5nZXRUb0JlRGVsZXRlZFRhc2tMaXN0KCk7XG4gICAgdGhpcy5yZW1vdmVUYXNrRnJvbUxpc3QoY2hlY2tlZFRhc2tzSWRzKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XG5leHBvcnQgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrJyk7XG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNhZGQtdGFzay1idXR0b24nLFxuKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9Eb1Rhc2tzID0gW107XG4gIH1cblxuICBpbml0aWFsaXplTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpKSB7XG4gICAgICB0aGlzLnRvRG9UYXNrcyA9IFtdO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICd0b0RvVGFza3MnLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvRG9UYXNrcyA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvVGFza3MnKSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJlc2V0SW5kaWNlcyA9IChtb2RpZmllZFRvRG9UYXNrcykgPT4gbW9kaWZpZWRUb0RvVGFza3MubWFwKCh0YXNrLCBvcmRlcikgPT4ge1xuICAgIHRhc2suaW5kZXggPSBvcmRlcjtcbiAgICByZXR1cm4gdGFzaztcbiAgfSk7XG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlID0gKHRvRG9UYXNrcykgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzID0gdG9Eb1Rhc2tzO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgKTtcbiAgfTtcblxuICBhZGRUb0xvY2FsU3RvcmFnZSA9ICh0YXNrKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgY2hhbmdlVGFza1N0YXR1cyA9ICh0YXNrLCBzdGF0dXMpID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrc1t0YXNrLmluZGV4XS5jb21wbGV0ZWQgPSBzdGF0dXM7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIGNoYW5nZVRhc2tEZXNjcmlwdGlvbiA9ICh0YXNrLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzW3Rhc2suaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIHJlYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMudG9Eb1Rhc2tzO1xuICB9O1xufVxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjbGVhckJ1dHRvbiwgbmV3VGFza0lucHV0IH0gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQodGFza0VsZW1lbnQpIHtcbiAgbGV0IHJlcyA9IC0xO1xuICBpZiAodGFza0VsZW1lbnQuY2hpbGRyZW5bMF0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHJlcyA9IE51bWJlcih0YXNrRWxlbWVudC5pZC5zcGxpdCgnLScpWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2hha2UoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2xvc3QtZm9jdXMtd2l0aC1lcnJvcnMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IoZWxlbWVudCwgaXNWYWxpZCkge1xuICBpZiAoaXNWYWxpZCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZhbGlkJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC12YWxpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVDbGVhckJ1dHRvbigpIHtcbiAgY2xlYXJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUNsZWFyQnV0dG9uKCkge1xuICBjbGVhckJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uQ2hlY2tib3hUb2dnbGUoZSkge1xuICBjb25zdCBjaGVja2JveCA9IGUuY3VycmVudFRhcmdldDtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjaGVja2JveC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gIH1cbiAgZW5hYmxlQ2xlYXJCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hlY2tFdmVudCh0YXNrRWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY2hlY2tib3gucGFyZW50Tm9kZS5jaGlsZHJlblsxXTtcbiAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICB9IGVsc2Uge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DaGVja2JveFRvZ2dsZSk7XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dEZvY3VzZWQoZSkge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgbW92ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgKTtcbiAgbW92ZUJ1dHRvbi5zdHlsZS56SW5kZXggPSAnLTEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICB0YXNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2I5OWE3ZCc7XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZChlKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBlLnRhcmdldDtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IG1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24ubW92ZS1idXR0b24nLFxuICApO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICk7XG4gIG1vdmVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJy0xJztcbiAgdGFza0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICBpZiAoXG4gICAgdXRpbHMuaXNFbXB0eShkZXNjcmlwdGlvbklucHV0LnZhbHVlKSB8fFxuICAgICF1dGlscy5pc1ZhbGlkKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpXG4gICkge1xuICAgIHRvZ2dsZVNoYWtlKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuZm9jdXMoKTtcbiAgICBkaXNhYmxlQ2xlYXJCdXR0b24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQoZSkge1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChcbiAgICB1dGlscy5pc0VtcHR5KGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpIHx8XG4gICAgIXV0aWxzLmlzVmFsaWQoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSlcbiAgKSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdub3QtdmFsaWQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgZGlzYWJsZUNsZWFyQnV0dG9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmFsaWQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgZW5hYmxlQ2xlYXJCdXR0b24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnB1dEV2ZW50cyh0YXNrRWxlbWVudCkge1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnbGFiZWwuZGVzY3JpcHRpb24gPiBpbnB1dCcsXG4gICk7XG5cbiAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdmb2N1cycsXG4gICAgb25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZCxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2JsdXInLFxuICAgIG9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZCxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2lucHV0JyxcbiAgICBvbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkLFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRtcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1N0cmluZ0VsZW1lbnQgPSBgPGxpIGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke1xuICAgIHRhc2suaW5kZXhcbiAgfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrLSR7XG4gICAgICAgICAgdGFzay5pbmRleFxuICAgICAgICB9XCIgaWQ9XCJjaGVjay0ke3Rhc2suaW5kZXh9XCIgJHtcbiAgICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6IG51bGxcbiAgfT5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHZhbHVlPVwiJHtcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb25cbiAgICAgICAgICB9XCIgaWQ9XCJkZXNjcmlwdGlvbi0ke3Rhc2suaW5kZXh9XCI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaWNvbiBtb3ZlLWJ1dHRvblwiIGlkPVwibW92ZUJ1dHRvbi0ke1xuICAgICAgICAgIHRhc2suaW5kZXhcbiAgICAgICAgfVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImljb24gZGVsZXRlLWJ1dHRvblwiIGlkPVwiZGVsZXRlQnV0dG9uLSR7XG4gICAgICAgICAgdGFzay5pbmRleFxuICAgICAgICB9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+YDtcbiAgdG1wV3JhcHBlci5pbm5lckhUTUwgPSB0YXNrU3RyaW5nRWxlbWVudC50cmltKCk7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSB0bXBXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KTtcbiAgYWRkSW5wdXRFdmVudHModGFza0VsZW1lbnQpO1xuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QodG9Eb0xpc3QpIHtcbiAgdG9Eb0xpc3Quc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtcbiAgICBPYmplY3Qua2V5cyh0b0RvTGlzdCkubGVuZ3RoXG4gIH0sIDQ4cHgpO2A7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza3ModG9Eb1Rhc2tzKSB7XG4gIHJldHVybiB0b0RvVGFza3Muc29ydChcbiAgICAob2JqMSwgb2JqMikgPT4gb2JqMS5pbmRleCAtIG9iajIuaW5kZXgsXG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShzdHJpbmcpIHtcbiAgY29uc3QgcGF0dGVybiA9IC9eKFxccykrJC87XG4gIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoc3RyaW5nKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXihcXHcpKyhcXHd8LXxcXHMpKiQvO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHN0cmluZy50cmltKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXBsaWNhdGUoXG4gIHN0cmluZyxcbiAgZXhpc3RpbmdUYXNrc0Rlc2NyaXB0aW9ucyxcbikge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gIGV4aXN0aW5nVGFza3NEZXNjcmlwdGlvbnMuZm9yRWFjaCgodGQpID0+IHtcbiAgICBpZiAoXG4gICAgICBzdHJpbmcudHJpbSgpLnRvVXBwZXJDYXNlKCkgPT09XG4gICAgICB0ZC50cmltKCkudG9VcHBlckNhc2UoKVxuICAgICkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9uaWVyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L25pZXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT1TdHlsZSByZXNldD09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3ItYm9keTogI2QxY2RiNztcXG4gIC0tYmctY29sb3ItYnV0dG9uOiBiYWI1YTE7XFxuICAtLWJnLWNvbG9yLWxpc3Q6ICNmZmY7XFxuICAtLWNvbG9yLXRpdGxlOiAjNDM0MzQ2O1xcbiAgLS1jb2xvci13YXJuaW5nOiAjZDI1ZDQ3O1xcbiAgLS1iZy1jb2xvci1hY3RpdmU6ICM0NTQxMzg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMwdmggMCAyMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAjY2NjOGIxIDFweCxcXG4gICAgICB0cmFuc3BhcmVudCAxcHhcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjOGIxIDFweCwgI2QxY2RiNyAxcHgpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2cHggNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwIDIwcHggNDBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiKDAgMCAwIC8gMzAlKSAwIDE4cHggMThweCAtMThweCBpbnNldDtcXG59XFxuXFxuYSxcXG5hOmxpbmssXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB2YXIoLS1zaGFyayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09Q2FyZCBzdHlsaW5nPT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggNDhweCBhdXRvIDcycHg7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDAgNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAgI2JhYjVhMTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLmljb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDZweCAzMnB4IDZweCAxMnB4O1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTJweDtcXG4gIHRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnRvLWRvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDQ4cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAzMCU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbn1cXG5cXG4udmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxufVxcblxcbi5ub3QtdmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXS5ub3QtdmFsaWQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXS52YWxpZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLmxvc3QtZm9jdXMtd2l0aC1lcnJvcnMge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgyc1xcbiAgICBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4udGFzayAuaWNvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi50YXNrIC5tb3ZlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi5jbGVhci1idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gbGVmdCxcXG4gICAgdmFyKC0tYmctY29sb3ItbGlzdCkgNTAlLFxcbiAgICB2YXIoLS1iZy1jb2xvci1hY3RpdmUpIDUwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGw7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MG1zO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0NBQW9DOztBQUVwQyxvQ0FBb0M7O0FBRXBDLG9DQUFvQzs7QUFHcEM7RUFDRSxxQkFBcUI7RUFDckI7MERBQ3dDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7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aEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCOzs7O0dBSUM7RUFDRCwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxPQUFPO0VBQ1AsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFOztJQUVFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7O0VBRUE7OztJQUdFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09U3R5bGUgcmVzZXQ9PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250O1xcbiAgc3JjOiB1cmwoJy4vZm9udC9uaWVyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vZm9udC9uaWVyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3ItYm9keTogI2QxY2RiNztcXG4gIC0tYmctY29sb3ItYnV0dG9uOiBiYWI1YTE7XFxuICAtLWJnLWNvbG9yLWxpc3Q6ICNmZmY7XFxuICAtLWNvbG9yLXRpdGxlOiAjNDM0MzQ2O1xcbiAgLS1jb2xvci13YXJuaW5nOiAjZDI1ZDQ3O1xcbiAgLS1iZy1jb2xvci1hY3RpdmU6ICM0NTQxMzg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMwdmggMCAyMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAjY2NjOGIxIDFweCxcXG4gICAgICB0cmFuc3BhcmVudCAxcHhcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjOGIxIDFweCwgI2QxY2RiNyAxcHgpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2cHggNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwIDIwcHggNDBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiKDAgMCAwIC8gMzAlKSAwIDE4cHggMThweCAtMThweCBpbnNldDtcXG59XFxuXFxuYSxcXG5hOmxpbmssXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB2YXIoLS1zaGFyayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09Q2FyZCBzdHlsaW5nPT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggNDhweCBhdXRvIDcycHg7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDAgNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAgI2JhYjVhMTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLmljb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDZweCAzMnB4IDZweCAxMnB4O1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTJweDtcXG4gIHRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnRvLWRvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDQ4cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAzMCU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbn1cXG5cXG4udmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxufVxcblxcbi5ub3QtdmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXS5ub3QtdmFsaWQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXS52YWxpZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLmxvc3QtZm9jdXMtd2l0aC1lcnJvcnMge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgyc1xcbiAgICBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4udGFzayAuaWNvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi50YXNrIC5tb3ZlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi5jbGVhci1idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gbGVmdCxcXG4gICAgdmFyKC0tYmctY29sb3ItbGlzdCkgNTAlLFxcbiAgICB2YXIoLS1iZy1jb2xvci1hY3RpdmUpIDUwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGw7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MG1zO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENSVUQgZnJvbSAnLi9jb21wb25lbnRzL2NydWQtb3BlcmF0aW9ucyc7XG5cbmNvbnN0IGNydWQgPSBuZXcgQ1JVRCgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICBjcnVkLmluaXRpYWxpemVBcHBsaWNhdGlvbixcbik7XG4iXSwibmFtZXMiOlsiZG9tIiwiTG9jYWxTdG9yYWdlIiwiVGFzayIsImNyZWF0ZVRhc2tFbGVtZW50IiwiYWxsb2NhdGVTcGFjZUZvclRvRE9MaXN0IiwiZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQiLCJlbmFibGVDbGVhckJ1dHRvbiIsInRvZ2dsZVNoYWtlIiwidmFsaWRhdGVJbnB1dFdpdGhDb2xvciIsInV0aWxzIiwiQ1JVRCIsImUiLCJpZCIsInRhcmdldCIsInNwbGl0IiwidGFzayIsInN0b3JhZ2VNYW5hZ2VtZW50IiwicmVhZExvY2FsU3RvcmFnZSIsImNoYW5nZVRhc2tTdGF0dXMiLCJjaGVja2VkIiwiY2hhbmdlVGFza0Rlc2NyaXB0aW9uIiwidmFsdWUiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicmVtYWluaW5nVGFza3MiLCJmaWx0ZXIiLCJpbmRleCIsInJlc2V0SW5kaWNlcyIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsImRpc3BsYXlVcGRhdGVkTGlzdCIsImNoZWNrQm94ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZXNjcmlwdGlvbklucHV0cyIsImRlbGV0ZUJ1dHRvbnMiLCJtb3ZlQnV0dG9ucyIsImZvckVhY2giLCJjaGVja2JveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb09uQ2hlY2tib3hDaGVja2VkIiwiaW5wdXQiLCJkb09uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQiLCJkb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCIsImlzVmFsaWQiLCJuZXdUYXNrSW5wdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbml0aWFsaXplTG9jYWxTdG9yYWdlIiwidG9Eb1Rhc2tzIiwibGlzdEVsZW1lbnQiLCJzb3J0VGFza3MiLCJ0YXNrRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRzVG9EeW5hbWljRWxlbWVudHMiLCJuZXdUYXNrIiwicXVlcnlTZWxlY3RvciIsImlucHV0VmFsdWUiLCJyZXN1bHQiLCJleGlzdGluZ1Rhc2tzRGVzY3JpcHRpb25zIiwibWFwIiwidGQiLCJkZXNjcmlwdGlvbiIsImlzRW1wdHkiLCJpc0R1cGxpY2F0ZSIsImFkZFRvTG9jYWxTdG9yYWdlIiwiYWRkRXZlbnRzVG9UYXNrRWxlbWVudCIsImxlbmd0aCIsImlzSW5wdXRWYWxpZCIsImFkZE5ld1Rhc2tUb0xpc3QiLCJjcmVhdGVOZXdUYXNrIiwiY2xlYXJUYXNrSW5wdXQiLCJjaGVja2VkVGFza3NJZHMiLCJ0YXNrRWxlbWVudHMiLCJzbGljZSIsImNhbGwiLCJjaGlsZHJlbiIsInB1c2giLCJpbm5lckhUTUwiLCJjbGVhckxpc3QiLCJpbml0aWFsaXplQXBwbGljYXRpb24iLCJ0IiwiaSIsImluY2x1ZGVzIiwiZ2V0UmVtYWluaW5nVGFza3MiLCJ1cGRhdGVkUmVtYWluaW5nVGFza3MiLCJ1cGRhdGVJbmRpY2VzIiwiZ2V0VG9CZURlbGV0ZWRUYXNrTGlzdCIsInJlbW92ZVRhc2tGcm9tTGlzdCIsInRvRG9MaXN0IiwiY2xlYXJCdXR0b24iLCJhZGRCdXR0b24iLCJvbkFkZEJ1dHRvbkNsaWNrZWQiLCJvbkNsZWFyQnV0dG9uQ2xpY2tlZCIsIm9uVGFza0lucHV0VmFsdWVDaGFuZ2VkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJtb2RpZmllZFRvRG9UYXNrcyIsIm9yZGVyIiwic3RhdHVzIiwiY29tcGxldGVkIiwicmVzIiwiTnVtYmVyIiwiZWxlbWVudCIsInRvZ2dsZSIsImRpc2FibGVkIiwiZGlzYWJsZUNsZWFyQnV0dG9uIiwib25DaGVja2JveFRvZ2dsZSIsInBhcmVudE5vZGUiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiYWRkQ2hlY2tFdmVudCIsIm9uRGVzY3JpcHRpb25JbnB1dEZvY3VzZWQiLCJtb3ZlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwib25EZXNjcmlwdGlvbklucHV0Qmx1cmVkIiwiZGVzY3JpcHRpb25JbnB1dCIsImZvY3VzIiwib25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCIsImFkZElucHV0RXZlbnRzIiwidG1wV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJ0YXNrU3RyaW5nRWxlbWVudCIsInRyaW0iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImdyaWRUZW1wbGF0ZVJvd3MiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsIm9iajEiLCJvYmoyIiwic3RyaW5nIiwicGF0dGVybiIsInRlc3QiLCJ0b1VwcGVyQ2FzZSIsImNydWQiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9