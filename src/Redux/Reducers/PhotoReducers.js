import { PHOTO_ADD, PHOTO_DELETE } from "../Types/PhotoAPITypes";

const initialState = {
  photos: [],
};

// spreading is copying all the elements in an array or object

export const PhotoReducers = (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_ADD:
      return { ...state, photos: action.data };
    case PHOTO_DELETE:
      return {
        ...state,
        photos: state.photos.filter((item) => item.id !== action.data),
      };

    default:
      return state;
  }
};
