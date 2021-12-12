import { projectsArray, saveToLocalStorage } from './storage';
import { addNewProject } from './createNewProject';
import { addNewTodo } from './createNewTodo';

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
const formEditTodo = document.querySelector('.form-edit-todo');
const btnCancelNewProject = document.querySelector('.cancel-new-project');
const btnCancelNewTodo = document.querySelector('.cancel-new-todo');
const projectInputField = document.querySelector('.project-text-input');

const todoTitle = document.querySelector('#todo-title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const description = document.querySelector('#description');
const modalDiv = document.querySelector('.modal-edit-todo');
const btnCancelEdit = document.querySelector('.cancel-edit-todo');

// placeholder for current active/selected project or todos
let activeProject = '';
let activeTodos = '';
// element utilities
const clearInputs = () => {
 formInputs.forEach((form) => {
   form.reset();
 });
};