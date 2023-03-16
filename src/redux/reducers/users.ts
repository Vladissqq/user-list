import { ActionType } from "../actionsList";
import { UsersAction, UsersState } from "../types/users";

const initialState: UsersState = {
  users: [],
  loading: false,
  error: undefined,
};

const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case ActionType.GET_USERS: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case ActionType.GET_USERS_SUCCESS: {
      return {
        loading: false,
        error: undefined,
        users: action.payload,
      };
    }
    case ActionType.GET_USERS_ERROR: {
      return {
        loading: false,
        error: action.payload,
        users: [],
      };
    }
    case ActionType.DELETE_USER: {
      state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
