import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TaskInput = ({
  handleAddTask,
  task,
  setTask,
  isEditing,
  setIsEditing,
  editingIndex,
  setEditingIndex,
}) => {
  const handleSubmit = () => {
    if (isEditing) {
      handleAddTask(editingIndex); 
      setIsEditing(false); 
      setEditingIndex(null); 
    } else {
      handleAddTask(); 
    }
    setTask(""); 
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
        onClick={handleSubmit}
      >
        {isEditing ? "Update Task" : "Add Task"}
      </Button>
    </div>
  );
};

export default TaskInput;
