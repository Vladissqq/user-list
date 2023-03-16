import { Dispatch } from "redux";
import { fetchUsers } from "./../../services/ApiService";
import { ActionType } from "../actionsList";
import { UsersAction } from "../types/users";

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: ActionType.GET_USERS });
      const { data } = await fetchUsers();

      dispatch({
        type: ActionType.GET_USERS_SUCCESS,
        payload: data,
      });
    } catch {
      dispatch({
        type: ActionType.GET_USERS_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
