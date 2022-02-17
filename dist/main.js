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
  var pattern = /^(\w|-)+$/;
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

___CSS_LOADER_EXPORT___.push([module.id, "/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.valid {\n  background-color: var(--bg-color-list);\n}\n\n.not-valid {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].not-valid:focus {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].valid:focus {\n  background-color: var(--bg-color-body);\n}\n\n.lost-focus-with-errors {\n  animation:\n    shake 0.82s\n    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.task .icon {\n  font-size: 17px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: z-index 0.6s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: z-index 0.6s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover:enabled {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 200ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap\");\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(\"./font/nier.woff2\") format(\"woff2\"),\n    url(\"./font/nier.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.valid {\n  background-color: var(--bg-color-list);\n}\n\n.not-valid {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].not-valid:focus {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].valid:focus {\n  background-color: var(--bg-color-body);\n}\n\n.lost-focus-with-errors {\n  animation:\n    shake 0.82s\n    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.task .icon {\n  font-size: 17px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: z-index 0.6s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: z-index 0.6s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover:enabled {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 200ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n"],"sourceRoot":""}]);

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

module.exports = __webpack_require__.p + "fe066546c10bd9762bf3.woff";

/***/ }),

/***/ "./src/font/nier.woff2":
/*!*****************************!*\
  !*** ./src/font/nier.woff2 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82480ed5f37fc0e57d77.woff2";

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsU0FBUyxPQUFPLGFBQWEsT0FBTyxPQUFPLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxjQUFjLGNBQWMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUs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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUEsSUFBTXVGLElBQUksR0FBRyxJQUFJbEksbUVBQUosRUFBYjtBQUVBbUksTUFBTSxDQUFDdkcsZ0JBQVAsQ0FDRSxrQkFERixFQUVFc0csSUFBSSxDQUFDL0QscUJBRlAsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy9jcnVkLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jb21wb25lbnRzL2RvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvdGFzay1lbGVtZW50LXV0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCwge1xuICBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QsXG4gIGdldENoZWNrZWRUYXNrRWxlbWVudElkLFxuICBlbmFibGVDbGVhckJ1dHRvbixcbiAgdG9nZ2xlU2hha2UsXG4gIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IsXG59IGZyb20gJy4vdGFzay1lbGVtZW50LXV0aWxzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDUlVEIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudCA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZG9tLnRvRG9MaXN0O1xuICAgIHRoaXMuY2xlYXJCdXR0b24gPSBkb20uY2xlYXJCdXR0b247XG4gICAgdGhpcy5uZXdUYXNrSW5wdXQgPSBkb20ubmV3VGFza0lucHV0O1xuICAgIHRoaXMuYWRkQnV0dG9uID0gZG9tLmFkZEJ1dHRvbjtcbiAgICB0aGlzLmNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuICAgIHRoaXMubW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5vbkFkZEJ1dHRvbkNsaWNrZWQsXG4gICAgKTtcblxuICAgIHRoaXMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLm9uQ2xlYXJCdXR0b25DbGlja2VkLFxuICAgICk7XG4gIH1cblxuICBkb09uQ2hlY2tib3hDaGVja2VkID0gKGUpID0+IHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XG4gICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVhZExvY2FsU3RvcmFnZSgpW2lkXTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmNoYW5nZVRhc2tTdGF0dXMoXG4gICAgICB0YXNrLFxuICAgICAgZS50YXJnZXQuY2hlY2tlZCxcbiAgICApO1xuICB9O1xuXG4gIGRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCA9IChlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlYWRMb2NhbFN0b3JhZ2UoKVtpZF07XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5jaGFuZ2VUYXNrRGVzY3JpcHRpb24oXG4gICAgICB0YXNrLFxuICAgICAgZS50YXJnZXQudmFsdWUsXG4gICAgKTtcbiAgfTtcblxuICBkb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCA9IChlKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChidXR0b24uaWQuc3BsaXQoJy0nKVswXSA9PT0gJ2RlbGV0ZUJ1dHRvbicpIHtcbiAgICAgIGNvbnN0IGlkID0gYnV0dG9uLmlkLnNwbGl0KCctJylbMV07XG4gICAgICBsZXQgcmVtYWluaW5nVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50XG4gICAgICAgIC5yZWFkTG9jYWxTdG9yYWdlKClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gK2lkKTtcbiAgICAgIHJlbWFpbmluZ1Rhc2tzID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5yZXNldEluZGljZXMocmVtYWluaW5nVGFza3MpO1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC51cGRhdGVMb2NhbFN0b3JhZ2UoXG4gICAgICAgIHJlbWFpbmluZ1Rhc2tzLFxuICAgICAgKTtcbiAgICAgIHRoaXMuZGlzcGxheVVwZGF0ZWRMaXN0KCk7XG4gICAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICAgIH1cbiAgfTtcblxuICBhZGRFdmVudHNUb0R5bmFtaWNFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuICAgIHRoaXMubW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIHRoaXMuY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4gY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25DaGVja2JveENoZWNrZWQsXG4gICAgKSk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdpbnB1dCcsXG4gICAgICB0aGlzLmRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCxcbiAgICApKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25EZWxldGVCdXR0b25DbGlja2VkLFxuICAgICkpO1xuICB9O1xuXG4gIGluaXRpYWxpemVBcHBsaWNhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCB0b0RvVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGFsbG9jYXRlU3BhY2VGb3JUb0RPTGlzdCh0aGlzLmxpc3RFbGVtZW50KTtcblxuICAgIHV0aWxzLnNvcnRUYXNrcyh0b0RvVGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICB0aGlzLmxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50c1RvRHluYW1pY0VsZW1lbnRzKCk7XG4gIH07XG5cbiAgYWRkRXZlbnRzVG9UYXNrRWxlbWVudCA9IChuZXdUYXNrKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgICApO1xuICAgIGNvbnN0IGlucHV0ID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICApO1xuICAgIGNvbnN0IGJ1dHRvbiA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcihcbiAgICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kb09uQ2hlY2tib3hDaGVja2VkLFxuICAgICk7XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2lucHV0JyxcbiAgICAgIHRoaXMuZG9PbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkLFxuICAgICk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25EZWxldGVCdXR0b25DbGlja2VkLFxuICAgICk7XG4gIH07XG5cbiAgaXNJbnB1dFZhbGlkID0gKGlucHV0VmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tzRGVzY3JpcHRpb25zID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudFxuICAgICAgLnJlYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgLm1hcCgodGQpID0+IHRkLmRlc2NyaXB0aW9uKTtcbiAgICBpZiAodXRpbHMuaXNFbXB0eShpbnB1dFZhbHVlKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNWYWxpZChpbnB1dFZhbHVlKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHV0aWxzLmlzRHVwbGljYXRlKFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICBleGlzdGluZ1Rhc2tzRGVzY3JpcHRpb25zLFxuICAgICAgKVxuICAgICkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgYWRkTmV3VGFza1RvTGlzdCA9ICh0YXNrKSA9PiB7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5hZGRUb0xvY2FsU3RvcmFnZSh0YXNrKTtcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgdGhpcy5hZGRFdmVudHNUb1Rhc2tFbGVtZW50KG5ld1Rhc2spO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gIH07XG5cbiAgY3JlYXRlTmV3VGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMubmV3VGFza0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudC50b0RvVGFza3MubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhpbmRleCwgZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBuZXdUYXNrO1xuICB9O1xuXG4gIGNsZWFyVGFza0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMubmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gIH07XG5cbiAgb25BZGRCdXR0b25DbGlja2VkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzSW5wdXRWYWxpZCh0aGlzLm5ld1Rhc2tJbnB1dC52YWx1ZSkpIHtcbiAgICAgIHRoaXMuYWRkTmV3VGFza1RvTGlzdCh0aGlzLmNyZWF0ZU5ld1Rhc2soKSk7XG4gICAgICB2YWxpZGF0ZUlucHV0V2l0aENvbG9yKHRoaXMubmV3VGFza0lucHV0LCB0cnVlKTtcbiAgICAgIHRoaXMuY2xlYXJUYXNrSW5wdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlU2hha2UodGhpcy5uZXdUYXNrSW5wdXQpO1xuICAgICAgdmFsaWRhdGVJbnB1dFdpdGhDb2xvcih0aGlzLm5ld1Rhc2tJbnB1dCwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBnZXRUb0JlRGVsZXRlZFRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWRUYXNrc0lkcyA9IFtdO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoXG4gICAgICB0aGlzLmxpc3RFbGVtZW50LmNoaWxkcmVuLFxuICAgICk7XG5cbiAgICB0YXNrRWxlbWVudHMuZm9yRWFjaCgodGFza0VsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQodGFza0VsZW1lbnQpO1xuICAgICAgaWYgKGlkID49IDApIHtcbiAgICAgICAgY2hlY2tlZFRhc2tzSWRzLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2VkVGFza3NJZHM7XG4gIH07XG5cbiAgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgZGlzcGxheVVwZGF0ZWRMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplQXBwbGljYXRpb24oKTtcbiAgfTtcblxuICBnZXRSZW1haW5pbmdUYXNrcyA9IChjaGVja2VkVGFza3NJZHMpID0+IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnRcbiAgICAucmVhZExvY2FsU3RvcmFnZSgpXG4gICAgLmZpbHRlcigodCwgaSkgPT4gIWNoZWNrZWRUYXNrc0lkcy5pbmNsdWRlcyhpKSk7XG5cbiAgdXBkYXRlSW5kaWNlcyA9IChyZW1haW5pbmdUYXNrcykgPT4ge1xuICAgIHJlbWFpbmluZ1Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbWFpbmluZ1Rhc2tzO1xuICB9O1xuXG4gIHJlbW92ZVRhc2tGcm9tTGlzdCA9IChjaGVja2VkVGFza3NJZHMpID0+IHtcbiAgICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRoaXMuZ2V0UmVtYWluaW5nVGFza3MoY2hlY2tlZFRhc2tzSWRzKTtcbiAgICBjb25zdCB1cGRhdGVkUmVtYWluaW5nVGFza3MgPSB0aGlzLnVwZGF0ZUluZGljZXMocmVtYWluaW5nVGFza3MpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQudXBkYXRlTG9jYWxTdG9yYWdlKFxuICAgICAgdXBkYXRlZFJlbWFpbmluZ1Rhc2tzLFxuICAgICk7XG4gICAgdGhpcy5kaXNwbGF5VXBkYXRlZExpc3QoKTtcbiAgfTtcblxuICBvbkNsZWFyQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja2VkVGFza3NJZHMgPSB0aGlzLmdldFRvQmVEZWxldGVkVGFza0xpc3QoKTtcbiAgICB0aGlzLnJlbW92ZVRhc2tGcm9tTGlzdChjaGVja2VkVGFza3NJZHMpO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI2FkZC10YXNrLWJ1dHRvbicsXG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0RvVGFza3MgPSBbXTtcbiAgfVxuXG4gIGluaXRpYWxpemVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Rhc2tzJykpIHtcbiAgICAgIHRoaXMudG9Eb1Rhc2tzID0gW107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9Eb1Rhc2tzID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRJbmRpY2VzID0gKG1vZGlmaWVkVG9Eb1Rhc2tzKSA9PiBtb2RpZmllZFRvRG9UYXNrcy5tYXAoKHRhc2ssIG9yZGVyKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IG9yZGVyO1xuICAgIHJldHVybiB0YXNrO1xuICB9KTtcblxuICB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAodG9Eb1Rhc2tzKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MgPSB0b0RvVGFza3M7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIGFkZFRvTG9jYWxTdG9yYWdlID0gKHRhc2spID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrcy5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgKTtcbiAgfTtcblxuICBjaGFuZ2VUYXNrU3RhdHVzID0gKHRhc2ssIHN0YXR1cykgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzW3Rhc2suaW5kZXhdLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgY2hhbmdlVGFza0Rlc2NyaXB0aW9uID0gKHRhc2ssIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3NbdGFzay5pbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgcmVhZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrcyA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Rhc2tzJyksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy50b0RvVGFza3M7XG4gIH07XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNsZWFyQnV0dG9uIH0gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQodGFza0VsZW1lbnQpIHtcbiAgbGV0IHJlcyA9IC0xO1xuICBpZiAodGFza0VsZW1lbnQuY2hpbGRyZW5bMF0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHJlcyA9IE51bWJlcih0YXNrRWxlbWVudC5pZC5zcGxpdCgnLScpWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2hha2UoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2xvc3QtZm9jdXMtd2l0aC1lcnJvcnMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IoZWxlbWVudCwgaXNWYWxpZCkge1xuICBpZiAoaXNWYWxpZCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZhbGlkJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC12YWxpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVDbGVhckJ1dHRvbigpIHtcbiAgY2xlYXJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUNsZWFyQnV0dG9uKCkge1xuICBjbGVhckJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uQ2hlY2tib3hUb2dnbGUoZSkge1xuICBjb25zdCBjaGVja2JveCA9IGUuY3VycmVudFRhcmdldDtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjaGVja2JveC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2hlY2tFdmVudCh0YXNrRWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY2hlY2tib3gucGFyZW50Tm9kZS5jaGlsZHJlblsxXTtcbiAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICB9IGVsc2Uge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DaGVja2JveFRvZ2dsZSk7XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dEZvY3VzZWQoZSkge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgbW92ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgKTtcbiAgbW92ZUJ1dHRvbi5zdHlsZS56SW5kZXggPSAnLTEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICB0YXNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2I5OWE3ZCc7XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZChlKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBlLnRhcmdldDtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IG1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24ubW92ZS1idXR0b24nLFxuICApO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICk7XG4gIG1vdmVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJy0xJztcbiAgdGFza0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICBpZiAoXG4gICAgdXRpbHMuaXNFbXB0eShkZXNjcmlwdGlvbklucHV0LnZhbHVlKVxuICAgIHx8ICF1dGlscy5pc1ZhbGlkKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpXG4gICkge1xuICAgIHRvZ2dsZVNoYWtlKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuZm9jdXMoKTtcbiAgICBkaXNhYmxlQ2xlYXJCdXR0b24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQoZSkge1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChcbiAgICB1dGlscy5pc0VtcHR5KGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpXG4gICAgfHwgIXV0aWxzLmlzVmFsaWQoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSlcbiAgKSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdub3QtdmFsaWQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgZGlzYWJsZUNsZWFyQnV0dG9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmFsaWQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgZW5hYmxlQ2xlYXJCdXR0b24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnB1dEV2ZW50cyh0YXNrRWxlbWVudCkge1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnbGFiZWwuZGVzY3JpcHRpb24gPiBpbnB1dCcsXG4gICk7XG5cbiAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdmb2N1cycsXG4gICAgb25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZCxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2JsdXInLFxuICAgIG9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZCxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2lucHV0JyxcbiAgICBvbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkLFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRtcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1N0cmluZ0VsZW1lbnQgPSBgPGxpIGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke1xuICAgIHRhc2suaW5kZXhcbiAgfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrLSR7XG4gIHRhc2suaW5kZXhcbn1cIiBpZD1cImNoZWNrLSR7dGFzay5pbmRleH1cIiAke1xuICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6IG51bGxcbn0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbn1cIiBpZD1cImRlc2NyaXB0aW9uLSR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIG1vdmUtYnV0dG9uXCIgaWQ9XCJtb3ZlQnV0dG9uLSR7XG4gIHRhc2suaW5kZXhcbn1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIGRlbGV0ZS1idXR0b25cIiBpZD1cImRlbGV0ZUJ1dHRvbi0ke1xuICB0YXNrLmluZGV4XG59XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+YDtcbiAgdG1wV3JhcHBlci5pbm5lckhUTUwgPSB0YXNrU3RyaW5nRWxlbWVudC50cmltKCk7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSB0bXBXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KTtcbiAgYWRkSW5wdXRFdmVudHModGFza0VsZW1lbnQpO1xuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QodG9Eb0xpc3QpIHtcbiAgdG9Eb0xpc3Quc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtcbiAgICBPYmplY3Qua2V5cyh0b0RvTGlzdCkubGVuZ3RoXG4gIH0sIDQ4cHgpO2A7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza3ModG9Eb1Rhc2tzKSB7XG4gIHJldHVybiB0b0RvVGFza3Muc29ydChcbiAgICAob2JqMSwgb2JqMikgPT4gb2JqMS5pbmRleCAtIG9iajIuaW5kZXgsXG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShzdHJpbmcpIHtcbiAgY29uc3QgcGF0dGVybiA9IC9eKFxccykrJC87XG4gIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoc3RyaW5nKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXihcXHd8LSkrJC87XG4gIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nLnRyaW0oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cGxpY2F0ZShcbiAgc3RyaW5nLFxuICBleGlzdGluZ1Rhc2tzRGVzY3JpcHRpb25zLFxuKSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgZXhpc3RpbmdUYXNrc0Rlc2NyaXB0aW9ucy5mb3JFYWNoKCh0ZCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHN0cmluZy50cmltKCkudG9VcHBlckNhc2UoKVxuICAgICAgPT09IHRkLnRyaW0oKS50b1VwcGVyQ2FzZSgpXG4gICAgKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L25pZXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvbmllci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PVN0eWxlIHJlc2V0PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTmllckZvbnQ7XFxuICBzcmM6XFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvci1ib2R5OiAjZDFjZGI3O1xcbiAgLS1iZy1jb2xvci1idXR0b246IGJhYjVhMTtcXG4gIC0tYmctY29sb3ItbGlzdDogI2ZmZjtcXG4gIC0tY29sb3ItdGl0bGU6ICM0MzQzNDY7XFxuICAtLWNvbG9yLXdhcm5pbmc6ICNkMjVkNDc7XFxuICAtLWJnLWNvbG9yLWFjdGl2ZTogIzQ1NDEzODtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzB2aCAwIDIwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICNjY2M4YjEgMXB4LFxcbiAgICAgIHRyYW5zcGFyZW50IDFweFxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2M4YjEgMXB4LCAjZDFjZGI3IDFweCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDZweCA2cHg7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2IoNTAgNTAgOTMgLyAyNSUpIDAgMjBweCA0MHB4IC0xMnB4IGluc2V0LFxcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDAgMThweCAxOHB4IC0xOHB4IGluc2V0O1xcbn1cXG5cXG5hLFxcbmE6bGluayxcXG5hOnZpc2l0ZWQsXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6IHZhcigtLXNoYXJrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmgxIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT1DYXJkIHN0eWxpbmc9PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbm1haW4ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDhweCA0OHB4IGF1dG8gNzJweDtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMCA1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGgxIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LWZhbWlseTogTmllckZvbnQsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCAjYmFiNWExO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiAuaWNvbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24gaW5wdXQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNnB4IDMycHggNnB4IDEycHg7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIC5pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMnB4O1xcbiAgdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udG8tZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gNDhweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDhweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDMwJTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG59XFxuXFxuLm5vdC12YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLm5vdC12YWxpZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLnZhbGlkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbn1cXG5cXG4ubG9zdC1mb2N1cy13aXRoLWVycm9ycyB7XFxuICBhbmltYXRpb246XFxuICAgIHNoYWtlIDAuODJzXFxuICAgIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxufVxcblxcbi50YXNrIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2sgLmRlbGV0ZS1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IHotaW5kZXggMC42cyBzdGVwLWVuZDtcXG59XFxuXFxuLnRhc2sgLm1vdmUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zaXRpb246IHotaW5kZXggMC42cyBzdGVwLWVuZDtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGxlZnQsXFxuICAgICAgdmFyKC0tYmctY29sb3ItbGlzdCkgNTAlLFxcbiAgICAgIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSkgNTAlXFxuICAgICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi5jbGVhci1idXR0b246OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgdG9wOiA1JTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjpob3ZlcjplbmFibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgMjAlLFxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcblxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQ0FBb0M7O0FBRXBDLG9DQUFvQzs7QUFFcEMsb0NBQW9DOztBQUdwQztFQUNFLHFCQUFxQjtFQUNyQjs7MERBRXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1o7Ozs7O3VEQUtxRDtFQUNyRCx3QkFBd0I7RUFDeEI7OzRDQUUwQztBQUM1Qzs7QUFFQTs7Ozs7RUFLRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VB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QkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFOztJQUVFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7O0VBRUE7OztJQUdFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSxpQ0FBaUM7RUFDbkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09U3R5bGUgcmVzZXQ9PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250O1xcbiAgc3JjOlxcbiAgICB1cmwoXFxcIi4vZm9udC9uaWVyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4vZm9udC9uaWVyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3ItYm9keTogI2QxY2RiNztcXG4gIC0tYmctY29sb3ItYnV0dG9uOiBiYWI1YTE7XFxuICAtLWJnLWNvbG9yLWxpc3Q6ICNmZmY7XFxuICAtLWNvbG9yLXRpdGxlOiAjNDM0MzQ2O1xcbiAgLS1jb2xvci13YXJuaW5nOiAjZDI1ZDQ3O1xcbiAgLS1iZy1jb2xvci1hY3RpdmU6ICM0NTQxMzg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMwdmggMCAyMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAjY2NjOGIxIDFweCxcXG4gICAgICB0cmFuc3BhcmVudCAxcHhcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjOGIxIDFweCwgI2QxY2RiNyAxcHgpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2cHggNnB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiKDUwIDUwIDkzIC8gMjUlKSAwIDIwcHggNDBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiKDAgMCAwIC8gMzAlKSAwIDE4cHggMThweCAtMThweCBpbnNldDtcXG59XFxuXFxuYSxcXG5hOmxpbmssXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB2YXIoLS1zaGFyayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09Q2FyZCBzdHlsaW5nPT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggNDhweCBhdXRvIDcycHg7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDAgNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAgI2JhYjVhMTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLmljb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDZweCAzMnB4IDZweCAxMnB4O1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTJweDtcXG4gIHRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnRvLWRvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDQ4cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAzMCU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbn1cXG5cXG4udmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxufVxcblxcbi5ub3QtdmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5ub3QtdmFsaWQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS52YWxpZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLmxvc3QtZm9jdXMtd2l0aC1lcnJvcnMge1xcbiAgYW5pbWF0aW9uOlxcbiAgICBzaGFrZSAwLjgyc1xcbiAgICBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4udGFzayAuaWNvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi50YXNrIC5tb3ZlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi5jbGVhci1idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBsZWZ0LFxcbiAgICAgIHZhcigtLWJnLWNvbG9yLWxpc3QpIDUwJSxcXG4gICAgICB2YXIoLS1iZy1jb2xvci1hY3RpdmUpIDUwJVxcbiAgICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5jbGVhci1idXR0b246aG92ZXI6ZW5hYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENSVUQgZnJvbSAnLi9jb21wb25lbnRzL2NydWQtb3BlcmF0aW9ucyc7XG5cbmNvbnN0IGNydWQgPSBuZXcgQ1JVRCgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICBjcnVkLmluaXRpYWxpemVBcHBsaWNhdGlvbixcbik7XG4iXSwibmFtZXMiOlsiZG9tIiwiTG9jYWxTdG9yYWdlIiwiVGFzayIsImNyZWF0ZVRhc2tFbGVtZW50IiwiYWxsb2NhdGVTcGFjZUZvclRvRE9MaXN0IiwiZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQiLCJlbmFibGVDbGVhckJ1dHRvbiIsInRvZ2dsZVNoYWtlIiwidmFsaWRhdGVJbnB1dFdpdGhDb2xvciIsInV0aWxzIiwiQ1JVRCIsImUiLCJpZCIsInRhcmdldCIsInNwbGl0IiwidGFzayIsInN0b3JhZ2VNYW5hZ2VtZW50IiwicmVhZExvY2FsU3RvcmFnZSIsImNoYW5nZVRhc2tTdGF0dXMiLCJjaGVja2VkIiwiY2hhbmdlVGFza0Rlc2NyaXB0aW9uIiwidmFsdWUiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicmVtYWluaW5nVGFza3MiLCJmaWx0ZXIiLCJpbmRleCIsInJlc2V0SW5kaWNlcyIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsImRpc3BsYXlVcGRhdGVkTGlzdCIsImNoZWNrQm94ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZXNjcmlwdGlvbklucHV0cyIsImRlbGV0ZUJ1dHRvbnMiLCJtb3ZlQnV0dG9ucyIsImZvckVhY2giLCJjaGVja2JveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb09uQ2hlY2tib3hDaGVja2VkIiwiaW5wdXQiLCJkb09uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQiLCJkb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCIsImluaXRpYWxpemVMb2NhbFN0b3JhZ2UiLCJ0b0RvVGFza3MiLCJsaXN0RWxlbWVudCIsInNvcnRUYXNrcyIsInRhc2tFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudHNUb0R5bmFtaWNFbGVtZW50cyIsIm5ld1Rhc2siLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInJlc3VsdCIsImV4aXN0aW5nVGFza3NEZXNjcmlwdGlvbnMiLCJtYXAiLCJ0ZCIsImRlc2NyaXB0aW9uIiwiaXNFbXB0eSIsImlzVmFsaWQiLCJpc0R1cGxpY2F0ZSIsImFkZFRvTG9jYWxTdG9yYWdlIiwiYWRkRXZlbnRzVG9UYXNrRWxlbWVudCIsIm5ld1Rhc2tJbnB1dCIsImxlbmd0aCIsImlzSW5wdXRWYWxpZCIsImFkZE5ld1Rhc2tUb0xpc3QiLCJjcmVhdGVOZXdUYXNrIiwiY2xlYXJUYXNrSW5wdXQiLCJjaGVja2VkVGFza3NJZHMiLCJ0YXNrRWxlbWVudHMiLCJzbGljZSIsImNhbGwiLCJjaGlsZHJlbiIsInB1c2giLCJpbm5lckhUTUwiLCJjbGVhckxpc3QiLCJpbml0aWFsaXplQXBwbGljYXRpb24iLCJ0IiwiaSIsImluY2x1ZGVzIiwiZ2V0UmVtYWluaW5nVGFza3MiLCJ1cGRhdGVkUmVtYWluaW5nVGFza3MiLCJ1cGRhdGVJbmRpY2VzIiwiZ2V0VG9CZURlbGV0ZWRUYXNrTGlzdCIsInJlbW92ZVRhc2tGcm9tTGlzdCIsInRvRG9MaXN0IiwiY2xlYXJCdXR0b24iLCJhZGRCdXR0b24iLCJvbkFkZEJ1dHRvbkNsaWNrZWQiLCJvbkNsZWFyQnV0dG9uQ2xpY2tlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibW9kaWZpZWRUb0RvVGFza3MiLCJvcmRlciIsInN0YXR1cyIsImNvbXBsZXRlZCIsInJlcyIsIk51bWJlciIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJhZGQiLCJkaXNhYmxlZCIsImRpc2FibGVDbGVhckJ1dHRvbiIsIm9uQ2hlY2tib3hUb2dnbGUiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImFkZENoZWNrRXZlbnQiLCJvbkRlc2NyaXB0aW9uSW5wdXRGb2N1c2VkIiwibW92ZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZCIsImRlc2NyaXB0aW9uSW5wdXQiLCJmb2N1cyIsIm9uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQiLCJhZGRJbnB1dEV2ZW50cyIsInRtcFdyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwidGFza1N0cmluZ0VsZW1lbnQiLCJ0cmltIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJncmlkVGVtcGxhdGVSb3dzIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJvYmoxIiwib2JqMiIsInN0cmluZyIsInBhdHRlcm4iLCJ0ZXN0IiwidG9VcHBlckNhc2UiLCJjcnVkIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==

