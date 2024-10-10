export const fetchTasksSuccess = (tasks) => ({
  type: "FETCH_TASKS_SUCCESS",
  payload: tasks,
});

export const fetchTasksFailure = (error) => ({
  type: "FETCH_TASKS_FAILURE",
  error,
});

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});
