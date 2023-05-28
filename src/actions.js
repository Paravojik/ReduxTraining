export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  };

  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId
    };
  };
  export const createArr = (value) => {
    return {
      type: 'CREATE_ARR',
      payload: value
    };
  };
  export const filterArr= (value) => {
    return {
      type: 'FILTER_ARR',
      payload: value
    };
  };