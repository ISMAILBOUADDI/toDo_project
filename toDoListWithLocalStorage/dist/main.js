/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/createNewProject.js":
/*!*****************************************!*\
  !*** ./src/Modules/createNewProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/Modules/storage.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/Modules/dom.js");



class Project {
 constructor(name) {
   this.name = name;
   this.todos = [];
 }

 getName() {
   return this.name;
 }

 getTodos() {
   return this.todos;
 }

 addTodo(todo) {
   this.todos.push(todo);
 }

 removeTodo(datalist) {
   this.todos.splice(datalist, 1);
 }
}

const addNewProject = () => {
 const newProject = new Project(_dom__WEBPACK_IMPORTED_MODULE_1__.projectInputField.value);
 _storage__WEBPACK_IMPORTED_MODULE_0__.projectsArray.push(newProject);
};



/***/ }),

/***/ "./src/Modules/createNewToDo.js":
/*!**************************************!*\
  !*** ./src/Modules/createNewToDo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "addNewTodo": () => (/* binding */ addNewTodo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/Modules/storage.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/Modules/dom.js");




//, dueDate, priority
class Todo {
 constructor(title, dueDate, priority, description) {
   this.title = title;
   this.dueDate = dueDate;
   this.priority = priority;
   this.description = description;
 }

 setTitle(newTitle) {
   this.title = newTitle;
 }

 setDueDate(newDueDate) {
   this.dueDate = newDueDate;
 }

 setPriority(newPriority) {
   this.priority = newPriority;
 }

 setDescription(newDescription) {
   this.description = newDescription;
 }

 getTitle() {
   return this.title;
 }

 getDueDate() {
   return this.dueDate;
 }

 getPriority() {
   return this.priority;
 }

 getDescription() {
   return this.description;
 }
}

const addNewTodo = () => {
 const newTodo = new Todo(
   _dom__WEBPACK_IMPORTED_MODULE_1__.todoTitle.value,
   _dom__WEBPACK_IMPORTED_MODULE_1__.dueDate.value,
   _dom__WEBPACK_IMPORTED_MODULE_1__.priority.value,
   _dom__WEBPACK_IMPORTED_MODULE_1__.description.value
 );
 _storage__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project) => {
   if (project.name === _dom__WEBPACK_IMPORTED_MODULE_1__.activeProject) {
     project.addTodo(newTodo);
   }
 });
};



/***/ }),

/***/ "./src/Modules/dom.js":
/*!****************************!*\
  !*** ./src/Modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnAddNewProject": () => (/* binding */ btnAddNewProject),
/* harmony export */   "formNewProject": () => (/* binding */ formNewProject),
/* harmony export */   "btnAddNewTodo": () => (/* binding */ btnAddNewTodo),
/* harmony export */   "formNewTodo": () => (/* binding */ formNewTodo),
/* harmony export */   "projectInputField": () => (/* binding */ projectInputField),
/* harmony export */   "todoTitle": () => (/* binding */ todoTitle),
/* harmony export */   "dueDate": () => (/* binding */ dueDate),
/* harmony export */   "priority": () => (/* binding */ priority),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "activeProject": () => (/* binding */ activeProject)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/Modules/storage.js");
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewProject */ "./src/Modules/createNewProject.js");
/* harmony import */ var _createNewToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewToDo */ "./src/Modules/createNewToDo.js");




// 
const section = document.querySelector('section');
const btnMenu = document.querySelectorAll('span');
const formInputs = document.querySelectorAll('form');

const projectTitle = document.querySelector('.project-title');
const projectsDiv = document.querySelector('.projects-div');
const todosDiv = document.querySelector('.todos-div');
const btnAddNewProject = document.querySelector('.btn-new-project');
const btnAddNewTodo = document.querySelector('.btn-new-todo');
const formNewProject = document.querySelector('.form-new-project');
const formNewTodo = document.querySelector('.form-new-todo');
const btnCancelNewProject = document.querySelector('.cancel-new-project');
const btnCancelNewTodo = document.querySelector('.cancel-new-todo');
const projectInputField = document.querySelector('.project-text-input');

const todoTitle = document.querySelector('#todo-title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const description = document.querySelector('#description');
const modalDiv = document.querySelector('.modal-edit-todo');

// placeholder for current active/selected project or todos
let activeProject = '';
// element utilities
const clearInputs = () => {
  formInputs.forEach((form) => {
    form.reset();
  });
};

const clearDisplay = (e) => {
  e.innerHTML = '';
};

const hideMenuButton = (e1, e2) => {
  e1.classList.toggle('hide');
  e2.classList.toggle('hide');
};
//mourad
const renderProjects = (projObj) => {
  const newProjectDiv = document.createElement('div');
  const addedProjectWrapper = document.createElement('div');
  const btnDelProject = document.createElement('span');
  newProjectDiv.classList.add('added-project');
  addedProjectWrapper.classList.add('added-project-wrapper');
  addedProjectWrapper.innerHTML = `<i class="fas fa-tasks"></i><div>${projObj.getName()}</div>`;
  btnDelProject.innerHTML = `<i class="fas fa-times-circle btn-del-project"></i>`;
  newProjectDiv.append(addedProjectWrapper, btnDelProject);
  projectsDiv.append(newProjectDiv);
  updateProjectIndex();
};
const updateProjectIndex = () => {
  let projectIndex = 0;
  const projects = document.querySelectorAll('.added-project');
  projects.forEach((project) => {
    project.setAttribute('data-project', `${projectIndex}`);
    projectIndex++;
  });
};

//rabie 
const selectActiveProject = () => {
  const addedProjectWrappers = document.querySelectorAll(
    '.added-project-wrapper'
  );
  addedProjectWrappers.forEach((project) => {
    const projectName = project.querySelector('div').textContent;
    project.addEventListener('click', () => {
      clearDisplay(todosDiv);
      activeProject = projectName;
      projectTitle.textContent = activeProject;
      section.classList.toggle('slide');
      checkIfProjectExist();
      renderTodoList();
    });
  });
};



const updateTodoIndex = () => {
  let todoIndex = 0;
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    todo.setAttribute('data-todo', `${todoIndex}`);
    todoIndex++;
  });
};

const renderTodoList = () => {
  _storage__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project) => {
    if (project.getName() === activeProject) {
      project.getTodos().forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.innerHTML = `<h2>${todo.getTitle()}</h2>
                            <p>Due date: ${todo.getDueDate()}</p>
                            <p>Priority: ${todo.getPriority()}</p>
                            <p>Description: ${todo.getDescription()}</p>
                            <div class="todo-functions"><i class="fas fa-edit btn-edit-todo"></i>
                            <i class="fas fa-trash btn-del-todo"></i></div>`;
        todosDiv.append(todoDiv);
        // updateProjectIndex();
        updateTodoIndex();
      });
    }
  });
};

// event listeners
btnMenu.forEach((btn) => {
  btn.addEventListener('click', () => {
    section.classList.toggle('slide');
  });
});

btnAddNewProject.addEventListener('click', () => {
  hideMenuButton(btnAddNewProject, formNewProject);
});

formNewProject.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_createNewProject__WEBPACK_IMPORTED_MODULE_1__.addNewProject)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
  clearDisplay(projectsDiv);
  displayProject();
  hideMenuButton(btnAddNewProject, formNewProject);
  clearInputs();
});

btnCancelNewProject.addEventListener('click', () => {
  clearInputs();
  hideMenuButton(btnAddNewProject, formNewProject);
});

btnAddNewTodo.addEventListener('click', () => {
  hideMenuButton(btnAddNewTodo, formNewTodo);
});

formNewTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_createNewToDo__WEBPACK_IMPORTED_MODULE_2__.addNewTodo)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
  clearDisplay(todosDiv);
  renderTodoList();
  hideMenuButton(btnAddNewTodo, formNewTodo);
  clearInputs();
});

btnCancelNewTodo.addEventListener('click', () => {
  clearInputs();
  hideMenuButton(btnAddNewTodo, formNewTodo);
});

const displayProject = () => {
  _storage__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((projObj) => {
    renderProjects(projObj);
  });
  checkIfProjectExist();
  selectActiveProject();
};
// console.log(projectsArray);
const checkIfProjectExist = () => {
  if (activeProject === '') {
    btnAddNewTodo.classList.add('hide');
  } else {
    btnAddNewTodo.classList.remove('hide');
  }
};

//date-fns function isToday isThisWeek




/***/ }),

/***/ "./src/Modules/storage.js":
/*!********************************!*\
  !*** ./src/Modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject */ "./src/Modules/createNewProject.js");
/* harmony import */ var _createNewToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewToDo */ "./src/Modules/createNewToDo.js");



//get local storage from projectsArray and re-convert it into new object
const storedArray = () => JSON.parse(localStorage.getItem('projectTodosArray'));
let projectsArray = (storedArray() || []).map((obj) => {
  const newObjectFromStorage = new _createNewProject__WEBPACK_IMPORTED_MODULE_0__.Project(obj.name);
  obj.todos.forEach((todoFromObj) => {
    const newTodoFromObj = new _createNewToDo__WEBPACK_IMPORTED_MODULE_1__.Todo(
      todoFromObj.title,
      todoFromObj.dueDate,
      todoFromObj.priority,
      todoFromObj.description
    );
    newObjectFromStorage.addTodo(newTodoFromObj);
  });
  return newObjectFromStorage;
});

const saveToLocalStorage = () => {
  localStorage.setItem('projectTodosArray', JSON.stringify(projectsArray));
};




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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/dom */ "./src/Modules/dom.js");


(0,_Modules_dom__WEBPACK_IMPORTED_MODULE_0__.displayProject)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TDJDO0FBQ047QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0RBQU87QUFDMUM7QUFDQSwrQkFBK0IsZ0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7Ozs7Ozs7VUN2QjdDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7QUFDL0M7QUFDQSw0REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvRG9fcHJvamVjdC8uL3NyYy9Nb2R1bGVzL2NyZWF0ZU5ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9Eb19wcm9qZWN0Ly4vc3JjL01vZHVsZXMvY3JlYXRlTmV3VG9Eby5qcyIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3QvLi9zcmMvTW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9Eb19wcm9qZWN0Ly4vc3JjL01vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9Eb19wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RJbnB1dEZpZWxkIH0gZnJvbSAnLi9kb20nO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgIHRoaXMudG9kb3MgPSBbXTtcclxuIH1cclxuXHJcbiBnZXROYW1lKCkge1xyXG4gICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gfVxyXG5cclxuIGdldFRvZG9zKCkge1xyXG4gICByZXR1cm4gdGhpcy50b2RvcztcclxuIH1cclxuXHJcbiBhZGRUb2RvKHRvZG8pIHtcclxuICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gfVxyXG5cclxuIHJlbW92ZVRvZG8oZGF0YWxpc3QpIHtcclxuICAgdGhpcy50b2Rvcy5zcGxpY2UoZGF0YWxpc3QsIDEpO1xyXG4gfVxyXG59XHJcblxyXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKCkgPT4ge1xyXG4gY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dEZpZWxkLnZhbHVlKTtcclxuIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIGFkZE5ld1Byb2plY3QgfTsiLCJpbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHtcclxuIHRvZG9UaXRsZSxcclxuIGR1ZURhdGUsXHJcbiBwcmlvcml0eSxcclxuIGRlc2NyaXB0aW9uLFxyXG4gYWN0aXZlUHJvamVjdCxcclxufSBmcm9tICcuL2RvbSc7XHJcblxyXG5cclxuLy8sIGR1ZURhdGUsIHByaW9yaXR5XHJcbmNsYXNzIFRvZG8ge1xyXG4gY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xyXG4gICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gfVxyXG5cclxuIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcclxuIH1cclxuXHJcbiBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuIH1cclxuXHJcbiBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiB9XHJcblxyXG4gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gfVxyXG5cclxuIGdldFRpdGxlKCkge1xyXG4gICByZXR1cm4gdGhpcy50aXRsZTtcclxuIH1cclxuXHJcbiBnZXREdWVEYXRlKCkge1xyXG4gICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gfVxyXG5cclxuIGdldFByaW9yaXR5KCkge1xyXG4gICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuIH1cclxuXHJcbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZE5ld1RvZG8gPSAoKSA9PiB7XHJcbiBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgIHRvZG9UaXRsZS52YWx1ZSxcclxuICAgZHVlRGF0ZS52YWx1ZSxcclxuICAgcHJpb3JpdHkudmFsdWUsXHJcbiAgIGRlc2NyaXB0aW9uLnZhbHVlXHJcbiApO1xyXG4gcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGFjdGl2ZVByb2plY3QpIHtcclxuICAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgIH1cclxuIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVG9kbywgYWRkTmV3VG9kbyB9OyIsImltcG9ydCB7IHByb2plY3RzQXJyYXksIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QgfSBmcm9tICcuL2NyZWF0ZU5ld1Byb2plY3QnO1xyXG5pbXBvcnQgeyBhZGROZXdUb2RvIH0gZnJvbSAnLi9jcmVhdGVOZXdUb0RvJztcclxuXHJcbi8vIFxyXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xyXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xyXG5jb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xyXG5cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcclxuY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtZGl2Jyk7XHJcbmNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWRpdicpO1xyXG5jb25zdCBidG5BZGROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1uZXctcHJvamVjdCcpO1xyXG5jb25zdCBidG5BZGROZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1uZXctdG9kbycpO1xyXG5jb25zdCBmb3JtTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW5ldy1wcm9qZWN0Jyk7XHJcbmNvbnN0IGZvcm1OZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbmV3LXRvZG8nKTtcclxuY29uc3QgYnRuQ2FuY2VsTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtbmV3LXByb2plY3QnKTtcclxuY29uc3QgYnRuQ2FuY2VsTmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtbmV3LXRvZG8nKTtcclxuY29uc3QgcHJvamVjdElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10ZXh0LWlucHV0Jyk7XHJcblxyXG5jb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xyXG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XHJcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWVkaXQtdG9kbycpO1xyXG5cclxuLy8gcGxhY2Vob2xkZXIgZm9yIGN1cnJlbnQgYWN0aXZlL3NlbGVjdGVkIHByb2plY3Qgb3IgdG9kb3NcclxubGV0IGFjdGl2ZVByb2plY3QgPSAnJztcclxuLy8gZWxlbWVudCB1dGlsaXRpZXNcclxuY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XHJcbiAgZm9ybUlucHV0cy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhckRpc3BsYXkgPSAoZSkgPT4ge1xyXG4gIGUuaW5uZXJIVE1MID0gJyc7XHJcbn07XHJcblxyXG5jb25zdCBoaWRlTWVudUJ1dHRvbiA9IChlMSwgZTIpID0+IHtcclxuICBlMS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgZTIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59O1xyXG4vL21vdXJhZFxyXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qT2JqKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFkZGVkUHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBidG5EZWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkZWQtcHJvamVjdCcpO1xyXG4gIGFkZGVkUHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWRkZWQtcHJvamVjdC13cmFwcGVyJyk7XHJcbiAgYWRkZWRQcm9qZWN0V3JhcHBlci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtdGFza3NcIj48L2k+PGRpdj4ke3Byb2pPYmouZ2V0TmFtZSgpfTwvZGl2PmA7XHJcbiAgYnRuRGVsUHJvamVjdC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGJ0bi1kZWwtcHJvamVjdFwiPjwvaT5gO1xyXG4gIG5ld1Byb2plY3REaXYuYXBwZW5kKGFkZGVkUHJvamVjdFdyYXBwZXIsIGJ0bkRlbFByb2plY3QpO1xyXG4gIHByb2plY3RzRGl2LmFwcGVuZChuZXdQcm9qZWN0RGl2KTtcclxuICB1cGRhdGVQcm9qZWN0SW5kZXgoKTtcclxufTtcclxuY29uc3QgdXBkYXRlUHJvamVjdEluZGV4ID0gKCkgPT4ge1xyXG4gIGxldCBwcm9qZWN0SW5kZXggPSAwO1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZGVkLXByb2plY3QnKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgYCR7cHJvamVjdEluZGV4fWApO1xyXG4gICAgcHJvamVjdEluZGV4Kys7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vL3JhYmllIFxyXG5jb25zdCBzZWxlY3RBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZGVkUHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuYWRkZWQtcHJvamVjdC13cmFwcGVyJ1xyXG4gICk7XHJcbiAgYWRkZWRQcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnRleHRDb250ZW50O1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2xlYXJEaXNwbGF5KHRvZG9zRGl2KTtcclxuICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0O1xyXG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlJyk7XHJcbiAgICAgIGNoZWNrSWZQcm9qZWN0RXhpc3QoKTtcclxuICAgICAgcmVuZGVyVG9kb0xpc3QoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCB1cGRhdGVUb2RvSW5kZXggPSAoKSA9PiB7XHJcbiAgbGV0IHRvZG9JbmRleCA9IDA7XHJcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xyXG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nLCBgJHt0b2RvSW5kZXh9YCk7XHJcbiAgICB0b2RvSW5kZXgrKztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlclRvZG9MaXN0ID0gKCkgPT4ge1xyXG4gIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBhY3RpdmVQcm9qZWN0KSB7XHJcbiAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gYDxoMj4ke3RvZG8uZ2V0VGl0bGUoKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHVlIGRhdGU6ICR7dG9kby5nZXREdWVEYXRlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpb3JpdHk6ICR7dG9kby5nZXRQcmlvcml0eSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiAke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1mdW5jdGlvbnNcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0IGJ0bi1lZGl0LXRvZG9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaCBidG4tZGVsLXRvZG9cIj48L2k+PC9kaXY+YDtcclxuICAgICAgICB0b2Rvc0Rpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICAgICAgLy8gdXBkYXRlUHJvamVjdEluZGV4KCk7XHJcbiAgICAgICAgdXBkYXRlVG9kb0luZGV4KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJzXHJcbmJ0bk1lbnUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZScpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmJ0bkFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaGlkZU1lbnVCdXR0b24oYnRuQWRkTmV3UHJvamVjdCwgZm9ybU5ld1Byb2plY3QpO1xyXG59KTtcclxuXHJcbmZvcm1OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGFkZE5ld1Byb2plY3QoKTtcclxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICBjbGVhckRpc3BsYXkocHJvamVjdHNEaXYpO1xyXG4gIGRpc3BsYXlQcm9qZWN0KCk7XHJcbiAgaGlkZU1lbnVCdXR0b24oYnRuQWRkTmV3UHJvamVjdCwgZm9ybU5ld1Byb2plY3QpO1xyXG4gIGNsZWFySW5wdXRzKCk7XHJcbn0pO1xyXG5cclxuYnRuQ2FuY2VsTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjbGVhcklucHV0cygpO1xyXG4gIGhpZGVNZW51QnV0dG9uKGJ0bkFkZE5ld1Byb2plY3QsIGZvcm1OZXdQcm9qZWN0KTtcclxufSk7XHJcblxyXG5idG5BZGROZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGhpZGVNZW51QnV0dG9uKGJ0bkFkZE5ld1RvZG8sIGZvcm1OZXdUb2RvKTtcclxufSk7XHJcblxyXG5mb3JtTmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGROZXdUb2RvKCk7XHJcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgY2xlYXJEaXNwbGF5KHRvZG9zRGl2KTtcclxuICByZW5kZXJUb2RvTGlzdCgpO1xyXG4gIGhpZGVNZW51QnV0dG9uKGJ0bkFkZE5ld1RvZG8sIGZvcm1OZXdUb2RvKTtcclxuICBjbGVhcklucHV0cygpO1xyXG59KTtcclxuXHJcbmJ0bkNhbmNlbE5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xlYXJJbnB1dHMoKTtcclxuICBoaWRlTWVudUJ1dHRvbihidG5BZGROZXdUb2RvLCBmb3JtTmV3VG9kbyk7XHJcbn0pO1xyXG5cclxuY29uc3QgZGlzcGxheVByb2plY3QgPSAoKSA9PiB7XHJcbiAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qT2JqKSA9PiB7XHJcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qT2JqKTtcclxuICB9KTtcclxuICBjaGVja0lmUHJvamVjdEV4aXN0KCk7XHJcbiAgc2VsZWN0QWN0aXZlUHJvamVjdCgpO1xyXG59O1xyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcclxuY29uc3QgY2hlY2tJZlByb2plY3RFeGlzdCA9ICgpID0+IHtcclxuICBpZiAoYWN0aXZlUHJvamVjdCA9PT0gJycpIHtcclxuICAgIGJ0bkFkZE5ld1RvZG8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidG5BZGROZXdUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICB9XHJcbn07XHJcblxyXG4vL2RhdGUtZm5zIGZ1bmN0aW9uIGlzVG9kYXkgaXNUaGlzV2Vla1xyXG5cclxuZXhwb3J0IHtcclxuICBidG5BZGROZXdQcm9qZWN0LFxyXG4gIGZvcm1OZXdQcm9qZWN0LFxyXG4gIGJ0bkFkZE5ld1RvZG8sXHJcbiAgZm9ybU5ld1RvZG8sXHJcbiAgcHJvamVjdElucHV0RmllbGQsXHJcbiAgdG9kb1RpdGxlLFxyXG4gIGR1ZURhdGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZGlzcGxheVByb2plY3QsXHJcbiAgYWN0aXZlUHJvamVjdCxcclxufTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlTmV3UHJvamVjdCc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL2NyZWF0ZU5ld1RvRG8nO1xyXG5cclxuLy9nZXQgbG9jYWwgc3RvcmFnZSBmcm9tIHByb2plY3RzQXJyYXkgYW5kIHJlLWNvbnZlcnQgaXQgaW50byBuZXcgb2JqZWN0XHJcbmNvbnN0IHN0b3JlZEFycmF5ID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFRvZG9zQXJyYXknKSk7XHJcbmxldCBwcm9qZWN0c0FycmF5ID0gKHN0b3JlZEFycmF5KCkgfHwgW10pLm1hcCgob2JqKSA9PiB7XHJcbiAgY29uc3QgbmV3T2JqZWN0RnJvbVN0b3JhZ2UgPSBuZXcgUHJvamVjdChvYmoubmFtZSk7XHJcbiAgb2JqLnRvZG9zLmZvckVhY2goKHRvZG9Gcm9tT2JqKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvRnJvbU9iaiA9IG5ldyBUb2RvKFxyXG4gICAgICB0b2RvRnJvbU9iai50aXRsZSxcclxuICAgICAgdG9kb0Zyb21PYmouZHVlRGF0ZSxcclxuICAgICAgdG9kb0Zyb21PYmoucHJpb3JpdHksXHJcbiAgICAgIHRvZG9Gcm9tT2JqLmRlc2NyaXB0aW9uXHJcbiAgICApO1xyXG4gICAgbmV3T2JqZWN0RnJvbVN0b3JhZ2UuYWRkVG9kbyhuZXdUb2RvRnJvbU9iaik7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld09iamVjdEZyb21TdG9yYWdlO1xyXG59KTtcclxuXHJcbmNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdFRvZG9zQXJyYXknLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0c0FycmF5LCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gJy4vTW9kdWxlcy9kb20nO1xyXG5cclxuZGlzcGxheVByb2plY3QoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9