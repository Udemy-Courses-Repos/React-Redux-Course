import { PHOTO_ADD, PHOTO_DELETE } from "../Types/PhotoAPITypes";

export const addPhotoAction = (data) => {
  return {
    type: PHOTO_ADD,
    data: data,
  };
};
export const deletePhotoAction = (data) => {
  return {
    type: PHOTO_DELETE,
    data: data,
  };
};
