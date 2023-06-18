import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import { UserReducers } from "./Reducers/UserReducers";
import { TodoReducers } from "./Reducers/TodoReducers";
import { PhotoReducers } from "./Reducers/PhotoReducers";

const combinedReducers = combineReducers({
  UserReducers: UserReducers,
  TodoReducers: TodoReducers,
  PhotoReducers: PhotoReducers,
});
const middleware = applyMiddleware(thunk);
const store = createStore(combinedReducers, middleware);
export { store };
