import { combineReducers } from "redux";
import searchReducer from "./search";
import usersReducer from "./users";

export const rootReducer = combineReducers({
  usersReducer,
  searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
