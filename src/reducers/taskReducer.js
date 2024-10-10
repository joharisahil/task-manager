const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS_SUCCESS":
      return { ...state, tasks: action.payload, loading: false };
    case "FETCH_TASKS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_TASKS_FAILURE":
      return { ...state, error: action.error, loading: false };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
