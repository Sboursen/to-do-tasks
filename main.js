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
___CSS_LOADER_EXPORT___.push([module.id, "/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.task .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 30%;\n  transition: z-index 0.7s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 35%;\n  transition: z-index 0.7s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 200ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* =============================== */\n\n/* =========Style reset=========== */\n\n/* =============================== */\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap\");\n\n@font-face {\n  font-family: NierFont;\n  src:\n    url(\"./font/nier.woff2\") format(\"woff2\"),\n    url(\"./font/nier.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --bg-color-body: #d1cdb7;\n  --bg-color-button: bab5a1;\n  --bg-color-list: #fff;\n  --color-title: #434346;\n  --color-warning: #d25d47;\n  --bg-color-active: #454138;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 30vh 0 20vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Inter, sans-serif;\n  background-color: var(--bg-color-body);\n  opacity: 0.8;\n  background-image:\n    linear-gradient(\n      #ccc8b1 1px,\n      transparent 1px\n    ),\n    linear-gradient(to right, #ccc8b1 1px, #d1cdb7 1px);\n  background-size: 6px 6px;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 20px 40px -12px inset,\n    rgb(0 0 0 / 30%) 0 18px 18px -18px inset;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  font-weight: normal;\n  color: var(--shark);\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n/* =============================== */\n\n/* =========Card styling========== */\n\n/* =============================== */\n\nmain {\n  width: 500px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 48px 48px auto 72px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  background-color: var(--bg-color-list);\n  border-radius: 6px;\n}\n\n.title-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  color: var(--color-title);\n  border-bottom: 1px solid lightgrey;\n}\n\n.title-section h1 {\n  text-align: left;\n  font-family: NierFont, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0 #bab5a1;\n}\n\n.title-section .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.input-section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.input-section input {\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n  height: 100%;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  padding: 6px 32px 6px 12px;\n}\n\n.input-section .icon {\n  position: absolute;\n  right: 12px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  height: 100%;\n  padding: 6px;\n  z-index: 2;\n}\n\n.to-do-list {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.task {\n  position: relative;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px auto 48px;\n  grid-template-rows: 48px;\n  border-top: 1px solid lightgrey;\n  align-items: center;\n}\n\n.task input[type=\"checkbox\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  height: 30%;\n  width: 30%;\n  margin: 30%;\n}\n\n.task input[type=\"text\"] {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  outline: none;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 6px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.task input[type=\"text\"]:focus {\n  display: block;\n  align-self: center;\n  justify-self: center;\n  border: 2px solid var(--bg-color-active);\n  background-color: var(--bg-color-body);\n}\n\n.task .icon {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px;\n  width: 100%;\n  height: 100%;\n}\n\n.task .delete-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 30%;\n  transition: z-index 0.7s step-end;\n}\n\n.task .move-button {\n  grid-column: 3/4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 40%;\n  width: 40%;\n  margin: 25% 35%;\n  transition: z-index 0.7s step-end;\n}\n\n.clear-button {\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      to left,\n      var(--bg-color-list) 50%,\n      var(--bg-color-active) 50%\n    );\n  background-size: 200% 100%;\n  background-position: right center;\n  border-top: 1px solid lightgrey;\n}\n\n.clear-button::before {\n  position: absolute;\n  width: 100%;\n  height: 80%;\n  top: 5%;\n  left: 0;\n  border-top: 3px solid var(--bg-color-list);\n  border-bottom: 3px solid var(--bg-color-list);\n  content: \"\";\n}\n\n.clear-button:hover {\n  color: var(--bg-color-list);\n  background-position: left center;\n  transition: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: 200ms;\n}\n\n.input-section input:focus {\n  outline: none;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid var(--bg-color-active);\n  border-bottom: 1px solid var(--bg-color-active);\n}\n\n.task .delete-button:hover {\n  color: var(--color-warning);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2staW50cm8vLi9zcmMvY29tcG9uZW50cy9jcnVkLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jb21wb25lbnRzL2RvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2NvbXBvbmVudHMvdGFzay1lbGVtZW50LXV0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbS1lbGVtZW50cyc7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IGNyZWF0ZVRhc2tFbGVtZW50LCB7XG4gIGFsbG9jYXRlU3BhY2VGb3JUb0RPTGlzdCxcbiAgZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQsXG59IGZyb20gJy4vdGFzay1lbGVtZW50LXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1JVRCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5saXN0RWxlbWVudCA9IGRvbS50b0RvTGlzdDtcbiAgICB0aGlzLmNsZWFyQnV0dG9uID0gZG9tLmNsZWFyQnV0dG9uO1xuICAgIHRoaXMubmV3VGFza0lucHV0ID0gZG9tLm5ld1Rhc2tJbnB1dDtcbiAgICB0aGlzLmFkZEJ1dHRvbiA9IGRvbS5hZGRCdXR0b247XG4gICAgdGhpcy5jaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgICk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnbGkgaW5wdXRbdHlwZT1cInRleHRcIl0nLFxuICAgICk7XG4gICAgdGhpcy5kZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICAgKTtcbiAgICB0aGlzLm1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBidXR0b24ubW92ZS1idXR0b24nLFxuICAgICk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMub25BZGRCdXR0b25DbGlja2VkLFxuICAgICk7XG5cbiAgICB0aGlzLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5vbkNsZWFyQnV0dG9uQ2xpY2tlZCxcbiAgICApO1xuICB9XG5cbiAgZG9PbkNoZWNrYm94Q2hlY2tlZCA9IChlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50LnJlYWRMb2NhbFN0b3JhZ2UoKVtpZF07XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5jaGFuZ2VUYXNrU3RhdHVzKFxuICAgICAgdGFzayxcbiAgICAgIGUudGFyZ2V0LmNoZWNrZWQsXG4gICAgKTtcbiAgfTtcblxuICBkb09uRGVzY3JpcHRpb25JbnB1dENoYW5nZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5zdG9yYWdlTWFuYWdlbWVudC5yZWFkTG9jYWxTdG9yYWdlKClbaWRdO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQuY2hhbmdlVGFza0Rlc2NyaXB0aW9uKFxuICAgICAgdGFzayxcbiAgICAgIGUudGFyZ2V0LnZhbHVlLFxuICAgICk7XG4gIH07XG5cbiAgZG9PbkRlbGV0ZUJ1dHRvbkNsaWNrZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmlkLnNwbGl0KCctJylbMF0gPT09ICdkZWxldGVCdXR0b24nKSB7XG4gICAgICBjb25zdCBpZCA9IGJ1dHRvbi5pZC5zcGxpdCgnLScpWzFdO1xuICAgICAgY29uc3QgcmVtYWluaW5nVGFza3MgPSB0aGlzLnN0b3JhZ2VNYW5hZ2VtZW50XG4gICAgICAgIC5yZWFkTG9jYWxTdG9yYWdlKClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gK2lkKTtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQudXBkYXRlTG9jYWxTdG9yYWdlKFxuICAgICAgICByZW1haW5pbmdUYXNrcyxcbiAgICAgICk7XG4gICAgICB0aGlzLmRpc3BsYXlVcGRhdGVkTGlzdCgpO1xuICAgIH1cbiAgfTtcblxuICBhZGRFdmVudHNUb0R5bmFtaWNFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdsaSBpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5kZWxldGUtYnV0dG9uJyxcbiAgICApO1xuICAgIHRoaXMubW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2xpIGJ1dHRvbi5tb3ZlLWJ1dHRvbicsXG4gICAgKTtcblxuICAgIHRoaXMuY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4gY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25DaGVja2JveENoZWNrZWQsXG4gICAgKSk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdpbnB1dCcsXG4gICAgICB0aGlzLmRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCxcbiAgICApKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRvT25EZWxldGVCdXR0b25DbGlja2VkLFxuICAgICkpO1xuICB9O1xuXG4gIHNvcnRUYXNrcyA9ICh0b0RvVGFza3MpID0+IHRvRG9UYXNrcy5zb3J0KChvYmoxLCBvYmoyKSA9PiBvYmoxLmluZGV4IC0gb2JqMi5pbmRleCk7XG5cbiAgaW5pdGlhbGl6ZUFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQuaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHRvRG9UYXNrcyA9IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQucmVhZExvY2FsU3RvcmFnZSgpO1xuXG4gICAgYWxsb2NhdGVTcGFjZUZvclRvRE9MaXN0KHRoaXMubGlzdEVsZW1lbnQpO1xuXG4gICAgdGhpcy5zb3J0VGFza3ModG9Eb1Rhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICAgICAgdGhpcy5saXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudHNUb0R5bmFtaWNFbGVtZW50cygpO1xuICB9O1xuXG4gIGFkZEV2ZW50c1RvVGFza0VsZW1lbnQgPSAobmV3VGFzaykgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgKTtcbiAgICBjb25zdCBpbnB1dCA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFt0eXBlPVwidGV4dFwiXScsXG4gICAgKTtcbiAgICBjb25zdCBidXR0b24gPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uLmRlbGV0ZS1idXR0b24nLFxuICAgICk7XG5cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZG9PbkNoZWNrYm94Q2hlY2tlZCxcbiAgICApO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdpbnB1dCcsXG4gICAgICB0aGlzLmRvT25EZXNjcmlwdGlvbklucHV0Q2hhbmdlZCxcbiAgICApO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kb09uRGVsZXRlQnV0dG9uQ2xpY2tlZCxcbiAgICApO1xuICB9O1xuXG4gIGFkZE5ld1Rhc2tUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQuYWRkVG9Mb2NhbFN0b3JhZ2UodGFzayk7XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICAgIHRoaXMuYWRkRXZlbnRzVG9UYXNrRWxlbWVudChuZXdUYXNrKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICB9O1xuXG4gIGNyZWF0ZU5ld1Rhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLm5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQudG9Eb1Rhc2tzLmxlbmd0aDtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soaW5kZXgsIGRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbiAgfTtcblxuICBjbGVhclRhc2tJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLm5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICB9O1xuXG4gIG9uQWRkQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcbiAgICB0aGlzLmFkZE5ld1Rhc2tUb0xpc3QodGhpcy5jcmVhdGVOZXdUYXNrKCkpO1xuICAgIHRoaXMuY2xlYXJUYXNrSW5wdXQoKTtcbiAgfTtcblxuICBnZXRUb0JlRGVsZXRlZFRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWRUYXNrc0lkcyA9IFtdO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoXG4gICAgICB0aGlzLmxpc3RFbGVtZW50LmNoaWxkcmVuLFxuICAgICk7XG5cbiAgICB0YXNrRWxlbWVudHMuZm9yRWFjaCgodGFza0VsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0Q2hlY2tlZFRhc2tFbGVtZW50SWQodGFza0VsZW1lbnQpO1xuICAgICAgaWYgKGlkID49IDApIHtcbiAgICAgICAgY2hlY2tlZFRhc2tzSWRzLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2VkVGFza3NJZHM7XG4gIH07XG5cbiAgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgZGlzcGxheVVwZGF0ZWRMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplQXBwbGljYXRpb24oKTtcbiAgfTtcblxuICBnZXRSZW1haW5pbmdUYXNrcyA9IChjaGVja2VkVGFza3NJZHMpID0+IHRoaXMuc3RvcmFnZU1hbmFnZW1lbnRcbiAgICAucmVhZExvY2FsU3RvcmFnZSgpXG4gICAgLmZpbHRlcigodCwgaSkgPT4gIWNoZWNrZWRUYXNrc0lkcy5pbmNsdWRlcyhpKSk7XG5cbiAgdXBkYXRlSW5kaWNlcyA9IChyZW1haW5pbmdUYXNrcykgPT4ge1xuICAgIHJlbWFpbmluZ1Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbWFpbmluZ1Rhc2tzO1xuICB9O1xuXG4gIHJlbW92ZVRhc2tGcm9tTGlzdCA9IChjaGVja2VkVGFza3NJZHMpID0+IHtcbiAgICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRoaXMuZ2V0UmVtYWluaW5nVGFza3MoY2hlY2tlZFRhc2tzSWRzKTtcbiAgICBjb25zdCB1cGRhdGVkUmVtYWluaW5nVGFza3MgPSB0aGlzLnVwZGF0ZUluZGljZXMocmVtYWluaW5nVGFza3MpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZW1lbnQudXBkYXRlTG9jYWxTdG9yYWdlKFxuICAgICAgdXBkYXRlZFJlbWFpbmluZ1Rhc2tzLFxuICAgICk7XG4gICAgdGhpcy5kaXNwbGF5VXBkYXRlZExpc3QoKTtcbiAgfTtcblxuICBvbkNsZWFyQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja2VkVGFza3NJZHMgPSB0aGlzLmdldFRvQmVEZWxldGVkVGFza0xpc3QoKTtcbiAgICB0aGlzLnJlbW92ZVRhc2tGcm9tTGlzdChjaGVja2VkVGFza3NJZHMpO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI2FkZC10YXNrLWJ1dHRvbicsXG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0RvVGFza3MgPSBbXTtcbiAgfVxuXG4gIGluaXRpYWxpemVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Rhc2tzJykpIHtcbiAgICAgIHRoaXMudG9Eb1Rhc2tzID0gW107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9Eb1Rhc2tzID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlID0gKHRvRG9UYXNrcykgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzID0gdG9Eb1Rhc2tzO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ3RvRG9UYXNrcycsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRvRG9UYXNrcyksXG4gICAgKTtcbiAgfTtcblxuICBhZGRUb0xvY2FsU3RvcmFnZSA9ICh0YXNrKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICd0b0RvVGFza3MnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50b0RvVGFza3MpLFxuICAgICk7XG4gIH07XG5cbiAgY2hhbmdlVGFza1N0YXR1cyA9ICh0YXNrLCBzdGF0dXMpID0+IHtcbiAgICB0aGlzLnRvRG9UYXNrc1t0YXNrLmluZGV4XS5jb21wbGV0ZWQgPSBzdGF0dXM7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIGNoYW5nZVRhc2tEZXNjcmlwdGlvbiA9ICh0YXNrLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMudG9Eb1Rhc2tzW3Rhc2suaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAndG9Eb1Rhc2tzJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Eb1Rhc2tzKSxcbiAgICApO1xuICB9O1xuXG4gIHJlYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy50b0RvVGFza3MgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9UYXNrcycpLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMudG9Eb1Rhc2tzO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENoZWNrZWRUYXNrRWxlbWVudElkKHRhc2tFbGVtZW50KSB7XG4gIGxldCByZXMgPSAtMTtcbiAgaWYgKHRhc2tFbGVtZW50LmNoaWxkcmVuWzBdLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICByZXMgPSBOdW1iZXIodGFza0VsZW1lbnQuaWQuc3BsaXQoJy0nKVsxXSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gb25DaGVja2JveFRvZ2dsZShlKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNoZWNrYm94LnBhcmVudE5vZGUuY2hpbGRyZW5bMV07XG4gIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgfSBlbHNlIHtcbiAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjaGVja2JveC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gIH1cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNoZWNrYm94VG9nZ2xlKTtcbn1cblxuZnVuY3Rpb24gb25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZChlKSB7XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBtb3ZlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnYnV0dG9uLm1vdmUtYnV0dG9uJyxcbiAgKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnYnV0dG9uLmRlbGV0ZS1idXR0b24nLFxuICApO1xuICBtb3ZlQnV0dG9uLnN0eWxlLnpJbmRleCA9ICctMSc7XG4gIGRlbGV0ZUJ1dHRvbi5zdHlsZS56SW5kZXggPSAnMSc7XG4gIHRhc2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYjk5YTdkJztcbn1cblxuZnVuY3Rpb24gb25EZXNjcmlwdGlvbklucHV0Qmx1cmVkKGUpIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IG1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24ubW92ZS1idXR0b24nLFxuICApO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdidXR0b24uZGVsZXRlLWJ1dHRvbicsXG4gICk7XG4gIG1vdmVCdXR0b24uc3R5bGUuekluZGV4ID0gJzEnO1xuICBkZWxldGVCdXR0b24uc3R5bGUuekluZGV4ID0gJy0xJztcbiAgdGFza0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcbn1cblxuZnVuY3Rpb24gYWRkSW5wdXRGb2N1c0V2ZW50KHRhc2tFbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdsYWJlbC5kZXNjcmlwdGlvbiA+IGlucHV0JyxcbiAgKTtcblxuICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2ZvY3VzJyxcbiAgICBvbkRlc2NyaXB0aW9uSW5wdXRGb2N1c2VkLFxuICApO1xuXG4gIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnYmx1cicsXG4gICAgb25EZXNjcmlwdGlvbklucHV0Qmx1cmVkLFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRtcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1N0cmluZ0VsZW1lbnQgPSBgPGxpIGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke1xuICAgIHRhc2suaW5kZXhcbiAgfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrLSR7XG4gIHRhc2suaW5kZXhcbn1cIiBpZD1cImNoZWNrLSR7dGFzay5pbmRleH1cIiAke1xuICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6IG51bGxcbn0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbn1cIiBpZD1cImRlc2NyaXB0aW9uLSR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIG1vdmUtYnV0dG9uXCIgaWQ9XCJtb3ZlQnV0dG9uLSR7XG4gIHRhc2suaW5kZXhcbn1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpY29uIGRlbGV0ZS1idXR0b25cIiBpZD1cImRlbGV0ZUJ1dHRvbi0ke1xuICB0YXNrLmluZGV4XG59XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+YDtcbiAgdG1wV3JhcHBlci5pbm5lckhUTUwgPSB0YXNrU3RyaW5nRWxlbWVudC50cmltKCk7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSB0bXBXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICBhZGRDaGVja0V2ZW50KHRhc2tFbGVtZW50KTtcbiAgYWRkSW5wdXRGb2N1c0V2ZW50KHRhc2tFbGVtZW50KTtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QodG9Eb0xpc3QpIHtcbiAgdG9Eb0xpc3Quc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtcbiAgICBPYmplY3Qua2V5cyh0b0RvTGlzdCkubGVuZ3RoXG4gIH0sIDQ4cHgpO2A7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvbmllci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9uaWVyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogPT09PT09PT09U3R5bGUgcmVzZXQ9PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udDtcXG4gIHNyYzpcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yLWJvZHk6ICNkMWNkYjc7XFxuICAtLWJnLWNvbG9yLWJ1dHRvbjogYmFiNWExO1xcbiAgLS1iZy1jb2xvci1saXN0OiAjZmZmO1xcbiAgLS1jb2xvci10aXRsZTogIzQzNDM0NjtcXG4gIC0tY29sb3Itd2FybmluZzogI2QyNWQ0NztcXG4gIC0tYmctY29sb3ItYWN0aXZlOiAjNDU0MTM4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHZoIDAgMjB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgI2NjYzhiMSAxcHgsXFxuICAgICAgdHJhbnNwYXJlbnQgMXB4XFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYzhiMSAxcHgsICNkMWNkYjcgMXB4KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNnB4IDZweDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYig1MCA1MCA5MyAvIDI1JSkgMCAyMHB4IDQwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgMCAxOHB4IDE4cHggLTE4cHggaW5zZXQ7XFxufVxcblxcbmEsXFxuYTpsaW5rLFxcbmE6dmlzaXRlZCxcXG5hOmhvdmVyLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tc2hhcmspO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PUNhcmQgc3R5bGluZz09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxubWFpbiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IDQ4cHggYXV0byA3MnB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwIDVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwICNiYWI1YTE7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA2cHggMzJweCA2cHggMTJweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24gLmljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi50by1kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byA0OHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMzAlO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLnRhc2sgLmljb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAyNSUgMzAlO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjdzIHN0ZXAtZW5kO1xcbn1cXG5cXG4udGFzayAubW92ZS1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAyNSUgMzUlO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjdzIHN0ZXAtZW5kO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gbGVmdCxcXG4gICAgICB2YXIoLS1iZy1jb2xvci1saXN0KSA1MCUsXFxuICAgICAgdmFyKC0tYmctY29sb3ItYWN0aXZlKSA1MCVcXG4gICAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQ0FBb0M7O0FBRXBDLG9DQUFvQzs7QUFFcEMsb0NBQW9DOztBQUdwQztFQUNFLHFCQUFxQjtFQUNyQjs7MERBRXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1o7Ozs7O3VEQUtxRDtFQUNyRCx3QkFBd0I7RUFDeEI7OzRDQUUwQztBQUM1Qzs7QUFFQTs7Ozs7RUFLRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBLG9DQUFvQzs7QUFFcEMsb0NBQW9DOztBQUVwQyxvQ0FBb0M7O0FBRXBDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUNBQXVDO0VBQ3ZDLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHdDQUF3QztFQUN4QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCOzs7OztLQUtHO0VBQ0gsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsT0FBTztFQUNQLDBDQUEwQztFQUMxQyw2Q0FBNkM7RUFDN0MsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PVN0eWxlIHJlc2V0PT09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuL2ZvbnQvbmllci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnQvbmllci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yLWJvZHk6ICNkMWNkYjc7XFxuICAtLWJnLWNvbG9yLWJ1dHRvbjogYmFiNWExO1xcbiAgLS1iZy1jb2xvci1saXN0OiAjZmZmO1xcbiAgLS1jb2xvci10aXRsZTogIzQzNDM0NjtcXG4gIC0tY29sb3Itd2FybmluZzogI2QyNWQ0NztcXG4gIC0tYmctY29sb3ItYWN0aXZlOiAjNDU0MTM4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHZoIDAgMjB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItYm9keSk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgI2NjYzhiMSAxcHgsXFxuICAgICAgdHJhbnNwYXJlbnQgMXB4XFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYzhiMSAxcHgsICNkMWNkYjcgMXB4KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNnB4IDZweDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYig1MCA1MCA5MyAvIDI1JSkgMCAyMHB4IDQwcHggLTEycHggaW5zZXQsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgMCAxOHB4IDE4cHggLTE4cHggaW5zZXQ7XFxufVxcblxcbmEsXFxuYTpsaW5rLFxcbmE6dmlzaXRlZCxcXG5hOmhvdmVyLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tc2hhcmspO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qID09PT09PT09PUNhcmQgc3R5bGluZz09PT09PT09PT0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxubWFpbiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IDQ4cHggYXV0byA3MnB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwIDVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbGlzdCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBOaWVyRm9udCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwICNiYWI1YTE7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtc2VjdGlvbiBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA2cHggMzJweCA2cHggMTJweDtcXG59XFxuXFxuLmlucHV0LXNlY3Rpb24gLmljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi50by1kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byA0OHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMzAlO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1ib2R5KTtcXG59XFxuXFxuLnRhc2sgLmljb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzayAuZGVsZXRlLWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAyNSUgMzAlO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjdzIHN0ZXAtZW5kO1xcbn1cXG5cXG4udGFzayAubW92ZS1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAyNSUgMzUlO1xcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwLjdzIHN0ZXAtZW5kO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gbGVmdCxcXG4gICAgICB2YXIoLS1iZy1jb2xvci1saXN0KSA1MCUsXFxuICAgICAgdmFyKC0tYmctY29sb3ItYWN0aXZlKSA1MCVcXG4gICAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvci1saXN0KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcblxcbi5pbnB1dC1zZWN0aW9uIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi50YXNrIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ1JVRCBmcm9tICcuL2NvbXBvbmVudHMvY3J1ZC1vcGVyYXRpb25zJztcblxuY29uc3QgY3J1ZCA9IG5ldyBDUlVEKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gIGNydWQuaW5pdGlhbGl6ZUFwcGxpY2F0aW9uLFxuKTtcbiJdLCJuYW1lcyI6WyJkb20iLCJMb2NhbFN0b3JhZ2UiLCJUYXNrIiwiY3JlYXRlVGFza0VsZW1lbnQiLCJhbGxvY2F0ZVNwYWNlRm9yVG9ET0xpc3QiLCJnZXRDaGVja2VkVGFza0VsZW1lbnRJZCIsIkNSVUQiLCJlIiwiaWQiLCJ0YXJnZXQiLCJzcGxpdCIsInRhc2siLCJzdG9yYWdlTWFuYWdlbWVudCIsInJlYWRMb2NhbFN0b3JhZ2UiLCJjaGFuZ2VUYXNrU3RhdHVzIiwiY2hlY2tlZCIsImNoYW5nZVRhc2tEZXNjcmlwdGlvbiIsInZhbHVlIiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsInJlbWFpbmluZ1Rhc2tzIiwiZmlsdGVyIiwiaW5kZXgiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJkaXNwbGF5VXBkYXRlZExpc3QiLCJjaGVja0JveGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVzY3JpcHRpb25JbnB1dHMiLCJkZWxldGVCdXR0b25zIiwibW92ZUJ1dHRvbnMiLCJmb3JFYWNoIiwiY2hlY2tib3giLCJhZGRFdmVudExpc3RlbmVyIiwiZG9PbkNoZWNrYm94Q2hlY2tlZCIsImlucHV0IiwiZG9PbkRlc2NyaXB0aW9uSW5wdXRDaGFuZ2VkIiwiZG9PbkRlbGV0ZUJ1dHRvbkNsaWNrZWQiLCJ0b0RvVGFza3MiLCJzb3J0Iiwib2JqMSIsIm9iajIiLCJpbml0aWFsaXplTG9jYWxTdG9yYWdlIiwibGlzdEVsZW1lbnQiLCJzb3J0VGFza3MiLCJ0YXNrRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRzVG9EeW5hbWljRWxlbWVudHMiLCJuZXdUYXNrIiwicXVlcnlTZWxlY3RvciIsImFkZFRvTG9jYWxTdG9yYWdlIiwiYWRkRXZlbnRzVG9UYXNrRWxlbWVudCIsImRlc2NyaXB0aW9uIiwibmV3VGFza0lucHV0IiwibGVuZ3RoIiwiYWRkTmV3VGFza1RvTGlzdCIsImNyZWF0ZU5ld1Rhc2siLCJjbGVhclRhc2tJbnB1dCIsImNoZWNrZWRUYXNrc0lkcyIsInRhc2tFbGVtZW50cyIsInNsaWNlIiwiY2FsbCIsImNoaWxkcmVuIiwicHVzaCIsImlubmVySFRNTCIsImNsZWFyTGlzdCIsImluaXRpYWxpemVBcHBsaWNhdGlvbiIsInQiLCJpIiwiaW5jbHVkZXMiLCJnZXRSZW1haW5pbmdUYXNrcyIsInVwZGF0ZWRSZW1haW5pbmdUYXNrcyIsInVwZGF0ZUluZGljZXMiLCJnZXRUb0JlRGVsZXRlZFRhc2tMaXN0IiwicmVtb3ZlVGFza0Zyb21MaXN0IiwidG9Eb0xpc3QiLCJjbGVhckJ1dHRvbiIsImFkZEJ1dHRvbiIsIm9uQWRkQnV0dG9uQ2xpY2tlZCIsIm9uQ2xlYXJCdXR0b25DbGlja2VkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzdGF0dXMiLCJjb21wbGV0ZWQiLCJyZXMiLCJOdW1iZXIiLCJvbkNoZWNrYm94VG9nZ2xlIiwicGFyZW50Tm9kZSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJhZGRDaGVja0V2ZW50Iiwib25EZXNjcmlwdGlvbklucHV0Rm9jdXNlZCIsIm1vdmVCdXR0b24iLCJkZWxldGVCdXR0b24iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkRlc2NyaXB0aW9uSW5wdXRCbHVyZWQiLCJhZGRJbnB1dEZvY3VzRXZlbnQiLCJkZXNjcmlwdGlvbklucHV0IiwidG1wV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJ0YXNrU3RyaW5nRWxlbWVudCIsInRyaW0iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImdyaWRUZW1wbGF0ZVJvd3MiLCJPYmplY3QiLCJrZXlzIiwiY3J1ZCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=