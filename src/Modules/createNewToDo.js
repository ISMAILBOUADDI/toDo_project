import { projectsArray } from './storage';
import {
 todoTitle,
 dueDate,
 priority,
 description,
 activeProject,
} from './dom';


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
   todoTitle.value,
   dueDate.value,
   priority.value,
   description.value
 );
 projectsArray.forEach((project) => {
   if (project.name === activeProject) {
     project.addTodo(newTodo);
   }
 });
};

export { Todo, addNewTodo };
