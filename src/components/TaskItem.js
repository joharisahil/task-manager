import React from "react";
import { Button } from "@mui/material";

const TaskItem = ({ task, index, handleDelete, handleEdit }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <span>{task}</span>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleEdit(index)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(index)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
