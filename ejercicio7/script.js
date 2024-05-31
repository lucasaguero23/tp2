document.addEventListener("DOMContentLoaded", function() {
    const usersList = document.getElementById("users-list");
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.classList.add("user");
  
          const userTitle = document.createElement("h2");
          userTitle.textContent = user.name;
          userDiv.appendChild(userTitle);
  
          const userInfo = document.createElement("p");
          userInfo.innerHTML = `<strong>Username:</strong> ${user.username}<br>
                                <strong>Email:</strong> ${user.email}<br>
                                <strong>Website:</strong> ${user.website}<br>`;
          userDiv.appendChild(userInfo);
  
          const tasksButton = document.createElement("button");
          tasksButton.textContent = "Ver tareas";
          tasksButton.addEventListener("click", () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
              .then(response => response.json())
              .then(todos => {
                const tasksList = document.createElement("ul");
                tasksList.classList.add("tasks-list");
  
                todos.forEach(todo => {
                  const taskItem = document.createElement("li");
                  taskItem.textContent = todo.title;
                  if (todo.completed) {
                    taskItem.classList.add("completed");
                  } else {
                    taskItem.classList.add("not-completed");
                  }
                  tasksList.appendChild(taskItem);
                });
  
                userDiv.appendChild(tasksList);
              });
          });
  
          userDiv.appendChild(tasksButton);
          usersList.appendChild(userDiv);
        });
      });
  });
  