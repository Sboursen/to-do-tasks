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

  _defineProperty(this, "doOnEnterPressed", function (e) {
    if (e.keyCode === 13) {
      if (_utils__WEBPACK_IMPORTED_MODULE_4__.isValid(_this.newTaskInput.value)) {
        _this.newTaskInput.classList.add('not-valid');

        _this.newTaskInput.classList.remove('valid');

        (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.enableClearButton)();
      }

      _this.onAddButtonClicked();
    }
  });

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
  this.newTaskInput.addEventListener('keydown', this.doOnEnterPressed);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  visibility: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.valid {\n  background-color: var(--bg-color-list);\n}\n\n.not-valid {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].not-valid:focus {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].valid:focus {\n  background-color: var(--bg-color-body);\n}\n\n.lost-focus-with-errors {\n  animation:\n    shake 0.82s\n    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.task .icon {\n  font-size: 17px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: z-index 0.6s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: z-index 0.6s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover:enabled {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 50ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap\");\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(\"./font/nier.woff2\") format(\"woff2\"),\n    url(\"./font/nier.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  visibility: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.valid {\n  background-color: var(--bg-color-list);\n}\n\n.not-valid {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].not-valid:focus {\n  background-color: var(--color-warning);\n}\n\ninput[type=\"text\"].valid:focus {\n  background-color: var(--bg-color-body);\n}\n\n.lost-focus-with-errors {\n  animation:\n    shake 0.82s\n    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.task .icon {\n  font-size: 17px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: z-index 0.6s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: z-index 0.6s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover:enabled {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 50ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztJQUVxQlUsaUNBQ25CLGdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsNENBeUNLLFVBQUNDLENBQUQsRUFBTztBQUN4QixRQUFJQSxDQUFDLENBQUNDLE9BQUYsS0FBYyxFQUFsQixFQUFzQjtBQUNwQixVQUFJSCwyQ0FBQSxDQUFjLEtBQUksQ0FBQ0ssWUFBTCxDQUFrQkMsS0FBaEMsQ0FBSixFQUE0QztBQUMxQyxhQUFJLENBQUNELFlBQUwsQ0FBa0JFLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxXQUFoQzs7QUFDQSxhQUFJLENBQUNILFlBQUwsQ0FBa0JFLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxPQUFuQzs7QUFDQVosUUFBQUEsc0VBQWlCO0FBQ2xCOztBQUNELFdBQUksQ0FBQ2Esa0JBQUw7QUFDRDtBQUNGLEdBbERhOztBQUFBLCtDQW9EUSxVQUFDUixDQUFELEVBQU87QUFDM0IsUUFBTVMsRUFBRSxHQUFHVCxDQUFDLENBQUNVLE1BQUYsQ0FBU0QsRUFBVCxDQUFZRSxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLENBQVg7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHLEtBQUksQ0FBQ0MsaUJBQUwsQ0FBdUJDLGdCQUF2QixHQUEwQ0wsRUFBMUMsQ0FBYjs7QUFDQSxTQUFJLENBQUNJLGlCQUFMLENBQXVCRSxnQkFBdkIsQ0FDRUgsSUFERixFQUVFWixDQUFDLENBQUNVLE1BQUYsQ0FBU00sT0FGWDtBQUlELEdBM0RhOztBQUFBLHVEQTZEZ0IsVUFBQ2hCLENBQUQsRUFBTztBQUNuQyxRQUFNUyxFQUFFLEdBQUdULENBQUMsQ0FBQ1UsTUFBRixDQUFTRCxFQUFULENBQVlFLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsQ0FBWDs7QUFDQSxRQUFNQyxJQUFJLEdBQUcsS0FBSSxDQUFDQyxpQkFBTCxDQUF1QkMsZ0JBQXZCLEdBQTBDTCxFQUExQyxDQUFiOztBQUNBLFNBQUksQ0FBQ0ksaUJBQUwsQ0FBdUJJLHFCQUF2QixDQUNFTCxJQURGLEVBRUVaLENBQUMsQ0FBQ1UsTUFBRixDQUFTTixLQUZYO0FBSUQsR0FwRWE7O0FBQUEsbURBc0VZLFVBQUNKLENBQUQsRUFBTztBQUMvQixRQUFNa0IsTUFBTSxHQUFHbEIsQ0FBQyxDQUFDbUIsYUFBakI7O0FBQ0EsUUFBSUQsTUFBTSxDQUFDVCxFQUFQLENBQVVFLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsTUFBNEIsY0FBaEMsRUFBZ0Q7QUFDOUMsVUFBTUYsRUFBRSxHQUFHUyxNQUFNLENBQUNULEVBQVAsQ0FBVUUsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFYOztBQUNBLFVBQUlTLGNBQWMsR0FBRyxLQUFJLENBQUNQLGlCQUFMLENBQ2xCQyxnQkFEa0IsR0FFbEJPLE1BRmtCLENBRVgsVUFBQ1QsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ1UsS0FBTCxLQUFlLENBQUNiLEVBQTFCO0FBQUEsT0FGVyxDQUFyQjs7QUFHQVcsTUFBQUEsY0FBYyxHQUFHLEtBQUksQ0FBQ1AsaUJBQUwsQ0FBdUJVLFlBQXZCLENBQW9DSCxjQUFwQyxDQUFqQjs7QUFDQSxXQUFJLENBQUNQLGlCQUFMLENBQXVCVyxrQkFBdkIsQ0FDRUosY0FERjs7QUFHQSxXQUFJLENBQUNLLGtCQUFMOztBQUNBOUIsTUFBQUEsc0VBQWlCO0FBQ2xCO0FBQ0YsR0FwRmE7O0FBQUEsc0RBc0ZlLFlBQU07QUFDakMsU0FBSSxDQUFDK0IsVUFBTCxHQUFrQkMsUUFBUSxDQUFDQyxnQkFBVCxDQUNoQiwyQkFEZ0IsQ0FBbEI7QUFHQSxTQUFJLENBQUNDLGlCQUFMLEdBQXlCRixRQUFRLENBQUNDLGdCQUFULENBQ3ZCLHVCQUR1QixDQUF6QjtBQUdBLFNBQUksQ0FBQ0UsYUFBTCxHQUFxQkgsUUFBUSxDQUFDQyxnQkFBVCxDQUNuQix5QkFEbUIsQ0FBckI7QUFHQSxTQUFJLENBQUNHLFdBQUwsR0FBbUJKLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDakIsdUJBRGlCLENBQW5COztBQUlBLFNBQUksQ0FBQ0YsVUFBTCxDQUFnQk0sT0FBaEIsQ0FBd0IsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDcEMsT0FEb0MsRUFFcEMsS0FBSSxDQUFDQyxtQkFGK0IsQ0FBZDtBQUFBLEtBQXhCOztBQUlBLFNBQUksQ0FBQ04saUJBQUwsQ0FBdUJHLE9BQXZCLENBQStCLFVBQUNJLEtBQUQ7QUFBQSxhQUFXQSxLQUFLLENBQUNGLGdCQUFOLENBQ3hDLE9BRHdDLEVBRXhDLEtBQUksQ0FBQ0csMkJBRm1DLENBQVg7QUFBQSxLQUEvQjs7QUFJQSxTQUFJLENBQUNQLGFBQUwsQ0FBbUJFLE9BQW5CLENBQTJCLFVBQUNkLE1BQUQ7QUFBQSxhQUFZQSxNQUFNLENBQUNnQixnQkFBUCxDQUNyQyxPQURxQyxFQUVyQyxLQUFJLENBQUNJLHVCQUZnQyxDQUFaO0FBQUEsS0FBM0I7QUFJRCxHQWhIYTs7QUFBQSxtREFrSFksWUFBTTtBQUM5QixRQUFJLENBQUN4QywyQ0FBQSxDQUFjLEtBQUksQ0FBQ0ssWUFBTCxDQUFrQkMsS0FBaEMsQ0FBTCxFQUE2QztBQUMzQyxXQUFJLENBQUNELFlBQUwsQ0FBa0JFLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxXQUFoQzs7QUFDQSxXQUFJLENBQUNILFlBQUwsQ0FBa0JFLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxPQUFuQzs7QUFDQVosTUFBQUEsc0VBQWlCO0FBQ2xCLEtBSkQsTUFJTztBQUNMLFdBQUksQ0FBQ1EsWUFBTCxDQUFrQkUsU0FBbEIsQ0FBNEJFLE1BQTVCLENBQW1DLFdBQW5DOztBQUNBLFdBQUksQ0FBQ0osWUFBTCxDQUFrQkUsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLE9BQWhDOztBQUNBWCxNQUFBQSxzRUFBaUI7QUFDbEI7QUFDRixHQTVIYTs7QUFBQSxpREE4SFUsWUFBTTtBQUM1QixTQUFJLENBQUNrQixpQkFBTCxDQUF1QjBCLHNCQUF2Qjs7QUFDQSxRQUFNQyxTQUFTLEdBQUcsS0FBSSxDQUFDM0IsaUJBQUwsQ0FBdUJDLGdCQUF2QixFQUFsQjs7QUFFQXJCLElBQUFBLDZFQUF3QixDQUFDLEtBQUksQ0FBQ2dELFdBQU4sQ0FBeEI7QUFFQTNDLElBQUFBLDZDQUFBLENBQWdCMEMsU0FBaEIsRUFBMkJSLE9BQTNCLENBQW1DLFVBQUNwQixJQUFELEVBQVU7QUFDM0MsVUFBTStCLFdBQVcsR0FBR25ELCtEQUFpQixDQUFDb0IsSUFBRCxDQUFyQzs7QUFDQSxXQUFJLENBQUM2QixXQUFMLENBQWlCRyxXQUFqQixDQUE2QkQsV0FBN0I7QUFDRCxLQUhEOztBQUlBLFNBQUksQ0FBQ0UsMEJBQUw7QUFDRCxHQXpJYTs7QUFBQSxrREEySVcsVUFBQ0MsT0FBRCxFQUFhO0FBQ3BDLFFBQU1iLFFBQVEsR0FBR2EsT0FBTyxDQUFDQyxhQUFSLENBQ2Ysd0JBRGUsQ0FBakI7QUFHQSxRQUFNWCxLQUFLLEdBQUdVLE9BQU8sQ0FBQ0MsYUFBUixDQUNaLG9CQURZLENBQWQ7QUFHQSxRQUFNN0IsTUFBTSxHQUFHNEIsT0FBTyxDQUFDQyxhQUFSLENBQ2Isc0JBRGEsQ0FBZjtBQUlBZCxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQ0UsT0FERixFQUVFLEtBQUksQ0FBQ0MsbUJBRlA7QUFLQUMsSUFBQUEsS0FBSyxDQUFDRixnQkFBTixDQUNFLE9BREYsRUFFRSxLQUFJLENBQUNHLDJCQUZQO0FBS0FuQixJQUFBQSxNQUFNLENBQUNnQixnQkFBUCxDQUNFLE9BREYsRUFFRSxLQUFJLENBQUNJLHVCQUZQO0FBSUQsR0FwS2E7O0FBQUEsd0NBc0tDLFVBQUNVLFVBQUQsRUFBZ0I7QUFDN0IsUUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBQ0EsUUFBTUMseUJBQXlCLEdBQUcsS0FBSSxDQUFDckMsaUJBQUwsQ0FDL0JDLGdCQUQrQixHQUUvQnFDLEdBRitCLENBRTNCLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNDLFdBQVg7QUFBQSxLQUYyQixDQUFsQzs7QUFHQSxRQUFJdkQsMkNBQUEsQ0FBY2tELFVBQWQsQ0FBSixFQUErQjtBQUM3QkMsTUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDbkQsMkNBQUEsQ0FBY2tELFVBQWQsQ0FBTCxFQUFnQztBQUNyQ0MsTUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDRCxLQUZNLE1BRUEsSUFDTG5ELCtDQUFBLENBQ0VrRCxVQURGLEVBRUVFLHlCQUZGLENBREssRUFLTDtBQUNBRCxNQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNEOztBQUNELFdBQU9BLE1BQVA7QUFDRCxHQXhMYTs7QUFBQSw0Q0EwTEssVUFBQ3JDLElBQUQsRUFBVTtBQUMzQixTQUFJLENBQUNDLGlCQUFMLENBQXVCMkMsaUJBQXZCLENBQXlDNUMsSUFBekM7O0FBQ0EsUUFBTWtDLE9BQU8sR0FBR3RELCtEQUFpQixDQUFDb0IsSUFBRCxDQUFqQzs7QUFDQSxTQUFJLENBQUM2QyxzQkFBTCxDQUE0QlgsT0FBNUI7O0FBQ0EsU0FBSSxDQUFDTCxXQUFMLENBQWlCRyxXQUFqQixDQUE2QkUsT0FBN0I7QUFDRCxHQS9MYTs7QUFBQSx5Q0FpTUUsWUFBTTtBQUNwQixRQUFNTyxXQUFXLEdBQUcsS0FBSSxDQUFDbEQsWUFBTCxDQUFrQkMsS0FBdEM7QUFDQSxRQUFNa0IsS0FBSyxHQUFHLEtBQUksQ0FBQ1QsaUJBQUwsQ0FBdUIyQixTQUF2QixDQUFpQ2tCLE1BQS9DO0FBQ0EsUUFBTVosT0FBTyxHQUFHLElBQUl2RCw2Q0FBSixDQUFTK0IsS0FBVCxFQUFnQitCLFdBQWhCLENBQWhCO0FBQ0EsV0FBT1AsT0FBUDtBQUNELEdBdE1hOztBQUFBLDBDQXdNRyxZQUFNO0FBQ3JCLFNBQUksQ0FBQzNDLFlBQUwsQ0FBa0JDLEtBQWxCLEdBQTBCLEVBQTFCO0FBQ0QsR0ExTWE7O0FBQUEsOENBNE1PLFlBQU07QUFDekIsUUFBSSxLQUFJLENBQUN1RCxZQUFMLENBQWtCLEtBQUksQ0FBQ3hELFlBQUwsQ0FBa0JDLEtBQXBDLENBQUosRUFBZ0Q7QUFDOUMsV0FBSSxDQUFDd0QsZ0JBQUwsQ0FBc0IsS0FBSSxDQUFDQyxhQUFMLEVBQXRCOztBQUNBaEUsTUFBQUEsMkVBQXNCLENBQUMsS0FBSSxDQUFDTSxZQUFOLEVBQW9CLElBQXBCLENBQXRCOztBQUNBLFdBQUksQ0FBQzJELGNBQUw7QUFDRCxLQUpELE1BSU87QUFDTGxFLE1BQUFBLGdFQUFXLENBQUMsS0FBSSxDQUFDTyxZQUFOLENBQVg7QUFDQU4sTUFBQUEsMkVBQXNCLENBQUMsS0FBSSxDQUFDTSxZQUFOLEVBQW9CLEtBQXBCLENBQXRCO0FBQ0Q7QUFDRixHQXJOYTs7QUFBQSxrREF1TlcsWUFBTTtBQUM3QixRQUFNNEQsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUNuQixLQUFJLENBQUN6QixXQUFMLENBQWlCMEIsUUFERSxDQUFyQjtBQUlBSCxJQUFBQSxZQUFZLENBQUNoQyxPQUFiLENBQXFCLFVBQUNXLFdBQUQsRUFBaUI7QUFDcEMsVUFBTWxDLEVBQUUsR0FBR2YsNEVBQXVCLENBQUNpRCxXQUFELENBQWxDOztBQUNBLFVBQUlsQyxFQUFFLElBQUksQ0FBVixFQUFhO0FBQ1hzRCxRQUFBQSxlQUFlLENBQUNLLElBQWhCLENBQXFCM0QsRUFBckI7QUFDRDtBQUNGLEtBTEQ7QUFNQSxXQUFPc0QsZUFBUDtBQUNELEdBcE9hOztBQUFBLHFDQXNPRixZQUFNO0FBQ2hCLFNBQUksQ0FBQ3RCLFdBQUwsQ0FBaUI0QixTQUFqQixHQUE2QixFQUE3QjtBQUNELEdBeE9hOztBQUFBLDhDQTBPTyxZQUFNO0FBQ3pCLFNBQUksQ0FBQ0MsU0FBTDs7QUFDQSxTQUFJLENBQUNDLHFCQUFMO0FBQ0QsR0E3T2E7O0FBQUEsNkNBK09NLFVBQUNSLGVBQUQ7QUFBQSxXQUFxQixLQUFJLENBQUNsRCxpQkFBTCxDQUN0Q0MsZ0JBRHNDLEdBRXRDTyxNQUZzQyxDQUUvQixVQUFDbUQsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVSxDQUFDVixlQUFlLENBQUNXLFFBQWhCLENBQXlCRCxDQUF6QixDQUFYO0FBQUEsS0FGK0IsQ0FBckI7QUFBQSxHQS9PTjs7QUFBQSx5Q0FtUEUsVUFBQ3JELGNBQUQsRUFBb0I7QUFDbENBLElBQUFBLGNBQWMsQ0FBQ1ksT0FBZixDQUF1QixVQUFDcEIsSUFBRCxFQUFPVSxLQUFQLEVBQWlCO0FBQ3RDVixNQUFBQSxJQUFJLENBQUNVLEtBQUwsR0FBYUEsS0FBYjtBQUNELEtBRkQ7QUFHQSxXQUFPRixjQUFQO0FBQ0QsR0F4UGE7O0FBQUEsOENBMFBPLFVBQUMyQyxlQUFELEVBQXFCO0FBQ3hDLFFBQU0zQyxjQUFjLEdBQUcsS0FBSSxDQUFDdUQsaUJBQUwsQ0FBdUJaLGVBQXZCLENBQXZCOztBQUNBLFFBQU1hLHFCQUFxQixHQUFHLEtBQUksQ0FBQ0MsYUFBTCxDQUFtQnpELGNBQW5CLENBQTlCOztBQUNBLFNBQUksQ0FBQ1AsaUJBQUwsQ0FBdUJXLGtCQUF2QixDQUNFb0QscUJBREY7O0FBR0EsU0FBSSxDQUFDbkQsa0JBQUw7QUFDRCxHQWpRYTs7QUFBQSxnREFtUVMsWUFBTTtBQUMzQixRQUFNc0MsZUFBZSxHQUFHLEtBQUksQ0FBQ2Usc0JBQUwsRUFBeEI7O0FBQ0EsU0FBSSxDQUFDQyxrQkFBTCxDQUF3QmhCLGVBQXhCO0FBQ0QsR0F0UWE7O0FBQ1osT0FBS2xELGlCQUFMLEdBQXlCLElBQUl2QixzREFBSixFQUF6QjtBQUNBLE9BQUttRCxXQUFMLEdBQW1CcEQsbURBQW5CO0FBQ0EsT0FBSzRGLFdBQUwsR0FBbUI1RixzREFBbkI7QUFDQSxPQUFLYyxZQUFMLEdBQW9CZCx1REFBcEI7QUFDQSxPQUFLNkYsU0FBTCxHQUFpQjdGLG9EQUFqQjtBQUNBLE9BQUtxQyxVQUFMLEdBQWtCQyxRQUFRLENBQUNDLGdCQUFULENBQ2hCLDJCQURnQixDQUFsQjtBQUdBLE9BQUtDLGlCQUFMLEdBQXlCRixRQUFRLENBQUNDLGdCQUFULENBQ3ZCLHVCQUR1QixDQUF6QjtBQUdBLE9BQUtFLGFBQUwsR0FBcUJILFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDbkIseUJBRG1CLENBQXJCO0FBR0EsT0FBS0csV0FBTCxHQUFtQkosUUFBUSxDQUFDQyxnQkFBVCxDQUNqQix1QkFEaUIsQ0FBbkIsQ0FmWSxDQW1CWjs7QUFDQSxPQUFLc0QsU0FBTCxDQUFlaEQsZ0JBQWYsQ0FDRSxPQURGLEVBRUUsS0FBSzFCLGtCQUZQO0FBS0EsT0FBS3lFLFdBQUwsQ0FBaUIvQyxnQkFBakIsQ0FDRSxPQURGLEVBRUUsS0FBS2lELG9CQUZQO0FBS0EsT0FBS2hGLFlBQUwsQ0FBa0IrQixnQkFBbEIsQ0FDRSxPQURGLEVBRUUsS0FBS2tELHVCQUZQO0FBS0EsT0FBS2pGLFlBQUwsQ0FBa0IrQixnQkFBbEIsQ0FDRSxTQURGLEVBRUUsS0FBS21ELGdCQUZQO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREksSUFBTUosV0FBVyxHQUFHdEQsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLElBQU1pQyxRQUFRLEdBQUdyRCxRQUFRLENBQUNvQixhQUFULENBQXVCLGFBQXZCLENBQWpCO0FBQ0EsSUFBTTVDLFlBQVksR0FBR3dCLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBckI7QUFDQSxJQUFNbUMsU0FBUyxHQUFHdkQsUUFBUSxDQUFDb0IsYUFBVCxDQUN2QixrQkFEdUIsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNIY3pELHlDQUNuQix3QkFBYztBQUFBOztBQUFBOztBQUFBLGtEQUlXLFlBQU07QUFDN0IsUUFBSSxDQUFDZ0csWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQUwsRUFBd0M7QUFDdEMsV0FBSSxDQUFDL0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBOEMsTUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQ0UsV0FERixFQUVFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFJLENBQUNsRCxTQUFwQixDQUZGO0FBSUQsS0FORCxNQU1PO0FBQ0wsV0FBSSxDQUFDQSxTQUFMLEdBQWlCaUQsSUFBSSxDQUFDRSxLQUFMLENBQ2ZMLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQURlLENBQWpCO0FBR0Q7QUFDRixHQWhCYTs7QUFBQSx3Q0FrQkMsVUFBQ0ssaUJBQUQ7QUFBQSxXQUF1QkEsaUJBQWlCLENBQUN6QyxHQUFsQixDQUFzQixVQUFDdkMsSUFBRCxFQUFPaUYsS0FBUCxFQUFpQjtBQUMzRWpGLE1BQUFBLElBQUksQ0FBQ1UsS0FBTCxHQUFhdUUsS0FBYjtBQUNBLGFBQU9qRixJQUFQO0FBQ0QsS0FIcUMsQ0FBdkI7QUFBQSxHQWxCRDs7QUFBQSw4Q0F1Qk8sVUFBQzRCLFNBQUQsRUFBZTtBQUNsQyxTQUFJLENBQUNBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0E4QyxJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FDRSxXQURGLEVBRUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUksQ0FBQ2xELFNBQXBCLENBRkY7QUFJRCxHQTdCYTs7QUFBQSw2Q0ErQk0sVUFBQzVCLElBQUQsRUFBVTtBQUM1QixTQUFJLENBQUM0QixTQUFMLENBQWU0QixJQUFmLENBQW9CeEQsSUFBcEI7O0FBQ0EwRSxJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FDRSxXQURGLEVBRUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUksQ0FBQ2xELFNBQXBCLENBRkY7QUFJRCxHQXJDYTs7QUFBQSw0Q0F1Q0ssVUFBQzVCLElBQUQsRUFBT2tGLE1BQVAsRUFBa0I7QUFDbkMsU0FBSSxDQUFDdEQsU0FBTCxDQUFlNUIsSUFBSSxDQUFDVSxLQUFwQixFQUEyQnlFLFNBQTNCLEdBQXVDRCxNQUF2QztBQUNBUixJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FDRSxXQURGLEVBRUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUksQ0FBQ2xELFNBQXBCLENBRkY7QUFJRCxHQTdDYTs7QUFBQSxpREErQ1UsVUFBQzVCLElBQUQsRUFBT3lDLFdBQVAsRUFBdUI7QUFDN0MsU0FBSSxDQUFDYixTQUFMLENBQWU1QixJQUFJLENBQUNVLEtBQXBCLEVBQTJCK0IsV0FBM0IsR0FBeUNBLFdBQXpDO0FBQ0FpQyxJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FDRSxXQURGLEVBRUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUksQ0FBQ2xELFNBQXBCLENBRkY7QUFJRCxHQXJEYTs7QUFBQSw0Q0F1REssWUFBTTtBQUN2QixTQUFJLENBQUNBLFNBQUwsR0FBaUJpRCxJQUFJLENBQUNFLEtBQUwsQ0FDZkwsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBRGUsQ0FBakI7QUFHQSxXQUFPLEtBQUksQ0FBQy9DLFNBQVo7QUFDRCxHQTVEYTs7QUFDWixPQUFLQSxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEg7QUFDQTtBQUVPLFNBQVM5Qyx1QkFBVCxDQUFpQ2lELFdBQWpDLEVBQThDO0FBQ25ELE1BQUlxRCxHQUFHLEdBQUcsQ0FBQyxDQUFYOztBQUNBLE1BQUlyRCxXQUFXLENBQUN3QixRQUFaLENBQXFCLENBQXJCLEVBQXdCbkQsT0FBeEIsS0FBb0MsSUFBeEMsRUFBOEM7QUFDNUNnRixJQUFBQSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ3RELFdBQVcsQ0FBQ2xDLEVBQVosQ0FBZUUsS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixDQUFELENBQVo7QUFDRDs7QUFDRCxTQUFPcUYsR0FBUDtBQUNEO0FBRU0sU0FBU3BHLFdBQVQsQ0FBcUJzRyxPQUFyQixFQUE4QjtBQUNuQ0EsRUFBQUEsT0FBTyxDQUFDN0YsU0FBUixDQUFrQjhGLE1BQWxCLENBQXlCLHdCQUF6QjtBQUNEO0FBRU0sU0FBU3RHLHNCQUFULENBQWdDcUcsT0FBaEMsRUFBeUNoRyxPQUF6QyxFQUFrRDtBQUN2RCxNQUFJQSxPQUFKLEVBQWE7QUFDWGdHLElBQUFBLE9BQU8sQ0FBQzdGLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFdBQXpCO0FBQ0EyRixJQUFBQSxPQUFPLENBQUM3RixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixPQUF0QjtBQUNELEdBSEQsTUFHTztBQUNMNEYsSUFBQUEsT0FBTyxDQUFDN0YsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsT0FBekI7QUFDQTJGLElBQUFBLE9BQU8sQ0FBQzdGLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0Q7QUFDRjtBQUVNLFNBQVNYLGlCQUFULEdBQTZCO0FBQ2xDc0YsRUFBQUEsK0RBQUEsR0FBdUIsS0FBdkI7QUFDRDs7QUFFRCxTQUFTb0Isa0JBQVQsR0FBOEI7QUFDNUJwQixFQUFBQSwrREFBQSxHQUF1QixJQUF2QjtBQUNEOztBQUVELFNBQVNxQixnQkFBVCxDQUEwQnRHLENBQTFCLEVBQTZCO0FBQzNCLE1BQU1pQyxRQUFRLEdBQUdqQyxDQUFDLENBQUNtQixhQUFuQjtBQUNBLE1BQU1rQyxXQUFXLEdBQUdwQixRQUFRLENBQUNzRSxVQUFULENBQW9CcEMsUUFBcEIsQ0FBNkIsQ0FBN0IsQ0FBcEI7O0FBQ0EsTUFBSWxDLFFBQVEsQ0FBQ2pCLE9BQWIsRUFBc0I7QUFDcEJxQyxJQUFBQSxXQUFXLENBQUNtRCxLQUFaLENBQWtCQyxjQUFsQixHQUFtQyxjQUFuQztBQUNELEdBRkQsTUFFTztBQUNMcEQsSUFBQUEsV0FBVyxDQUFDbUQsS0FBWixDQUFrQkMsY0FBbEIsR0FBbUMsTUFBbkM7QUFDRDs7QUFDRDlHLEVBQUFBLGlCQUFpQjtBQUNsQjs7QUFFRCxTQUFTK0csYUFBVCxDQUF1Qi9ELFdBQXZCLEVBQW9DO0FBQ2xDLE1BQU1WLFFBQVEsR0FBR1UsV0FBVyxDQUFDSSxhQUFaLENBQ2Ysd0JBRGUsQ0FBakI7QUFHQSxNQUFNTSxXQUFXLEdBQUdwQixRQUFRLENBQUNzRSxVQUFULENBQW9CcEMsUUFBcEIsQ0FBNkIsQ0FBN0IsQ0FBcEI7O0FBQ0EsTUFBSWxDLFFBQVEsQ0FBQ2pCLE9BQWIsRUFBc0I7QUFDcEJxQyxJQUFBQSxXQUFXLENBQUNtRCxLQUFaLENBQWtCQyxjQUFsQixHQUFtQyxjQUFuQztBQUNELEdBRkQsTUFFTztBQUNMcEQsSUFBQUEsV0FBVyxDQUFDbUQsS0FBWixDQUFrQkMsY0FBbEIsR0FBbUMsTUFBbkM7QUFDRDs7QUFDRHhFLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNvRSxnQkFBbkM7QUFDRDs7QUFFRCxTQUFTSyx5QkFBVCxDQUFtQzNHLENBQW5DLEVBQXNDO0FBQ3BDLE1BQU0yQyxXQUFXLEdBQUczQyxDQUFDLENBQUNVLE1BQUYsQ0FBUzZGLFVBQVQsQ0FBb0JBLFVBQXhDO0FBQ0EsTUFBTUssVUFBVSxHQUFHakUsV0FBVyxDQUFDSSxhQUFaLENBQ2pCLG9CQURpQixDQUFuQjtBQUdBLE1BQU04RCxZQUFZLEdBQUdsRSxXQUFXLENBQUNJLGFBQVosQ0FDbkIsc0JBRG1CLENBQXJCO0FBR0E2RCxFQUFBQSxVQUFVLENBQUNKLEtBQVgsQ0FBaUJNLE1BQWpCLEdBQTBCLElBQTFCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0wsS0FBYixDQUFtQk0sTUFBbkIsR0FBNEIsR0FBNUI7QUFDQW5FLEVBQUFBLFdBQVcsQ0FBQzZELEtBQVosQ0FBa0JPLGVBQWxCLEdBQW9DLFNBQXBDO0FBQ0Q7O0FBRUQsU0FBU0Msd0JBQVQsQ0FBa0NoSCxDQUFsQyxFQUFxQztBQUNuQyxNQUFNaUgsZ0JBQWdCLEdBQUdqSCxDQUFDLENBQUNVLE1BQTNCO0FBQ0EsTUFBTWlDLFdBQVcsR0FBRzNDLENBQUMsQ0FBQ1UsTUFBRixDQUFTNkYsVUFBVCxDQUFvQkEsVUFBeEM7QUFDQSxNQUFNSyxVQUFVLEdBQUdqRSxXQUFXLENBQUNJLGFBQVosQ0FDakIsb0JBRGlCLENBQW5CO0FBR0EsTUFBTThELFlBQVksR0FBR2xFLFdBQVcsQ0FBQ0ksYUFBWixDQUNuQixzQkFEbUIsQ0FBckI7QUFHQTZELEVBQUFBLFVBQVUsQ0FBQ0osS0FBWCxDQUFpQk0sTUFBakIsR0FBMEIsR0FBMUI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDTCxLQUFiLENBQW1CTSxNQUFuQixHQUE0QixJQUE1QjtBQUNBbkUsRUFBQUEsV0FBVyxDQUFDNkQsS0FBWixDQUFrQk8sZUFBbEIsR0FBb0MsYUFBcEM7O0FBRUEsTUFDRWpILDJDQUFBLENBQWNtSCxnQkFBZ0IsQ0FBQzdHLEtBQS9CLEtBQ0csQ0FBQ04sMkNBQUEsQ0FBY21ILGdCQUFnQixDQUFDN0csS0FBL0IsQ0FGTixFQUdFO0FBQ0FSLElBQUFBLFdBQVcsQ0FBQ3FILGdCQUFELENBQVg7QUFDQUEsSUFBQUEsZ0JBQWdCLENBQUNDLEtBQWpCO0FBQ0FiLElBQUFBLGtCQUFrQjtBQUNuQixHQVBELE1BT087QUFDTDFHLElBQUFBLGlCQUFpQjtBQUNsQjtBQUNGOztBQUVELFNBQVN3SCx5QkFBVCxDQUFtQ25ILENBQW5DLEVBQXNDO0FBQ3BDLE1BQU1pSCxnQkFBZ0IsR0FBR2pILENBQUMsQ0FBQ1UsTUFBM0I7O0FBQ0EsTUFDRVosMkNBQUEsQ0FBY21ILGdCQUFnQixDQUFDN0csS0FBL0IsS0FDRyxDQUFDTiwyQ0FBQSxDQUFjbUgsZ0JBQWdCLENBQUM3RyxLQUEvQixDQUZOLEVBR0U7QUFDQTZHLElBQUFBLGdCQUFnQixDQUFDNUcsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLFdBQS9CO0FBQ0EyRyxJQUFBQSxnQkFBZ0IsQ0FBQzVHLFNBQWpCLENBQTJCRSxNQUEzQixDQUFrQyxPQUFsQztBQUNBOEYsSUFBQUEsa0JBQWtCO0FBQ25CLEdBUEQsTUFPTztBQUNMWSxJQUFBQSxnQkFBZ0IsQ0FBQzVHLFNBQWpCLENBQTJCRSxNQUEzQixDQUFrQyxXQUFsQztBQUNBMEcsSUFBQUEsZ0JBQWdCLENBQUM1RyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsT0FBL0I7QUFDQVgsSUFBQUEsaUJBQWlCO0FBQ2xCO0FBQ0Y7O0FBRUQsU0FBU3lILGNBQVQsQ0FBd0J6RSxXQUF4QixFQUFxQztBQUNuQyxNQUFNc0UsZ0JBQWdCLEdBQUd0RSxXQUFXLENBQUNJLGFBQVosQ0FDdkIsMkJBRHVCLENBQXpCO0FBSUFrRSxFQUFBQSxnQkFBZ0IsQ0FBQy9FLGdCQUFqQixDQUNFLE9BREYsRUFFRXlFLHlCQUZGO0FBS0FNLEVBQUFBLGdCQUFnQixDQUFDL0UsZ0JBQWpCLENBQ0UsTUFERixFQUVFOEUsd0JBRkY7QUFLQUMsRUFBQUEsZ0JBQWdCLENBQUMvRSxnQkFBakIsQ0FDRSxPQURGLEVBRUVpRix5QkFGRjtBQUlEOztBQUVjLFNBQVMzSCxpQkFBVCxDQUEyQm9CLElBQTNCLEVBQWlDO0FBQzlDLE1BQU15RyxVQUFVLEdBQUcxRixRQUFRLENBQUMyRixhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsTUFBTUMsaUJBQWlCLDBDQUNyQjNHLElBQUksQ0FBQ1UsS0FEZ0IsZ0VBSXZCVixJQUFJLENBQUNVLEtBSmtCLDJCQUtWVixJQUFJLENBQUNVLEtBTEssZ0JBTXZCVixJQUFJLENBQUNtRixTQUFMLEdBQWlCLFNBQWpCLEdBQTZCLElBTk4sdUlBVXZCbkYsSUFBSSxDQUFDeUMsV0FWa0IsaUNBV0p6QyxJQUFJLENBQUNVLEtBWEQsK0dBY3ZCVixJQUFJLENBQUNVLEtBZGtCLCtLQW1CdkJWLElBQUksQ0FBQ1UsS0FuQmtCLHNGQUF2QjtBQXdCQStGLEVBQUFBLFVBQVUsQ0FBQ2hELFNBQVgsR0FBdUJrRCxpQkFBaUIsQ0FBQ0MsSUFBbEIsRUFBdkI7QUFFQSxNQUFNN0UsV0FBVyxHQUFHMEUsVUFBVSxDQUFDSSxpQkFBL0I7QUFDQWYsRUFBQUEsYUFBYSxDQUFDL0QsV0FBRCxDQUFiO0FBQ0F5RSxFQUFBQSxjQUFjLENBQUN6RSxXQUFELENBQWQ7QUFDQSxTQUFPQSxXQUFQO0FBQ0Q7QUFFTSxTQUFTbEQsd0JBQVQsQ0FBa0N1RixRQUFsQyxFQUE0QztBQUNqREEsRUFBQUEsUUFBUSxDQUFDd0IsS0FBVCxDQUFla0IsZ0JBQWYsb0JBQ0VDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNUMsUUFBWixFQUFzQnRCLE1BRHhCO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUtvQm5FLGlDQUNuQixjQUFZK0IsS0FBWixFQUFtQitCLFdBQW5CLEVBQW1EO0FBQUEsTUFBbkIwQyxTQUFtQix1RUFBUCxLQUFPOztBQUFBOztBQUNqRCxPQUFLekUsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBSytCLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBSzBDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMSSxTQUFTckQsU0FBVCxDQUFtQkYsU0FBbkIsRUFBOEI7QUFDbkMsU0FBT0EsU0FBUyxDQUFDcUYsSUFBVixDQUNMLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLFdBQWdCRCxJQUFJLENBQUN4RyxLQUFMLEdBQWF5RyxJQUFJLENBQUN6RyxLQUFsQztBQUFBLEdBREssQ0FBUDtBQUdEO0FBQ00sU0FBU2dDLE9BQVQsQ0FBaUIwRSxNQUFqQixFQUF5QjtBQUM5QixNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxTQUFPQSxPQUFPLENBQUNDLElBQVIsQ0FBYUYsTUFBYixDQUFQO0FBQ0Q7QUFFTSxTQUFTOUgsT0FBVCxDQUFpQjhILE1BQWpCLEVBQXlCO0FBQzlCLE1BQU1DLE9BQU8sR0FBRyxtQkFBaEI7QUFDQSxTQUFPQSxPQUFPLENBQUNDLElBQVIsQ0FBYUYsTUFBTSxDQUFDUixJQUFQLEVBQWIsQ0FBUDtBQUNEO0FBRU0sU0FBU2pFLFdBQVQsQ0FDTHlFLE1BREssRUFFTDlFLHlCQUZLLEVBR0w7QUFDQSxNQUFJRCxNQUFNLEdBQUcsS0FBYjtBQUNBQyxFQUFBQSx5QkFBeUIsQ0FBQ2xCLE9BQTFCLENBQWtDLFVBQUNvQixFQUFELEVBQVE7QUFDeEMsUUFDRTRFLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjVyxXQUFkLE9BQ0kvRSxFQUFFLENBQUNvRSxJQUFILEdBQVVXLFdBQVYsRUFGTixFQUdFO0FBQ0FsRixNQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNEO0FBQ0YsR0FQRDtBQVFBLFNBQU9BLE1BQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0Qyw2R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsSUFBSSxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDaEoseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsaUxBQWlMLDBCQUEwQix1SkFBdUoscUJBQXFCLHVCQUF1QixHQUFHLFdBQVcsNkJBQTZCLDhCQUE4QiwwQkFBMEIsMkJBQTJCLDZCQUE2QiwrQkFBK0IsR0FBRyxPQUFPLDJCQUEyQixHQUFHLFVBQVUsY0FBYyxlQUFlLEdBQUcsVUFBVSxjQUFjLHlCQUF5QixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0NBQWdDLG1DQUFtQywyQ0FBMkMsaUJBQWlCLHdKQUF3Siw2QkFBNkIsZ0hBQWdILEdBQUcsaURBQWlELDBCQUEwQix3QkFBd0Isd0JBQXdCLG9CQUFvQixHQUFHLFFBQVEscUJBQXFCLGNBQWMsZUFBZSxHQUFHLFlBQVkscUJBQXFCLG1CQUFtQixpQkFBaUIsZUFBZSxrQkFBa0Isb0JBQW9CLHFCQUFxQixHQUFHLFFBQVEsZUFBZSxjQUFjLEdBQUcscUlBQXFJLGlCQUFpQixrQkFBa0IsZ0NBQWdDLDRDQUE0Qyw0Q0FBNEMsMkNBQTJDLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLDhCQUE4Qix1Q0FBdUMsR0FBRyx1QkFBdUIscUJBQXFCLHNDQUFzQyxvQkFBb0IscUJBQXFCLG1DQUFtQyxHQUFHLDBCQUEwQix1QkFBdUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsR0FBRyxvQkFBb0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRywwQkFBMEIscUJBQXFCLG9CQUFvQixxQkFBcUIsaUJBQWlCLGdCQUFnQixzQkFBc0IsdUJBQXVCLHNDQUFzQyx5Q0FBeUMsK0JBQStCLEdBQUcsMEJBQTBCLHVCQUF1QixnQkFBZ0IsV0FBVyxxQkFBcUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsaUJBQWlCLGVBQWUsR0FBRyxpQkFBaUIsa0JBQWtCLGdDQUFnQyxHQUFHLFdBQVcsdUJBQXVCLGlCQUFpQixrQkFBa0IsMENBQTBDLDZCQUE2QixvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLG1CQUFtQix1QkFBdUIseUJBQXlCLGdCQUFnQixlQUFlLGdCQUFnQixHQUFHLGdDQUFnQyxtQkFBbUIsdUJBQXVCLHlCQUF5QixrQkFBa0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsc0NBQXNDLG1CQUFtQix1QkFBdUIseUJBQXlCLDZDQUE2QywyQ0FBMkMsR0FBRyxZQUFZLDJDQUEyQyxHQUFHLGdCQUFnQiwyQ0FBMkMsR0FBRywwQ0FBMEMsMkNBQTJDLEdBQUcsc0NBQXNDLDJDQUEyQyxHQUFHLDZCQUE2QiwrRUFBK0Usb0NBQW9DLGdDQUFnQyx3QkFBd0IsR0FBRyxpQkFBaUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLDBCQUEwQixxQkFBcUIsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0Isc0NBQXNDLEdBQUcsd0JBQXdCLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLGVBQWUsc0NBQXNDLEdBQUcsbUJBQW1CLHVCQUF1QixvQkFBb0IscUJBQXFCLGdJQUFnSSwrQkFBK0Isc0NBQXNDLG9DQUFvQyxHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixZQUFZLFlBQVksK0NBQStDLGtEQUFrRCxrQkFBa0IsR0FBRyxpQ0FBaUMsZ0NBQWdDLHFDQUFxQyxvQkFBb0IsNENBQTRDLDhCQUE4QixHQUFHLGdDQUFnQyxrQkFBa0Isc0JBQXNCLHVCQUF1QixpREFBaUQsb0RBQW9ELEdBQUcsZ0NBQWdDLGdDQUFnQyxHQUFHLHNCQUFzQixpQkFBaUIseUNBQXlDLEtBQUssbUJBQW1CLHdDQUF3QyxLQUFLLDJCQUEyQix5Q0FBeUMsS0FBSyxtQkFBbUIsd0NBQXdDLEtBQUssR0FBRyxTQUFTLHdGQUF3RixjQUFjLGNBQWMsTUFBTSxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsU0FBUyxPQUFPLGFBQWEsT0FBTyxPQUFPLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxjQUFjLGNBQWMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFV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VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUEsSUFBTW1GLElBQUksR0FBRyxJQUFJckksbUVBQUosRUFBYjtBQUVBc0ksTUFBTSxDQUFDbkcsZ0JBQVAsQ0FDRSxrQkFERixFQUVFa0csSUFBSSxDQUFDN0QscUJBRlAsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy9jcnVkLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jb21wb25lbnRzL2RvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvdGFzay1lbGVtZW50LXV0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCwge1xuICBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QsXG4gIGdldENoZWNrZWRUYXNrRWxlbWVudElkLFxuICBlbmFibGVDbGVhckJ1dHRvbixcbiAgdG9nZ2xlU2hha2UsXG4gIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IsXG59IGZyb20gJy4vdGFzay1lbGVtZW50LXV0aWxzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDUlVEIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudCA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZG9tLnRvRG9MaXN0O1xuICAgIHRoaXMuY2xlYXJCdXR0b24gPSBkb20uY2xlYXJCdXR0b247XG4gICAgdGhpcy5uZXdUYXNrSW5wdXQgPSBkb20ubmV3VGFza0lucHV0O1xuICAgIHRoaXMuYWRkQnV0dG9uID0gZG9tLmFkZEJ1dHRvbjtcbiAgICB0aGlzLmNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuICAgIHRoaXMubW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5vbkFkZEJ1dHRvbkNsaWNrZWQsXG4gICAgKTtcblxuICAgIHRoaXMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLm9uQ2xlYXJCdXR0b25DbGlja2VkLFxuICAgICk7XG5cbiAgICB0aGlzLm5ld1Rhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2lucHV0JyxcbiAgICAgIHRoaXMub25UYXNrSW5wdXRWYWx1ZUNoYW5nZWQsXG4gICAgKTtcblxuICAgIHRoaXMubmV3VGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5ZG93bicsXG4gICAgICB0aGlzLmRvT25FbnRlclByZXNzZWQsXG4gICAgKTtcbiAgfVxuXG4gIGRvT25FbnRlclByZXNzZWQgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBpZiAodXRpbHMuaXNWYWxpZCh0aGlzLm5ld1Rhc2tJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5uZXdUYXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnbm90LXZhbGlkJyk7XG4gICAgICAgIHRoaXMubmV3VGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgIGVuYWJsZUNsZWFyQnV0dG9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQWRkQnV0dG9uQ2xpY2tlZCgpO1xuICAgIH1cbiAgfTtcblxuICBkb09uQ2hlY2tib3hDaGVja2VkID0gKGUpID0+IHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XG4gICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVhZExvY2FsU3RvcmFnZSgpW2lkXTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmNoYW5nZVRhc2tTdGF0dXMoXG4gICAgICB0YXNrLFxuICAgICAgZS50YXJnZXQuY2hlY2tlZCxcbiAgICApO1xuICB9O1xuXG4gIGRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCA9IChlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlYWRMb2NhbFN0b3JhZ2UoKVtpZF07XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5jaGFuZ2VUYXNrRGVzY3JpcHRpb24oXG4gICAgICB0YXNrLFxuICAgICAgZS50YXJnZXQudmFsdWUsXG4gICAgKTtcbiAgfTtcblxuICBkb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCA9IChlKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChidXR0b24uaWQuc3BsaXQoJy0nKVswXSA9PT0gJ2RlbGV0ZUJ1dHRvbicpIHtcbiAgICAgIGNvbnN0IGlkID0gYnV0dG9uLmlkLnNwbGl0KCctJylbMV07XG4gICAgICBsZXQgcmVtYWluaW5nVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50XG4gICAgICAgIC5yZWFkTG9jYWxTdG9yYWdlKClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gK2lkKTtcbiAgICAgIHJlbWFpbmluZ1Rhc2tzID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5yZXNldEluZGljZXMocmVtYWluaW5nVGFza3MpO1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC51cGRhdGVMb2NhbFN0b3JhZ2UoXG4gICAgICAgIHJlbWFpbmluZ1Rhc2tzLFxuICAgICAgKTtcbiAgICAgIHRoaXMuZGlzcGxheVVwZGF0ZWRMaXN0KCk7XG4gICAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICAgIH1cbiAgfTtcblxuICBhZGRFdmVudHNUb0R5bmFtaWNFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuICAgIHRoaXMubW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIHRoaXMuY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4gY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25DaGVja2JveENoZWNrZWQsXG4gICAgKSk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdpbnB1dCcsXG4gICAgICB0aGlzLmRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCxcbiAgICApKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25EZWxldGVCdXR0b25DbGlja2VkLFxuICAgICkpO1xuICB9O1xuXG4gIG9uVGFza0lucHV0VmFsdWVDaGFuZ2VkID0gKCkgPT4ge1xuICAgIGlmICghdXRpbHMuaXNWYWxpZCh0aGlzLm5ld1Rhc2tJbnB1dC52YWx1ZSkpIHtcbiAgICAgIHRoaXMubmV3VGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ25vdC12YWxpZCcpO1xuICAgICAgdGhpcy5uZXdUYXNrSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICAgIGVuYWJsZUNsZWFyQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmV3VGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12YWxpZCcpO1xuICAgICAgdGhpcy5uZXdUYXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcbiAgICAgIGVuYWJsZUNsZWFyQnV0dG9uKCk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRpYWxpemVBcHBsaWNhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCB0b0RvVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGFsbG9jYXRlU3BhY2VGb3JUb0RPTGlzdCh0aGlzLmxpc3RFbGVtZW50KTtcblxuICAgIHV0aWxzLnNvcnRUYXNrcyh0b0RvVGFza3MpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICB0aGlzLmxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50c1RvRHluYW1pY0VsZW1lbnRzKCk7XG4gIH07XG5cbiAgYWRkRXZlbnRzVG9UYXNrRWxlbWVudCA9IChuZXdUYXNrKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgICApO1xuICAgIGNvbnN0IGlucHV0ID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICApO1xuICAgIGNvbnN0IGJ1dHRvbiA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcihcbiAgICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kb09uQ2hlY2tib3hDaGVja2VkLFxuICAgICk7XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2lucHV0JyxcbiAgICAgIHRoaXMuZG9PbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkLFxuICAgICk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25EZWxldGVCdXR0b25DbGlja2VkLFxuICAgICk7XG4gIH07XG5cbiAgaXNJbnB1dFZhbGlkID0gKGlucHV0VmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tzRGVzY3JpcHRpb25zID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudFxuICAgICAgLnJlYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgLm1hcCgodGQpID0+IHRkLmRlc2NyaXB0aW9uKTtcbiAgICBpZiAodXRpbHMuaXNFbXB0eShpbnB1dFZhbHVlKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNWYWxpZChpbnB1dFZhbHVlKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHV0aWxzLmlzRHVwbGljYXRlKFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICBleGlzdGluZ1Rhc2tzRGVzY3JpcHRpb25zLFxuICAgICAgKVxuICAgICkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgYWRkTmV3VGFza1RvTGlzdCA9ICh0YXNrKSA9PiB7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5hZGRUb0xvY2FsU3RvcmFnZSh0YXNrKTtcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgdGhpcy5hZGRFdmVudHNUb1Rhc2tFbGVtZW50KG5ld1Rhc2spO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gIH07XG5cbiAgY3JlYXRlTmV3VGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMubmV3VGFza0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudC50b0RvVGFza3MubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhpbmRleCwgZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBuZXdUYXNrO1xuICB9O1xuXG4gIGNsZWFyVGFza0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMubmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gIH07XG5cbiAgb25BZGRCdXR0b25DbGlja2VkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzSW5wdXRWYWxpZCh0aGlzLm5ld1Rhc2tJbnB1dC52YWx1ZSkpIHtcbiAgICAgIHRoaXMuYWRkTmV3VGFza1RvTGlzdCh0aGlzLmNyZWF0ZU5ld1Rhc2soKSk7XG4gICAgICB2YWxpZGF0ZUlucHV0V2l0aENvbG9yKHRoaXMubmV3VGFza0lucHV0LCB0cnVlKTtcbiAgICAgIHRoaXMuY2xlYXJUYXNrSW5wdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlU2hha2UodGhpcy5uZXdUYXNrSW5wdXQpO1xuICAgICAgdmFsaWRhdGVJbnB1dFdpdGhDb2xvcih0aGlzLm5ld1Rhc2tJbnB1dCwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBnZXRUb0JlRGVsZXRlZFRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWRUYXNrc0lkcyA9IFtdO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoXG4gICAgICB0aGlzLmxpc3RFbGVtZW50LmNoaWxkcmVuLFxuICAgICk7XG5cbiAgICB0YXNrRWxlbWVudHMuZm9yRWFjaCgodGFza0VsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQodGFza0VsZW1lbnQpO1xuICAgICAgaWYgKGlkID49IDApIHtcbiAgICAgICAgY2hlY2tlZFRhc2tzSWRzLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2VkVGFza3NJZHM7XG4gIH07XG5cbiAgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgZGlzcGxheVVwZGF0ZWRMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplQXBwbGljYXRpb24oKTtcbiAgfTtcblxuICBnZXRSZW1haW5pbmdUYXNrcyA9IChjaGVja2VkVGFza3NJZHMpID0+IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnRcbiAgICAucmVhZExvY2FsU3RvcmFnZSgpXG4gICAgLmZpbHRlcigodCwgaSkgPT4gIWNoZWNrZWRUYXNrc0lkcy5pbmNsdWRlcyhpKSk7XG5cbiAgdXBkYXRlSW5kaWNlcyA9IChyZW1haW5pbmdUYXNrcykgPT4ge1xuICAgIHJlbWFpbmluZ1Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbWFpbmluZ1Rhc2tzO1xuICB9O1xuXG4gIHJlbW92ZVRhc2tGcm9tTGlzdCA9IChjaGVja2VkVGFza3NJZHMpID0+IHtcbiAgICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRoaXMuZ2V0UmVtYWluaW5nVGFza3MoY2hlY2tlZFRhc2tzSWRzKTtcbiAgICBjb25zdCB1cGRhdGVkUmVtYWluaW5nVGFza3MgPSB0aGlzLnVwZGF0ZUluZGljZXMocmVtYWluaW5nVGFza3MpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQudXBkYXRlTG9jYWxTdG9yYWdlKFxuICAgICAgdXBkYXRlZFJlbWFpbmluZ1Rhc2tzLFxuICAgICk7XG4gICAgdGhpcy5kaXNwbGF5VXBkYXRlZExpc3QoKTtcbiAgfTtcblxuICBvbkNsZWFyQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja2VkVGFza3NJZHMgPSB0aGlzLmdldFRvQmVEZWxldGVkVGFza0xpc3QoKTtcbiAgICB0aGlzLnJlbW92ZVRhc2tGcm9tTGlzdChjaGVja2VkVGFza3NJZHMpO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI2FkZC10YXNrLWJ1dHRvbicsXG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0RvVGFza3MgPSBbXTtcbiAgfVxuXG4gIGluaXRpYWxpemVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Rhc2tzJykpIHtcbiAgICAgIHRoaXMudG9Eb1Rhc2tzID0gW107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9Eb1Rhc2tzID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRJbmRpY2VzID0gKG1vZGlmaWVkVG9Eb1Rhc2tzKSA9PiBtb2RpZmllZFRvRG9UYXNrcy5tYXAoKHRhc2ssIG9yZGVyKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IG9yZGVyO1xuICAgIHJldHVybiB0YXNrO1xuICB9KTtcblxuICB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAodG9Eb1Rhc2tzKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MgPSB0b0RvVGFza3M7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIGFkZFRvTG9jYWxTdG9yYWdlID0gKHRhc2spID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrcy5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgKTtcbiAgfTtcblxuICBjaGFuZ2VUYXNrU3RhdHVzID0gKHRhc2ssIHN0YXR1cykgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzW3Rhc2suaW5kZXhdLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgY2hhbmdlVGFza0Rlc2NyaXB0aW9uID0gKHRhc2ssIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3NbdGFzay5pbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgcmVhZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrcyA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Rhc2tzJyksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy50b0RvVGFza3M7XG4gIH07XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNsZWFyQnV0dG9uIH0gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQodGFza0VsZW1lbnQpIHtcbiAgbGV0IHJlcyA9IC0xO1xuICBpZiAodGFza0VsZW1lbnQuY2hpbGRyZW5bMF0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHJlcyA9IE51bWJlcih0YXNrRWxlbWVudC5pZC5zcGxpdCgnLScpWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2hha2UoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2xvc3QtZm9jdXMtd2l0aC1lcnJvcnMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRXaXRoQ29sb3IoZWxlbWVudCwgaXNWYWxpZCkge1xuICBpZiAoaXNWYWxpZCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZhbGlkJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC12YWxpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVDbGVhckJ1dHRvbigpIHtcbiAgY2xlYXJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUNsZWFyQnV0dG9uKCkge1xuICBjbGVhckJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uQ2hlY2tib3hUb2dnbGUoZSkge1xuICBjb25zdCBjaGVja2JveCA9IGUuY3VycmVudFRhcmdldDtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjaGVja2JveC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gIH1cbiAgZW5hYmxlQ2xlYXJCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hlY2tFdmVudCh0YXNrRWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY2hlY2tib3gucGFyZW50Tm9kZS5jaGlsZHJlblsxXTtcbiAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICB9IGVsc2Uge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICB9XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DaGVja2JveFRvZ2dsZSk7XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dEZvY3VzZWQoZSkge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgbW92ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2J1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgKTtcbiAgbW92ZUJ1dHRvbi5zdHlsZS56SW5kZXggPSAnLTEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICB0YXNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2I5OWE3ZCc7XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZChlKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBlLnRhcmdldDtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IG1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24ubW92ZS1idXR0b24nLFxuICApO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICk7XG4gIG1vdmVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJy0xJztcbiAgdGFza0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICBpZiAoXG4gICAgdXRpbHMuaXNFbXB0eShkZXNjcmlwdGlvbklucHV0LnZhbHVlKVxuICAgIHx8ICF1dGlscy5pc1ZhbGlkKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpXG4gICkge1xuICAgIHRvZ2dsZVNoYWtlKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuZm9jdXMoKTtcbiAgICBkaXNhYmxlQ2xlYXJCdXR0b24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbmFibGVDbGVhckJ1dHRvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQoZSkge1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChcbiAgICB1dGlscy5pc0VtcHR5KGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpXG4gICAgfHwgIXV0aWxzLmlzVmFsaWQoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSlcbiAgKSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdub3QtdmFsaWQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgZGlzYWJsZUNsZWFyQnV0dG9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmFsaWQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgZW5hYmxlQ2xlYXJCdXR0b24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnB1dEV2ZW50cyh0YXNrRWxlbWVudCkge1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnbGFiZWwuZGVzY3JpcHRpb24gPiBpbnB1dCcsXG4gICk7XG5cbiAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdmb2N1cycsXG4gICAgb25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZCxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2JsdXInLFxuICAgIG9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZCxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2lucHV0JyxcbiAgICBvbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkLFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRtcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1N0cmluZ0VsZW1lbnQgPSBgPGxpIGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke1xuICAgIHRhc2suaW5kZXhcbiAgfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrLSR7XG4gIHRhc2suaW5kZXhcbn1cIiBpZD1cImNoZWNrLSR7dGFzay5pbmRleH1cIiAke1xuICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6IG51bGxcbn0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbn1cIiBpZD1cImRlc2NyaXB0aW9uLSR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIG1vdmUtYnV0dG9uXCIgaWQ9XCJtb3ZlQnV0dG9uLSR7XG4gIHRhc2suaW5kZXhcbn1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIGRlbGV0ZS1idXR0b25cIiBpZD1cImRlbGV0ZUJ1dHRvbi0ke1xuICB0YXNrLmluZGV4XG59XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+YDtcbiAgdG1wV3JhcHBlci5pbm5lckhUTUwgPSB0YXNrU3RyaW5nRWxlbWVudC50cmltKCk7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSB0bXBXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KTtcbiAgYWRkSW5wdXRFdmVudHModGFza0VsZW1lbnQpO1xuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QodG9Eb0xpc3QpIHtcbiAgdG9Eb0xpc3Quc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtcbiAgICBPYmplY3Qua2V5cyh0b0RvTGlzdCkubGVuZ3RoXG4gIH0sIDQ4cHgpO2A7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza3ModG9Eb1Rhc2tzKSB7XG4gIHJldHVybiB0b0RvVGFza3Muc29ydChcbiAgICAob2JqMSwgb2JqMikgPT4gb2JqMS5pbmRleCAtIG9iajIuaW5kZXgsXG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShzdHJpbmcpIHtcbiAgY29uc3QgcGF0dGVybiA9IC9eKFxccykrJC87XG4gIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoc3RyaW5nKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXihcXHcpKyhcXHd8LXxcXHMpKiQvO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHN0cmluZy50cmltKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXBsaWNhdGUoXG4gIHN0cmluZyxcbiAgZXhpc3RpbmdUYXNrc0Rlc2NyaXB0aW9ucyxcbikge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gIGV4aXN0aW5nVGFza3NEZXNjcmlwdGlvbnMuZm9yRWFjaCgodGQpID0+IHtcbiAgICBpZiAoXG4gICAgICBzdHJpbmcudHJpbSgpLnRvVXBwZXJDYXNlKClcbiAgICAgID09PSB0ZC50cmltKCkudG9VcHBlckNhc2UoKVxuICAgICkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9uaWVyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L25pZXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT1TdHlsZSByZXNldD09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250O1xcbiAgc3JjOlxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3ItYm9keTogI2QxY2RiNztcXG4gIC0tYmctY29sb3ItYnV0dG9uOiBiYWI1YTE7XFxuICAtLWJnLWNvbG9yLWxpc3Q6ICNmZmY7XFxuICAtLWNvbG9yLXRpdGxlOiAjNDM0MzQ2O1xcbiAgLS1jb2xvci13YXJuaW5nOiAjZDI1ZDQ3O1xcbiAgLS1iZy1jb2xvci1hY3RpdmU6ICM0NTQxMzg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMwdmggMCAyMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAjY2NjOGIxIDFweCxcXG4gICAgICB0cmFuc3BhcmVudCAxcHhcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjOGIxIDFweCwgI2QxY2RiNyAxcHgpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2cHggNnB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiKDUwIDUwIDkzIC8gMjUlKSAwIDIwcHggNDBweCAtMTJweCBpbnNldCxcXG4gICAgcmdiKDAgMCAwIC8gMzAlKSAwIDE4cHggMThweCAtMThweCBpbnNldDtcXG59XFxuXFxuYSxcXG5hOmxpbmssXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB2YXIoLS1zaGFyayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09Q2FyZCBzdHlsaW5nPT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggNDhweCBhdXRvIDcycHg7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDAgNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IE5pZXJGb250LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAgI2JhYjVhMTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLmljb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDZweCAzMnB4IDZweCAxMnB4O1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTJweDtcXG4gIHRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnRvLWRvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDQ4cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAzMCU7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbn1cXG5cXG4udmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxufVxcblxcbi5ub3QtdmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5ub3QtdmFsaWQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS52YWxpZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLmxvc3QtZm9jdXMtd2l0aC1lcnJvcnMge1xcbiAgYW5pbWF0aW9uOlxcbiAgICBzaGFrZSAwLjgyc1xcbiAgICBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4udGFzayAuaWNvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi50YXNrIC5tb3ZlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiB6LWluZGV4IDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi5jbGVhci1idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBsZWZ0LFxcbiAgICAgIHZhcigtLWJnLWNvbG9yLWxpc3QpIDUwJSxcXG4gICAgICB2YXIoLS1iZy1jb2xvci1hY3RpdmUpIDUwJVxcbiAgICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5jbGVhci1idXR0b246aG92ZXI6ZW5hYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwbXM7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgMjAlLFxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcblxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQ0FBb0M7O0FBRXBDLG9DQUFvQzs7QUFFcEMsb0NBQW9DOztBQUdwQztFQUNFLHFCQUFxQjtFQUNyQjs7MERBRXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1o7Ozs7O3VEQUtxRDtFQUNyRCx3QkFBd0I7RUFDeEI7OzRDQUUwQztBQUM1Qzs7QUFFQTs7Ozs7RUFLRSxx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WCxPQUFPO0VBQ1AsT0FBTztFQUNQLDBDQUEwQztFQUMxQyw2Q0FBNkM7RUFDN0MsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTs7SUFFRSxrQ0FBa0M7RUFDcEM7O0VBRUE7O0lBRUUsaUNBQWlDO0VBQ25DOztFQUVBOzs7SUFHRSxrQ0FBa0M7RUFDcEM7O0VBRUE7O0lBRUUsaUNBQWlDO0VBQ25DO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PVN0eWxlIHJlc2V0PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuL2ZvbnQvbmllci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnQvbmllci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yLWJvZHk6ICNkMWNkYjc7XFxuICAtLWJnLWNvbG9yLWJ1dHRvbjogYmFiNWExO1xcbiAgLS1iZy1jb2xvci1saXN0OiAjZmZmO1xcbiAgLS1jb2xvci10aXRsZTogIzQzNDM0NjtcXG4gIC0tY29sb3Itd2FybmluZzogI2QyNWQ0NztcXG4gIC0tYmctY29sb3ItYWN0aXZlOiAjNDU0MTM4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHZoIDAgMjB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgI2NjYzhiMSAxcHgsXFxuICAgICAgdHJhbnNwYXJlbnQgMXB4XFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYzhiMSAxcHgsICNkMWNkYjcgMXB4KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNnB4IDZweDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYig1MCA1MCA5MyAvIDI1JSkgMCAyMHB4IDQwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgMCAxOHB4IDE4cHggLTE4cHggaW5zZXQ7XFxufVxcblxcbmEsXFxuYTpsaW5rLFxcbmE6dmlzaXRlZCxcXG5hOmhvdmVyLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tc2hhcmspO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PUNhcmQgc3R5bGluZz09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxubWFpbiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IDQ4cHggYXV0byA3MnB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwIDVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwICNiYWI1YTE7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5pY29uIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA2cHggMzJweCA2cHggMTJweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24gLmljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEycHg7XFxuICB0b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi50by1kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byA0OHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMzAlO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbn1cXG5cXG4ubm90LXZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmcpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ubm90LXZhbGlkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmcpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0udmFsaWQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxufVxcblxcbi5sb3N0LWZvY3VzLXdpdGgtZXJyb3JzIHtcXG4gIGFuaW1hdGlvbjpcXG4gICAgc2hha2UgMC44MnNcXG4gICAgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLnRhc2sgLmljb24ge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjZzIHN0ZXAtZW5kO1xcbn1cXG5cXG4udGFzayAubW92ZS1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjZzIHN0ZXAtZW5kO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gbGVmdCxcXG4gICAgICB2YXIoLS1iZy1jb2xvci1saXN0KSA1MCUsXFxuICAgICAgdmFyKC0tYmctY29sb3ItYWN0aXZlKSA1MCVcXG4gICAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGw7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MG1zO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTAlLFxcbiAgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENSVUQgZnJvbSAnLi9jb21wb25lbnRzL2NydWQtb3BlcmF0aW9ucyc7XG5cbmNvbnN0IGNydWQgPSBuZXcgQ1JVRCgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICBjcnVkLmluaXRpYWxpemVBcHBsaWNhdGlvbixcbik7XG4iXSwibmFtZXMiOlsiZG9tIiwiTG9jYWxTdG9yYWdlIiwiVGFzayIsImNyZWF0ZVRhc2tFbGVtZW50IiwiYWxsb2NhdGVTcGFjZUZvclRvRE9MaXN0IiwiZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQiLCJlbmFibGVDbGVhckJ1dHRvbiIsInRvZ2dsZVNoYWtlIiwidmFsaWRhdGVJbnB1dFdpdGhDb2xvciIsInV0aWxzIiwiQ1JVRCIsImUiLCJrZXlDb2RlIiwiaXNWYWxpZCIsIm5ld1Rhc2tJbnB1dCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25BZGRCdXR0b25DbGlja2VkIiwiaWQiLCJ0YXJnZXQiLCJzcGxpdCIsInRhc2siLCJzdG9yYWdlTWFuYWdlbWVudCIsInJlYWRMb2NhbFN0b3JhZ2UiLCJjaGFuZ2VUYXNrU3RhdHVzIiwiY2hlY2tlZCIsImNoYW5nZVRhc2tEZXNjcmlwdGlvbiIsImJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJyZW1haW5pbmdUYXNrcyIsImZpbHRlciIsImluZGV4IiwicmVzZXRJbmRpY2VzIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiZGlzcGxheVVwZGF0ZWRMaXN0IiwiY2hlY2tCb3hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRlc2NyaXB0aW9uSW5wdXRzIiwiZGVsZXRlQnV0dG9ucyIsIm1vdmVCdXR0b25zIiwiZm9yRWFjaCIsImNoZWNrYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvT25DaGVja2JveENoZWNrZWQiLCJpbnB1dCIsImRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCIsImRvT25EZWxldGVCdXR0b25DbGlja2VkIiwiaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSIsInRvRG9UYXNrcyIsImxpc3RFbGVtZW50Iiwic29ydFRhc2tzIiwidGFza0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50c1RvRHluYW1pY0VsZW1lbnRzIiwibmV3VGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwicmVzdWx0IiwiZXhpc3RpbmdUYXNrc0Rlc2NyaXB0aW9ucyIsIm1hcCIsInRkIiwiZGVzY3JpcHRpb24iLCJpc0VtcHR5IiwiaXNEdXBsaWNhdGUiLCJhZGRUb0xvY2FsU3RvcmFnZSIsImFkZEV2ZW50c1RvVGFza0VsZW1lbnQiLCJsZW5ndGgiLCJpc0lucHV0VmFsaWQiLCJhZGROZXdUYXNrVG9MaXN0IiwiY3JlYXRlTmV3VGFzayIsImNsZWFyVGFza0lucHV0IiwiY2hlY2tlZFRhc2tzSWRzIiwidGFza0VsZW1lbnRzIiwic2xpY2UiLCJjYWxsIiwiY2hpbGRyZW4iLCJwdXNoIiwiaW5uZXJIVE1MIiwiY2xlYXJMaXN0IiwiaW5pdGlhbGl6ZUFwcGxpY2F0aW9uIiwidCIsImkiLCJpbmNsdWRlcyIsImdldFJlbWFpbmluZ1Rhc2tzIiwidXBkYXRlZFJlbWFpbmluZ1Rhc2tzIiwidXBkYXRlSW5kaWNlcyIsImdldFRvQmVEZWxldGVkVGFza0xpc3QiLCJyZW1vdmVUYXNrRnJvbUxpc3QiLCJ0b0RvTGlzdCIsImNsZWFyQnV0dG9uIiwiYWRkQnV0dG9uIiwib25DbGVhckJ1dHRvbkNsaWNrZWQiLCJvblRhc2tJbnB1dFZhbHVlQ2hhbmdlZCIsImRvT25FbnRlclByZXNzZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsIm1vZGlmaWVkVG9Eb1Rhc2tzIiwib3JkZXIiLCJzdGF0dXMiLCJjb21wbGV0ZWQiLCJyZXMiLCJOdW1iZXIiLCJlbGVtZW50IiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJkaXNhYmxlQ2xlYXJCdXR0b24iLCJvbkNoZWNrYm94VG9nZ2xlIiwicGFyZW50Tm9kZSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJhZGRDaGVja0V2ZW50Iiwib25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZCIsIm1vdmVCdXR0b24iLCJkZWxldGVCdXR0b24iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkRlc2NyaXB0aW9uSW5wdXRCbHVyZWQiLCJkZXNjcmlwdGlvbklucHV0IiwiZm9jdXMiLCJvbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkIiwiYWRkSW5wdXRFdmVudHMiLCJ0bXBXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsInRhc2tTdHJpbmdFbGVtZW50IiwidHJpbSIsImZpcnN0RWxlbWVudENoaWxkIiwiZ3JpZFRlbXBsYXRlUm93cyIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwib2JqMSIsIm9iajIiLCJzdHJpbmciLCJwYXR0ZXJuIiwidGVzdCIsInRvVXBwZXJDYXNlIiwiY3J1ZCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=