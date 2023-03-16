import { User } from "./../../interfaces/User";
import { ActionType } from "../actionsList";

export interface UsersState {
  users?: User[];
  loading: boolean;
  error?: string;
}

interface GetUsersAction {
  type: ActionType.GET_USERS;
}

interface GetUsersSuccessAction {
  type: ActionType.GET_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersErrorAction {
  type: ActionType.GET_USERS_ERROR;
  payload: string;
}

interface DeleteUserAction {
  type: ActionType.DELETE_USER;
  payload: User[];
}

export type UsersAction =
  | GetUsersAction
  | GetUsersSuccessAction
  | GetUsersErrorAction
  | DeleteUserAction;
