const initialState = {
    tasks: [],
    allArr:[],
    filtredArr:[],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
        case 'CREATE_ARR':
        return {
          ...state,
          allArr: action.payload,
          filtredArr: action.payload
        };
        case 'FILTER_ARR':
          return {
            ...state,
            filtredArr: state.allArr.filter(item=>
              item.name.match(new RegExp(action.payload, 'gi'))!==null
        ) 

            // action.payload
          };
      default:
        return state;
    }
  };
  
  export default taskReducer;