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
let activeTodos = '';
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
        updateProjectIndex();
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
  console.log((0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MMkM7QUFDTjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzREFBTztBQUMxQztBQUNBLCtCQUErQixnREFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2Qzs7Ozs7OztVQ3ZCN0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQztBQUMvQztBQUNBLDREQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb19wcm9qZWN0Ly4vc3JjL01vZHVsZXMvY3JlYXRlTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3QvLi9zcmMvTW9kdWxlcy9jcmVhdGVOZXdUb0RvLmpzIiwid2VicGFjazovL3RvRG9fcHJvamVjdC8uL3NyYy9Nb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3QvLi9zcmMvTW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvRG9fcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b0RvX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvRG9fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvRG9fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvRG9fcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHsgcHJvamVjdElucHV0RmllbGQgfSBmcm9tICcuL2RvbSc7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gfVxyXG5cclxuIGdldE5hbWUoKSB7XHJcbiAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiB9XHJcblxyXG4gZ2V0VG9kb3MoKSB7XHJcbiAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gfVxyXG5cclxuIGFkZFRvZG8odG9kbykge1xyXG4gICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiB9XHJcblxyXG4gcmVtb3ZlVG9kbyhkYXRhbGlzdCkge1xyXG4gICB0aGlzLnRvZG9zLnNwbGljZShkYXRhbGlzdCwgMSk7XHJcbiB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSAoKSA9PiB7XHJcbiBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0RmllbGQudmFsdWUpO1xyXG4gcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJvamVjdCwgYWRkTmV3UHJvamVjdCB9OyIsImltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQge1xyXG4gdG9kb1RpdGxlLFxyXG4gZHVlRGF0ZSxcclxuIHByaW9yaXR5LFxyXG4gZGVzY3JpcHRpb24sXHJcbiBhY3RpdmVQcm9qZWN0LFxyXG59IGZyb20gJy4vZG9tJztcclxuXHJcblxyXG4vLywgZHVlRGF0ZSwgcHJpb3JpdHlcclxuY2xhc3MgVG9kbyB7XHJcbiBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XHJcbiAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiB9XHJcblxyXG4gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xyXG4gfVxyXG5cclxuIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gfVxyXG5cclxuIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuIH1cclxuXHJcbiBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiB9XHJcblxyXG4gZ2V0VGl0bGUoKSB7XHJcbiAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gfVxyXG5cclxuIGdldER1ZURhdGUoKSB7XHJcbiAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiB9XHJcblxyXG4gZ2V0UHJpb3JpdHkoKSB7XHJcbiAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gfVxyXG5cclxuIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuIH1cclxufVxyXG5cclxuY29uc3QgYWRkTmV3VG9kbyA9ICgpID0+IHtcclxuIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcclxuICAgdG9kb1RpdGxlLnZhbHVlLFxyXG4gICBkdWVEYXRlLnZhbHVlLFxyXG4gICBwcmlvcml0eS52YWx1ZSxcclxuICAgZGVzY3JpcHRpb24udmFsdWVcclxuICk7XHJcbiBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgaWYgKHByb2plY3QubmFtZSA9PT0gYWN0aXZlUHJvamVjdCkge1xyXG4gICAgIHByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcclxuICAgfVxyXG4gfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBUb2RvLCBhZGROZXdUb2RvIH07IiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHsgYWRkTmV3UHJvamVjdCB9IGZyb20gJy4vY3JlYXRlTmV3UHJvamVjdCc7XHJcbmltcG9ydCB7IGFkZE5ld1RvZG8gfSBmcm9tICcuL2NyZWF0ZU5ld1RvRG8nO1xyXG5cclxuLy8gXHJcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XHJcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XHJcbmNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xyXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1kaXYnKTtcclxuY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtZGl2Jyk7XHJcbmNvbnN0IGJ0bkFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5ldy1wcm9qZWN0Jyk7XHJcbmNvbnN0IGJ0bkFkZE5ld1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5ldy10b2RvJyk7XHJcbmNvbnN0IGZvcm1OZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbmV3LXByb2plY3QnKTtcclxuY29uc3QgZm9ybU5ld1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1uZXctdG9kbycpO1xyXG5jb25zdCBidG5DYW5jZWxOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1uZXctcHJvamVjdCcpO1xyXG5jb25zdCBidG5DYW5jZWxOZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1uZXctdG9kbycpO1xyXG5jb25zdCBwcm9qZWN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRleHQtaW5wdXQnKTtcclxuXHJcbmNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcclxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZWRpdC10b2RvJyk7XHJcblxyXG4vLyBwbGFjZWhvbGRlciBmb3IgY3VycmVudCBhY3RpdmUvc2VsZWN0ZWQgcHJvamVjdCBvciB0b2Rvc1xyXG5sZXQgYWN0aXZlUHJvamVjdCA9ICcnO1xyXG5sZXQgYWN0aXZlVG9kb3MgPSAnJztcclxuLy8gZWxlbWVudCB1dGlsaXRpZXNcclxuY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XHJcbiAgZm9ybUlucHV0cy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhckRpc3BsYXkgPSAoZSkgPT4ge1xyXG4gIGUuaW5uZXJIVE1MID0gJyc7XHJcbn07XHJcblxyXG5jb25zdCBoaWRlTWVudUJ1dHRvbiA9IChlMSwgZTIpID0+IHtcclxuICBlMS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgZTIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59O1xyXG4vL21vdXJhZFxyXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qT2JqKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFkZGVkUHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBidG5EZWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkZWQtcHJvamVjdCcpO1xyXG4gIGFkZGVkUHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWRkZWQtcHJvamVjdC13cmFwcGVyJyk7XHJcbiAgYWRkZWRQcm9qZWN0V3JhcHBlci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtdGFza3NcIj48L2k+PGRpdj4ke3Byb2pPYmouZ2V0TmFtZSgpfTwvZGl2PmA7XHJcbiAgYnRuRGVsUHJvamVjdC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGJ0bi1kZWwtcHJvamVjdFwiPjwvaT5gO1xyXG4gIG5ld1Byb2plY3REaXYuYXBwZW5kKGFkZGVkUHJvamVjdFdyYXBwZXIsIGJ0bkRlbFByb2plY3QpO1xyXG4gIHByb2plY3RzRGl2LmFwcGVuZChuZXdQcm9qZWN0RGl2KTtcclxuICB1cGRhdGVQcm9qZWN0SW5kZXgoKTtcclxufTtcclxuY29uc3QgdXBkYXRlUHJvamVjdEluZGV4ID0gKCkgPT4ge1xyXG4gIGxldCBwcm9qZWN0SW5kZXggPSAwO1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZGVkLXByb2plY3QnKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgYCR7cHJvamVjdEluZGV4fWApO1xyXG4gICAgcHJvamVjdEluZGV4Kys7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vL3JhYmllIFxyXG5jb25zdCBzZWxlY3RBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZGVkUHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuYWRkZWQtcHJvamVjdC13cmFwcGVyJ1xyXG4gICk7XHJcbiAgYWRkZWRQcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnRleHRDb250ZW50O1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2xlYXJEaXNwbGF5KHRvZG9zRGl2KTtcclxuICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0O1xyXG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlJyk7XHJcbiAgICAgIGNoZWNrSWZQcm9qZWN0RXhpc3QoKTtcclxuICAgICAgcmVuZGVyVG9kb0xpc3QoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCB1cGRhdGVUb2RvSW5kZXggPSAoKSA9PiB7XHJcbiAgbGV0IHRvZG9JbmRleCA9IDA7XHJcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xyXG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nLCBgJHt0b2RvSW5kZXh9YCk7XHJcbiAgICB0b2RvSW5kZXgrKztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlclRvZG9MaXN0ID0gKCkgPT4ge1xyXG4gIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBhY3RpdmVQcm9qZWN0KSB7XHJcbiAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gYDxoMj4ke3RvZG8uZ2V0VGl0bGUoKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHVlIGRhdGU6ICR7dG9kby5nZXREdWVEYXRlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpb3JpdHk6ICR7dG9kby5nZXRQcmlvcml0eSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiAke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1mdW5jdGlvbnNcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0IGJ0bi1lZGl0LXRvZG9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaCBidG4tZGVsLXRvZG9cIj48L2k+PC9kaXY+YDtcclxuICAgICAgICB0b2Rvc0Rpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICAgICAgdXBkYXRlUHJvamVjdEluZGV4KCk7XHJcbiAgICAgICAgdXBkYXRlVG9kb0luZGV4KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJzXHJcbmJ0bk1lbnUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZScpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmJ0bkFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaGlkZU1lbnVCdXR0b24oYnRuQWRkTmV3UHJvamVjdCwgZm9ybU5ld1Byb2plY3QpO1xyXG59KTtcclxuXHJcbmZvcm1OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGFkZE5ld1Byb2plY3QoKTtcclxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICBjb25zb2xlLmxvZyhzYXZlVG9Mb2NhbFN0b3JhZ2UoKSk7XHJcbiAgY2xlYXJEaXNwbGF5KHByb2plY3RzRGl2KTtcclxuICBkaXNwbGF5UHJvamVjdCgpO1xyXG4gIGhpZGVNZW51QnV0dG9uKGJ0bkFkZE5ld1Byb2plY3QsIGZvcm1OZXdQcm9qZWN0KTtcclxuICBjbGVhcklucHV0cygpO1xyXG59KTtcclxuXHJcbmJ0bkNhbmNlbE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xlYXJJbnB1dHMoKTtcclxuICBoaWRlTWVudUJ1dHRvbihidG5BZGROZXdQcm9qZWN0LCBmb3JtTmV3UHJvamVjdCk7XHJcbn0pO1xyXG5cclxuYnRuQWRkTmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBoaWRlTWVudUJ1dHRvbihidG5BZGROZXdUb2RvLCBmb3JtTmV3VG9kbyk7XHJcbn0pO1xyXG5cclxuZm9ybU5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYWRkTmV3VG9kbygpO1xyXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIGNsZWFyRGlzcGxheSh0b2Rvc0Rpdik7XHJcbiAgcmVuZGVyVG9kb0xpc3QoKTtcclxuICBoaWRlTWVudUJ1dHRvbihidG5BZGROZXdUb2RvLCBmb3JtTmV3VG9kbyk7XHJcbiAgY2xlYXJJbnB1dHMoKTtcclxufSk7XHJcblxyXG5idG5DYW5jZWxOZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNsZWFySW5wdXRzKCk7XHJcbiAgaGlkZU1lbnVCdXR0b24oYnRuQWRkTmV3VG9kbywgZm9ybU5ld1RvZG8pO1xyXG59KTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvak9iaikgPT4ge1xyXG4gICAgcmVuZGVyUHJvamVjdHMocHJvak9iaik7XHJcbiAgfSk7XHJcbiAgY2hlY2tJZlByb2plY3RFeGlzdCgpO1xyXG4gIHNlbGVjdEFjdGl2ZVByb2plY3QoKTtcclxufTtcclxuLy8gY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XHJcbmNvbnN0IGNoZWNrSWZQcm9qZWN0RXhpc3QgPSAoKSA9PiB7XHJcbiAgaWYgKGFjdGl2ZVByb2plY3QgPT09ICcnKSB7XHJcbiAgICBidG5BZGROZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnRuQWRkTmV3VG9kby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9kYXRlLWZucyBmdW5jdGlvbiBpc1RvZGF5IGlzVGhpc1dlZWtcclxuXHJcbmV4cG9ydCB7XHJcbiAgYnRuQWRkTmV3UHJvamVjdCxcclxuICBmb3JtTmV3UHJvamVjdCxcclxuICBidG5BZGROZXdUb2RvLFxyXG4gIGZvcm1OZXdUb2RvLFxyXG4gIHByb2plY3RJbnB1dEZpZWxkLFxyXG4gIHRvZG9UaXRsZSxcclxuICBkdWVEYXRlLFxyXG4gIHByaW9yaXR5LFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGRpc3BsYXlQcm9qZWN0LFxyXG4gIGFjdGl2ZVByb2plY3QsXHJcbn07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NyZWF0ZU5ld1Byb2plY3QnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9jcmVhdGVOZXdUb0RvJztcclxuXHJcbi8vZ2V0IGxvY2FsIHN0b3JhZ2UgZnJvbSBwcm9qZWN0c0FycmF5IGFuZCByZS1jb252ZXJ0IGl0IGludG8gbmV3IG9iamVjdFxyXG5jb25zdCBzdG9yZWRBcnJheSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RUb2Rvc0FycmF5JykpO1xyXG5sZXQgcHJvamVjdHNBcnJheSA9IChzdG9yZWRBcnJheSgpIHx8IFtdKS5tYXAoKG9iaikgPT4ge1xyXG4gIGNvbnN0IG5ld09iamVjdEZyb21TdG9yYWdlID0gbmV3IFByb2plY3Qob2JqLm5hbWUpO1xyXG4gIG9iai50b2Rvcy5mb3JFYWNoKCh0b2RvRnJvbU9iaikgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kb0Zyb21PYmogPSBuZXcgVG9kbyhcclxuICAgICAgdG9kb0Zyb21PYmoudGl0bGUsXHJcbiAgICAgIHRvZG9Gcm9tT2JqLmR1ZURhdGUsXHJcbiAgICAgIHRvZG9Gcm9tT2JqLnByaW9yaXR5LFxyXG4gICAgICB0b2RvRnJvbU9iai5kZXNjcmlwdGlvblxyXG4gICAgKTtcclxuICAgIG5ld09iamVjdEZyb21TdG9yYWdlLmFkZFRvZG8obmV3VG9kb0Zyb21PYmopO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdPYmplY3RGcm9tU3RvcmFnZTtcclxufSk7XHJcblxyXG5jb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RUb2Rvc0FycmF5JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcHJvamVjdHNBcnJheSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tICcuL01vZHVsZXMvZG9tJztcclxuXHJcbmRpc3BsYXlQcm9qZWN0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==