import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    if (isEditing) {
      const updatedTasks = tasks.map((t, i) => (i === editingIndex ? task : t));
      setTasks(updatedTasks);
      setIsEditing(false);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Coretus Daily Task Calender</h1>
      <TaskInput
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />
      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 ? (
          <p>No tasks available. Add a task to get started!</p>
        ) : (
          tasks.map((t, index) => (
            <TaskItem
              key={index}
              task={t}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
