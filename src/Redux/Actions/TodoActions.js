import { ADD_TODO, DELETE_TODO } from "../Types/TodoTypes";

export const addTodoAction = (data) => {
  return {
    type: ADD_TODO,
    data: data,
  };
};
export const deleteTodoAction = (data) => {
  return {
    type: DELETE_TODO,
    data: data,
  };
};
