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

  _defineProperty(this, "sortTasks", function (toDoTasks) {
    return toDoTasks.sort(function (obj1, obj2) {
      return obj1.index - obj2.index;
    });
  });

  _defineProperty(this, "initializeApplication", function () {
    _this.storageManagement.initializeLocalStorage();

    var toDoTasks = _this.storageManagement.readLocalStorage();

    (0,_task_element_utils__WEBPACK_IMPORTED_MODULE_3__.allocateSpaceForToDOList)(_this.listElement);

    _this.sortTasks(toDoTasks).forEach(function (task) {
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
    _this.addNewTaskToList(_this.createNewTask());

    _this.clearTaskInput();
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
/* harmony export */   "default": () => (/* binding */ createTaskElement),
/* harmony export */   "allocateSpaceForToDOList": () => (/* binding */ allocateSpaceForToDOList)
/* harmony export */ });
function getCheckedTaskElementId(taskElement) {
  var res = -1;

  if (taskElement.children[0].checked === true) {
    res = Number(taskElement.id.split('-')[1]);
  }

  return res;
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
  var taskElement = e.target.parentNode.parentNode;
  var moveButton = taskElement.querySelector('button.move-button');
  var deleteButton = taskElement.querySelector('button.delete-button');
  moveButton.style.zIndex = '1';
  deleteButton.style.zIndex = '-1';
  taskElement.style.backgroundColor = 'transparent';
}

function addInputFocusEvent(taskElement) {
  var descriptionInput = taskElement.querySelector('label.description > input');
  descriptionInput.addEventListener('focus', onDescriptionInputFocused);
  descriptionInput.addEventListener('blur', onDescriptionInputBlured);
}

function createTaskElement(task) {
  var tmpWrapper = document.createElement('div');
  var taskStringElement = "<li class=\"task\" id=\"task-".concat(task.index, "\">\n        <input type=\"checkbox\" name=\"check-").concat(task.index, "\" id=\"check-").concat(task.index, "\" ").concat(task.completed ? 'checked' : null, ">\n        <label for=\"description\" class=\"description\">\n          <input type=\"text\" name=\"description\" value=\"").concat(task.description, "\" id=\"description-").concat(task.index, "\">\n        </label>\n        <button type=\"button\" class=\"icon move-button\" id=\"moveButton-").concat(task.index, "\">\n          <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n        </button>\n        <button type=\"button\" class=\"icon delete-button\" id=\"deleteButton-").concat(task.index, "\">\n          <i class=\"fas fa-trash-alt\"></i>\n        </button>\n      </li>");
  tmpWrapper.innerHTML = taskStringElement.trim();
  var taskElement = tmpWrapper.firstElementChild;
  addCheckEvent(taskElement);
  addInputFocusEvent(taskElement);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.task .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 30%;\n  transition: z-index 0.7s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 35%;\n  transition: z-index 0.7s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 200ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap\");\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(\"./font/nier.woff2\") format(\"woff2\"),\n    url(\"./font/nier.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  top: 0;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.task .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 30%;\n  transition: z-index 0.7s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 35%;\n  transition: z-index 0.7s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 200ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFdBQVcsU0FBUyxPQUFPLGFBQWEsT0FBTyxPQUFPLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxjQUFjLGNBQWMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxh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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBLElBQU13QixJQUFJLEdBQUcsSUFBSTdHLG1FQUFKLEVBQWI7QUFFQThHLE1BQU0sQ0FBQ2xGLGdCQUFQLENBQ0Usa0JBREYsRUFFRWlGLElBQUksQ0FBQ2hELHFCQUZQLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvY3J1ZC1vcGVyYXRpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy9kb20tZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jb21wb25lbnRzL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jb21wb25lbnRzL3Rhc2stZWxlbWVudC11dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCwge1xuICBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QsXG4gIGdldENoZWNrZWRUYXNrRWxlbWVudElkLFxufSBmcm9tICcuL3Rhc2stZWxlbWVudC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENSVUQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50ID0gbmV3IExvY2FsU3RvcmFnZSgpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQgPSBkb20udG9Eb0xpc3Q7XG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGRvbS5jbGVhckJ1dHRvbjtcbiAgICB0aGlzLm5ld1Rhc2tJbnB1dCA9IGRvbS5uZXdUYXNrSW5wdXQ7XG4gICAgdGhpcy5hZGRCdXR0b24gPSBkb20uYWRkQnV0dG9uO1xuICAgIHRoaXMuY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgICApO1xuICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyxcbiAgICApO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnbGkgYnV0dG9uLmRlbGV0ZS1idXR0b24nLFxuICAgICk7XG4gICAgdGhpcy5tb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnbGkgYnV0dG9uLm1vdmUtYnV0dG9uJyxcbiAgICApO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLm9uQWRkQnV0dG9uQ2xpY2tlZCxcbiAgICApO1xuXG4gICAgdGhpcy5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMub25DbGVhckJ1dHRvbkNsaWNrZWQsXG4gICAgKTtcbiAgfVxuXG4gIGRvT25DaGVja2JveENoZWNrZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5yZWFkTG9jYWxTdG9yYWdlKClbaWRdO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQuY2hhbmdlVGFza1N0YXR1cyhcbiAgICAgIHRhc2ssXG4gICAgICBlLnRhcmdldC5jaGVja2VkLFxuICAgICk7XG4gIH07XG5cbiAgZG9PbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkID0gKGUpID0+IHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XG4gICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVhZExvY2FsU3RvcmFnZSgpW2lkXTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmNoYW5nZVRhc2tEZXNjcmlwdGlvbihcbiAgICAgIHRhc2ssXG4gICAgICBlLnRhcmdldC52YWx1ZSxcbiAgICApO1xuICB9O1xuXG4gIGRvT25EZWxldGVCdXR0b25DbGlja2VkID0gKGUpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGJ1dHRvbi5pZC5zcGxpdCgnLScpWzBdID09PSAnZGVsZXRlQnV0dG9uJykge1xuICAgICAgY29uc3QgaWQgPSBidXR0b24uaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgIGxldCByZW1haW5pbmdUYXNrcyA9IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnRcbiAgICAgICAgLnJlYWRMb2NhbFN0b3JhZ2UoKVxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSAraWQpO1xuICAgICAgcmVtYWluaW5nVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlc2V0SW5kaWNlcyhyZW1haW5pbmdUYXNrcyk7XG4gICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnVwZGF0ZUxvY2FsU3RvcmFnZShcbiAgICAgICAgcmVtYWluaW5nVGFza3MsXG4gICAgICApO1xuICAgICAgdGhpcy5kaXNwbGF5VXBkYXRlZExpc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgYWRkRXZlbnRzVG9EeW5hbWljRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgICk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnbGkgaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICk7XG4gICAgdGhpcy5kZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICAgKTtcbiAgICB0aGlzLm1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBidXR0b24ubW92ZS1idXR0b24nLFxuICAgICk7XG5cbiAgICB0aGlzLmNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kb09uQ2hlY2tib3hDaGVja2VkLFxuICAgICkpO1xuICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnaW5wdXQnLFxuICAgICAgdGhpcy5kb09uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQsXG4gICAgKSk7XG4gICAgdGhpcy5kZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCxcbiAgICApKTtcbiAgfTtcblxuICBzb3J0VGFza3MgPSAodG9Eb1Rhc2tzKSA9PiB0b0RvVGFza3Muc29ydCgob2JqMSwgb2JqMikgPT4gb2JqMS5pbmRleCAtIG9iajIuaW5kZXgpO1xuXG4gIGluaXRpYWxpemVBcHBsaWNhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCB0b0RvVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGFsbG9jYXRlU3BhY2VGb3JUb0RPTGlzdCh0aGlzLmxpc3RFbGVtZW50KTtcblxuICAgIHRoaXMuc29ydFRhc2tzKHRvRG9UYXNrcykuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgICAgIHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRzVG9EeW5hbWljRWxlbWVudHMoKTtcbiAgfTtcblxuICBhZGRFdmVudHNUb1Rhc2tFbGVtZW50ID0gKG5ld1Rhc2spID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgICk7XG4gICAgY29uc3QgaW5wdXQgPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICk7XG4gICAgY29uc3QgYnV0dG9uID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2J1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25DaGVja2JveENoZWNrZWQsXG4gICAgKTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnaW5wdXQnLFxuICAgICAgdGhpcy5kb09uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQsXG4gICAgKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZG9PbkRlbGV0ZUJ1dHRvbkNsaWNrZWQsXG4gICAgKTtcbiAgfTtcblxuICBhZGROZXdUYXNrVG9MaXN0ID0gKHRhc2spID0+IHtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LmFkZFRvTG9jYWxTdG9yYWdlKHRhc2spO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgICB0aGlzLmFkZEV2ZW50c1RvVGFza0VsZW1lbnQobmV3VGFzayk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgfTtcblxuICBjcmVhdGVOZXdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5uZXdUYXNrSW5wdXQudmFsdWU7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnRvRG9UYXNrcy5sZW5ndGg7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGluZGV4LCBkZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG4gIH07XG5cbiAgY2xlYXJUYXNrSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5uZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgfTtcblxuICBvbkFkZEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5hZGROZXdUYXNrVG9MaXN0KHRoaXMuY3JlYXRlTmV3VGFzaygpKTtcbiAgICB0aGlzLmNsZWFyVGFza0lucHV0KCk7XG4gIH07XG5cbiAgZ2V0VG9CZURlbGV0ZWRUYXNrTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja2VkVGFza3NJZHMgPSBbXTtcbiAgICBjb25zdCB0YXNrRWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKFxuICAgICAgdGhpcy5saXN0RWxlbWVudC5jaGlsZHJlbixcbiAgICApO1xuXG4gICAgdGFza0VsZW1lbnRzLmZvckVhY2goKHRhc2tFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGdldENoZWNrZWRUYXNrRWxlbWVudElkKHRhc2tFbGVtZW50KTtcbiAgICAgIGlmIChpZCA+PSAwKSB7XG4gICAgICAgIGNoZWNrZWRUYXNrc0lkcy5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tlZFRhc2tzSWRzO1xuICB9O1xuXG4gIGNsZWFyTGlzdCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIGRpc3BsYXlVcGRhdGVkTGlzdCA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcGxpY2F0aW9uKCk7XG4gIH07XG5cbiAgZ2V0UmVtYWluaW5nVGFza3MgPSAoY2hlY2tlZFRhc2tzSWRzKSA9PiB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50XG4gICAgLnJlYWRMb2NhbFN0b3JhZ2UoKVxuICAgIC5maWx0ZXIoKHQsIGkpID0+ICFjaGVja2VkVGFza3NJZHMuaW5jbHVkZXMoaSkpO1xuXG4gIHVwZGF0ZUluZGljZXMgPSAocmVtYWluaW5nVGFza3MpID0+IHtcbiAgICByZW1haW5pbmdUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGluZGV4O1xuICAgIH0pO1xuICAgIHJldHVybiByZW1haW5pbmdUYXNrcztcbiAgfTtcblxuICByZW1vdmVUYXNrRnJvbUxpc3QgPSAoY2hlY2tlZFRhc2tzSWRzKSA9PiB7XG4gICAgY29uc3QgcmVtYWluaW5nVGFza3MgPSB0aGlzLmdldFJlbWFpbmluZ1Rhc2tzKGNoZWNrZWRUYXNrc0lkcyk7XG4gICAgY29uc3QgdXBkYXRlZFJlbWFpbmluZ1Rhc2tzID0gdGhpcy51cGRhdGVJbmRpY2VzKHJlbWFpbmluZ1Rhc2tzKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnVwZGF0ZUxvY2FsU3RvcmFnZShcbiAgICAgIHVwZGF0ZWRSZW1haW5pbmdUYXNrcyxcbiAgICApO1xuICAgIHRoaXMuZGlzcGxheVVwZGF0ZWRMaXN0KCk7XG4gIH07XG5cbiAgb25DbGVhckJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tlZFRhc2tzSWRzID0gdGhpcy5nZXRUb0JlRGVsZXRlZFRhc2tMaXN0KCk7XG4gICAgdGhpcy5yZW1vdmVUYXNrRnJvbUxpc3QoY2hlY2tlZFRhc2tzSWRzKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XG5leHBvcnQgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrJyk7XG5leHBvcnQgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNhZGQtdGFzay1idXR0b24nLFxuKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9Eb1Rhc2tzID0gW107XG4gIH1cblxuICBpbml0aWFsaXplTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpKSB7XG4gICAgICB0aGlzLnRvRG9UYXNrcyA9IFtdO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICd0b0RvVGFza3MnLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvRG9UYXNrcyA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvVGFza3MnKSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJlc2V0SW5kaWNlcyA9IChtb2RpZmllZFRvRG9UYXNrcykgPT4gbW9kaWZpZWRUb0RvVGFza3MubWFwKCh0YXNrLCBvcmRlcikgPT4ge1xuICAgIHRhc2suaW5kZXggPSBvcmRlcjtcbiAgICByZXR1cm4gdGFzaztcbiAgfSk7XG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlID0gKHRvRG9UYXNrcykgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzID0gdG9Eb1Rhc2tzO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgKTtcbiAgfTtcblxuICBhZGRUb0xvY2FsU3RvcmFnZSA9ICh0YXNrKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgY2hhbmdlVGFza1N0YXR1cyA9ICh0YXNrLCBzdGF0dXMpID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrc1t0YXNrLmluZGV4XS5jb21wbGV0ZWQgPSBzdGF0dXM7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIGNoYW5nZVRhc2tEZXNjcmlwdGlvbiA9ICh0YXNrLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzW3Rhc2suaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIHJlYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMudG9Eb1Rhc2tzO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENoZWNrZWRUYXNrRWxlbWVudElkKHRhc2tFbGVtZW50KSB7XG4gIGxldCByZXMgPSAtMTtcbiAgaWYgKHRhc2tFbGVtZW50LmNoaWxkcmVuWzBdLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICByZXMgPSBOdW1iZXIodGFza0VsZW1lbnQuaWQuc3BsaXQoJy0nKVsxXSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gb25DaGVja2JveFRvZ2dsZShlKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNoZWNrYm94LnBhcmVudE5vZGUuY2hpbGRyZW5bMV07XG4gIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgfSBlbHNlIHtcbiAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjaGVja2JveC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gIH1cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNoZWNrYm94VG9nZ2xlKTtcbn1cblxuZnVuY3Rpb24gb25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZChlKSB7XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBtb3ZlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnYnV0dG9uLm1vdmUtYnV0dG9uJyxcbiAgKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnYnV0dG9uLmRlbGV0ZS1idXR0b24nLFxuICApO1xuICBtb3ZlQnV0dG9uLnN0eWxlLnpJbmRleCA9ICctMSc7XG4gIGRlbGV0ZUJ1dHRvbi5zdHlsZS56SW5kZXggPSAnMSc7XG4gIHRhc2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYjk5YTdkJztcbn1cblxuZnVuY3Rpb24gb25EZXNjcmlwdGlvbklucHV0Qmx1cmVkKGUpIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IG1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24ubW92ZS1idXR0b24nLFxuICApO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICk7XG4gIG1vdmVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJy0xJztcbiAgdGFza0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcbn1cblxuZnVuY3Rpb24gYWRkSW5wdXRGb2N1c0V2ZW50KHRhc2tFbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdsYWJlbC5kZXNjcmlwdGlvbiA+IGlucHV0JyxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2ZvY3VzJyxcbiAgICBvbkRlc2NyaXB0aW9uSW5wdXRGb2N1c2VkLFxuICApO1xuXG4gIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnYmx1cicsXG4gICAgb25EZXNjcmlwdGlvbklucHV0Qmx1cmVkLFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRtcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1N0cmluZ0VsZW1lbnQgPSBgPGxpIGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke1xuICAgIHRhc2suaW5kZXhcbiAgfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrLSR7XG4gIHRhc2suaW5kZXhcbn1cIiBpZD1cImNoZWNrLSR7dGFzay5pbmRleH1cIiAke1xuICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6IG51bGxcbn0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbn1cIiBpZD1cImRlc2NyaXB0aW9uLSR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIG1vdmUtYnV0dG9uXCIgaWQ9XCJtb3ZlQnV0dG9uLSR7XG4gIHRhc2suaW5kZXhcbn1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIGRlbGV0ZS1idXR0b25cIiBpZD1cImRlbGV0ZUJ1dHRvbi0ke1xuICB0YXNrLmluZGV4XG59XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+YDtcbiAgdG1wV3JhcHBlci5pbm5lckhUTUwgPSB0YXNrU3RyaW5nRWxlbWVudC50cmltKCk7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSB0bXBXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KTtcbiAgYWRkSW5wdXRGb2N1c0V2ZW50KHRhc2tFbGVtZW50KTtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QodG9Eb0xpc3QpIHtcbiAgdG9Eb0xpc3Quc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtcbiAgICBPYmplY3Qua2V5cyh0b0RvTGlzdCkubGVuZ3RoXG4gIH0sIDQ4cHgpO2A7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvbmllci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9uaWVyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09U3R5bGUgcmVzZXQ9PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udDtcXG4gIHNyYzpcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yLWJvZHk6ICNkMWNkYjc7XFxuICAtLWJnLWNvbG9yLWJ1dHRvbjogYmFiNWExO1xcbiAgLS1iZy1jb2xvci1saXN0OiAjZmZmO1xcbiAgLS1jb2xvci10aXRsZTogIzQzNDM0NjtcXG4gIC0tY29sb3Itd2FybmluZzogI2QyNWQ0NztcXG4gIC0tYmctY29sb3ItYWN0aXZlOiAjNDU0MTM4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHZoIDAgMjB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgI2NjYzhiMSAxcHgsXFxuICAgICAgdHJhbnNwYXJlbnQgMXB4XFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYzhiMSAxcHgsICNkMWNkYjcgMXB4KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNnB4IDZweDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYig1MCA1MCA5MyAvIDI1JSkgMCAyMHB4IDQwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgMCAxOHB4IDE4cHggLTE4cHggaW5zZXQ7XFxufVxcblxcbmEsXFxuYTpsaW5rLFxcbmE6dmlzaXRlZCxcXG5hOmhvdmVyLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tc2hhcmspO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PUNhcmQgc3R5bGluZz09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxubWFpbiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IDQ4cHggYXV0byA3MnB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwIDVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwICNiYWI1YTE7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA2cHggMzJweCA2cHggMTJweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24gLmljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEycHg7XFxuICB0b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi50by1kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byA0OHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMzAlO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLnRhc2sgLmljb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAyNSUgMzAlO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjdzIHN0ZXAtZW5kO1xcbn1cXG5cXG4udGFzayAubW92ZS1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAyNSUgMzUlO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjdzIHN0ZXAtZW5kO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gbGVmdCxcXG4gICAgICB2YXIoLS1iZy1jb2xvci1saXN0KSA1MCUsXFxuICAgICAgdmFyKC0tYmctY29sb3ItYWN0aXZlKSA1MCVcXG4gICAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQ0FBb0M7O0FBRXBDLG9DQUFvQzs7QUFFcEMsb0NBQW9DOztBQUdwQztFQUNFLHFCQUFxQjtFQUNyQjs7MERBRXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1o7Ozs7O3VEQUtxRDtFQUNyRCx3QkFBd0I7RUFDeEI7OzRDQUUwQztBQUM1Qzs7QUFFQTs7Ozs7RUFLRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBLG9DQUFvQzs7QUFFcEMsb0NBQW9DOztBQUVwQyxvQ0FBb0M7O0FBRXBDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUNBQXVDO0VBQ3ZDLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix3Q0FBd0M7RUFDeEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjs7Ozs7S0FLRztFQUNILDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLE9BQU87RUFDUCwwQ0FBMEM7RUFDMUMsNkNBQTZDO0VBQzdDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLHVDQUF1QztFQUN2QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT1TdHlsZSByZXNldD09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTmllckZvbnQ7XFxuICBzcmM6XFxuICAgIHVybChcXFwiLi9mb250L25pZXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi9mb250L25pZXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvci1ib2R5OiAjZDFjZGI3O1xcbiAgLS1iZy1jb2xvci1idXR0b246IGJhYjVhMTtcXG4gIC0tYmctY29sb3ItbGlzdDogI2ZmZjtcXG4gIC0tY29sb3ItdGl0bGU6ICM0MzQzNDY7XFxuICAtLWNvbG9yLXdhcm5pbmc6ICNkMjVkNDc7XFxuICAtLWJnLWNvbG9yLWFjdGl2ZTogIzQ1NDEzODtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzB2aCAwIDIwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJvZHkpO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICNjY2M4YjEgMXB4LFxcbiAgICAgIHRyYW5zcGFyZW50IDFweFxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2M4YjEgMXB4LCAjZDFjZGI3IDFweCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDZweCA2cHg7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2IoNTAgNTAgOTMgLyAyNSUpIDAgMjBweCA0MHB4IC0xMnB4IGluc2V0LFxcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDAgMThweCAxOHB4IC0xOHB4IGluc2V0O1xcbn1cXG5cXG5hLFxcbmE6bGluayxcXG5hOnZpc2l0ZWQsXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6IHZhcigtLXNoYXJrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmgxIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT1DYXJkIHN0eWxpbmc9PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbm1haW4ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDhweCA0OHB4IGF1dG8gNzJweDtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDM1JSkgMCA1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWxpc3QpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGgxIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LWZhbWlseTogTmllckZvbnQsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCAjYmFiNWExO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiAuaWNvbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24gaW5wdXQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNnB4IDMycHggNnB4IDEycHg7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIC5pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMnB4O1xcbiAgdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udG8tZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gNDhweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDhweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDMwJTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxufVxcblxcbi50YXNrIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2sgLmRlbGV0ZS1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIGhlaWdodDogNDAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMjUlIDMwJTtcXG4gIHRyYW5zaXRpb246IHotaW5kZXggMC43cyBzdGVwLWVuZDtcXG59XFxuXFxuLnRhc2sgLm1vdmUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogNDAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMjUlIDM1JTtcXG4gIHRyYW5zaXRpb246IHotaW5kZXggMC43cyBzdGVwLWVuZDtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGxlZnQsXFxuICAgICAgdmFyKC0tYmctY29sb3ItbGlzdCkgNTAlLFxcbiAgICAgIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSkgNTAlXFxuICAgICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi5jbGVhci1idXR0b246OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgdG9wOiA1JTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmctY29sb3ItYWN0aXZlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENSVUQgZnJvbSAnLi9jb21wb25lbnRzL2NydWQtb3BlcmF0aW9ucyc7XG5cbmNvbnN0IGNydWQgPSBuZXcgQ1JVRCgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICBjcnVkLmluaXRpYWxpemVBcHBsaWNhdGlvbixcbik7XG4iXSwibmFtZXMiOlsiZG9tIiwiTG9jYWxTdG9yYWdlIiwiVGFzayIsImNyZWF0ZVRhc2tFbGVtZW50IiwiYWxsb2NhdGVTcGFjZUZvclRvRE9MaXN0IiwiZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQiLCJDUlVEIiwiZSIsImlkIiwidGFyZ2V0Iiwic3BsaXQiLCJ0YXNrIiwic3RvcmFnZU1hbmFnZW1lbnQiLCJyZWFkTG9jYWxTdG9yYWdlIiwiY2hhbmdlVGFza1N0YXR1cyIsImNoZWNrZWQiLCJjaGFuZ2VUYXNrRGVzY3JpcHRpb24iLCJ2YWx1ZSIsImJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJyZW1haW5pbmdUYXNrcyIsImZpbHRlciIsImluZGV4IiwicmVzZXRJbmRpY2VzIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiZGlzcGxheVVwZGF0ZWRMaXN0IiwiY2hlY2tCb3hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRlc2NyaXB0aW9uSW5wdXRzIiwiZGVsZXRlQnV0dG9ucyIsIm1vdmVCdXR0b25zIiwiZm9yRWFjaCIsImNoZWNrYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvT25DaGVja2JveENoZWNrZWQiLCJpbnB1dCIsImRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCIsImRvT25EZWxldGVCdXR0b25DbGlja2VkIiwidG9Eb1Rhc2tzIiwic29ydCIsIm9iajEiLCJvYmoyIiwiaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSIsImxpc3RFbGVtZW50Iiwic29ydFRhc2tzIiwidGFza0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50c1RvRHluYW1pY0VsZW1lbnRzIiwibmV3VGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRUb0xvY2FsU3RvcmFnZSIsImFkZEV2ZW50c1RvVGFza0VsZW1lbnQiLCJkZXNjcmlwdGlvbiIsIm5ld1Rhc2tJbnB1dCIsImxlbmd0aCIsImFkZE5ld1Rhc2tUb0xpc3QiLCJjcmVhdGVOZXdUYXNrIiwiY2xlYXJUYXNrSW5wdXQiLCJjaGVja2VkVGFza3NJZHMiLCJ0YXNrRWxlbWVudHMiLCJzbGljZSIsImNhbGwiLCJjaGlsZHJlbiIsInB1c2giLCJpbm5lckhUTUwiLCJjbGVhckxpc3QiLCJpbml0aWFsaXplQXBwbGljYXRpb24iLCJ0IiwiaSIsImluY2x1ZGVzIiwiZ2V0UmVtYWluaW5nVGFza3MiLCJ1cGRhdGVkUmVtYWluaW5nVGFza3MiLCJ1cGRhdGVJbmRpY2VzIiwiZ2V0VG9CZURlbGV0ZWRUYXNrTGlzdCIsInJlbW92ZVRhc2tGcm9tTGlzdCIsInRvRG9MaXN0IiwiY2xlYXJCdXR0b24iLCJhZGRCdXR0b24iLCJvbkFkZEJ1dHRvbkNsaWNrZWQiLCJvbkNsZWFyQnV0dG9uQ2xpY2tlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibW9kaWZpZWRUb0RvVGFza3MiLCJtYXAiLCJvcmRlciIsInN0YXR1cyIsImNvbXBsZXRlZCIsInJlcyIsIk51bWJlciIsIm9uQ2hlY2tib3hUb2dnbGUiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImFkZENoZWNrRXZlbnQiLCJvbkRlc2NyaXB0aW9uSW5wdXRGb2N1c2VkIiwibW92ZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm9uRGVzY3JpcHRpb25JbnB1dEJsdXJlZCIsImFkZElucHV0Rm9jdXNFdmVudCIsImRlc2NyaXB0aW9uSW5wdXQiLCJ0bXBXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsInRhc2tTdHJpbmdFbGVtZW50IiwidHJpbSIsImZpcnN0RWxlbWVudENoaWxkIiwiZ3JpZFRlbXBsYXRlUm93cyIsIk9iamVjdCIsImtleXMiLCJjcnVkIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==