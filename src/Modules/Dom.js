const section = document.querySelector('section');
const btnMenu = document.querySelectorAll('span');
const formInputs = document.querySelectorAll('form');

const projectTitle = document.querySelector('.project-title');
const projectDiv = document.querySelector('project-Div')
const todoDiv = document.querySelector('.todos-div');
const btnAddNewProject = document.querySelector('.btn-new-project');
const btnNewTodo = document.querySelector('btn-new-todo');
const formNewProject = document.querySelector('form-new-project');
const formNewTodo = document.querySelector('form-new-todo');
const formEditTodo = document.querySelector('form-edit-todo');
const btnCancelNewTodo = document.querySelector('.cancel-new-todo');
const btnCancelNewProject = document.querySelector('.cancel-new-project');
const projectInputField = document.querySelector('.project-text-input');

const todoTitle = document.querySelector('#todo-title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const description = document.querySelector('#description');

const editTodoTitle = document.querySelector('#edit-todo-title')
const editDueDate = document.querySelector('#due-date');
const editPriority = document.querySelector('#edit-priority');
const editDescription = document.querySelector('#edit-description');

const modalDiv = document.querySelector('.modal-edit-todo');
const btnCancelEdit = document.querySelector('.cancel-edit-todo');

const esTodayButton = document.querySelector('.is-today');
const isThisWeekButton = document.querySelector('is-this-week');