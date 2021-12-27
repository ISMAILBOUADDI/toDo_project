import { Project } from './createNewProject';
import { Todo } from './createNewToDo';

//get local storage from projectsArray and re-convert it into new object
const storedArray = () => JSON.parse(localStorage.getItem('projectTodosArray'));
let projectsArray = (storedArray() || []).map((obj) => {
  const newObjectFromStorage = new Project(obj.name);
  obj.todos.forEach((todoFromObj) => {
    const newTodoFromObj = new Todo(
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

export { projectsArray, saveToLocalStorage };
