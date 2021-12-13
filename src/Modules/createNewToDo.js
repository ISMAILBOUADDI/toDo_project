import { projectsArray } from './storage';


//, dueDate, priority


class Todo {
  constructor(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  setTitel(mytitle){
    this.title = mytitle ;
  }
  
  setDescription(mydescription){
    this.description = mydescription;
  }

  setdueDate(mydueDate){
    this.dueDate = mydueDate;
  }

  setPriority(myPriority){
    this.priority = myPriority;
  }

  getTitel(mytitle){
    return mytitle;
  }

  getDescription(mydescription){
    return mydescription;
  }

  getdueDate(mydueDate){
    return mydueDate;
  }

  getPriority(myPriority){
    return myPriority;
  }
}
import {
 todoTitle,
 dueDate,
 priority,
 description,
 activeProject,
} from './dom';
