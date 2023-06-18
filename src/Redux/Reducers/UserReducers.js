const initialState = {
  userData: {
    name: "Redux",
    age: 100,
  },
  isCourseGood: "yes",
};

export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_USER_DATA":
      return { ...state, userData: action.data };
    case "UPDATE_USER_DATA":


    // return {
    //   ...state,
    //   userData: {
    //     ...state.userData,
    //     ...action.data,
    //   },
    // userData:{}
    // };

      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.data,
        },
      };

    case "LOG_OUT":
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
};

// call an action with this type.

// dispatch -> updateUserData()
