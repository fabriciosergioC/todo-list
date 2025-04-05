document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Adicionar tarefa
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const taskActions = document.createElement('div');
      taskActions.className = 'task-actions';
  
      const completeBtn = document.createElement('button');
      completeBtn.textContent = '✓';
      completeBtn.className = 'complete-btn';
      completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '✕';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', () => {
        taskItem.remove();
      });
  
      taskActions.appendChild(completeBtn);
      taskActions.appendChild(deleteBtn);
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(taskActions);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  });