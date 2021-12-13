






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





