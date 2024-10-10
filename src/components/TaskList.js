import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
