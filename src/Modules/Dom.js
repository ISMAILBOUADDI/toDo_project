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

const renderProjects = (projObj) => {
    const newProjectDiv = document.createElement('div');
    const addedProjectWrapper = document.createElement('div');
    const btnDelProject = document.createElement('span');
    newProjectDiv.classList.add('added-project');
    addedProjectWrapper.classList.add('added-project-wrapper');
    addedProjectWrapper.innerHTML = `<i class="fas fa-tasks"></i><div>${projObj.getName()}</div>`;
    btnDelProject.innerHTML = <i class="fas fa-times-circle btn-del-project"></i>;
    newProjectDiv.append(addedProjectWrapper, btnDelProject);
    projectsDiv.append(newProjectDiv);
    updateProjectIndex();
    saveToLocalStorage();
  
  };
  
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
  
  const updateProjectIndex = () => {
    let projectIndex = 0;
    const projects = document.querySelectorAll('.added-project');
    projects.forEach((project) => {
      project.setAttribute('data-project', `${projectIndex}`);
      projectIndex++;
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
  projectsArray.forEach((project) => {
    if (project.getName() === activeProject) {
      project.getTodos().forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.innerHTML = `<h2>${todo.getTitle()}</h2>
                            <p>Due date: ${todo.getDueDate()}</p>
                            <p>Priority: ${todo.getPriority()}</p>
                            <p>Description: ${todo.getDescription()}</p>
                            <div class="todo-functions"><i class="fas fa-edit btn-edit-todo"></i>
                            <i class="fas fa-trash btn-del-todo"></i></div>;`
        todosDiv.append(todoDiv);
        updateProjectIndex();
        updateTodoIndex();
      });
    }
  });
};

const editTodosData = () => {
  projectsArray.forEach((project) => {
    if (project.getName() === activeProject) {
      const selectedTodosObject = project.getTodos()[parseInt(activeTodos)];
      selectedTodosObject.setTitle(editTodoTitle.value);
      selectedTodosObject.setDueDate(editDueDate.value);
      selectedTodosObject.setPriority(editPriority.value);
      selectedTodosObject.setDescription(editDescription.value);
    }
  });
  modalDiv.classList.toggle('hide');
};





