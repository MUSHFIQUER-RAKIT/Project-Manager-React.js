export const initialState = {
  tasks: {
    todo: [],
    onProgress: [],
    done: [],
    revised: [],
  },
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.category]: [
            ...state.tasks[action.payload.category],
            action.payload.taskDetails,
          ],
        },
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.category]: state.tasks[action.payload.category].map(
            task =>
              task.id === action.payload.taskDetails.id
                ? action.payload.taskDetails
                : task
          ),
        },
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.category]: state.tasks[
            action.payload.category
          ].filter(task => task.id !== action.payload.task.id),
        },
      };

    default:
      return state;
  }
};
