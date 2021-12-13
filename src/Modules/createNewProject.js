import { projectsArray } from './storage';
import { projectInputField } from './dom';

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
 const newProject = new Project(projectInputField.value);
 projectsArray.push(newProject);
};

export { Project, addNewProject };