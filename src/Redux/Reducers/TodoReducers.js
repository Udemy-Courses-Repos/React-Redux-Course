import { ADD_TODO, DELETE_TODO } from "../Types/TodoTypes";

const initialState = {
  todos: [{ name: "Redux", id: 1 }],
  name: "",
  email: "",
};

// spreading is copying all the elements in an array or object

export const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.data] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.data),
      };

    default:
      return state;
  }
};
