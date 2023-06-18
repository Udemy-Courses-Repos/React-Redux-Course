import { DELETE_USER_DATA } from "../Types/UserTypes";

export const updateUserDataAction = (data) => {
  return {
    type: "UPDATE_USER_DATA",
    data: data,
  };
};

export const deleteUserDataAction = (data) => {
  return {
    type: DELETE_USER_DATA,
    data: data,
  };
};

// dispatch(deleteUserDataAction('name'))
