import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { List } from "@mui/material";

const App = () => {
  // Ensure the initial state is an empty array
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <List>
        {/* Only render TaskItems if there are tasks */}
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDeleteTask={() => deleteTask(task.id)}
            />
          ))
        ) : (
          <p>No tasks available. Add a task to get started!</p>
        )}
      </List>
    </div>
  );
};

export default App;
