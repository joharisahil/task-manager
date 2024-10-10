import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      // Create a new task object with a unique ID
      const newTask = { id: Date.now(), name: task };
      onAddTask(newTask);
      setTask(""); // Clear the input after adding the task
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleAddTask}
      >
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
