import React from "react";
import { ListItem, Button, ListItemText } from "@mui/material";

const TaskItem = ({ task, onDeleteTask }) => {
  return (
    <ListItem>
      {/* Display the task's name */}
      <ListItemText primary={task.name} />

      {/* Delete button */}
      <Button variant="contained" color="secondary" onClick={onDeleteTask}>
        Delete
      </Button>
    </ListItem>
  );
};

export default TaskItem;
